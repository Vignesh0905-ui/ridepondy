import type { ExploreSpot, FAQItem } from '../types';

export const exploreSpots: ExploreSpot[] = [
  {
    id: "white-town",
    name: "White Town (French Quarter)",
    subtitle: "Heritage bougainvillea streets & charming courtyard cafes",
    description: "Cruise slowly along Rue Dumas, Rue Romain Rolland, and Rue Suffren surrounded by ochre-yellow French colonial architecture, flowering vines, and artisanal bakeries.",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
    highlightTag: "Heritage Walkways",
    idealTime: "Morning 7–10 AM or Sunset"
  },
  {
    id: "promenade-beach",
    name: "Promenade Beach & Goubert Ave",
    subtitle: "Scenic 1.5 km sea-facing boulevard & iconic war memorial",
    description: "Feel the invigorating Bay of Bengal breeze along the rocky coastline. Goubert Avenue is vehicle-free during evening hours, allowing parking nearby to stroll by the waves.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    highlightTag: "Seaside Breeze",
    idealTime: "Early Sunrise 5:30–7:30 AM"
  },
  {
    id: "auroville-area",
    name: "Auroville & Surrounding Green Trails",
    subtitle: "Peaceful red-earth canopy lanes, organic cafes & artisan boutiques",
    description: "A scenic 25-minute ride north through shaded tree-lined highways and red-earth country paths leading to the peaceful international township and experimental forests.",
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80",
    highlightTag: "Forest Canopy",
    idealTime: "Late Morning or Afternoon"
  }
];

export const whyFeatures = [
  {
    id: "freedom",
    title: "Explore at Your Own Pace",
    description: "Skip auto-rickshaw negotiations and rigid tourist group schedules. Stop whenever a quiet beach lane or seaside café catches your eye.",
    iconName: "Compass"
  },
  {
    id: "clarity",
    title: "Clear Rental Information",
    description: "Transparent sample rates, 24-hour daily billing logic, and clear document checklists. No hidden fuel markups or unexpected surprises.",
    iconName: "ShieldCheck"
  },
  {
    id: "enquiry",
    title: "Easy WhatsApp Enquiries",
    description: "No tedious registration forms or advance credit card payments. Configure your dates, calculate estimated rates, and talk directly to the operator.",
    iconName: "MessageSquareQuote"
  }
];

export const sampleTestimonials = [
  {
    name: "Arjun & Sneha M.",
    origin: "Bangalore",
    tripType: "Weekend Getaway",
    comment: "Renting a scooter made our 3 days in Pondy effortless. Wandering through French Quarter alleys and riding up to Serenity Beach at sunrise was the highlight of our trip.",
    vehicleUsed: "Honda Activa 6G",
    badge: "Demo Review"
  },
  {
    name: "Devika Raman",
    origin: "Chennai",
    tripType: "Solo Explorer",
    comment: "The Vespa matched White Town's yellow walls so well! Clear WhatsApp communication made pickup right outside the railway station simple and relaxed.",
    vehicleUsed: "Vespa SXL 125",
    badge: "Demo Review"
  },
  {
    name: "Karan Singhania",
    origin: "Mumbai",
    tripType: "Coastal Road Trip",
    comment: "Took the Classic 350 up the ECR towards Auroville and quiet coastal stretches. Smooth ride, comfortable saddle, and honest pricing terms.",
    vehicleUsed: "Royal Enfield Classic 350",
    badge: "Demo Review"
  }
];

export const faqItems: FAQItem[] = [
  {
    id: "faq-1",
    question: "How do I enquire about a bike or scooter?",
    answer: "Browse our vehicle fleet, pick your desired pickup and return dates with times, review your estimated rental amount, and click 'Enquire on WhatsApp'. This formats a structured message sent directly to the rental team.",
    category: "booking"
  },
  {
    id: "faq-2",
    question: "Is my booking confirmed immediately through this website?",
    answer: "No. This website is an interactive frontend demo that prepares your enquiry. Final vehicle reservation, physical inventory availability, and handover timing must be confirmed directly by the rental operator on WhatsApp or phone.",
    category: "booking"
  },
  {
    id: "faq-3",
    question: "How is the rental amount calculated?",
    answer: "Pricing is calculated on a 24-hour day basis. Any partial 24-hour block rounds up to the next full day. For example, a 24-hour rental incurs 1 daily rate, while a 25-hour rental incurs 2 daily rate units. Fuel is managed separately by the renter.",
    category: "pricing"
  },
  {
    id: "faq-4",
    question: "What documents are required at the time of vehicle pickup?",
    answer: "You will need to present your original valid driving licence (authorizing two-wheelers) and an original government ID (Aadhaar, Passport, or Voter ID). Digital soft copies alone are subject to operator verification.",
    category: "requirements"
  },
  {
    id: "faq-5",
    question: "Is a security deposit required?",
    answer: "Yes, a refundable security deposit (typically ₹1,000 for standard scooters up to ₹2,500 for premium adventure motorcycles) is collected upon handover and refunded upon undamaged return.",
    category: "pricing"
  },
  {
    id: "faq-6",
    question: "What happens if my preferred vehicle is unavailable?",
    answer: "If your chosen vehicle is fully booked for your selected dates, the rental operator will suggest the closest available alternative in the same category or adjust timing during your WhatsApp conversation.",
    category: "booking"
  },
  {
    id: "faq-7",
    question: "Are helmets included with the rental?",
    answer: "Yes, one ISI-certified rider helmet is provided with each rental. A second helmet for a pillion passenger can be requested from the operator upon handover for safety.",
    category: "safety"
  }
];
