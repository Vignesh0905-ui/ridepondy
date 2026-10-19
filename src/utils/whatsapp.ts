import type { BookingState, Vehicle } from '../types';
import { siteConfig } from '../data/siteConfig';
import { calculateRentalCost } from './pricing';
import { formatDisplayDate, formatDisplayTime } from './dateTime';

export interface WhatsAppEnquiryPayload {
  vehicle: Vehicle;
  booking: BookingState;
}

export function generateWhatsAppMessage(vehicle: Vehicle, booking: BookingState): string {
  const estimate = calculateRentalCost(
    booking.pickupDate,
    booking.pickupTime,
    booking.returnDate,
    booking.returnTime,
    vehicle
  );

  const pickupFormatted = `${formatDisplayDate(booking.pickupDate)} at ${formatDisplayTime(booking.pickupTime)}`;
  const returnFormatted = `${formatDisplayDate(booking.returnDate)} at ${formatDisplayTime(booking.returnTime)}`;
  const durationText = `${estimate.rentalDays} ${estimate.rentalDays === 1 ? 'Day' : 'Days'} (${estimate.totalHours} hrs)`;
  const amountText = `₹${estimate.estimatedSubtotal} (Sample estimate, excl. ₹${vehicle.sampleDeposit} refundable deposit)`;

  const locationItem = siteConfig.pickupLocations.find(l => l.id === booking.pickupLocation);
  const locationLabel = locationItem ? locationItem.label : booking.pickupLocation;

  const lines = [
    `Hi ${siteConfig.businessName}! I'd like to enquire about a rental.`,
    ``,
    `Vehicle: ${vehicle.name} (${vehicle.categoryLabel})`,
    `Pickup: ${locationLabel}`,
    `Pickup date/time: ${pickupFormatted}`,
    `Return date/time: ${returnFormatted}`,
    `Rental duration: ${durationText}`,
    `Estimated amount: ${amountText}`,
  ];

  if (booking.customerName && booking.customerName.trim().length > 0) {
    lines.push(`Customer Name: ${booking.customerName.trim()}`);
  }

  lines.push(``);
  lines.push(`Please confirm actual vehicle availability, final pricing and rental requirements.`);

  return lines.join('\n');
}

export function createWhatsAppUrl(vehicle: Vehicle, booking: BookingState): {
  url: string;
  isPlaceholder: boolean;
  message: string;
} {
  const message = generateWhatsAppMessage(vehicle, booking);
  const encodedText = encodeURIComponent(message);
  const cleanNumber = siteConfig.whatsappNumber.replace(/[^0-9]/g, '');
  
  const url = `https://wa.me/${cleanNumber}?text=${encodedText}`;

  return {
    url,
    isPlaceholder: siteConfig.isWhatsappPlaceholder,
    message
  };
}
