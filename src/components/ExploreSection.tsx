import React from 'react';
import { exploreSpots } from '../data/content';
import { Clock } from 'lucide-react';

export const ExploreSection: React.FC = () => {
  return (
    <section id="explore" aria-label="Explore Pondicherry" className="section-pad" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">Local Highlights</span>
          <h2 className="section-title">Explore Pondicherry at Your Leisure</h2>
          <p className="section-subtitle">
            From the mustard-yellow French Quarter to the rocky sea-facing boulevard and tranquil forest pathways.
          </p>
        </div>

        {/* 3 Cohesive Visual Travel Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {exploreSpots.map((spot) => (
            <div
              key={spot.id}
              className="card-dark"
              style={{
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Image with restrained overlay */}
              <div style={{
                height: '240px',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: '#141414'
              }}>
                <img
                  src={spot.image}
                  alt={spot.name}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 450ms cubic-bezier(0.16, 1, 0.3, 1)',
                    filter: 'brightness(0.88)'
                  }}
                  className="explore-card-img"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80";
                  }}
                />

                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(16, 16, 16, 0.9) 0%, rgba(16, 16, 16, 0.2) 60%)'
                }} />

                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem'
                }}>
                  <span className="badge badge-red" style={{ fontSize: '0.72rem', fontWeight: 700 }}>
                    {spot.highlightTag}
                  </span>
                </div>

                <div style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '1.25rem',
                  right: '1.25rem'
                }}>
                  <h3 style={{
                    fontSize: '1.35rem',
                    color: '#FFFFFF',
                    textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                    marginBottom: '2px'
                  }}>
                    {spot.name}
                  </h3>
                </div>
              </div>

              {/* Text content */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <p style={{
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: 'var(--color-orange)',
                  marginBottom: '0.5rem'
                }}>
                  {spot.subtitle}
                </p>

                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.55,
                  marginBottom: '1.25rem',
                  flexGrow: 1
                }}>
                  {spot.description}
                </p>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.8rem',
                  color: 'var(--color-text-secondary)',
                  paddingTop: '0.85rem',
                  borderTop: '1px solid var(--color-border)'
                }}>
                  <Clock size={14} color="var(--color-orange)" />
                  <span><strong>Ideal Time:</strong> {spot.idealTime}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Disclaimer about parking and local access */}
        <div style={{
          marginTop: '2.5rem',
          textAlign: 'center',
          fontSize: '0.8rem',
          color: 'var(--color-text-muted)'
        }}>
          *Note: Goubert Avenue along Promenade Beach is closed to motorized traffic between 6:00 PM and 7:30 AM daily. Dedicated two-wheeler parking is available on adjoining cross streets.
        </div>

      </div>

      <style>{`
        .card-dark:hover .explore-card-img {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};
