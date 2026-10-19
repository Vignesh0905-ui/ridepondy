import type { Vehicle } from '../types';

export const sampleFleet: Vehicle[] = [
  {
    id: "honda-activa-6g",
    name: "Honda Activa 6G",
    category: "city_scooter",
    categoryLabel: "City Scooter",
    transmission: "Automatic",
    fuelType: "Petrol",
    seatingCapacity: 2,
    engineCapacity: "110cc",
    sampleDailyRate: 450,
    sampleDeposit: 1000,
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80",
    badge: "Most Popular",
    tagline: "Effortless city cruising for White Town & beach lanes",
    description: "The gold standard for effortless city exploration. Lightweight, smooth automatic acceleration, and convenient footboard space for beach bags or shopping.",
    bestFor: "First-time visitors, couples exploring cafes, short city commutes",
    features: [
      "Automatic CVT Transmission",
      "Under-seat storage (18L)",
      "High fuel efficiency (~50 km/l)",
      "Combi-Brake System (CBS)"
    ],
    helmetIncluded: true
  },
  {
    id: "vespa-sxl-125",
    name: "Vespa SXL 125 Elegante",
    category: "premium_scooter",
    categoryLabel: "Premium Scooter",
    transmission: "Automatic",
    fuelType: "Petrol",
    seatingCapacity: 2,
    engineCapacity: "125cc",
    sampleDailyRate: 650,
    sampleDeposit: 1500,
    image: "https://images.unsplash.com/photo-1596707328904-8ceb1d6199a0?auto=format&fit=crop&w=900&q=80",
    badge: "Photogenic Pick",
    tagline: "Vintage Italian aesthetic that matches Pondicherry's French Quarter",
    description: "Turn heads through the yellow mustard villas of White Town. Combining vintage monocoque styling with modern 125cc punch and supreme comfort.",
    bestFor: "Instagram-worthy coastal photography, stylish weekend trips, upscale dining visits",
    features: [
      "Signature Italian monocoque steel body",
      "Front disc brake with ABS",
      "Plush dual-tone leatherette seating",
      "Crisp LED headlamp & chrome trims"
    ],
    helmetIncluded: true
  },
  {
    id: "royal-enfield-classic-350",
    name: "Royal Enfield Classic 350",
    category: "classic_motorcycle",
    categoryLabel: "Classic Motorcycle",
    transmission: "Manual",
    fuelType: "Petrol",
    seatingCapacity: 2,
    engineCapacity: "349cc",
    sampleDailyRate: 850,
    sampleDeposit: 2000,
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=900&q=80",
    badge: "Heritage Thump",
    tagline: "Timeless retro posture for scenic East Coast Road cruises",
    description: "Experience the iconic rhythmic thump along the East Coast Road (ECR). Heavyweight road stability, commanding upright seating, and classic chrome details.",
    bestFor: "Cruising along ECR highway, scenic beach hopping, heritage road trips",
    features: [
      "Refined J-Series 349cc single cylinder",
      "Dual-channel ABS with wide disc brakes",
      "Comfortable wide-profile touring saddle",
      "Sturdy metal build with retro instrument cluster"
    ],
    helmetIncluded: true
  },
  {
    id: "re-himalayan-411",
    name: "Royal Enfield Himalayan 411",
    category: "adventure_motorcycle",
    categoryLabel: "Adventure Motorcycle",
    transmission: "Manual",
    fuelType: "Petrol",
    seatingCapacity: 2,
    engineCapacity: "411cc",
    sampleDailyRate: 1100,
    sampleDeposit: 2500,
    image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=900&q=80",
    badge: "Trail & Highway",
    tagline: "Long-travel suspension for Auroville backroads and rough trails",
    description: "Built for true adventurers seeking quiet forest paths around Auroville and long open-throttle stretches along the coastal highway towards Mahabalipuram.",
    bestFor: "Auroville red-earth trails, longer coastal day excursions, tall riders",
    features: [
      "220mm ground clearance & dual-purpose tires",
      "High windscreen & luggage mounting racks",
      "Switchable rear ABS for off-pavement control",
      "Upright standing-friendly ergonomic cockpit"
    ],
    helmetIncluded: true
  },
  {
    id: "tvs-jupiter-125",
    name: "TVS Jupiter 125 SmartXonnect",
    category: "city_scooter",
    categoryLabel: "City Scooter",
    transmission: "Automatic",
    fuelType: "Petrol",
    seatingCapacity: 2,
    engineCapacity: "125cc",
    sampleDailyRate: 480,
    sampleDeposit: 1000,
    image: "https://images.unsplash.com/photo-1525160354320-d8e92641c563?auto=format&fit=crop&w=900&q=80",
    badge: "Extra Storage",
    tagline: "Largest boot space (dual full-face helmets) with external fuel fill",
    description: "Packed with thoughtful ergonomics for travelers carrying backpacks and beach accessories. Smooth i-Touch starter and comfortable broad seat.",
    bestFor: "Family visits, travelers with extra luggage, relaxed seaside commutes",
    features: [
      "Massive 33L under-seat storage",
      "Front external fuel filler cap",
      "Mobile charging socket with front glovebox",
      "Body-balance technology for effortless handling"
    ],
    helmetIncluded: true
  },
  {
    id: "royal-enfield-hunter-350",
    name: "Royal Enfield Hunter 350",
    category: "classic_motorcycle",
    categoryLabel: "Classic Motorcycle",
    transmission: "Manual",
    fuelType: "Petrol",
    seatingCapacity: 2,
    engineCapacity: "349cc",
    sampleDailyRate: 800,
    sampleDeposit: 2000,
    image: "https://images.unsplash.com/photo-1558980394-4c7c9299fe96?auto=format&fit=crop&w=900&q=80",
    badge: "Agile Roadster",
    tagline: "Compact, light-footed roadster with modern neo-retro charm",
    description: "Combines the beloved 350cc thump with a tighter wheelbase and 17-inch cast alloy wheels for razor-sharp navigation through narrow French Quarter crossroads.",
    bestFor: "Riders who want motorcycle character with nimble city agility",
    features: [
      "Compact roadster frame with lower seat height (790mm)",
      "Tubeless tyres on alloy rims",
      "Punchy low-end torque for quick lane transitions",
      "Dual-channel ABS"
    ],
    helmetIncluded: true
  }
];
