/**
 * Acceptance Verification Test Suite for RidePondy
 * Tests pricing logic, date validation, and WhatsApp message formatting.
 */

import { calculateRentalCost } from './src/utils/pricing.ts';
import { validateBookingDates } from './src/utils/bookingValidation.ts';
import { generateWhatsAppMessage, createWhatsAppUrl } from './src/utils/whatsapp.ts';
import { sampleFleet } from './src/data/fleet.ts';
import { getTodayString } from './src/utils/dateTime.ts';

console.log("=== RUNNING RIDEPONDY ACCEPTANCE TESTS ===\n");

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`[PASS] ${message}`);
    passed++;
  } else {
    console.error(`[FAIL] ${message}`);
    failed++;
  }
}

// 1. PRICING ACCEPTANCE TESTS
console.log("--- 1. Testing Pricing Calculation (24-hour ceil rule) ---");

const testVehicle = sampleFleet[0]; // Honda Activa 6G @ ₹450/day, ₹1000 deposit

// Test A: Exactly 24 hours -> 1 daily unit
const res24h = calculateRentalCost("2026-10-20", "10:00", "2026-10-21", "10:00", testVehicle);
assert(res24h.isValid === true, "24h rental is valid");
assert(res24h.rentalDays === 1, "Exactly 24 hours costs 1 daily rate unit");
assert(res24h.estimatedSubtotal === 450, "Subtotal for 24 hours is 1 * 450 = 450");

// Test B: 25 hours -> 2 daily units
const res25h = calculateRentalCost("2026-10-20", "10:00", "2026-10-21", "11:00", testVehicle);
assert(res25h.rentalDays === 2, "25 hours costs 2 daily rate units (ceil rule)");
assert(res25h.estimatedSubtotal === 900, "Subtotal for 25 hours is 2 * 450 = 900");

// Test C: 48 hours -> 2 daily units
const res48h = calculateRentalCost("2026-10-20", "10:00", "2026-10-22", "10:00", testVehicle);
assert(res48h.rentalDays === 2, "48 hours costs 2 daily rate units");
assert(res48h.estimatedSubtotal === 900, "Subtotal for 48 hours is 2 * 450 = 900");

// Test D: 49 hours -> 3 daily units
const res49h = calculateRentalCost("2026-10-20", "10:00", "2026-10-22", "11:00", testVehicle);
assert(res49h.rentalDays === 3, "49 hours costs 3 daily rate units");
assert(res49h.estimatedSubtotal === 1350, "Subtotal for 49 hours is 3 * 450 = 1350");

// Test E: Invalid return before or equal to pickup
const resInvalid = calculateRentalCost("2026-10-20", "10:00", "2026-10-20", "09:00", testVehicle);
assert(resInvalid.isValid === false, "Negative or earlier return time produces invalid estimate");

// 2. DATE VALIDATION ACCEPTANCE TESTS
console.log("\n--- 2. Testing Date and Time Validation ---");

const today = getTodayString();

// Past pickup date
const valPast = validateBookingDates({
  pickupDate: "2020-01-01",
  pickupTime: "10:00",
  returnDate: "2020-01-02",
  returnTime: "10:00"
});
assert(valPast.isValid === false && !!valPast.errors.pickupDate, "Past pickup date is rejected");

// Return date earlier than pickup date
const valReturnEarlier = validateBookingDates({
  pickupDate: "2026-11-15",
  pickupTime: "10:00",
  returnDate: "2026-11-10",
  returnTime: "10:00"
});
assert(valReturnEarlier.isValid === false && !!valReturnEarlier.errors.returnDate, "Return date before pickup date is rejected");

// Same date return time before pickup time
const valSameDateEarlierTime = validateBookingDates({
  pickupDate: "2026-11-15",
  pickupTime: "14:00",
  returnDate: "2026-11-15",
  returnTime: "11:00"
});
assert(valSameDateEarlierTime.isValid === false && !!valSameDateEarlierTime.errors.returnTime, "Return time before pickup time on same date is rejected");

// Same date return time equal to pickup time
const valSameDateEqualTime = validateBookingDates({
  pickupDate: "2026-11-15",
  pickupTime: "10:00",
  returnDate: "2026-11-15",
  returnTime: "10:00"
});
assert(valSameDateEqualTime.isValid === false, "Return time equal to pickup time on same date is rejected");

// Valid date combination
const valValid = validateBookingDates({
  pickupDate: "2026-11-15",
  pickupTime: "10:00",
  returnDate: "2026-11-17",
  returnTime: "10:00"
});
assert(valValid.isValid === true && Object.keys(valValid.errors).length === 0, "Valid date and time combination passes validation");

// 3. WHATSAPP MESSAGE ENCODING ACCEPTANCE TESTS
console.log("\n--- 3. Testing WhatsApp Enquiry Generation ---");

const sampleBooking = {
  pickupLocation: "white-town",
  pickupDate: "2026-11-15",
  pickupTime: "10:00",
  returnDate: "2026-11-16",
  returnTime: "11:00", // 25 hours = 2 days
  selectedVehicleId: testVehicle.id,
  customerName: "Ananya Iyer",
  customerPhone: ""
};

const message = generateWhatsAppMessage(testVehicle, sampleBooking);
assert(message.includes("Vehicle: Honda Activa 6G"), "WhatsApp message includes correct vehicle name");
assert(message.includes("Pondicherry Main Hub"), "WhatsApp message includes pickup hub location");
assert(message.includes("2 Days"), "WhatsApp message includes correct duration (2 Days for 25h)");
assert(message.includes("₹900"), "WhatsApp message includes matching calculated estimate (₹900)");
assert(message.includes("Customer Name: Ananya Iyer"), "WhatsApp message includes customer name");

const { url, isPlaceholder } = createWhatsAppUrl(testVehicle, sampleBooking);
assert(url.startsWith("https://wa.me/"), "WhatsApp URL starts with https://wa.me/");
assert(url.includes("text="), "WhatsApp URL contains encoded text parameter");
assert(!url.includes(" "), "WhatsApp URL contains no raw spaces (properly encoded)");
assert(isPlaceholder === true, "Flags placeholder phone number status transparently");

console.log(`\n========================================`);
console.log(`TEST SUMMARY: ${passed} PASSED, ${failed} FAILED`);
console.log(`========================================\n`);

if (failed > 0) {
  process.exit(1);
}
