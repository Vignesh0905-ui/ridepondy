import React, { useEffect } from 'react';
import { X, FileCode, Phone, MapPin, IndianRupee, Layers } from 'lucide-react';

interface OperatorConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OperatorConfigModal: React.FC<OperatorConfigModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="config-modal-title"
    >
      <div className="modal-content" style={{ maxWidth: '640px' }}>
        
        {/* Header */}
        <div style={{
          padding: '1.35rem 1.75rem',
          borderBottom: '1px solid var(--color-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#161616',
          color: '#FFFFFF',
          borderRadius: 'var(--radius-xl) var(--radius-xl) 0 0'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <FileCode size={20} color="var(--color-orange)" />
            <h3 id="config-modal-title" style={{ fontSize: '1.2rem', color: '#FFFFFF' }}>
              Client Production Configuration Guide
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Close configuration guide"
            style={{
              background: 'var(--color-card)',
              border: '1px solid var(--color-border)',
              borderRadius: '50%',
              width: '34px',
              height: '34px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--color-text-primary)'
            }}
          >
            <X size={18} />
          </button>
        </div>

        <div style={{ padding: '1.85rem', maxHeight: '75vh', overflowY: 'auto' }}>
          
          <div style={{
            backgroundColor: 'var(--color-red-subtle)',
            border: '1px solid rgba(227, 38, 54, 0.35)',
            borderRadius: 'var(--radius-md)',
            padding: '1.15rem',
            marginBottom: '1.75rem',
            fontSize: '0.875rem',
            color: 'var(--color-text-primary)',
            lineHeight: 1.55
          }}>
            <strong>Frontend Presentation Scope:</strong> This website is fully functional for customer enquiries. Before going live with real customers, replace sample placeholder data in <code>src/data/siteConfig.ts</code> and <code>src/data/fleet.ts</code> with the verified details below.
          </div>

          <h4 style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
            Production Handover Checklist
          </h4>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.75rem' }}>
            
            <div style={{
              display: 'flex',
              gap: '0.85rem',
              padding: '1rem',
              backgroundColor: 'var(--color-card)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)'
            }}>
              <Phone size={18} color="var(--color-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div style={{ fontSize: '0.85rem' }}>
                <div style={{ fontWeight: 700, color: '#FFFFFF' }}>1. Verified WhatsApp Business Phone</div>
                <div style={{ color: 'var(--color-text-secondary)', marginTop: '3px' }}>
                  Update <code>whatsappNumber</code> in <code>src/data/siteConfig.ts</code> with international digits (e.g. <code>9198XXXXXXXX</code>) and set <code>isWhatsappPlaceholder: false</code>.
                </div>
              </div>
            </div>

            <div style={{
              display: 'flex',
              gap: '0.85rem',
              padding: '1rem',
              backgroundColor: 'var(--color-card)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)'
            }}>
              <IndianRupee size={18} color="var(--color-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div style={{ fontSize: '0.85rem' }}>
                <div style={{ fontWeight: 700, color: '#FFFFFF' }}>2. Real Fleet & Daily Rates</div>
                <div style={{ color: 'var(--color-text-secondary)', marginTop: '3px' }}>
                  Verify vehicle models, seasonal tariff rates, and actual security deposit amounts in <code>src/data/fleet.ts</code>.
                </div>
              </div>
            </div>

            <div style={{
              display: 'flex',
              gap: '0.85rem',
              padding: '1rem',
              backgroundColor: 'var(--color-card)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)'
            }}>
              <MapPin size={18} color="var(--color-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div style={{ fontSize: '0.85rem' }}>
                <div style={{ fontWeight: 700, color: '#FFFFFF' }}>3. Official Office Address & Google Map Link</div>
                <div style={{ color: 'var(--color-text-secondary)', marginTop: '3px' }}>
                  Replace the demo location with the exact shop/garage address and verified Google Maps place URL in <code>siteConfig.ts</code>.
                </div>
              </div>
            </div>

            <div style={{
              display: 'flex',
              gap: '0.85rem',
              padding: '1rem',
              backgroundColor: 'var(--color-card)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)'
            }}>
              <Layers size={18} color="var(--color-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div style={{ fontSize: '0.85rem' }}>
                <div style={{ fontWeight: 700, color: '#FFFFFF' }}>4. Rental & Verification Rules</div>
                <div style={{ color: 'var(--color-text-secondary)', marginTop: '3px' }}>
                  Confirm minimum age requirements, acceptable international driving permits, and deposit refund timing directly with arriving renters.
                </div>
              </div>
            </div>

          </div>

          <div style={{ textAlign: 'right' }}>
            <button
              onClick={onClose}
              className="btn btn-primary"
              style={{ padding: '0.75rem 1.6rem', fontSize: '0.875rem' }}
            >
              Understood
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
