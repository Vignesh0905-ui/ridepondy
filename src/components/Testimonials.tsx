import React from 'react';
import { sampleTestimonials } from '../data/content';
import { Quote, Sparkles } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section aria-label="Traveler Impressions" className="section-pad" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.85rem' }}>
            <span className="badge badge-demo">
              <Sparkles size={12} /> DEMO PREVIEW DATA
            </span>
          </div>
          <h2 className="section-title">A Better Way to Explore Pondicherry</h2>
          <p className="section-subtitle">
            Illustrative impressions of how tourists experience coastal independence on two wheels.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {sampleTestimonials.map((item, idx) => (
            <div
              key={idx}
              className="card-dark"
              style={{
                padding: '2.25rem 2rem',
                borderRadius: 'var(--radius-xl)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}
            >
              <Quote
                size={36}
                color="var(--color-orange)"
                style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', opacity: 0.25 }}
              />

              <p style={{
                fontSize: '0.975rem',
                color: 'var(--color-text-primary)',
                lineHeight: 1.65,
                fontStyle: 'italic',
                marginBottom: '1.75rem',
                position: 'relative',
                zIndex: 1,
                flexGrow: 1
              }}>
                "{item.comment}"
              </p>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '1rem',
                borderTop: '1px solid var(--color-border)'
              }}>
                <div>
                  <div style={{ fontWeight: 700, color: '#FFFFFF', fontSize: '0.95rem' }}>
                    {item.name}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginTop: '2px' }}>
                    {item.origin} • {item.tripType}
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <span className="badge badge-red" style={{ fontSize: '0.68rem' }}>
                    {item.vehicleUsed}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Notice acknowledging demo status */}
        <div style={{
          textAlign: 'center',
          marginTop: '2.25rem',
          fontSize: '0.78rem',
          color: 'var(--color-text-muted)'
        }}>
          *Demonstration testimonials are illustrative examples of customer feedback for client presentation purposes.
        </div>

      </div>
    </section>
  );
};
