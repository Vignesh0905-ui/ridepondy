import React from 'react';
import type { Vehicle } from '../types';
import { Check, Info, Users, Fuel, Gauge, Shield } from 'lucide-react';

interface VehicleCardProps {
  vehicle: Vehicle;
  isSelected: boolean;
  onSelect: (vehicle: Vehicle) => void;
  onViewDetails: (vehicle: Vehicle) => void;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({
  vehicle,
  isSelected,
  onSelect,
  onViewDetails
}) => {
  return (
    <article
      className="card-dark"
      style={{
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        position: 'relative',
        border: isSelected ? '2px solid var(--color-red)' : '1px solid var(--color-border)',
        boxShadow: isSelected ? '0 12px 36px rgba(227, 38, 54, 0.35)' : 'var(--shadow-subtle)',
        transform: isSelected ? 'translateY(-3px)' : 'none'
      }}
    >
      {/* Card Image Header with Badges */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '215px',
        backgroundColor: '#141414',
        overflow: 'hidden'
      }}>
        <img
          src={vehicle.image}
          alt={vehicle.name}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 450ms cubic-bezier(0.16, 1, 0.3, 1)',
            filter: 'brightness(0.9)'
          }}
          className="vehicle-card-img"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80";
          }}
        />

        {/* Subtle dark gradient overlay on image */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(28, 28, 28, 0.92) 0%, transparent 50%)'
        }} />

        {/* Category Pill Tag */}
        <div style={{
          position: 'absolute',
          top: '0.9rem',
          left: '0.9rem',
          display: 'flex',
          gap: '0.45rem',
          flexWrap: 'wrap'
        }}>
          <span className="badge badge-dark" style={{ fontSize: '0.7rem' }}>
            {vehicle.categoryLabel}
          </span>
          {vehicle.badge && (
            <span className="badge badge-red" style={{ fontSize: '0.7rem' }}>
              {vehicle.badge}
            </span>
          )}
        </div>

        {/* Selected Ribbon if chosen */}
        {isSelected && (
          <div style={{
            position: 'absolute',
            top: '0.9rem',
            right: '0.9rem',
            backgroundColor: 'var(--color-red)',
            color: '#FFFFFF',
            padding: '0.35rem 0.8rem',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.75rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            boxShadow: '0 4px 14px rgba(227, 38, 54, 0.5)'
          }}>
            <Check size={14} strokeWidth={3} /> Selected Ride
          </div>
        )}
      </div>

      {/* Card Content Body */}
      <div style={{
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1
      }}>
        
        {/* Name and Tagline */}
        <div style={{ marginBottom: '1.15rem' }}>
          <h3 style={{
            fontSize: '1.3rem',
            marginBottom: '0.35rem',
            color: 'var(--color-text-primary)'
          }}>
            {vehicle.name}
          </h3>
          <p style={{
            fontSize: '0.85rem',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.45,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
            {vehicle.tagline}
          </p>
        </div>

        {/* Specs Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '0.65rem',
          padding: '0.85rem 0',
          borderTop: '1px solid var(--color-border)',
          borderBottom: '1px solid var(--color-border)',
          marginBottom: '1.35rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
            <Gauge size={15} color="var(--color-orange)" />
            <span>{vehicle.engineCapacity} • {vehicle.transmission}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
            <Users size={15} color="var(--color-orange)" />
            <span>Seats {vehicle.seatingCapacity} (Pillion ready)</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
            <Fuel size={15} color="var(--color-orange)" />
            <span>{vehicle.fuelType} Fuel</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
            <Shield size={15} color="var(--color-orange)" />
            <span>Helmet Included</span>
          </div>
        </div>

        {/* Pricing Breakdown Block */}
        <div style={{
          marginTop: 'auto',
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          marginBottom: '1.35rem'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem' }}>
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.55rem',
                fontWeight: 800,
                color: 'var(--color-orange)'
              }}>
                ₹{vehicle.sampleDailyRate}
              </span>
              <span style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>/ 24 hrs</span>
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)' }}>
              Sample daily rate (illustrative)
            </div>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
              ₹{vehicle.sampleDeposit}
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)' }}>
              Refundable deposit
            </div>
          </div>
        </div>

        {/* Card Actions */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr', gap: '0.75rem' }}>
          <button
            type="button"
            onClick={() => onViewDetails(vehicle)}
            className="btn btn-outline-dark"
            style={{ padding: '0.7rem 0.85rem', fontSize: '0.85rem' }}
            aria-label={`View full details for ${vehicle.name}`}
          >
            <Info size={15} /> Details
          </button>

          <button
            type="button"
            onClick={() => onSelect(vehicle)}
            className={`btn ${isSelected ? 'btn-secondary' : 'btn-primary'}`}
            style={{
              padding: '0.7rem 0.85rem',
              fontSize: '0.85rem',
              borderColor: isSelected ? 'var(--color-orange)' : undefined,
              color: isSelected ? 'var(--color-orange)' : undefined
            }}
          >
            {isSelected ? (
              <>
                <Check size={16} /> Selected
              </>
            ) : (
              "Choose Ride"
            )}
          </button>
        </div>

      </div>

      <style>{`
        .card-dark:hover .vehicle-card-img {
          transform: scale(1.05);
        }
      `}</style>
    </article>
  );
};
