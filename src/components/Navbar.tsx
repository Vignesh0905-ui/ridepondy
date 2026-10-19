import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Bike } from 'lucide-react';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Notice: 'Policies' removed according to user prompt requirement
  const navLinks = [
    { label: "Fleet", href: "#fleet" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Explore Pondy", href: "#explore" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" }
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: scrolled ? 'rgba(16, 16, 16, 0.94)' : 'rgba(16, 16, 16, 0.88)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--color-border-subtle)',
      transition: 'background-color 200ms ease, box-shadow 200ms ease, border-color 200ms ease',
      boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.7)' : 'none'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '4.75rem'
      }}>
        {/* Brand Wordmark & Icon */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            backgroundColor: 'var(--color-card)',
            border: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-red)',
            boxShadow: '0 0 16px rgba(227, 38, 54, 0.25)'
          }}>
            <Bike size={22} strokeWidth={2.4} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.45rem',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: 'var(--color-text-primary)',
              lineHeight: 1
            }}>
              Ride<span style={{ color: 'var(--color-orange)' }}>Pondy</span>
            </span>
            <span style={{
              fontSize: '0.65rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-text-muted)',
              fontWeight: 700,
              marginTop: '3px'
            }}>
              Coastal Mobility
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation" style={{ display: 'none' }} className="desktop-nav">
          <ul style={{
            display: 'flex',
            alignItems: 'center',
            listStyle: 'none',
            gap: '2.25rem'
          }}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.925rem',
                    fontWeight: 600,
                    color: 'var(--color-text-secondary)',
                    padding: '0.5rem 0.25rem',
                    position: 'relative'
                  }}
                  className="nav-link-hover"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Primary CTA */}
        <div style={{ display: 'none', alignItems: 'center', gap: '1rem' }} className="desktop-actions">
          <button
            onClick={onBookClick}
            className="btn btn-primary"
            style={{ padding: '0.7rem 1.45rem', fontSize: '0.9rem' }}
          >
            Book a Ride <ArrowRight size={16} />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close main menu" : "Open main menu"}
          className="mobile-toggle"
          style={{
            background: 'var(--color-card)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            padding: '0.55rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-text-primary)'
          }}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          style={{
            backgroundColor: 'var(--color-bg-secondary)',
            borderBottom: '2px solid var(--color-border)',
            padding: '1.5rem 1.75rem 2.25rem',
            boxShadow: 'var(--shadow-modal)',
            animation: 'fadeIn 180ms ease'
          }}
        >
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  style={{
                    display: 'block',
                    fontSize: '1.15rem',
                    fontWeight: 600,
                    color: 'var(--color-text-primary)',
                    fontFamily: 'var(--font-heading)'
                  }}
                  className="nav-link-hover"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li style={{ paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
              <button
                onClick={() => {
                  handleLinkClick();
                  onBookClick();
                }}
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Book a Ride <ArrowRight size={18} />
              </button>
            </li>
          </ul>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: block !important; }
          .desktop-actions { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        .nav-link-hover:hover {
          color: var(--color-orange) !important;
        }
      `}</style>
    </header>
  );
};
