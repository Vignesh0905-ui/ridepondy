import React from 'react';
import type { Vehicle } from '../types';
import { ArrowRight, Bike } from 'lucide-react';

interface MobileStickyBarProps {
  selectedVehicle: Vehicle | null;
  onOpenSummary: () => void;
  onScrollToSearch: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  selectedVehicle,
  onOpenSummary,
  onScrollToSearch
}) => {
  return (
    <div
      className="mobile-sticky-bar"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'var(--color-bg-secondary)',
        borderTop: '1px solid var(--color-border)',
        boxShadow: '0 -6px 20px rgba(0, 0, 0, 0.65)',
        padding: '0.75rem 1rem',
        zIndex: 90,
        display: 'none',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '0.75rem'
      }}
    >
      {selectedVehicle ? (
        <>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', overflow: 'hidden' }}>
            <img
              src={selectedVehicle.image}
              alt=""
              style={{
                width: '42px',
                height: '42px',
                borderRadius: 'var(--radius-sm)',
                objectFit: 'cover',
                flexShrink: 0
              }}
            />
            <div style={{ overflow: 'hidden' }}>
              <div style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                color: '#FFFFFF',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                overflow: 'hidden'
              }}>
                {selectedVehicle.name}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-orange)', fontWeight: 700 }}>
                ₹{selectedVehicle.sampleDailyRate} / 24 hrs
              </div>
            </div>
          </div>

          <button
            onClick={onOpenSummary}
            className="btn btn-primary"
            style={{ padding: '0.65rem 1.15rem', fontSize: '0.85rem', flexShrink: 0 }}
          >
            Review & Enquire <ArrowRight size={15} />
          </button>
        </>
      ) : (
        <>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              backgroundColor: 'var(--color-card)',
              border: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-orange)'
            }}>
              <Bike size={18} />
            </div>
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFFFFF' }}>
                Rent in Pondicherry
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--color-text-secondary)' }}>
                Scooters from ₹450/day
              </div>
            </div>
          </div>

          <button
            onClick={onScrollToSearch}
            className="btn btn-primary"
            style={{ padding: '0.65rem 1.15rem', fontSize: '0.85rem' }}
          >
            Select Dates <ArrowRight size={15} />
          </button>
        </>
      )}

      <style>{`
        @media (max-width: 768px) {
          .mobile-sticky-bar {
            display: flex !important;
          }
          /* Add bottom padding to body so sticky bar never obscures content */
          body {
            padding-bottom: 74px !important;
          }
        }
      `}</style>
    </div>
  );
};
