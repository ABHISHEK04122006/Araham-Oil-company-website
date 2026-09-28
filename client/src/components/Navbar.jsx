import React, { useState, useEffect, useRef } from 'react';

export default function Navbar({ onOpenDrawer, onOpenAdmin }) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 20) {
        setScrolled(false);
        setHidden(false);
      } else {
        setScrolled(true);
        // When scrolling down, hide navbar. When scrolling up, show navbar.
        if (currentScrollY > lastScrollY.current && currentScrollY > 60) {
          setHidden(true);
        } else {
          setHidden(false);
        }
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''} ${hidden ? 'nav-hidden' : ''}`}>
      <div className="header-container">
        <a href="#hero" className="brand-logo" aria-label="Arham Oil Home">
          <img src="/assets/arham-logo.png" alt="Arham Oil" className="arham-header-logo" />
        </a>

        {/* Center Navigation Links matching reference */}
        <nav className="header-nav-center" aria-label="Primary Navigation">
          <a href="#hero" className="nav-center-link active">Home</a>
          <a href="#robotics" className="nav-center-link">Robotics</a>
          <a href="#services" className="nav-center-link">Industries</a>
          <a href="#about" className="nav-center-link">About</a>
          <a href="#contact" className="nav-center-link">Contact</a>
        </nav>

        <div className="header-right-actions">
          {/* Pill Outline Button: GET IN TOUCH → */}
          <a href="#contact" className="btn-get-in-touch-pill">
            <span>GET IN TOUCH</span>
            <span className="pill-arrow-icon">→</span>
          </a>

          {/* 9-Dot Matrix Menu Trigger */}
          <button className="menu-grid-trigger" onClick={onOpenDrawer} aria-label="Open Navigation Menu">
            <span className="grid-hover-effect"></span>
            <svg className="nine-dots-icon" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="5" height="5" rx="1" fill="white"></rect>
              <rect y="9" width="5" height="5" rx="1" fill="white"></rect>
              <rect y="18" width="5" height="5" rx="1" fill="white"></rect>
              <rect x="10" width="5" height="5" rx="1" fill="white"></rect>
              <rect x="10" y="9" width="5" height="5" rx="1" fill="white"></rect>
              <rect x="10" y="18" width="5" height="5" rx="1" fill="white"></rect>
              <rect x="20" width="5" height="5" rx="1" fill="white"></rect>
              <rect x="20" y="9" width="5" height="5" rx="1" fill="white"></rect>
              <rect x="20" y="18" width="5" height="5" rx="1" fill="white"></rect>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
