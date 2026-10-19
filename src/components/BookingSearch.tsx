import React, { useId } from 'react';
import type { BookingState, ValidationResult } from '../types';
import { siteConfig } from '../data/siteConfig';
import { getTodayString } from '../utils/dateTime';
import { MapPin, Calendar, Clock, ArrowDown, AlertCircle, Sparkles } from 'lucide-react';

interface BookingSearchProps {
  bookingState: BookingState;
  onBookingChange: (updates: Partial<BookingState>) => void;
  validation: ValidationResult;
  onSubmitSearch: () => void;
}

export const BookingSearch: React.FC<BookingSearchProps> = ({
  bookingState,
  onBookingChange,
  validation,
  onSubmitSearch
}) => {
  const pickupLocationId = useId();
  const pickupDateId = useId();
  const pickupTimeId = useId();
  const returnDateId = useId();
  const returnTimeId = useId();
  const today = getTodayString();

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onBookingChange({ pickupLocation: e.target.value });
  };

  const handlePickupDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;
    const updates: Partial<BookingState> = { pickupDate: newDate };
    if (bookingState.returnDate && bookingState.returnDate < newDate) {
      updates.returnDate = newDate;
    }
    onBookingChange(updates);
  };

  const handlePickupTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onBookingChange({ pickupTime: e.target.value });
  };

  const handleReturnDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onBookingChange({ returnDate: e.target.value });
  };

  const handleReturnTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onBookingChange({ returnTime: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validation.isValid) {
      onSubmitSearch();
    }
  };

  const timeOptions = [
    "08:00", "09:00", "10:00", "11:00", "12:00",
    "13:00", "14:00", "15:00", "16:00", "17:00",
    "18:00", "19:00", "20:00"
  ];

  const formatTimeLabel = (time: string) => {
    const [h] = time.split(':').map(Number);
    const ampm = h >= 12 ? 'PM' : 'AM';
    const displayH = h % 12 || 12;
    return `${displayH}:00 ${ampm}`;
  };

  return (
    <div id="booking-search" style={{
      marginTop: '-2rem',
      position: 'relative',
      zIndex: 20
    }}>
      <div className="container">
        <div style={{
          backgroundColor: 'var(--color-card)',
          borderRadius: 'var(--radius-xl)',
          border: '1px solid var(--color-border)',
          boxShadow: 'var(--shadow-elevated)',
          padding: '2.25rem 2.5rem',
          position: 'relative'
        }}>
          {/* Header Strip inside form */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '1.75rem',
            paddingBottom: '1.25rem',
            borderBottom: '1px solid var(--color-border)'
          }}>
            <div>
              <span className="section-eyebrow" style={{ marginBottom: '0.2rem' }}>
                Plan Your Pondicherry Itinerary
              </span>
              <h2 style={{ fontSize: '1.45rem', color: 'var(--color-text-primary)' }}>
                Select Rental Dates & Pickup Hub
              </h2>
            </div>
            
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'var(--color-bg-secondary)',
              border: '1px solid var(--color-border)',
              padding: '0.45rem 0.95rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.8rem',
              color: 'var(--color-text-secondary)'
            }}>
              <Sparkles size={14} color="var(--color-orange)" />
              24-hour rate blocks apply
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
              gap: '1.25rem',
              alignItems: 'flex-start'
            }}>
              
              {/* Pickup Location */}
              <div className="form-group" style={{ gridColumn: 'span 1' }}>
                <label htmlFor={pickupLocationId} className="form-label">
                  <MapPin size={16} color="var(--color-orange)" /> Pickup Location
                </label>
                <select
                  id={pickupLocationId}
                  value={bookingState.pickupLocation}
                  onChange={handleLocationChange}
                  className="form-control"
                  style={{ height: '48px', cursor: 'pointer' }}
                >
                  {siteConfig.pickupLocations.map((loc) => (
                    <option key={loc.id} value={loc.id} style={{ backgroundColor: '#141414', color: '#F5F5F5' }}>
                      {loc.label}
                    </option>
                  ))}
                </select>
                <span style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)' }}>
                  Pickup & drop at designated hub
                </span>
              </div>

              {/* Pickup Date */}
              <div className="form-group">
                <label htmlFor={pickupDateId} className="form-label">
                  <Calendar size={16} color="var(--color-red)" /> Pickup Date
                </label>
                <input
                  id={pickupDateId}
                  type="date"
                  min={today}
                  value={bookingState.pickupDate}
                  onChange={handlePickupDateChange}
                  className={`form-control ${validation.errors.pickupDate ? 'is-invalid' : ''}`}
                  style={{ height: '48px', colorScheme: 'dark' }}
                  required
                />
                {validation.errors.pickupDate && (
                  <div className="form-error" role="alert">
                    <AlertCircle size={13} /> {validation.errors.pickupDate}
                  </div>
                )}
              </div>

              {/* Pickup Time */}
              <div className="form-group">
                <label htmlFor={pickupTimeId} className="form-label">
                  <Clock size={16} color="var(--color-red)" /> Pickup Time
                </label>
                <select
                  id={pickupTimeId}
                  value={bookingState.pickupTime}
                  onChange={handlePickupTimeChange}
                  className={`form-control ${validation.errors.pickupTime ? 'is-invalid' : ''}`}
                  style={{ height: '48px', cursor: 'pointer' }}
                >
                  {timeOptions.map((time) => (
                    <option key={time} value={time} style={{ backgroundColor: '#141414', color: '#F5F5F5' }}>
                      {formatTimeLabel(time)}
                    </option>
                  ))}
                </select>
                {validation.errors.pickupTime && (
                  <div className="form-error" role="alert">
                    <AlertCircle size={13} /> {validation.errors.pickupTime}
                  </div>
                )}
              </div>

              {/* Return Date */}
              <div className="form-group">
                <label htmlFor={returnDateId} className="form-label">
                  <Calendar size={16} color="var(--color-red)" /> Return Date
                </label>
                <input
                  id={returnDateId}
                  type="date"
                  min={bookingState.pickupDate || today}
                  value={bookingState.returnDate}
                  onChange={handleReturnDateChange}
                  className={`form-control ${validation.errors.returnDate ? 'is-invalid' : ''}`}
                  style={{ height: '48px', colorScheme: 'dark' }}
                  required
                />
                {validation.errors.returnDate && (
                  <div className="form-error" role="alert">
                    <AlertCircle size={13} /> {validation.errors.returnDate}
                  </div>
                )}
              </div>

              {/* Return Time */}
              <div className="form-group">
                <label htmlFor={returnTimeId} className="form-label">
                  <Clock size={16} color="var(--color-red)" /> Return Time
                </label>
                <select
                  id={returnTimeId}
                  value={bookingState.returnTime}
                  onChange={handleReturnTimeChange}
                  className={`form-control ${validation.errors.returnTime ? 'is-invalid' : ''}`}
                  style={{ height: '48px', cursor: 'pointer' }}
                >
                  {timeOptions.map((time) => (
                    <option key={time} value={time} style={{ backgroundColor: '#141414', color: '#F5F5F5' }}>
                      {formatTimeLabel(time)}
                    </option>
                  ))}
                </select>
                {validation.errors.returnTime && (
                  <div className="form-error" role="alert">
                    <AlertCircle size={13} /> {validation.errors.returnTime}
                  </div>
                )}
              </div>

            </div>

            {/* General validation error notice if timestamps overlap or invalid */}
            {validation.errors.general && (
              <div style={{
                marginTop: '1.25rem',
                padding: '0.85rem 1.15rem',
                backgroundColor: 'var(--color-error-bg)',
                border: '1px solid rgba(239, 68, 68, 0.4)',
                borderRadius: 'var(--radius-md)',
                color: '#FCA5A5',
                fontSize: '0.875rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem'
              }} role="alert">
                <AlertCircle size={18} color="var(--color-error)" />
                <span>{validation.errors.general}</span>
              </div>
            )}

            {/* Submit Action Bar with Essential Booking Disclosure */}
            <div style={{
              marginTop: '2rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.25rem'
            }}>
              {/* Essential booking disclosure replacing deleted policy page */}
              <div style={{ fontSize: '0.825rem', color: 'var(--color-text-secondary)', maxWidth: '580px', lineHeight: 1.5 }}>
                <span style={{ fontWeight: 700, color: 'var(--color-text-primary)' }}>Booking Disclosure: </span>
                Vehicle availability, valid driving licence verification, refundable security deposit, and final reservation must be verified directly with the rental operator on WhatsApp.
              </div>

              <button
                type="submit"
                disabled={!validation.isValid}
                className="btn btn-primary"
                style={{ padding: '0.9rem 2rem', minWidth: '220px' }}
              >
                Browse Fleet for Dates <ArrowDown size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
