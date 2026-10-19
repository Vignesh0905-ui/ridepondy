import React from 'react';
import { ArrowRight, Compass, ShieldCheck, MapPin } from 'lucide-react';

interface HeroSectionProps {
  onExploreFleet: () => void;
  onHowItWorks: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreFleet, onHowItWorks }) => {
  return (
    <section aria-label="Hero Introduction" style={{
      paddingTop: '4.5rem',
      paddingBottom: '4.5rem',
      backgroundColor: 'var(--color-bg-primary)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Cinematic subtle red ambient glow in background */}
      <div style={{
        position: 'absolute',
        top: '-150px',
        right: '-100px',
        width: '550px',
        height: '550px',
        background: 'radial-gradient(circle, rgba(227, 38, 54, 0.12) 0%, rgba(9, 9, 9, 0) 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Split Hero Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3.5rem',
          alignItems: 'center'
        }} className="hero-grid">
          
          {/* Left Column: Typography & CTAs */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            
            {/* Eyebrow */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1.25rem'
            }}>
              <span className="badge badge-red" style={{ fontSize: '0.8rem', padding: '0.4rem 0.9rem' }}>
                PONDICHERRY, AT YOUR OWN PACE
              </span>
            </div>

            {/* Headline */}
            <h1 style={{
              color: 'var(--color-text-primary)',
              marginBottom: '1.35rem',
              lineHeight: 1.15
            }}>
              Find Your Ride.<br />
              <span style={{ color: 'var(--color-orange)' }}>Feel Pondicherry.</span>
            </h1>

            {/* Supporting Copy */}
            <p style={{
              fontSize: '1.15rem',
              color: 'var(--color-text-secondary)',
              marginBottom: '2.25rem',
              maxWidth: '520px',
              lineHeight: 1.6
            }}>
              Explore sunlit streets, seaside cafés and hidden coastal corners with a ride that fits your journey. Simple date selection, transparent estimates, and direct WhatsApp enquiries.
            </p>

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '3rem'
            }}>
              <button
                onClick={onExploreFleet}
                className="btn btn-primary"
                style={{ padding: '0.95rem 2rem', fontSize: '1rem' }}
              >
                Explore the Fleet <ArrowRight size={18} />
              </button>
              
              <button
                onClick={onHowItWorks}
                className="btn btn-secondary"
                style={{ padding: '0.95rem 2rem', fontSize: '1rem' }}
              >
                How It Works
              </button>
            </div>

            {/* Compact Trust Strip */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '1.25rem',
              paddingTop: '2rem',
              borderTop: '1px solid var(--color-border)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--color-card)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-orange)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Compass size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>Multiple Rides</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Scooters & classic bikes</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--color-card)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-orange)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>Simple Enquiry</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>24h rate estimates</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--color-card)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-orange)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <MapPin size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>Local Pickup</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>White Town & Station</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual with Cinematic Gradient Frame (Restored clean layout) */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-elevated)',
              position: 'relative',
              backgroundColor: 'var(--color-card)',
              aspectRatio: '4 / 3.4',
              maxHeight: '490px',
              border: '1px solid var(--color-border)'
            }}>
              <img
                src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80"
                alt="Motorcycle on a scenic coastal road in Pondicherry"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  filter: 'brightness(0.92)'
                }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80";
                }}
              />
              
              {/* Dark vignette gradient overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(9, 9, 9, 0.9) 0%, rgba(9, 9, 9, 0.1) 60%)'
              }} />

              {/* Floating Pill Overlay */}
              <div style={{
                position: 'absolute',
                bottom: '1.25rem',
                left: '1.25rem',
                backgroundColor: 'rgba(28, 28, 28, 0.94)',
                backdropFilter: 'blur(10px)',
                padding: '0.75rem 1.15rem',
                borderRadius: 'var(--radius-lg)',
                color: 'var(--color-text-primary)',
                maxWidth: 'calc(100% - 2.5rem)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                border: '1px solid rgba(227, 38, 54, 0.35)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.6)'
              }}>
                <div style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-red)',
                  boxShadow: '0 0 8px var(--color-red)',
                  flexShrink: 0
                }} />
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFFFFF' }}>
                    White Town & Coastal Trails
                  </div>
                  <div style={{ fontSize: '0.725rem', color: 'var(--color-text-secondary)' }}>
                    Sample routes suited for 2-wheelers
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle decorative border element */}
            <div style={{
              position: 'absolute',
              top: '-10px',
              right: '-10px',
              bottom: '10px',
              left: '10px',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-xl)',
              zIndex: -1,
              pointerEvents: 'none'
            }} />
          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .hero-grid {
            grid-template-columns: 1.15fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
