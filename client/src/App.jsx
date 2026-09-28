import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Drawer from './components/Drawer';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Technology from './components/Technology';
import SplitShowcase from './components/SplitShowcase';
import Geometries from './components/Geometries';
import Certifications from './components/Certifications';
import Product3DViewer from './components/Product3DViewer';
import Innovations from './components/Innovations';
import MetricsGrid from './components/MetricsGrid';
import FaqAccordion from './components/FaqAccordion';
import Testimonials from './components/Testimonials';
import FounderQuote from './components/FounderQuote';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';
import AdminLeadsModal from './components/AdminLeadsModal';
import './App.css';

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [adminModalOpen, setAdminModalOpen] = useState(false);

  // Setup smooth scroll reveal observer for all sections & cards
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.08
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Optional: keep observing or unobserve once revealed
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Target sections and prominent content blocks
    const targetSelectors = [
      'section',
      '.section-container',
      '.tech-card',
      '.tech-img-box',
      '.split-col',
      '.geo-banner-wrap',
      '.geo-capsule-item',
      '.atex-left-content',
      '.atex-cert-card',
      '.product-3d-header',
      '.product-3d-hud',
      '.inno-feature-card',
      '.inno-badge-pill',
      '.metrics-ref-card',
      '.faq-card-item',
      '.summary-brand-card',
      '.story-narrative-card',
      '.story-author-card',
      '.founder-quote-container',
      '.contact-card-row',
      '.contact-card-container'
    ];

    const elements = document.querySelectorAll(targetSelectors.join(', '));
    elements.forEach((el) => {
      el.classList.add('reveal-on-scroll');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="unibose-app">
      {/* Navigation & Header */}
      <Navbar
        onOpenDrawer={() => setDrawerOpen(true)}
        onOpenAdmin={() => setAdminModalOpen(true)}
      />

      {/* Off-canvas Slide-In Navigation Drawer */}
      <Drawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />

      {/* Hero Section */}
      <Hero onOpenVideo={() => setVideoModalOpen(true)} />

      {/* Trusted By Client Marquee */}
      <TrustedBy />

      {/* Unibose Technology 60/40 */}
      <Technology />

      {/* Split Showcase: N-MER vs RaaS */}
      <SplitShowcase />

      {/* Raising the Bar Across Complex Geometries */}
      <Geometries />

      {/* Official ATEX Zone-0 Certifications */}
      <Certifications />

      {/* 3D Rotating Product Machine Viewer (N-MER) */}
      <Product3DViewer />

      {/* Key Innovations That Set N-MER Apart */}
      <Innovations />

      {/* Rare Globally Metrics Grid */}
      <MetricsGrid />

      {/* In-Depth FAQ Accordion */}
      <FaqAccordion />

      {/* Customer Stories & Testimonials */}
      <Testimonials />

      {/* Founder Statement */}
      <FounderQuote />

      {/* Brochure Request & Contact Form (Connected to Express + MongoDB) */}
      <ContactForm />

      {/* Footer */}
      <Footer />

      {/* Video Modal Popup */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />

      {/* Admin Leads Database Modal */}
      <AdminLeadsModal
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
      />
    </div>
  );
}
