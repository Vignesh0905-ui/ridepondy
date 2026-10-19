import type { PriceEstimate, Vehicle } from '../types';
import { parseDateTime } from './dateTime';

/**
 * Calculates rental cost estimate based on 24-hour rental blocks.
 * Rule:
 * rentalDays = Math.ceil((returnDateTime - pickupDateTime) / (24 * 3600 * 1000))
 * 
 * Examples:
 * - 24 hours: 1 daily unit
 * - 25 hours: 2 daily units
 * - 48 hours: 2 daily units
 * - 49 hours: 3 daily units
 */
export function calculateRentalCost(
  pickupDate: string,
  pickupTime: string,
  returnDate: string,
  returnTime: string,
  vehicle: Vehicle | null
): PriceEstimate {
  if (!pickupDate || !pickupTime || !returnDate || !returnTime || !vehicle) {
    return {
      isValid: false,
      rentalDays: 0,
      totalHours: 0,
      dailyRate: vehicle?.sampleDailyRate || 0,
      estimatedSubtotal: 0,
      sampleDeposit: vehicle?.sampleDeposit || 0,
      estimatedTotal: 0,
      calculationExplanation: "Select dates, times, and a vehicle to calculate estimate."
    };
  }

  const pickupDT = parseDateTime(pickupDate, pickupTime);
  const returnDT = parseDateTime(returnDate, returnTime);

  if (!pickupDT || !returnDT) {
    return {
      isValid: false,
      rentalDays: 0,
      totalHours: 0,
      dailyRate: vehicle.sampleDailyRate,
      estimatedSubtotal: 0,
      sampleDeposit: vehicle.sampleDeposit,
      estimatedTotal: 0,
      calculationExplanation: "Invalid date or time provided."
    };
  }

  const diffMs = returnDT.getTime() - pickupDT.getTime();

  if (diffMs <= 0) {
    return {
      isValid: false,
      rentalDays: 0,
      totalHours: 0,
      dailyRate: vehicle.sampleDailyRate,
      estimatedSubtotal: 0,
      sampleDeposit: vehicle.sampleDeposit,
      estimatedTotal: 0,
      calculationExplanation: "Return time must be strictly after pickup time."
    };
  }

  // Total duration in hours
  const totalHours = diffMs / (1000 * 60 * 60);

  // Each started 24-hour period counts as 1 rental day
  const rentalDays = Math.ceil(totalHours / 24);

  const estimatedSubtotal = rentalDays * vehicle.sampleDailyRate;
  const sampleDeposit = vehicle.sampleDeposit;
  const estimatedTotal = estimatedSubtotal; // Deposit is refundable, clearly noted separately or as total estimated out-of-pocket

  const explanation = `${totalHours.toFixed(1)} hrs total duration (${rentalDays} ${rentalDays === 1 ? 'day' : 'days'} charged @ ₹${vehicle.sampleDailyRate}/day)`;

  return {
    isValid: true,
    rentalDays,
    totalHours: Number(totalHours.toFixed(1)),
    dailyRate: vehicle.sampleDailyRate,
    estimatedSubtotal,
    sampleDeposit,
    estimatedTotal,
    calculationExplanation: explanation
  };
}
