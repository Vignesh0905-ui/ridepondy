import React, { useState, useMemo } from 'react';
import type { Vehicle, VehicleCategory } from '../types';
import { sampleFleet } from '../data/fleet';
import { VehicleCard } from './VehicleCard';
import { SlidersHorizontal, RotateCcw, AlertTriangle, Sparkles } from 'lucide-react';

interface FleetSectionProps {
  selectedVehicleId: string | null;
  onSelectVehicle: (vehicle: Vehicle) => void;
  onViewDetails: (vehicle: Vehicle) => void;
}

export const FleetSection: React.FC<FleetSectionProps> = ({
  selectedVehicleId,
  onSelectVehicle,
  onViewDetails
}) => {
  const [activeCategory, setActiveCategory] = useState<VehicleCategory>('all');
  const [sortBy, setSortBy] = useState<'recommended' | 'price-asc' | 'price-desc'>('recommended');

  const categories: { id: VehicleCategory; label: string }[] = [
    { id: 'all', label: 'All Vehicles' },
    { id: 'city_scooter', label: 'City Scooters' },
    { id: 'premium_scooter', label: 'Premium Scooters' },
    { id: 'classic_motorcycle', label: 'Classic Bikes' },
    { id: 'adventure_motorcycle', label: 'Adventure Bikes' }
  ];

  const filteredFleet = useMemo(() => {
    let result = [...sampleFleet];

    if (activeCategory !== 'all') {
      result = result.filter(v => v.category === activeCategory);
    }

    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.sampleDailyRate - b.sampleDailyRate);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.sampleDailyRate - a.sampleDailyRate);
    }

    return result;
  }, [activeCategory, sortBy]);

  const handleReset = () => {
    setActiveCategory('all');
    setSortBy('recommended');
  };

  return (
    <section id="fleet" aria-label="Vehicle Fleet" className="section-pad" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">Pondicherry Fleet</span>
          <h2 className="section-title">Find Your Perfect Ride</h2>
          <p className="section-subtitle">
            From easy city cruisers to weekend explorers, choose the ride that suits your Pondicherry plans.
          </p>
        </div>

        {/* Demo Fleet Notice */}
        <div style={{
          backgroundColor: 'rgba(255, 184, 0, 0.08)',
          border: '1px solid rgba(255, 184, 0, 0.25)',
          borderRadius: 'var(--radius-md)',
          padding: '0.85rem 1.25rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          marginBottom: '2.5rem',
          fontSize: '0.85rem',
          color: '#FFD470'
        }}>
          <AlertTriangle size={18} style={{ flexShrink: 0 }} />
          <div>
            <strong>Demo fleet and prices are illustrative.</strong> Final rates and vehicle availability must be confirmed by the rental operator upon WhatsApp enquiry.
          </div>
        </div>

        {/* Filters and Sorting Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.25rem',
          marginBottom: '2.25rem',
          paddingBottom: '1.25rem',
          borderBottom: '1px solid var(--color-border)'
        }}>
          
          {/* Category Tabs */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem'
          }} role="tablist" aria-label="Filter fleet by category">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    padding: '0.55rem 1.15rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    border: '1px solid',
                    borderColor: isActive ? 'var(--color-red)' : 'var(--color-border)',
                    backgroundColor: isActive ? 'var(--color-red)' : 'var(--color-card)',
                    color: isActive ? '#FFFFFF' : 'var(--color-text-secondary)',
                    boxShadow: isActive ? '0 4px 14px rgba(227, 38, 54, 0.45)' : 'none',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Sort Dropdown */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <SlidersHorizontal size={16} color="var(--color-red)" />
            <label htmlFor="sort-select" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
              Sort:
            </label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="form-control"
              style={{
                width: 'auto',
                padding: '0.5rem 1rem',
                fontSize: '0.85rem',
                height: '40px',
                cursor: 'pointer',
                backgroundColor: 'var(--color-card)',
                color: 'var(--color-text-primary)'
              }}
            >
              <option value="recommended">Featured / Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>

        </div>

        {/* Vehicles Grid */}
        {filteredFleet.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.85rem'
          }}>
            {filteredFleet.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                isSelected={selectedVehicleId === vehicle.id}
                onSelect={onSelectVehicle}
                onViewDetails={onViewDetails}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            backgroundColor: 'var(--color-card)',
            borderRadius: 'var(--radius-xl)',
            border: '1px dashed var(--color-border)'
          }}>
            <Sparkles size={36} color="var(--color-orange)" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>
              No vehicles found in this category
            </h3>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
              Try adjusting your category filter to view all scooters and bikes in our demo fleet.
            </p>
            <button
              onClick={handleReset}
              className="btn btn-secondary"
              style={{ padding: '0.65rem 1.35rem', fontSize: '0.875rem' }}
            >
              <RotateCcw size={15} /> Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
