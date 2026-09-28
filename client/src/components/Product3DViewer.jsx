import React, { useState, useEffect, useRef } from 'react';

const PRODUCTS = [
  {
    id: 'nmer',
    name: 'ATEX Zone-0 N-MER',
    badge: 'Heavy Industrial Tank Crawler',
    image: '/assets/nmer-product.png',
    hotspots: [
      {
        id: 1,
        x: 35,
        y: 76,
        title: 'High-Pressure Jetting & Agitation Nozzles',
        badgeText: "ZONE 0 IIC CERTIFIED BUILT FOR THE WORLD'S MOST EXPLOSIVE ENVIRONMENTS",
        desc: 'Up to 50 bar directional fluidization nozzles break dense hydrocarbon sludge matrices without sparks or human intervention.',
        image: '/assets/popup-tech.jpg',
      },
      {
        id: 2,
        x: 47,
        y: 65,
        title: 'Quick Tool Swapping with Plug-and-Play Interface',
        badgeText: 'MODULAR HYDRAULIC PAYLOAD ARCHITECTURE',
        desc: 'Universal quick-coupling flange supports interchangeable cutter augers, slurry pumps, and chemical dosing manifolds.',
        image: '/assets/popup-tech.jpg',
      },
      {
        id: 3,
        x: 46,
        y: 42,
        title: 'Clear Vision Zone-0 Cameras with Automatic Self-Cleaning',
        badgeText: 'DUAL MAST OPTICAL TELEMETRY',
        desc: 'Ultra-low-light pan-tilt camera system with high-intensity ATEX LED illuminators and pneumatic self-cleaning lens wipers.',
        image: '/assets/popup-tech.jpg',
      },
      {
        id: 4,
        x: 58,
        y: 35,
        title: 'Compact 600 mm Manhole Entry with Ramp Deployment',
        badgeText: "ZONE 0 IIC CERTIFIED BUILT FOR THE WORLD'S MOST EXPLOSIVE ENVIRONMENTS",
        desc: 'Streamlined low-profile chassis glides effortlessly into standard 24-inch (600 mm) refinery tank manways via robotic ramp deployment.',
        image: '/assets/popup-tech.jpg',
      },
      {
        id: 5,
        x: 49,
        y: 77,
        title: 'Stable Robotic Mobility with High Traction',
        badgeText: 'HEAVY CONTINUOUS TRACK DRIVE',
        desc: 'Extreme chemical-resistant steel-reinforced crawler tracks negotiate slippery sludge beds, sumps, and 35° tank slopes.',
        image: '/assets/popup-tech.jpg',
      },
      {
        id: 6,
        x: 57,
        y: 63,
        title: 'Safe Emergency Retrieval from Confined Tanks',
        badgeText: 'ZERO-ENTRY TRIPLE REDUNDANCY RETRIEVAL',
        desc: 'Integrated heavy-tensile retrieval tether enables instant remote extraction within minutes in case of emergency.',
        image: '/assets/popup-tech.jpg',
      },
    ],
  },
  {
    id: 'mushaq',
    name: 'Robot MUSHAQ 2.0',
    badge: 'Ultra-Compact Confined Crawler',
    image: '/assets/onboard-pump.png',
    hotspots: [
      {
        id: 1,
        x: 46,
        y: 50,
        title: '15 HP Hydraulic Submersible Pump',
        badgeText: '20 m³/hr HIGH DENSITY SLUDGE EXTRACTION',
        desc: 'Integrated slurry impeller handles solids up to 25 mm diameter without clogging or vapor lock.',
        image: '/assets/popup-tech.jpg',
      },
      {
        id: 2,
        x: 32,
        y: 62,
        title: 'Ultra-Slim 30x20x8" Footprint',
        badgeText: 'SMALLEST INDUSTRIAL SLUDGE CRAWLER',
        desc: 'Enters the most restricted tank manways and operates safely under internal floating roof pontoon legs.',
        image: '/assets/popup-tech.jpg',
      },
    ],
  },
  {
    id: 'vision',
    name: 'ATEX Zone-0 Camera Mast',
    badge: 'Optical Navigation Head',
    image: '/assets/crm-3.png',
    hotspots: [
      {
        id: 1,
        x: 48,
        y: 48,
        title: 'ATEX Zone-0 Certified Sensor Rig',
        badgeText: 'CONTINUOUS EXPLOSIVE ATMOSPHERE COMPLIANCE',
        desc: '360° pan and 180° tilt with pneumatic lens clearing for real-time remote telemetry in flammable vapors.',
        image: '/assets/popup-tech.jpg',
      },
    ],
  },
];

