import React, { useState, useEffect } from 'react';

const TICKER_ITEMS = [
  'Indian Patent No. 592382 Granted',
  'Pioneered by IIT Dhanbad Engineers',
  'ATEX Zone-0 Certified Non-Man Entry',
  '1,000,000 KL Sludge Processed',
  '90%–95% Oil Recovery Yield',
  'Zero Confined Space Incidents'
];

export default function Hero({ onOpenVideo }) {
  const [tickerIndex, setTickerIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % TICKER_ITEMS.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section" id="hero">
      <div className="hero-bg-wrapper">
        <img 
          src="/assets/arham-hero-banner.png" 
          alt="Arham Oil Hazardous Space Robotics" 
          className="hero-bg-img"
          loading="eager"
          decoding="async"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-left-content-wrapper">
        {/* Eyebrow / Kicker */}
        <div className="hero-kicker-line">
          <span className="kicker-text">ENGINEERING A SAFER TOMORROW</span>
          <span className="kicker-rule"></span>
        </div>

        {/* Main Title - Left Aligned, Bold Typography with Accent Span */}
        <h1 className="hero-left-title">
          Leading<br />
          <span className="title-accent-steel">Hazardous Space</span><br />
          Robotics
        </h1>

        {/* Subtitle */}
        <p className="hero-left-subtitle">
          From India To The World
        </p>

        {/* Watch Video Call To Action */}
        <div 
          className="hero-watch-video-cta" 
          onClick={onOpenVideo} 
          role="button" 
          tabIndex={0} 
          title="Watch Robot In Action"
        >
          <div className="cta-play-disc">
            <svg className="cta-play-triangle" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="9.5 7.5 16.5 12 9.5 16.5 9.5 7.5" />
            </svg>
          </div>
          <span className="cta-watch-label">WATCH VIDEO</span>
          <span className="cta-trail-line"></span>
        </div>
      </div>

      {/* Bottom Center Scroll Indicator */}
      <a href="#robotics" className="hero-scroll-indicator" aria-label="Scroll down">
        <div className="scroll-bar-line"></div>
        <span className="scroll-label">SCROLL</span>
      </a>

      {/* Floating Side Widgets matching reference */}
      <aside className="floating-side-widget" title="Accessibility & Tools" aria-label="Accessibility">
        <svg viewBox="0 0 24 24" fill="currentColor" className="widget-asterisk-icon">
          <path d="M12 2a1 1 0 0 1 1 1v5.086l3.596-3.596a1 1 0 1 1 1.414 1.414L14.414 9.5H19.5a1 1 0 1 1 0 2h-5.086l3.596 3.596a1 1 0 0 1-1.414 1.414L13 12.914V18a1 1 0 1 1-2 0v-5.086l-3.596 3.596a1 1 0 0 1-1.414-1.414L9.586 11.5H4.5a1 1 0 1 1 0-2h5.086L5.99 5.904a1 1 0 0 1 1.414-1.414L11 8.086V3a1 1 0 0 1 1-1z" />
        </svg>
      </aside>

      <a href="#contact" className="floating-bottom-contact" title="Get In Touch / Contact Support" aria-label="Contact">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-headset-icon">
          <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
          <path d="M18 19v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1"></path>
        </svg>
      </a>
    </section>
  );
}
