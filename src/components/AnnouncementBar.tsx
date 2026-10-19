import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { Sparkles, Info } from 'lucide-react';

interface AnnouncementBarProps {
  onOpenConfigModal: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onOpenConfigModal }) => {
  return (
    <aside aria-label="Announcement" style={{
      backgroundColor: '#090909',
      color: 'var(--color-text-secondary)',
      fontSize: '0.825rem',
      padding: '0.55rem 1rem',
      borderBottom: '1px solid var(--color-border-subtle)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.5rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.3rem',
            backgroundColor: 'var(--color-red-subtle)',
            color: 'var(--color-red)',
            border: '1px solid rgba(227, 38, 54, 0.35)',
            padding: '0.15rem 0.55rem',
            borderRadius: 'var(--radius-full)',
            fontWeight: 700,
            fontSize: '0.7rem',
            letterSpacing: '0.06em',
            textTransform: 'uppercase'
          }}>
            <Sparkles size={11} /> Client Demo
          </span>
          <span style={{ color: 'var(--color-text-primary)' }}>
            {siteConfig.announcementText}
          </span>
        </div>

        <button
          onClick={onOpenConfigModal}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--color-red)',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            fontSize: '0.775rem',
            textDecoration: 'underline',
            textUnderlineOffset: '3px',
            padding: 0,
            fontWeight: 500
          }}
          aria-label="View operator configuration instructions"
        >
          <Info size={13} />
          Operator Config Guide
        </button>
      </div>
    </aside>
  );
};
