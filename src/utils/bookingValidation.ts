import type { BookingState, ValidationResult } from '../types';
import { getTodayString, parseDateTime } from './dateTime';

export function validateBookingDates(booking: Partial<BookingState>): ValidationResult {
  const errors: ValidationResult['errors'] = {};
  const today = getTodayString();

  const { pickupDate, pickupTime, returnDate, returnTime } = booking;

  // Validate pickup date
  if (!pickupDate) {
    errors.pickupDate = "Pickup date is required";
  } else if (pickupDate < today) {
    errors.pickupDate = "Pickup date cannot be in the past";
  }

  // Validate pickup time
  if (!pickupTime) {
    errors.pickupTime = "Pickup time is required";
  }

  // Validate return date
  if (!returnDate) {
    errors.returnDate = "Return date is required";
  } else if (pickupDate && returnDate < pickupDate) {
    errors.returnDate = "Return date cannot be earlier than pickup date";
  }

  // Validate return time
  if (!returnTime) {
    errors.returnTime = "Return time is required";
  }

  // Same date time check
  if (pickupDate && returnDate && pickupDate === returnDate && pickupTime && returnTime) {
    if (returnTime <= pickupTime) {
      errors.returnTime = "Return time must be after pickup time for same-day rentals";
    }
  }

  // Comprehensive timestamp check
  if (pickupDate && pickupTime && returnDate && returnTime) {
    const pickupDateTime = parseDateTime(pickupDate, pickupTime);
    const returnDateTime = parseDateTime(returnDate, returnTime);

    if (pickupDateTime && returnDateTime) {
      if (returnDateTime.getTime() <= pickupDateTime.getTime()) {
        errors.general = "Return date and time must be strictly later than pickup date and time.";
      }
    } else {
      errors.general = "Invalid date or time format entered.";
    }
  }

  const isValid = Object.keys(errors).length === 0;

  return {
    isValid,
    errors
  };
}
