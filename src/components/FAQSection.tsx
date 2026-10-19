import React, { useState } from 'react';
import { faqItems } from '../data/content';
import { ChevronDown } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'faq-1': true
  });

  const toggleFAQ = (id: string) => {
    setOpenIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="faqs" aria-label="Frequently Asked Questions" className="section-pad" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      <div className="container" style={{ maxWidth: '840px' }}>
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">Got Questions?</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Everything you need to know about two-wheeler rentals, rates, and the WhatsApp enquiry workflow.
          </p>
        </div>

        {/* Accessible Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.95rem' }}>
          {faqItems.map((item) => {
            const isOpen = !!openIds[item.id];
            const contentId = `faq-answer-${item.id}`;
            const headerId = `faq-header-${item.id}`;

            return (
              <div
                key={item.id}
                style={{
                  backgroundColor: 'var(--color-card)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border)',
                  overflow: 'hidden',
                  transition: 'border-color var(--transition-fast)'
                }}
              >
                <button
                  id={headerId}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleFAQ(item.id)}
                  style={{
                    width: '100%',
                    padding: '1.35rem 1.6rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    color: 'var(--color-text-primary)',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.05rem',
                    fontWeight: 600
                  }}
                >
                  <span>{item.question}</span>
                  <div style={{
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 200ms ease',
                    flexShrink: 0,
                    color: 'var(--color-orange)'
                  }}>
                    <ChevronDown size={20} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    style={{
                      padding: '0 1.6rem 1.35rem 1.6rem',
                      color: 'var(--color-text-secondary)',
                      fontSize: '0.925rem',
                      lineHeight: 1.65,
                      animation: 'fadeIn 180ms ease'
                    }}
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
