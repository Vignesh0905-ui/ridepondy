import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { Bike, MessageSquare, ArrowUp, ShieldCheck, ArrowRight } from 'lucide-react';

interface FooterProps {
  onOpenConfigModal: () => void;
  onBookClick: () => void;
  onReplayIntro?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConfigModal, onBookClick, onReplayIntro }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenWhatsApp = () => {
    const cleanNumber = siteConfig.whatsappNumber.replace(/[^0-9]/g, '');
    const defaultMsg = encodeURIComponent(`Hi ${siteConfig.businessName}! I'd like to ask a general question about two-wheeler rentals.`);
    window.open(`https://wa.me/${cleanNumber}?text=${defaultMsg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer style={{
      backgroundColor: '#090909',
      color: 'var(--color-text-primary)',
      paddingTop: '5rem',
      paddingBottom: '2.5rem',
      borderTop: '1px solid var(--color-border)'
    }}>
      <div className="container">
        
        {/* Main Footer Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '3rem',
          marginBottom: '3.5rem'
        }}>
          
          {/* Brand Column */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                backgroundColor: 'var(--color-card)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-red)',
                border: '1px solid var(--color-border)',
                boxShadow: '0 0 16px rgba(227, 38, 54, 0.25)'
              }}>
                <Bike size={20} strokeWidth={2.4} />
              </div>
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.45rem',
                fontWeight: 800,
                color: '#FFFFFF'
              }}>
                Ride<span style={{ color: 'var(--color-orange)' }}>Pondy</span>
              </span>
            </div>

            <p style={{
              fontSize: '0.875rem',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.6,
              marginBottom: '1.5rem'
            }}>
              Curated two-wheeler rentals for tourists discovering Pondicherry's sunlit streets, heritage quarters, and coastal pathways at their own pace.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                backgroundColor: 'var(--color-card)',
                border: '1px solid var(--color-border)',
                padding: '0.35rem 0.75rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.72rem',
                color: 'var(--color-text-secondary)',
                width: 'fit-content'
              }}>
                <ShieldCheck size={14} color="var(--color-orange)" />
                Client Presentation Demo
              </div>

              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                Desk: {siteConfig.displayWhatsappNumber}
              </div>
            </div>
          </div>

          {/* Quick Links (Policies link removed per requirement) */}
          <div>
            <h4 style={{
              fontSize: '0.9rem',
              color: '#FFFFFF',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '1.25rem'
            }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem' }}>
              <li>
                <a href="#fleet" style={{ color: 'var(--color-text-secondary)' }} className="footer-link">
                  Browse Fleet
                </a>
              </li>
              <li>
                <a href="#how-it-works" style={{ color: 'var(--color-text-secondary)' }} className="footer-link">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#explore" style={{ color: 'var(--color-text-secondary)' }} className="footer-link">
                  Explore Pondicherry
                </a>
              </li>
              <li>
                <a href="#faqs" style={{ color: 'var(--color-text-secondary)' }} className="footer-link">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#contact" style={{ color: 'var(--color-text-secondary)' }} className="footer-link">
                  Pickup Hubs & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Rental Hub Info */}
          <div>
            <h4 style={{
              fontSize: '0.9rem',
              color: '#FFFFFF',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '1.25rem'
            }}>
              Pickup Hubs
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
              <li>• White Town Main Desk</li>
              <li>• Railway Station Drop Point</li>
              <li>• New Bus Stand Arrival Point</li>
              <li>• Auroville Junction / ECR</li>
              <li style={{ marginTop: '0.5rem', color: 'var(--color-orange)', fontSize: '0.8rem', fontWeight: 600 }}>
                Hours: {siteConfig.operatingHours}
              </li>
            </ul>

            <div style={{ marginTop: '1.25rem' }}>
              <button
                onClick={handleOpenWhatsApp}
                className="btn btn-whatsapp"
                style={{ fontSize: '0.8rem', padding: '0.5rem 0.95rem' }}
              >
                <MessageSquare size={14} /> Quick WhatsApp Chat
              </button>
            </div>
          </div>

          {/* Client Setup Guide CTA */}
          <div>
            <h4 style={{
              fontSize: '0.9rem',
              color: '#FFFFFF',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '1.25rem'
            }}>
              Ready to Rent?
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
              Choose your dates and get an instant transparent 24-hr rental estimate.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <button
                onClick={onBookClick}
                className="btn btn-primary"
                style={{ fontSize: '0.85rem', padding: '0.65rem 1rem' }}
              >
                Book a Ride <ArrowRight size={14} />
              </button>
              <button
                onClick={onOpenConfigModal}
                className="btn btn-secondary"
                style={{
                  fontSize: '0.8rem',
                  padding: '0.55rem 1rem'
                }}
              >
                Operator Config Guide
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid var(--color-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.8rem',
          color: 'var(--color-text-muted)'
        }}>
          <div>
            © {new Date().getFullYear()} RidePondy Demo. All rights reserved. Built as a production-quality frontend client presentation.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            {onReplayIntro && (
              <button
                onClick={onReplayIntro}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--color-text-secondary)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--color-red)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-secondary)'}
              >
                <span>Replay Video Intro</span>
              </button>
            )}

            <button
              onClick={scrollToTop}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--color-orange)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.8rem',
                fontWeight: 600
              }}
            >
              Back to Top <ArrowUp size={14} />
            </button>
          </div>
        </div>

      </div>

      <style>{`
        .footer-link:hover {
          color: var(--color-orange) !important;
        }
      `}</style>
    </footer>
  );
};
