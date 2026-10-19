import React from 'react';
import { whyFeatures } from '../data/content';
import { Compass, ShieldCheck, MessageSquareQuote } from 'lucide-react';

export const WhyRidePondy: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass size={28} strokeWidth={2.2} />;
      case 'ShieldCheck':
        return <ShieldCheck size={28} strokeWidth={2.2} />;
      case 'MessageSquareQuote':
        return <MessageSquareQuote size={28} strokeWidth={2.2} />;
      default:
        return <Compass size={28} strokeWidth={2.2} />;
    }
  };

  return (
    <section aria-label="Why RidePondy" className="section-pad" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">The RidePondy Standard</span>
          <h2 className="section-title">Why Explore Pondy on Two Wheels?</h2>
          <p className="section-subtitle">
            Pondicherry’s intimate French quarters, coastal boulevards, and forest trails are made for breezy, independent travel.
          </p>
        </div>

        {/* 3 Distinct Feature Blocks */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {whyFeatures.map((feature, idx) => (
            <div
              key={feature.id}
              className="card-dark"
              style={{
                padding: '2.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 'var(--radius-xl)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Feature Number Watermark */}
              <div style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.5rem',
                fontFamily: 'var(--font-heading)',
                fontSize: '2.5rem',
                fontWeight: 900,
                color: 'rgba(227, 38, 54, 0.08)',
                lineHeight: 1
              }}>
                0{idx + 1}
              </div>

              {/* Icon Container */}
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'var(--color-red-subtle)',
                color: 'var(--color-red)',
                border: '1px solid rgba(227, 38, 54, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                {getIcon(feature.iconName)}
              </div>

              <h3 style={{
                fontSize: '1.35rem',
                color: 'var(--color-text-primary)',
                marginBottom: '0.85rem'
              }}>
                {feature.title}
              </h3>

              <p style={{
                fontSize: '0.95rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.6
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