export default function Product3DViewer() {
  const [activeProductIndex, setActiveProductIndex] = useState(0);
  const [rotationY, setRotationY] = useState(0);
  const [rotationX, setRotationX] = useState(6);
  const [zoom, setZoom] = useState(1.0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [soundMuted, setSoundMuted] = useState(false);

  const containerRef = useRef(null);
  const dragStartRef = useRef({ x: 0, y: 0, rotY: 0, rotX: 0 });
  const animFrameRef = useRef(null);

  const currentProduct = PRODUCTS[activeProductIndex];

  // Auto-rotation 360° Turntable loop
  useEffect(() => {
    let lastTime = performance.now();

    const loop = (time) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      if (isAutoRotating && !isDragging) {
        setRotationY((prev) => (prev + delta * 12) % 360);
      }
      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [isAutoRotating, isDragging]);

  // Mouse / Touch Drag 360° Orbit handlers
  const handlePointerDown = (e) => {
    setIsDragging(true);
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
    dragStartRef.current = {
      x: clientX,
      y: clientY,
      rotY: rotationY,
      rotX: rotationX,
    };
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;

    const deltaX = clientX - dragStartRef.current.x;
    const deltaY = clientY - dragStartRef.current.y;

    setRotationY((dragStartRef.current.rotY + deltaX * 0.45) % 360);
    const newRotX = dragStartRef.current.rotX - deltaY * 0.2;
    setRotationX(Math.max(-18, Math.min(24, newRotX)));
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  // Wheel Zoom handler
  const handleWheel = (e) => {
    e.preventDefault();
    const zoomDelta = e.deltaY > 0 ? -0.08 : 0.08;
    setZoom((prev) => Math.max(0.65, Math.min(2.2, prev + zoomDelta)));
  };

  const zoomIn = () => setZoom((prev) => Math.min(2.2, +(prev + 0.15).toFixed(2)));
  const zoomOut = () => setZoom((prev) => Math.max(0.65, +(prev - 0.15).toFixed(2)));
  const resetView = () => {
    setZoom(1.0);
    setRotationY(0);
    setRotationX(6);
    setIsAutoRotating(true);
    setActiveHotspot(null);
  };

  // Open default hotspot on start
  useEffect(() => {
    if (currentProduct.hotspots && currentProduct.hotspots.length >= 4) {
      setActiveHotspot(currentProduct.hotspots[3]);
    } else if (currentProduct.hotspots && currentProduct.hotspots.length > 0) {
      setActiveHotspot(currentProduct.hotspots[0]);
    } else {
      setActiveHotspot(null);
    }
  }, [activeProductIndex]);

  return (
    <section className="product-3d-section" id="product-3d">
      {/* Background with twilight horizon glow */}
      <div className="product-3d-bg" />

      <div className="product-3d-container">
        {/* Top Header */}
        <div className="product-3d-header">
          <div className="product-3d-title-group">
            <h2 className="product-3d-title">MEET {currentProduct.name}</h2>
            <span className="product-3d-subtitle">
              Interactive 3D Turntable • 360° Continuous Orbit • Pinch / Scroll to Zoom
            </span>
          </div>

          {/* Product Switcher Tabs */}
          <div className="product-3d-switcher">
            {PRODUCTS.map((prod, idx) => (
              <button
                key={prod.id}
                type="button"
                className={`product-tab-btn ${idx === activeProductIndex ? 'active' : ''}`}
                onClick={() => {
                  setActiveProductIndex(idx);
                  resetView();
                }}
              >
                {prod.name}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Interactive Stage */}
        <div
          className={`product-3d-stage ${isDragging ? 'is-dragging' : ''}`}
          ref={containerRef}
          onMouseDown={handlePointerDown}
          onMouseMove={handlePointerMove}
          onMouseUp={handlePointerUp}
          onMouseLeave={handlePointerUp}
          onTouchStart={handlePointerDown}
          onTouchMove={handlePointerMove}
          onTouchEnd={handlePointerUp}
          onWheel={handleWheel}
        >
          {/* Floor Grid & Light Radial */}
          <div className="product-3d-floor" />

          {/* 3D Rotating Model Rig */}
          <div
            className="product-3d-model-rig"
            style={{
              transform: `perspective(1200px) rotateX(${rotationX}deg) rotateY(${rotationY}deg) scale(${zoom})`,
            }}
          >
            {/* Machine Main Visual */}
            <div className="product-3d-img-wrap">
              <img
                src={currentProduct.image}
                alt={currentProduct.name}
                className="product-3d-main-img"
                draggable={false}
              />

              {/* Specular Light Sheen */}
              <div
                className="product-3d-sheen"
                style={{
                  transform: `translateX(${((rotationY % 360) / 360) * 120 - 60}%)`,
                }}
              />

              {/* Dynamic Floor Reflection */}
              <div className="product-3d-reflection">
                <img
                  src={currentProduct.image}
                  alt=""
                  aria-hidden="true"
                  className="product-3d-reflection-img"
                  draggable={false}
                />
              </div>

              {/* Interactive Pulsing Hotspots */}
              {currentProduct.hotspots.map((h) => {
                const isActive = activeHotspot && activeHotspot.id === h.id;
                return (
                  <div
                    key={h.id}
                    className={`product-hotspot ${isActive ? 'is-active' : ''}`}
                    style={{ left: `${h.x}%`, top: `${h.y}%` }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveHotspot(isActive ? null : h);
                    }}
                    role="button"
                    tabIndex={0}
                    title={h.title}
                  >
                    <span className="hotspot-outer-ping" />
                    <span className="hotspot-middle-pulse" />
                    <span className="hotspot-center-dot" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Floating Feature Popup Card (Matches Image Exactly) */}
          {activeHotspot && (
            <div
              className="product-feature-popup"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="popup-close-btn"
                onClick={() => setActiveHotspot(null)}
                aria-label="Close feature popup"
              >
                &times;
              </button>

              <div className="popup-visual-box">
                <img
                  src={activeHotspot.image}
                  alt={activeHotspot.title}
                  className="popup-visual-img"
                />
                <div className="popup-badge-overlay">
                  <span>{activeHotspot.badgeText}</span>
                  <button
                    type="button"
                    className="popup-sound-toggle"
                    onClick={() => setSoundMuted(!soundMuted)}
                    aria-label="Toggle Sound"
                  >
                    {soundMuted ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                        <line x1="1" y1="1" x2="23" y2="23" />
                        <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6" />
                        <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23" />
                      </svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div className="popup-caption-box">
                <h4 className="popup-feature-title">{activeHotspot.title}</h4>
                <p className="popup-feature-desc">{activeHotspot.desc}</p>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Interactive HUD Bar */}
        <div className="product-3d-hud">
          {/* Rotation Toggle */}
          <button
            type="button"
            className="hud-btn"
            onClick={() => setIsAutoRotating(!isAutoRotating)}
            title={isAutoRotating ? 'Pause 360° Rotation' : 'Resume 360° Rotation'}
          >
            <span className={`hud-indicator-dot ${isAutoRotating ? 'active' : ''}`} />
            <span>{isAutoRotating ? '360° Rotating' : 'Rotate Paused'}</span>
          </button>

          {/* Zoom Controls */}
          <div className="hud-zoom-group">
            <button
              type="button"
              className="hud-icon-btn"
              onClick={zoomOut}
              title="Zoom Out"
              aria-label="Zoom Out"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" strokeLinecap="round" />
              </svg>
            </button>

            <span className="hud-zoom-badge">{Math.round(zoom * 100)}%</span>

            <button
              type="button"
              className="hud-icon-btn"
              onClick={zoomIn}
              title="Zoom In"
              aria-label="Zoom In"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
                <line x1="12" y1="5" x2="12" y2="19" strokeLinecap="round" />
                <line x1="5" y1="12" x2="19" y2="12" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Reset View */}
          <button
            type="button"
            className="hud-btn"
            onClick={resetView}
            title="Reset 3D View"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 3v5h5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Reset View</span>
          </button>

          <div className="hud-drag-hint">
            <span>🖱️ Click & Drag to Orbit 360° • Scroll Wheel to Zoom</span>
          </div>
        </div>
      </div>
    </section>
  );
}
