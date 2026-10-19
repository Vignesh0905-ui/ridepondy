import React from 'react';
import { 
  ArrowRight, 
  Bike, 
  Calendar, 
  Clock, 
  MessageCircle, 
  CheckCircle2, 
  Sparkles,
  ChevronRight,
  ShieldAlert
} from 'lucide-react';

interface HowItWorksProps {
  onStartBooking: () => void;
  onExploreBikes?: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onStartBooking, onExploreBikes }) => {
  const handleExplore = () => {
    if (onExploreBikes) {
      onExploreBikes();
    } else {
      const el = document.getElementById('fleet');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="how-it-works" aria-label="How Booking Works" style={{ backgroundColor: 'var(--color-bg-primary)', position: 'relative' }}>
      
      {/* 1. Cinematic Hero Section */}
      <div style={{
        position: 'relative',
        minHeight: '440px',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '6rem',
        paddingBottom: '5rem',
        overflow: 'hidden',
        borderBottom: '1px solid var(--color-border)'
      }}>
        {/* Cinematic background motorcycle image */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url('https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1800&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          filter: 'brightness(0.32)'
        }} />

        {/* Dark Vignette Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, rgba(16, 16, 16, 0.4) 0%, rgba(16, 16, 16, 0.95) 85%)'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
            marginBottom: '1.25rem'
          }}>
            <span className="badge badge-red">
              <Sparkles size={12} /> The Journey
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)',
            color: 'var(--color-text-primary)',
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: '1.25rem',
            letterSpacing: '-0.03em'
          }}>
            Your Ride. <span style={{ color: 'var(--color-orange)' }}>Your Rules.</span>
          </h2>

          <p style={{
            fontSize: 'clamp(1.1rem, 2.2vw, 1.35rem)',
            color: 'var(--color-text-secondary)',
            maxWidth: '620px',
            margin: '0 auto 2.25rem auto',
            lineHeight: 1.6
          }}>
            Three simple steps between you and the open coastal road. No rigid tour schedules, no surprise fees.
          </p>

          <button
            onClick={handleExplore}
            className="btn btn-primary"
            style={{ padding: '0.95rem 2.25rem', fontSize: '1.05rem', boxShadow: '0 8px 30px rgba(227, 38, 54, 0.45)' }}
          >
            Explore Bikes <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* 2. Main Experience: Alternating Editorial Timeline */}
      <div className="section-pad" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
        <div className="container" style={{ position: 'relative' }}>
          
          {/* Vertical subtle connecting timeline line (desktop) */}
          <div className="timeline-connector" style={{
            position: 'absolute',
            top: '40px',
            bottom: '40px',
            left: '50%',
            width: '2px',
            backgroundColor: 'var(--color-border)',
            transform: 'translateX(-50%)',
            zIndex: 0,
            display: 'none'
          }} />

          {/* STEP 01: Choose Your Ride */}
          <div className="journey-step-row" style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'center',
            marginBottom: '6rem',
            position: 'relative',
            zIndex: 1
          }}>
            {/* Content Left */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                marginBottom: '1.25rem'
              }}>
                <span style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.9rem',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  color: 'var(--color-red)',
                  backgroundColor: 'var(--color-red-subtle)',
                  padding: '0.35rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid rgba(227, 38, 54, 0.35)'
                }}>
                  01 / CHOOSE
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Selection
                </span>
              </div>

              <h3 style={{
                fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)',
                color: 'var(--color-text-primary)',
                marginBottom: '1rem',
                lineHeight: 1.2
              }}>
                Choose Your Ride
              </h3>

              <p style={{
                fontSize: '1.05rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.65,
                marginBottom: '1.5rem'
              }}>
                Browse our curated fleet tailored for Pondicherry’s distinct landscapes. Whether you want an effortless Honda Activa for navigating cobblestone cafe lanes in White Town, an iconic vintage Vespa, or a heavy-thump Royal Enfield for cruising the scenic East Coast Road.
              </p>

              <div style={{
                backgroundColor: 'var(--color-card)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.875rem', color: 'var(--color-text-primary)' }}>
                  <CheckCircle2 size={16} color="var(--color-orange)" />
                  <span>Compare transparent 24-hour daily rental rates</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.875rem', color: 'var(--color-text-primary)' }}>
                  <CheckCircle2 size={16} color="var(--color-orange)" />
                  <span>Filter by category: City Scooters, Retro, or Adventure</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.875rem', color: 'var(--color-text-primary)' }}>
                  <CheckCircle2 size={16} color="var(--color-orange)" />
                  <span>Verified specifications (gear, cc, seating, helmet included)</span>
                </div>
              </div>
            </div>

            {/* Editorial Image Right */}
            <div style={{ position: 'relative' }}>
              <div style={{
                backgroundColor: 'var(--color-card)',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-elevated)',
                position: 'relative'
              }}>
                <img
                  src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80"
                  alt="Curated motorcycle fleet"
                  style={{
                    width: '100%',
                    height: '380px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(16, 16, 16, 0.9) 0%, transparent 60%)'
                }} />
                
                {/* Overlay Card Badge */}
                <div style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '1.5rem',
                  right: '1.5rem',
                  backgroundColor: 'rgba(28, 28, 28, 0.95)',
                  backdropFilter: 'blur(8px)',
                  padding: '1rem 1.25rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(227, 38, 54, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF' }}>Honda Activa 6G • Vespa • Classic 350</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--color-orange)' }}>Daily rates from ₹450 / 24 hrs</div>
                  </div>
                  <Bike size={24} color="var(--color-orange)" />
                </div>
              </div>
            </div>
          </div>

          {/* STEP 02: Pick Your Dates */}
          <div className="journey-step-row" style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'center',
            marginBottom: '6rem',
            position: 'relative',
            zIndex: 1
          }}>
            {/* Visual Calendar Mockup Left (Reversed order on desktop) */}
            <div className="journey-order-2-desktop" style={{ position: 'relative' }}>
              <div style={{
                backgroundColor: 'var(--color-card)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--color-border)',
                padding: '2rem',
                boxShadow: 'var(--shadow-elevated)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid var(--color-border)',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <Calendar size={20} color="var(--color-orange)" />
                    <span style={{ fontWeight: 700, color: 'var(--color-text-primary)', fontSize: '1rem' }}>
                      Interactive Trip Scheduler
                    </span>
                  </div>
                  <span className="badge badge-dark" style={{ fontSize: '0.72rem' }}>24h Ceil Rule</span>
                </div>

                {/* Calendar Schedule Mockup Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{
                    backgroundColor: 'var(--color-bg-secondary)',
                    padding: '1rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border)'
                  }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>Pickup</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF', marginTop: '4px' }}>Tomorrow</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-orange)', display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '2px' }}>
                      <Clock size={13} /> 09:00 AM
                    </div>
                  </div>

                  <div style={{
                    backgroundColor: 'var(--color-bg-secondary)',
                    padding: '1rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border)'
                  }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>Return</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF', marginTop: '4px' }}>Day After</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-orange)', display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '2px' }}>
                      <Clock size={13} /> 09:00 AM
                    </div>
                  </div>
                </div>

                {/* Calculation Mockup Bar */}
                <div style={{
                  backgroundColor: 'rgba(227, 38, 54, 0.08)',
                  border: '1px dashed rgba(227, 38, 54, 0.35)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1rem 1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.25rem'
                }}>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--color-text-secondary)' }}>Calculated Duration</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF' }}>24 hrs (1 Day Unit)</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.78rem', color: 'var(--color-text-secondary)' }}>Estimated Total</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-orange)' }}>₹450</div>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem',
                  fontSize: '0.78rem',
                  color: 'var(--color-text-muted)',
                  lineHeight: 1.4
                }}>
                  <ShieldAlert size={14} color="var(--color-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Enquiry mode: Selecting dates provides an estimated quote. Confirmed vehicle availability is verified directly with the operator.</span>
                </div>
              </div>
            </div>

            {/* Content Right */}
            <div className="journey-order-1-desktop" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                marginBottom: '1.25rem'
              }}>
                <span style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.9rem',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  color: 'var(--color-red)',
                  backgroundColor: 'var(--color-red-subtle)',
                  padding: '0.35rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid rgba(227, 38, 54, 0.35)'
                }}>
                  02 / SCHEDULE
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Dates & Duration
                </span>
              </div>

              <h3 style={{
                fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)',
                color: 'var(--color-text-primary)',
                marginBottom: '1rem',
                lineHeight: 1.2
              }}>
                Pick Your Dates
              </h3>

              <p style={{
                fontSize: '1.05rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.65,
                marginBottom: '1.5rem'
              }}>
                Enter your pickup and return dates and times at your designated hub (White Town, Railway Station, or Bus Stand). Our engine calculates the rental duration on a 24-hour cycle and generates an accurate cost estimate.
              </p>

              <div style={{
                backgroundColor: 'var(--color-card)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.875rem', color: 'var(--color-text-primary)' }}>
                  <CheckCircle2 size={16} color="var(--color-orange)" />
                  <span>Fair 24-hour blocks: 24h = 1 day; partial days round up</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.875rem', color: 'var(--color-text-primary)' }}>
                  <CheckCircle2 size={16} color="var(--color-orange)" />
                  <span>Instant validation preventing invalid or past date errors</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.875rem', color: 'var(--color-text-primary)' }}>
                  <CheckCircle2 size={16} color="var(--color-orange)" />
                  <span>Clear distinction between estimated rate and refundable deposit</span>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 03: Confirm on WhatsApp */}
          <div className="journey-step-row" style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'center',
            marginBottom: '4rem',
            position: 'relative',
            zIndex: 1
          }}>
            {/* Content Left */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                marginBottom: '1.25rem'
              }}>
                <span style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.9rem',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  color: 'var(--color-red)',
                  backgroundColor: 'var(--color-red-subtle)',
                  padding: '0.35rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid rgba(227, 38, 54, 0.35)'
                }}>
                  03 / CONNECT
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Handshake
                </span>
              </div>

              <h3 style={{
                fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)',
                color: 'var(--color-text-primary)',
                marginBottom: '1rem',
                lineHeight: 1.2
              }}>
                Confirm on WhatsApp
              </h3>

              <p style={{
                fontSize: '1.05rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.65,
                marginBottom: '1.5rem'
              }}>
                With a single click, your enquiry opens in WhatsApp with your chosen ride, itinerary, and estimated amount neatly formatted. The rental operator immediately confirms physical availability, deposit requirements, and handover location.
              </p>

              <div style={{
                backgroundColor: 'var(--color-card)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.25rem',
                marginBottom: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.875rem', color: 'var(--color-text-primary)' }}>
                  <CheckCircle2 size={16} color="var(--color-orange)" />
                  <span>No upfront payment or card details required on the website</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.875rem', color: 'var(--color-orange)' }}>
                  <CheckCircle2 size={16} color="var(--color-orange)" />
                  <span>Chat directly with real local operators who know Pondicherry</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.875rem', color: 'var(--color-text-primary)' }}>
                  <CheckCircle2 size={16} color="var(--color-orange)" />
                  <span>Confirm custom pickup delivery right outside the railway station</span>
                </div>
              </div>

              <div>
                <button
                  onClick={onStartBooking}
                  className="btn btn-primary"
                  style={{ padding: '0.9rem 2rem', fontSize: '0.975rem' }}
                >
                  Start Your Booking <ChevronRight size={18} />
                </button>
              </div>
            </div>

            {/* Premium Phone Conversation Mockup Right */}
            <div style={{ position: 'relative' }}>
              <div style={{
                backgroundColor: '#161616',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-elevated)',
                overflow: 'hidden',
                maxWidth: '440px',
                margin: '0 auto'
              }}>
                {/* Phone Header */}
                <div style={{
                  backgroundColor: '#0F2B20',
                  padding: '1rem 1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
                }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: '#25D366',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF'
                  }}>
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF' }}>RidePondy Desk</div>
                    <div style={{ fontSize: '0.75rem', color: '#86EFAC' }}>Online • Fast Response</div>
                  </div>
                </div>

                {/* Chat Area */}
                <div style={{
                  padding: '1.5rem',
                  backgroundColor: '#111A15',
                  backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
                  backgroundSize: '16px 16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}>
                  {/* Sent Message Bubble */}
                  <div style={{
                    alignSelf: 'flex-end',
                    backgroundColor: '#005C4B',
                    color: '#FFFFFF',
                    borderRadius: '12px 12px 2px 12px',
                    padding: '1rem 1.15rem',
                    maxWidth: '92%',
                    fontSize: '0.85rem',
                    lineHeight: 1.5,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
                  }}>
                    <div style={{ fontWeight: 700, marginBottom: '0.35rem', color: '#A7F3D0' }}>
                      Hi RidePondy! I'd like to enquire about a rental:
                    </div>
                    <div><strong>Vehicle:</strong> Royal Enfield Classic 350</div>
                    <div><strong>Pickup:</strong> White Town Main Hub</div>
                    <div><strong>Duration:</strong> 2 Days (48 hrs)</div>
                    <div><strong>Estimated Total:</strong> ₹1,700</div>
                    <div style={{ fontSize: '0.72rem', color: '#D1FAE5', marginTop: '0.5rem', textAlign: 'right' }}>
                      10:42 AM ✓✓
                    </div>
                  </div>

                  {/* Operator Reply Bubble */}
                  <div style={{
                    alignSelf: 'flex-start',
                    backgroundColor: '#202C33',
                    color: '#E9EDEF',
                    borderRadius: '12px 12px 12px 2px',
                    padding: '0.85rem 1rem',
                    maxWidth: '88%',
                    fontSize: '0.85rem',
                    lineHeight: 1.45,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
                  }}>
                    <div>Hi there! Classic 350 is available for those dates. Helmets and documents checklist sent. Looking forward to hosting you in Pondy! 🏍️</div>
                    <div style={{ fontSize: '0.72rem', color: '#8696A0', marginTop: '0.4rem', textAlign: 'right' }}>
                      10:44 AM
                    </div>
                  </div>
                </div>

                {/* Footer Bar inside Phone */}
                <div style={{
                  padding: '0.85rem 1.25rem',
                  backgroundColor: '#202C33',
                  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.78rem',
                  color: '#8696A0'
                }}>
                  <span>Direct operator connection</span>
                  <span style={{ color: '#25D366', fontWeight: 600 }}>WhatsApp Ready</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Compact Final CTA Section */}
          <div style={{
            marginTop: '5rem',
            textAlign: 'center',
            backgroundColor: 'var(--color-card)',
            borderRadius: 'var(--radius-xl)',
            padding: '3rem 2rem',
            border: '1px solid var(--color-border)',
            maxWidth: '820px',
            marginLeft: 'auto',
            marginRight: 'auto',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Subtle glow accent */}
            <div style={{
              position: 'absolute',
              top: '-60px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '300px',
              height: '150px',
              background: 'radial-gradient(circle, rgba(227, 38, 54, 0.25) 0%, transparent 70%)',
              pointerEvents: 'none'
            }} />

            <span className="badge badge-red" style={{ marginBottom: '1rem' }}>
              Pondicherry Awaits
            </span>

            <h3 style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 2.3rem)',
              color: 'var(--color-text-primary)',
              marginBottom: '0.75rem',
              fontWeight: 800
            }}>
              Ready to hit the road?
            </h3>

            <p style={{
              fontSize: '1rem',
              color: 'var(--color-text-secondary)',
              maxWidth: '520px',
              margin: '0 auto 1.85rem auto',
              lineHeight: 1.6
            }}>
              Select your pickup dates or explore our complete lineup of scooters and motorcycles to generate your WhatsApp enquiry.
            </p>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <button
                onClick={onStartBooking}
                className="btn btn-primary"
                style={{ padding: '0.9rem 2rem' }}
              >
                Book Your Ride <ArrowRight size={18} />
              </button>

              <button
                onClick={handleExplore}
                className="btn btn-secondary"
                style={{ padding: '0.9rem 2rem' }}
              >
                Browse Fleet
              </button>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .timeline-connector {
            display: block !important;
          }
          .journey-step-row {
            grid-template-columns: 1fr 1fr !important;
          }
          .journey-order-1-desktop {
            order: 2 !important;
          }
          .journey-order-2-desktop {
            order: 1 !important;
          }
        }
      `}</style>
    </section>
  );
};
