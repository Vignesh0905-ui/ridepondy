import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { MapPin, Phone, Clock, MessageSquare, ExternalLink, AlertCircle } from 'lucide-react';

interface ContactSectionProps {
  onOpenWhatsApp: () => void;
  onOpenConfigModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenWhatsApp, onOpenConfigModal }) => {
  return (
    <section id="contact" aria-label="Contact and Locations" className="section-pad" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">Visit or Connect</span>
          <h2 className="section-title">Pickup Hubs & Contact</h2>
          <p className="section-subtitle">
            Centrally located in Pondicherry for convenient vehicle handovers near major transit arrival points.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          alignItems: 'stretch'
        }}>
          
          {/* Contact Details Card */}
          <div className="card-dark" style={{ padding: '2.25rem', borderRadius: 'var(--radius-xl)', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '1.35rem', color: 'var(--color-text-primary)', marginBottom: '1.25rem' }}>
              Rental Desk & Contact Details
            </h3>

            {/* Demo Notice Banner */}
            <div style={{
              backgroundColor: 'var(--color-bg-secondary)',
              border: '1px dashed var(--color-border)',
              borderRadius: 'var(--radius-md)',
              padding: '0.85rem',
              fontSize: '0.8rem',
              color: 'var(--color-text-secondary)',
              marginBottom: '1.75rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.65rem'
            }}>
              <AlertCircle size={16} color="var(--color-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>Presentation Preview:</strong> Address and telephone are configurable placeholders until the business owner provisions their verified location.
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem', flexGrow: 1 }}>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-orange-subtle)',
                  color: 'var(--color-orange)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <MapPin size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
                    Main Hub Office
                  </div>
                  <div style={{ fontSize: '0.95rem', color: 'var(--color-text-primary)', fontWeight: 600, marginTop: '2px' }}>
                    {siteConfig.businessAddress}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-orange-subtle)',
                  color: 'var(--color-orange)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Clock size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
                    Operational Hours
                  </div>
                  <div style={{ fontSize: '0.95rem', color: 'var(--color-text-primary)', fontWeight: 600, marginTop: '2px' }}>
                    {siteConfig.operatingHours}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-orange-subtle)',
                  color: 'var(--color-orange)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Phone size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
                    WhatsApp & Enquiries
                  </div>
                  <div style={{ fontSize: '0.95rem', color: 'var(--color-text-primary)', fontWeight: 600, marginTop: '2px' }}>
                    {siteConfig.displayWhatsappNumber}
                  </div>
                </div>
              </div>

            </div>

            {/* Actions */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.85rem',
              marginTop: '2rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--color-border)'
            }}>
              <button
                onClick={onOpenWhatsApp}
                className="btn btn-whatsapp"
                style={{ flex: 1, minWidth: '180px' }}
              >
                <MessageSquare size={16} /> WhatsApp Desk
              </button>

              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark"
                style={{ flex: 1, minWidth: '180px' }}
              >
                <MapPin size={16} /> View Area Map <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Pickup Locations Hubs Card */}
          <div className="card-dark" style={{ padding: '2.25rem', borderRadius: 'var(--radius-xl)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--color-text-primary)' }}>
                Designated Pickup Points
              </h3>
              <span className="badge badge-red" style={{ fontSize: '0.7rem' }}>Pondicherry UT</span>
            </div>

            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', marginBottom: '1.75rem', lineHeight: 1.55 }}>
              Choose from designated pickup points across the town. Advance coordination via WhatsApp ensures your vehicle is ready on arrival.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {siteConfig.pickupLocations.map((loc) => (
                <div
                  key={loc.id}
                  style={{
                    padding: '1rem 1.25rem',
                    backgroundColor: 'var(--color-bg-secondary)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border)'
                  }}
                >
                  <div style={{ fontWeight: 700, color: 'var(--color-text-primary)', fontSize: '0.95rem' }}>
                    {loc.label}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginTop: '3px' }}>
                    {loc.landmark}
                  </div>
                </div>
              ))}
            </div>

            {/* Operator Setup Hint */}
            <div style={{
              marginTop: '1.75rem',
              padding: '0.85rem 1rem',
              backgroundColor: 'var(--color-bg-secondary)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.5rem'
            }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
                Need to customize pickup points or phone numbers?
              </span>
              <button
                onClick={onOpenConfigModal}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--color-orange)',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  textDecoration: 'underline'
                }}
              >
                Config Details
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
