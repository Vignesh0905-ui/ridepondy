import React, { useEffect, useState, useCallback, useRef } from 'react';

interface IntroLoaderProps {
  onComplete: () => void;
}

export const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete }) => {
  const [percent, setPercent] = useState<number>(1);
  const [isExiting, setIsExiting] = useState<boolean>(false);
  const completedRef = useRef<boolean>(false);

  // Lock body scroll while loader is active
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const finishLoader = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;
    try {
      sessionStorage.setItem('ridepondy_intro_seen', 'true');
    } catch {
      // Safe storage
    }
    setPercent(100);

    // Smooth exit transition into homepage
    setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        onComplete();
      }, 400); // 400ms clean fade
    }, 250);
  }, [onComplete]);

  // Reduced motion preference: immediately finish
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      finishLoader();
    }
  }, [finishLoader]);

  // Keyboard shortcut: Escape or Space to immediately skip
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ') {
        finishLoader();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [finishLoader]);

  // Natural page readiness + smooth progress advancement
  useEffect(() => {
    const startTime = performance.now();
    const TARGET_DURATION = 1800; // Fast, lightweight ~1.8s intro so the user is never kept waiting

    let animId: number;
    const updateProgress = (currentTime: number) => {
      if (completedRef.current) return;
      const elapsed = currentTime - startTime;
      const progressRatio = Math.min(1, elapsed / TARGET_DURATION);

      // Smooth easeOutQuad progress
      const eased = 1 - (1 - progressRatio) * (1 - progressRatio);
      const currentPercent = Math.min(99, Math.max(1, Math.floor(eased * 99)));
      setPercent(currentPercent);

      if (progressRatio < 1) {
        animId = requestAnimationFrame(updateProgress);
      } else {
        // Ready! If document is already loaded or timeout reached, complete seamlessly
        finishLoader();
      }
    };

    animId = requestAnimationFrame(updateProgress);

    // Fallback maximum safety timer
    const safetyTimer = setTimeout(() => {
      finishLoader();
    }, 3000);

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(safetyTimer);
    };
  }, [finishLoader]);

  const formattedPercent = percent.toString().padStart(2, '0') + '%';

  return (
    <div
      id="ridepondy-travel-loader"
      role="region"
      aria-label="RidePondy Loading Experience"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        minHeight: '100dvh',
        zIndex: 99999,
        backgroundColor: '#090909',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        opacity: isExiting ? 0 : 1,
        transition: 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        pointerEvents: isExiting ? 'none' : 'auto',
        overflow: 'hidden',
        userSelect: 'none'
      }}
    >
      {/* Background ambient lighting */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(227, 38, 54, 0.08) 0%, rgba(9, 9, 9, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      {/* Top Header: Brand Identity & Skip Button */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.75rem 2rem',
          maxWidth: '1200px'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
            letterSpacing: '0.18em',
            fontWeight: 800,
            fontSize: '0.95rem',
            color: '#F5F5F5'
          }}
        >
          <span>RIDE</span>
          <span style={{ color: '#E32636' }}>PONDY</span>
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: '#E32636',
              boxShadow: '0 0 10px #E32636'
            }}
          />
        </div>

        <button
          onClick={finishLoader}
          aria-label="Skip to website"
          style={{
            background: 'rgba(28, 28, 28, 0.85)',
            border: '1px solid #303030',
            borderRadius: '100px',
            color: '#A3A3A3',
            padding: '0.4rem 1rem',
            fontSize: '0.78rem',
            fontWeight: 600,
            letterSpacing: '0.05em',
            cursor: 'pointer',
            backdropFilter: 'blur(8px)',
            transition: 'all 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#F5F5F5';
            e.currentTarget.style.borderColor = '#E32636';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#A3A3A3';
            e.currentTarget.style.borderColor = '#303030';
          }}
        >
          <span>Skip</span>
          <span style={{ fontSize: '0.68rem', opacity: 0.6 }}>[Esc]</span>
        </button>
      </div>

      {/* Centerpiece: Animated Travelling Motorcycle and Moving Road */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '560px',
          padding: '0 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Stage Wrapper */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '160px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
            overflow: 'hidden'
          }}
        >
          {/* Subtle passing horizon speed lines */}
          <div
            style={{
              position: 'absolute',
              top: '25px',
              left: 0,
              right: 0,
              height: '1px',
              background: 'linear-gradient(90deg, transparent 0%, rgba(227, 38, 54, 0.25) 30%, transparent 60%)',
              animation: 'horizonStreak 1.2s linear infinite'
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '45px',
              left: 0,
              right: 0,
              height: '1px',
              background: 'linear-gradient(90deg, transparent 20%, rgba(255, 255, 255, 0.15) 50%, transparent 80%)',
              animation: 'horizonStreak 0.8s linear infinite reverse'
            }}
          />

          {/* Animated Motorcycle Vehicle */}
          <div
            style={{
              position: 'relative',
              width: '190px',
              height: '110px',
              marginBottom: '-3px',
              zIndex: 3,
              animation: 'bikeChassisBounce 0.45s ease-in-out infinite alternate',
              transformOrigin: 'bottom center'
            }}
          >
            {/* Soft ground shadow */}
            <div
              style={{
                position: 'absolute',
                bottom: '2px',
                left: '15px',
                width: '160px',
                height: '8px',
                background: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0) 75%)',
                borderRadius: '50%',
                zIndex: 1
              }}
            />

            {/* Clean, Vector Motorcycle SVG */}
            <svg
              viewBox="0 0 200 120"
              width="100%"
              height="100%"
              style={{ display: 'block', overflow: 'visible', zIndex: 2 }}
            >
              <defs>
                {/* Red bodywork gradient */}
                <linearGradient id="rpRedGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#A90E20" />
                  <stop offset="50%" stopColor="#E32636" />
                  <stop offset="100%" stopColor="#FF4A5A" />
                </linearGradient>

                {/* Metallic frame gradient */}
                <linearGradient id="rpMetalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#4A4A4A" />
                  <stop offset="100%" stopColor="#1A1A1A" />
                </linearGradient>

                {/* Headlight beam */}
                <linearGradient id="rpHeadlightBeam" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(255, 255, 255, 0.65)" />
                  <stop offset="40%" stopColor="rgba(255, 255, 255, 0.18)" />
                  <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
                </linearGradient>
              </defs>

              {/* Headlight Beam Projecting Forward */}
              <polygon
                points="175,54 220,44 220,72 175,60"
                fill="url(#rpHeadlightBeam)"
                opacity="0.8"
              />

              {/* Rear Wheel (Rotating Spoked Alloy) */}
              <g
                style={{
                  transformOrigin: '42px 90px',
                  animation: 'wheelSpin 0.45s linear infinite'
                }}
              >
                {/* Tire */}
                <circle cx="42" cy="90" r="21" fill="none" stroke="#181818" strokeWidth="5.5" />
                {/* Red Rim Accent */}
                <circle cx="42" cy="90" r="17.5" fill="none" stroke="#E32636" strokeWidth="1.2" />
                {/* Hub */}
                <circle cx="42" cy="90" r="5" fill="#444" />
                {/* Spokes */}
                <line x1="42" y1="72" x2="42" y2="108" stroke="#888" strokeWidth="1.8" />
                <line x1="26" y1="81" x2="58" y2="99" stroke="#888" strokeWidth="1.8" />
                <line x1="26" y1="99" x2="58" y2="81" stroke="#888" strokeWidth="1.8" />
              </g>

              {/* Front Wheel (Rotating Spoked Alloy) */}
              <g
                style={{
                  transformOrigin: '158px 90px',
                  animation: 'wheelSpin 0.45s linear infinite'
                }}
              >
                {/* Tire */}
                <circle cx="158" cy="90" r="21" fill="none" stroke="#181818" strokeWidth="5.5" />
                {/* Red Rim Accent */}
                <circle cx="158" cy="90" r="17.5" fill="none" stroke="#E32636" strokeWidth="1.2" />
                {/* Hub */}
                <circle cx="158" cy="90" r="5" fill="#444" />
                {/* Spokes */}
                <line x1="158" y1="72" x2="158" y2="108" stroke="#888" strokeWidth="1.8" />
                <line x1="142" y1="81" x2="174" y2="99" stroke="#888" strokeWidth="1.8" />
                <line x1="142" y1="99" x2="174" y2="81" stroke="#888" strokeWidth="1.8" />
              </g>

              {/* Rear Swingarm and Chain Cover */}
              <path
                d="M42,90 L88,84 L95,74 L78,74 Z"
                fill="url(#rpMetalGrad)"
                stroke="#2B2B2B"
                strokeWidth="1"
              />

              {/* Exhaust Pipe & Chrome Silencer */}
              <path
                d="M84,80 Q105,82 120,78 L124,76 L86,76 Z"
                fill="#3A3A3A"
              />
              <path
                d="M52,86 L98,82 L96,78 L50,83 Z"
                fill="#555"
                stroke="#222"
                strokeWidth="0.8"
              />

              {/* Engine Block & Crankcase */}
              <path
                d="M78,68 L114,68 L118,84 L82,86 Z"
                fill="#1C1C1C"
                stroke="#333"
                strokeWidth="1.5"
              />
              <circle cx="95" cy="78" r="7" fill="#2E2E2E" stroke="#E32636" strokeWidth="1" />

              {/* Main Trellis Frame */}
              <path
                d="M72,64 L102,64 L138,56 L124,78 L90,78 Z"
                fill="none"
                stroke="#E32636"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Front Fork Suspension (Inverted) */}
              <line
                x1="158"
                y1="90"
                x2="140"
                y2="46"
                stroke="#888"
                strokeWidth="3.2"
                strokeLinecap="round"
              />
              <line
                x1="156"
                y1="82"
                x2="142"
                y2="52"
                stroke="#E32636"
                strokeWidth="2"
              />

              {/* Front Mudguard / Fender */}
              <path
                d="M142,75 Q158,66 174,77"
                fill="none"
                stroke="#E32636"
                strokeWidth="3.5"
                strokeLinecap="round"
              />

              {/* Aerodynamic Fuel Tank & Seat Cowl (Crimson Red) */}
              <path
                d="M62,60 Q76,52 92,54 Q106,44 128,45 Q136,46 138,56 L108,62 L74,62 Z"
                fill="url(#rpRedGrad)"
              />

              {/* Rider Seat (Premium Leather Matte Black) */}
              <path
                d="M66,58 Q82,57 95,61 L93,64 L64,62 Z"
                fill="#121212"
                stroke="#2B2B2B"
                strokeWidth="0.8"
              />

              {/* Tail Cowl & Red Taillight */}
              <polygon points="50,56 68,56 64,62 48,60" fill="url(#rpRedGrad)" />
              <circle cx="48" cy="58" r="2.2" fill="#FF1E27" />

              {/* Handlebars & Front Brake Lever */}
              <line x1="135" y1="46" x2="142" y2="40" stroke="#888" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="140" y1="41" x2="146" y2="42" stroke="#555" strokeWidth="2" strokeLinecap="round" />

              {/* LED Headlight Shell */}
              <path d="M140,48 L148,50 L145,58 L138,54 Z" fill="#222" />
              <circle cx="147" cy="53" r="2.5" fill="#FFF" />

              {/* Rider: Torso & Aerodynamic Touring Posture */}
              <path
                d="M74,58 C70,44 80,32 94,30 C106,28 116,36 122,46 L112,48 C104,40 96,38 88,42 C82,46 80,52 82,58 Z"
                fill="#161616"
              />
              {/* Rider Arm Reaching Handlebars */}
              <path
                d="M96,38 Q118,44 138,42"
                fill="none"
                stroke="#1F1F1F"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
              <path
                d="M96,38 Q118,44 138,42"
                fill="none"
                stroke="#E32636"
                strokeWidth="1.2"
                strokeLinecap="round"
              />

              {/* Rider Helmet with Dark Red Accent & Tinted Visor */}
              <circle cx="98" cy="22" r="11" fill="#1C1C1C" />
              <path
                d="M92,16 Q106,14 110,22 Q106,27 96,27 Z"
                fill="#111"
                stroke="#E32636"
                strokeWidth="1.2"
              />
              {/* Visor reflection shine */}
              <path
                d="M102,18 L108,22"
                stroke="rgba(255, 255, 255, 0.7)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Road Surface Line */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '3px',
              backgroundColor: '#303030',
              zIndex: 2,
              borderRadius: '2px'
            }}
          />

          {/* Animated Road Markings (Travelling Effect) */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '14px',
              overflow: 'hidden',
              marginTop: '4px',
              zIndex: 2
            }}
          >
            <div
              style={{
                width: '200%',
                height: '3px',
                backgroundImage: 'repeating-linear-gradient(90deg, #E32636 0px, #E32636 28px, transparent 28px, transparent 56px)',
                animation: 'roadStripes 0.45s linear infinite'
              }}
            />
          </div>
        </div>

        {/* Brand Travel Caption */}
        <div
          style={{
            marginTop: '1.25rem',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.82rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            color: '#F5F5F5',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <span>EXPLORE PONDICHERRY</span>
          <span style={{ color: '#E32636' }}>•</span>
          <span style={{ color: '#E32636' }}>{formattedPercent}</span>
        </div>

        {/* Elegant Red Progress Bar Beneath Road */}
        <div
          style={{
            marginTop: '0.75rem',
            width: '100%',
            maxWidth: '280px',
            height: '3px',
            backgroundColor: '#1C1C1C',
            borderRadius: '999px',
            overflow: 'hidden',
            border: '1px solid #2B2B2B'
          }}
        >
          <div
            style={{
              width: `${percent}%`,
              height: '100%',
              backgroundColor: '#E32636',
              boxShadow: '0 0 10px #E32636, 0 0 4px #A90E20',
              borderRadius: '999px',
              transition: 'width 0.08s linear'
            }}
          />
        </div>

        {/* Subtle Travel Tagline */}
        <div
          style={{
            marginTop: '0.65rem',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.72rem',
            letterSpacing: '0.08em',
            color: '#707070',
            fontWeight: 500
          }}
        >
          Premium Two-Wheeler Rentals
        </div>
      </div>

      {/* Bottom spacer to keep centered */}
      <div style={{ height: '5rem', width: '100%' }} />

      {/* 60 FPS Micro-Animation Keyframes */}
      <style>{`
        @keyframes wheelSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes roadStripes {
          0% { transform: translateX(0); }
          100% { transform: translateX(-56px); }
        }

        @keyframes bikeChassisBounce {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-1.5px) rotate(-0.4deg); }
          100% { transform: translateY(0.5px) rotate(0.2deg); }
        }

        @keyframes horizonStreak {
          0% { transform: translateX(100%); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateX(-100%); opacity: 0; }
        }
      `}</style>
    </div>
  );
};
