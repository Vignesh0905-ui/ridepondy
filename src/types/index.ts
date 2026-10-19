export type VehicleCategory = 
  | 'all'
  | 'city_scooter'
  | 'premium_scooter'
  | 'classic_motorcycle'
  | 'adventure_motorcycle';

export interface Vehicle {
  id: string;
  name: string;
  category: 'city_scooter' | 'premium_scooter' | 'classic_motorcycle' | 'adventure_motorcycle';
  categoryLabel: string;
  transmission: 'Automatic' | 'Manual';
  fuelType: 'Petrol' | 'Electric';
  seatingCapacity: number;
  engineCapacity: string;
  sampleDailyRate: number;
  sampleDeposit: number;
  image: string;
  badge?: string;
  tagline: string;
  description: string;
  bestFor: string;
  features: string[];
  helmetIncluded: boolean;
}

export interface BookingState {
  pickupLocation: string;
  pickupDate: string;
  pickupTime: string;
  returnDate: string;
  returnTime: string;
  selectedVehicleId: string | null;
  customerName: string;
  customerPhone?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: {
    pickupDate?: string;
    pickupTime?: string;
    returnDate?: string;
    returnTime?: string;
    pickupLocation?: string;
    general?: string;
  };
}

export interface PriceEstimate {
  isValid: boolean;
  rentalDays: number;
  totalHours: number;
  dailyRate: number;
  estimatedSubtotal: number;
  sampleDeposit: number;
  estimatedTotal: number;
  calculationExplanation: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'booking' | 'pricing' | 'requirements' | 'safety';
}

export interface ExploreSpot {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  highlightTag: string;
  idealTime: string;
}
