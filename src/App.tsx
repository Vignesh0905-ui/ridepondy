import React, { useState, useMemo } from 'react';
import './App.css';
import type { BookingState, Vehicle } from './types';
import { sampleFleet } from './data/fleet';
import { siteConfig } from './data/siteConfig';
import { getTodayString, getTomorrowString } from './utils/dateTime';
import { validateBookingDates } from './utils/bookingValidation';

// Components
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BookingSearch } from './components/BookingSearch';
import { FleetSection } from './components/FleetSection';
import { WhyRidePondy } from './components/WhyRidePondy';
import { ExploreSection } from './components/ExploreSection';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { VehicleDetailsModal } from './components/VehicleDetailsModal';
import { BookingSummaryModal } from './components/BookingSummaryModal';
import { OperatorConfigModal } from './components/OperatorConfigModal';
import { IntroLoader } from './components/IntroLoader';

export const App: React.FC = () => {
  // Standalone 5-second loading intro state: shown once per browser tab session
  const [showIntro, setShowIntro] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    // Query param override for client demo testing (?intro=true or ?replay=true)
    if (window.location.search.includes('replay=true') || window.location.search.includes('intro=true')) {
      return true;
    }
    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return false;
    }
    try {
      return sessionStorage.getItem('ridepondy_intro_seen') !== 'true';
    } catch {
      return false;
    }
  });

  // Booking state initialized with clean, realistic default values
  const [bookingState, setBookingState] = useState<BookingState>(() => {
    const today = getTodayString();
    const tomorrow = getTomorrowString();
    return {
      pickupLocation: 'white-town',
      pickupDate: today,
      pickupTime: '09:00',
      returnDate: tomorrow,
      returnTime: '09:00',
      selectedVehicleId: 'honda-activa-6g', // default selected so estimate works instantly
      customerName: '',
      customerPhone: ''
    };
  });

  // Modal states
  const [isSummaryModalOpen, setIsSummaryModalOpen] = useState(false);
  const [detailsModalVehicle, setDetailsModalVehicle] = useState<Vehicle | null>(null);
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);

  // Validation derived state
  const validation = useMemo(() => {
    return validateBookingDates(bookingState);
  }, [bookingState]);

  // Selected vehicle object
  const selectedVehicle = useMemo(() => {
    return sampleFleet.find(v => v.id === bookingState.selectedVehicleId) || null;
  }, [bookingState.selectedVehicleId]);

  const handleBookingChange = (updates: Partial<BookingState>) => {
    setBookingState(prev => ({
      ...prev,
      ...updates
    }));
  };

  const handleSelectVehicle = (vehicle: Vehicle) => {
    setBookingState(prev => ({
      ...prev,
      selectedVehicleId: vehicle.id
    }));
    // Open summary modal to immediately review cost estimate
    setIsSummaryModalOpen(true);
  };

  const handleViewDetails = (vehicle: Vehicle) => {
    setDetailsModalVehicle(vehicle);
  };

  const handleSelectFromModal = (vehicle: Vehicle) => {
    setBookingState(prev => ({
      ...prev,
      selectedVehicleId: vehicle.id
    }));
    setDetailsModalVehicle(null);
    setIsSummaryModalOpen(true);
  };

  const scrollToSearch = () => {
    const el = document.getElementById('booking-search');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFleet = () => {
    const el = document.getElementById('fleet');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToHowItWorks = () => {
    const el = document.getElementById('how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenGeneralWhatsApp = () => {
    const defaultMsg = encodeURIComponent(`Hi ${siteConfig.businessName}! I'm visiting Pondicherry and would like to enquire about your two-wheeler rental availability and terms.`);
    const cleanNumber = siteConfig.whatsappNumber.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanNumber}?text=${defaultMsg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="ridepondy-app" style={{ backgroundColor: 'var(--color-bg-primary)', color: 'var(--color-text-primary)' }}>
      {/* Standalone 5-Second Full-Screen 3D Loading Intro (Session-based, separate from homepage) */}
      {showIntro && (
        <IntroLoader onComplete={() => setShowIntro(false)} />
      )}

      {/* 1. Announcement Strip */}
      <AnnouncementBar onOpenConfigModal={() => setIsConfigModalOpen(true)} />

      {/* 2. Main Navigation */}
      <Navbar onBookClick={scrollToSearch} />

      <main>
        {/* 3. Hero Section (Clean normal layout with no 3D animation canvas) */}
        <HeroSection
          onExploreFleet={scrollToFleet}
          onHowItWorks={scrollToHowItWorks}
        />

        {/* 4. Booking Search Component */}
        <BookingSearch
          bookingState={bookingState}
          onBookingChange={handleBookingChange}
          validation={validation}
          onSubmitSearch={scrollToFleet}
        />

        {/* 5. Vehicle Fleet Section */}
        <FleetSection
          selectedVehicleId={bookingState.selectedVehicleId}
          onSelectVehicle={handleSelectVehicle}
          onViewDetails={handleViewDetails}
        />

        {/* 6. Distinctive Immersive How It Works Experience */}
        <HowItWorks
          onStartBooking={scrollToSearch}
          onExploreBikes={scrollToFleet}
        />

        {/* 7. Why RidePondy Feature Blocks */}
        <WhyRidePondy />

        {/* 8. Explore Pondicherry Travel Highlights */}
        <ExploreSection />

        {/* 9. Testimonials / Social Proof */}
        <Testimonials />

        {/* 10. FAQ Accordion */}
        <FAQSection />

        {/* 11. Contact & Pickup Hubs */}
        <ContactSection
          onOpenWhatsApp={handleOpenGeneralWhatsApp}
          onOpenConfigModal={() => setIsConfigModalOpen(true)}
        />
      </main>

      {/* 12. Premium Dark Footer */}
      <Footer
        onOpenConfigModal={() => setIsConfigModalOpen(true)}
        onBookClick={scrollToSearch}
        onReplayIntro={() => setShowIntro(true)}
      />

      {/* 13. Persistent Mobile Booking Action */}
      <MobileStickyBar
        selectedVehicle={selectedVehicle}
        onOpenSummary={() => setIsSummaryModalOpen(true)}
        onScrollToSearch={scrollToSearch}
      />

      {/* 14. Vehicle Details Modal */}
      <VehicleDetailsModal
        vehicle={detailsModalVehicle}
        isSelected={detailsModalVehicle?.id === bookingState.selectedVehicleId}
        onClose={() => setDetailsModalVehicle(null)}
        onSelectAndReview={handleSelectFromModal}
      />

      {/* 15. Booking Summary & Cost Calculation Modal */}
      <BookingSummaryModal
        isOpen={isSummaryModalOpen}
        onClose={() => setIsSummaryModalOpen(false)}
        bookingState={bookingState}
        vehicle={selectedVehicle}
        onEditDates={scrollToSearch}
        onChangeVehicle={scrollToFleet}
        onCustomerNameChange={(name) => handleBookingChange({ customerName: name })}
      />

      {/* 16. Operator Configuration Modal */}
      <OperatorConfigModal
        isOpen={isConfigModalOpen}
        onClose={() => setIsConfigModalOpen(false)}
      />
    </div>
  );
};

export default App;
