export interface SiteConfig {
  businessName: string;
  tagline: string;
  whatsappNumber: string; // international digits only for wa.me link
  displayWhatsappNumber: string;
  isWhatsappPlaceholder: boolean;
  contactPhone: string;
  contactEmail: string;
  businessAddress: string;
  googleMapsUrl: string;
  operatingHours: string;
  pickupLocations: { id: string; label: string; landmark: string }[];
  announcementText: string;
  demoNotice: string;
  legalDisclaimer: string;
}

export const siteConfig: SiteConfig = {
  businessName: "RidePondy",
  tagline: "Find Your Ride. Feel Pondicherry.",
  // Use an obvious placeholder phone number with placeholder flag set to true
  whatsappNumber: "919876543210",
  displayWhatsappNumber: "+91 98765 43210 (Demo Preview Number)",
  isWhatsappPlaceholder: true,
  contactPhone: "+91 98765 43210",
  contactEmail: "enquiries@ridepondy.demo",
  businessAddress: "Heritage Town, Mission Street (Near White Town), Pondicherry 605001",
  googleMapsUrl: "https://maps.google.com/?q=White+Town+Pondicherry",
  operatingHours: "Monday – Sunday: 7:30 AM to 9:30 PM",
  pickupLocations: [
    {
      id: "white-town",
      label: "Pondicherry Main Hub (White Town / Mission St)",
      landmark: "Central hub near French Quarter & Promenade Beach"
    },
    {
      id: "railway-station",
      label: "Pondicherry Railway Station (Drop/Pickup Point)",
      landmark: "Opposite main exit on Subbiah Salai"
    },
    {
      id: "bus-stand",
      label: "Pondicherry Main Bus Stand (New Bus Stand)",
      landmark: "Near Maraimalai Adigal Salai entrance"
    },
    {
      id: "auroville-junction",
      label: "Auroville Junction / ECR Toll Plaza",
      landmark: "Ideal for visitors heading directly towards Auroville"
    }
  ],
  announcementText: "Your Pondicherry ride starts here. Honest rental enquiries & coastal freedom.",
  demoNotice: "DEMO PREVIEW: Fleet details, prices, and contact information are for client presentation. Actual bookings and live availability are confirmed directly by the rental operator.",
  legalDisclaimer: "RidePondy is a presentation demo. Enquiries sent via WhatsApp do not constitute guaranteed reservations until mutually agreed upon and confirmed by the business operator."
};
