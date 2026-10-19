import React, { useState, useEffect } from 'react';
import type { BookingState, Vehicle } from '../types';
import { calculateRentalCost } from '../utils/pricing';
import { formatDisplayDate, formatDisplayTime } from '../utils/dateTime';
import { siteConfig } from '../data/siteConfig';
import { createWhatsAppUrl } from '../utils/whatsapp';
import { 
  X, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  MessageCircle, 
  AlertCircle, 
  Edit3, 
  Info,
  ExternalLink
} from 'lucide-react';

interface BookingSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingState: BookingState;
  vehicle: Vehicle | null;
  onEditDates: () => void;
  onChangeVehicle: () => void;
  onCustomerNameChange: (name: string) => void;
}

export const BookingSummaryModal: React.FC<BookingSummaryModalProps> = ({
  isOpen,
  onClose,
  bookingState,
  vehicle,
  onEditDates,
  onChangeVehicle,
  onCustomerNameChange
}) => {
  const [copiedNotice, setCopiedNotice] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !vehicle) return null;

  const estimate = calculateRentalCost(
    bookingState.pickupDate,
    bookingState.pickupTime,
    bookingState.returnDate,
    bookingState.returnTime,
    vehicle
  );

  const locationItem = siteConfig.pickupLocations.find(l => l.id === bookingState.pickupLocation);
  const locationLabel = locationItem ? locationItem.label : bookingState.pickupLocation;

  const { url: whatsappUrl, message: formattedMessage, isPlaceholder } = createWhatsAppUrl(vehicle, bookingState);

  const handleOpenWhatsApp = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(formattedMessage);
    setCopiedNotice(true);
    setTimeout(() => setCopiedNotice(false), 3000);
  };

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="summary-modal-title"
    >
      <div className="modal-content" style={{ maxWidth: '640px' }}>
        
        {/* Header */}
        <div style={{
          padding: '1.5rem 1.85rem',
          borderBottom: '1px solid var(--color-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#161616',
          color: '#FFFFFF',
          borderRadius: 'var(--radius-xl) var(--radius-xl) 0 0'
        }}>
          <div>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-orange)', fontWeight: 800 }}>
              Rental Review & Enquiry
            </span>
            <h2 id="summary-modal-title" style={{ fontSize: '1.4rem', color: '#FFFFFF', marginTop: '3px' }}>
              Rental Summary & Estimate
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close booking summary"
            style={{
              background: 'var(--color-card)',
              border: '1px solid var(--color-border)',
              borderRadius: '50%',
              width: '34px',
              height: '34px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--color-text-primary)'
            }}
          >
            <X size={18} />
          </button>
        </div>

        <div style={{ padding: '1.85rem' }}>
          
          {/* Selected Vehicle Snapshot */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            padding: '1.15rem',
            backgroundColor: 'var(--color-card)',
            borderRadius: 'var(--radius-lg)',
            marginBottom: '1.5rem',
            border: '1px solid var(--color-border)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <img
                src={vehicle.image}
                alt={vehicle.name}
                style={{
                  width: '68px',
                  height: '68px',
                  borderRadius: 'var(--radius-md)',
                  objectFit: 'cover'
                }}
              />
              <div>
                <span className="badge badge-dark" style={{ fontSize: '0.65rem', marginBottom: '4px' }}>
                  {vehicle.categoryLabel}
                </span>
                <h4 style={{ fontSize: '1.15rem', color: '#FFFFFF' }}>{vehicle.name}</h4>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-orange)', fontWeight: 600 }}>
                  ₹{vehicle.sampleDailyRate} / day sample rate • {vehicle.transmission}
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onChangeVehicle();
              }}
              className="btn btn-outline-dark"
              style={{ fontSize: '0.8rem', padding: '0.5rem 0.9rem' }}
            >
              Change
            </button>
          </div>

          {/* Dates & Pickup Location Card */}
          <div style={{
            backgroundColor: 'var(--color-card)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.35rem',
            marginBottom: '1.5rem'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
              <h4 style={{ fontSize: '0.85rem', color: 'var(--color-text-primary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Trip Itinerary
              </h4>
              <button
                onClick={() => {
                  onClose();
                  onEditDates();
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--color-orange)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  fontSize: '0.8rem',
                  fontWeight: 600
                }}
              >
                <Edit3 size={13} /> Edit Dates
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Calendar size={13} color="var(--color-orange)" /> Pickup Date & Time
                </div>
                <div style={{ fontSize: '0.925rem', fontWeight: 600, color: '#FFFFFF', marginTop: '3px' }}>
                  {formatDisplayDate(bookingState.pickupDate)}
                </div>
                <div style={{ fontSize: '0.825rem', color: 'var(--color-text-secondary)' }}>
                  at {formatDisplayTime(bookingState.pickupTime)}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Calendar size={13} color="var(--color-orange)" /> Return Date & Time
                </div>
                <div style={{ fontSize: '0.925rem', fontWeight: 600, color: '#FFFFFF', marginTop: '3px' }}>
                  {formatDisplayDate(bookingState.returnDate)}
                </div>
                <div style={{ fontSize: '0.825rem', color: 'var(--color-text-secondary)' }}>
                  at {formatDisplayTime(bookingState.returnTime)}
                </div>
              </div>

              <div style={{ gridColumn: 'span 2' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <MapPin size={13} color="var(--color-orange)" /> Pickup Location Hub
                </div>
                <div style={{ fontSize: '0.925rem', fontWeight: 600, color: '#FFFFFF', marginTop: '3px' }}>
                  {locationLabel}
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Calculation Breakdown */}
          <div style={{
            backgroundColor: 'var(--color-card-inner)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.35rem',
            marginBottom: '1.5rem'
          }}>
            <h4 style={{ fontSize: '0.85rem', color: 'var(--color-text-primary)', marginBottom: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Estimated Rental Breakdown
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-text-secondary)' }}>
                <span>Rental Duration</span>
                <span style={{ fontWeight: 600, color: '#FFFFFF' }}>{estimate.totalHours} hrs</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-text-secondary)' }}>
                <span>24-Hour Billing Units Charged</span>
                <span style={{ fontWeight: 600, color: '#FFFFFF' }}>
                  {estimate.rentalDays} {estimate.rentalDays === 1 ? 'day' : 'days'}
                </span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-text-secondary)' }}>
                <span>Sample Daily Rate</span>
                <span>₹{vehicle.sampleDailyRate} × {estimate.rentalDays}</span>
              </div>

              <div style={{ height: '1px', backgroundColor: 'var(--color-border)', margin: '0.35rem 0' }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-orange)' }}>
                <span>Estimated Subtotal</span>
                <span>₹{estimate.estimatedSubtotal}</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.825rem', color: 'var(--color-text-muted)' }}>
                <span>Refundable Deposit (Payable on Pickup)</span>
                <span>₹{vehicle.sampleDeposit}</span>
              </div>
            </div>

            {/* Pricing Formula Explanation Box */}
            <div style={{
              marginTop: '1.15rem',
              padding: '0.75rem 0.95rem',
              backgroundColor: 'var(--color-card)',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.78rem',
              color: 'var(--color-text-secondary)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.5rem',
              border: '1px dashed var(--color-border)'
            }}>
              <Info size={15} color="var(--color-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>Pricing rule:</strong> Rentals are calculated in 24-hour daily increments. Partial periods round up to the next full day (e.g. 25 hrs = 2 days).
              </div>
            </div>
          </div>

          {/* Customer Name Field */}
          <div className="form-group" style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="customer-name-input" className="form-label" style={{ fontSize: '0.85rem' }}>
              Your Name (Optional — will be pre-filled in your WhatsApp message)
            </label>
            <input
              id="customer-name-input"
              type="text"
              placeholder="e.g. Rahul Sharma"
              value={bookingState.customerName}
              onChange={(e) => onCustomerNameChange(e.target.value)}
              className="form-control"
              style={{ height: '44px', fontSize: '0.875rem' }}
            />
          </div>

          {/* Clear Disclaimer Statement */}
          <div style={{
            backgroundColor: 'rgba(227, 38, 54, 0.08)',
            border: '1px solid rgba(227, 38, 54, 0.25)',
            borderRadius: 'var(--radius-md)',
            padding: '0.9rem',
            fontSize: '0.82rem',
            color: 'var(--color-text-primary)',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.6rem'
          }}>
            <AlertCircle size={16} color="var(--color-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong>Important Notice:</strong> Estimated amount only. Sending this message submits an enquiry, not a confirmed reservation. Final pricing, availability, and vehicle handover must be verified and agreed with the rental operator.
            </div>
          </div>

          {/* Placeholder Phone Notice if applicable */}
          {isPlaceholder && (
            <div style={{
              backgroundColor: 'var(--color-card)',
              border: '1px dashed var(--color-border)',
              borderRadius: 'var(--radius-md)',
              padding: '0.75rem',
              fontSize: '0.78rem',
              color: 'var(--color-text-secondary)',
              marginBottom: '1.5rem'
            }}>
              <strong>Demo Notice:</strong> WhatsApp enquiry is routed to the configured demo number ({siteConfig.displayWhatsappNumber}). The business owner can update their phone in <code>siteConfig.ts</code>.
            </div>
          )}

          {/* Modal Actions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <button
              onClick={handleOpenWhatsApp}
              className="btn btn-whatsapp"
              style={{
                width: '100%',
                padding: '0.95rem',
                fontSize: '1rem',
                justifyContent: 'center',
                gap: '0.65rem'
              }}
            >
              <MessageCircle size={20} />
              Continue to WhatsApp Enquiry <ExternalLink size={16} />
            </button>

            <button
              onClick={handleCopyMessage}
              className="btn btn-outline-dark"
              style={{ width: '100%', padding: '0.75rem', fontSize: '0.85rem' }}
            >
              {copiedNotice ? (
                <>
                  <CheckCircle2 size={16} color="var(--color-success)" /> Message Copied to Clipboard!
                </>
              ) : (
                "Copy Formatted Enquiry Message"
              )}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
