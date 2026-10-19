import React, { useEffect } from 'react';
import type { Vehicle } from '../types';
import { X, Check, Gauge, Fuel, Users, Shield, ArrowRight } from 'lucide-react';

interface VehicleDetailsModalProps {
  vehicle: Vehicle | null;
  isSelected: boolean;
  onClose: () => void;
  onSelectAndReview: (vehicle: Vehicle) => void;
}

export const VehicleDetailsModal: React.FC<VehicleDetailsModalProps> = ({
  vehicle,
  isSelected,
  onClose,
  onSelectAndReview
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (vehicle) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [vehicle, onClose]);

  if (!vehicle) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-vehicle-title"
    >
      <div className="modal-content" style={{ overflow: 'hidden' }}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close vehicle details"
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            zIndex: 10,
            background: 'rgba(28, 28, 28, 0.85)',
            backdropFilter: 'blur(6px)',
            border: '1px solid var(--color-border)',
            borderRadius: '50%',
            width: '38px',
            height: '38px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--color-text-primary)'
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Image Banner */}
        <div style={{
          height: '270px',
          backgroundColor: '#141414',
          position: 'relative'
        }}>
          <img
            src={vehicle.image}
            alt={vehicle.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.9)' }}
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80";
            }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(25, 25, 25, 0.95) 0%, transparent 60%)'
          }} />

          <div style={{
            position: 'absolute',
            bottom: '1.25rem',
            left: '1.5rem',
            display: 'flex',
            gap: '0.5rem'
          }}>
            <span className="badge badge-dark">{vehicle.categoryLabel}</span>
            {vehicle.badge && <span className="badge badge-red">{vehicle.badge}</span>}
          </div>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '2rem' }}>
          
          <div style={{ marginBottom: '1.25rem' }}>
            <h2 id="modal-vehicle-title" style={{ fontSize: '1.75rem', color: '#FFFFFF', marginBottom: '0.4rem' }}>
              {vehicle.name}
            </h2>
            <p style={{ color: 'var(--color-orange)', fontSize: '0.95rem', fontWeight: 600 }}>
              {vehicle.tagline}
            </p>
          </div>

          <p style={{ fontSize: '0.925rem', color: 'var(--color-text-secondary)', lineHeight: 1.65, marginBottom: '1.75rem' }}>
            {vehicle.description}
          </p>

          {/* Key Specs Bar */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '0.85rem',
            backgroundColor: 'var(--color-card)',
            border: '1px solid var(--color-border)',
            padding: '1.15rem',
            borderRadius: 'var(--radius-md)',
            marginBottom: '1.75rem'
          }}>
            <div>
              <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>Engine & Gear</div>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '3px' }}>
                <Gauge size={14} color="var(--color-orange)" /> {vehicle.engineCapacity} • {vehicle.transmission}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>Fuel Type</div>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '3px' }}>
                <Fuel size={14} color="var(--color-orange)" /> {vehicle.fuelType}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>Seating</div>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '3px' }}>
                <Users size={14} color="var(--color-orange)" /> {vehicle.seatingCapacity} Persons
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>Rider Helmet</div>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '3px' }}>
                <Shield size={14} color="var(--color-orange)" /> Included
              </div>
            </div>
          </div>

          {/* Best For Note */}
          <div style={{
            backgroundColor: 'var(--color-card)',
            borderLeft: '4px solid var(--color-orange)',
            borderTop: '1px solid var(--color-border)',
            borderRight: '1px solid var(--color-border)',
            borderBottom: '1px solid var(--color-border)',
            padding: '0.85rem 1.15rem',
            borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
            marginBottom: '1.75rem'
          }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-orange)' }}>
              Best Suited For
            </div>
            <div style={{ fontSize: '0.875rem', color: 'var(--color-text-primary)', marginTop: '2px' }}>
              {vehicle.bestFor}
            </div>
          </div>

          {/* Features Checklist */}
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '0.95rem', marginBottom: '0.85rem', color: '#FFFFFF' }}>
              Vehicle Highlights & Inclusions
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem' }}>
              {vehicle.features.map((feat, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
                  <Check size={16} color="var(--color-orange)" strokeWidth={2.5} style={{ flexShrink: 0 }} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Footer with Rate & Selection Action */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.25rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--color-border)'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem' }}>
                <span style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-orange)', fontFamily: 'var(--font-heading)' }}>
                  ₹{vehicle.sampleDailyRate}
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>/ 24 hrs</span>
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                Deposit: ₹{vehicle.sampleDeposit} (Refundable on return)
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.85rem' }}>
              <button
                type="button"
                onClick={onClose}
                className="btn btn-secondary"
                style={{ padding: '0.75rem 1.35rem' }}
              >
                Close
              </button>
              
              <button
                type="button"
                onClick={() => onSelectAndReview(vehicle)}
                className="btn btn-primary"
                style={{ padding: '0.75rem 1.6rem' }}
              >
                {isSelected ? "Review Trip Estimate" : "Choose & Review Estimate"} <ArrowRight size={16} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
