/**
 * Unibose Hazardous Space Robotics
 * Interactive Application Logic & UI Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Header Background Blur on Scroll
  const siteHeader = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  });

  // 2. Off-Canvas Slide-In Navigation Drawer
  const menuTrigger = document.getElementById('menuTrigger');
  const navDrawer = document.getElementById('navDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');

  function openDrawer() {
    navDrawer.classList.add('active');
    drawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    navDrawer.classList.remove('active');
    drawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  menuTrigger.addEventListener('click', openDrawer);
  drawerCloseBtn.addEventListener('click', closeDrawer);
  drawerOverlay.addEventListener('click', closeDrawer);

  // Close drawer on link click
  document.querySelectorAll('.drawer-nav a').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // 3. Products Submenu Accordion in Drawer
  const productsMenuToggle = document.getElementById('productsMenuToggle');
  if (productsMenuToggle) {
    productsMenuToggle.addEventListener('click', () => {
      const parent = productsMenuToggle.parentElement;
      parent.classList.toggle('open');
    });
  }

  // 4. Hero Cycling Text Badge Ticker
  const tickerTexts = document.querySelectorAll('.ticker-text');
  let currentTickerIndex = 0;

  if (tickerTexts.length > 0) {
    setInterval(() => {
      tickerTexts[currentTickerIndex].classList.remove('active');
      currentTickerIndex = (currentTickerIndex + 1) % tickerTexts.length;
      tickerTexts[currentTickerIndex].classList.add('active');
    }, 2400);
  }

  // 5. Video Play Trigger Modal
  const videoTrigger = document.getElementById('videoTrigger');
  const videoModal = document.getElementById('videoModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  if (videoTrigger && videoModal && modalCloseBtn) {
    videoTrigger.addEventListener('click', () => {
      videoModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    modalCloseBtn.addEventListener('click', () => {
      videoModal.classList.remove('active');
      document.body.style.overflow = '';
    });

    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) {
        videoModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // 6. Geometry Capsules Interactive Hover/Click Switcher
  const capsuleItems = document.querySelectorAll('.geo-capsule-item');
  if (capsuleItems.length > 0) {
    capsuleItems.forEach(capsule => {
      capsule.addEventListener('mouseenter', () => {
        capsuleItems.forEach(c => c.classList.remove('is-active'));
        capsule.classList.add('is-active');
      });
      capsule.addEventListener('click', () => {
        capsuleItems.forEach(c => c.classList.remove('is-active'));
        capsule.classList.add('is-active');
      });
    });
  }

  // 7. In-Depth FAQ Accordion
  const accordionItems = document.querySelectorAll('.faq-card-item, .accordion-item');

  accordionItems.forEach(item => {
    const trigger = item.querySelector('.faq-card-trigger, .accordion-trigger');
    if (!trigger) return;
    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // Close all items
      accordionItems.forEach(i => {
        i.classList.remove('active');
        const t = i.querySelector('.faq-card-trigger, .accordion-trigger');
        if (t) t.setAttribute('aria-expanded', 'false');
      });

      // Toggle current item
      if (!isOpen) {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // 8. Lead Capture & Brochure Form Simulation
  const leadForm = document.getElementById('leadForm');
  if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = leadForm.querySelector('.btn-submit-lead');
      const originalText = submitBtn.innerHTML;

      submitBtn.innerHTML = '<span>Processing Request...</span>';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = '<span>✓ Brochure Sent & Demo Booked!</span>';
        submitBtn.style.backgroundColor = '#7cad3e';
        leadForm.reset();

        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.style.backgroundColor = '';
          submitBtn.disabled = false;
        }, 4000);
      }, 1200);
    });
  }

  // 9. ATEX Certificate Slider & Lightbox
  const certsData = [
    {
      code: 'NMER-TI23ATEX-1679-X',
      caption: 'Certified Robotic System for Hazardous Tank Environments',
      image: 'assets/cert-1.png'
    },
    {
      code: 'EU-Type ATEX Zone-0',
      caption: 'Camera Certificate AT0207053-X Hazardous Atmospheres',
      image: 'assets/cert-2.png'
    },
    {
      code: 'ISO 9001:2015 & Patent 592382',
      caption: 'Certified Quality & Proprietary Thermal Recovery',
      image: 'assets/cert-3.png'
    },
    {
      code: 'CPCL Appreciation Letter',
      caption: 'Certified 60°C Operating Robotic System',
      image: 'assets/cert-4.png'
    },
    {
      code: 'IOCL Field Approval',
      caption: 'Field Certified Across High-Hazard Refinery Terminals',
      image: 'assets/cert-5.png'
    }
  ];

  let currentCertIndex = 0;
  const certImg = document.getElementById('atexCertImg');
  const certCode = document.getElementById('atexCertCode');
  const certCaption = document.getElementById('atexCertCaption');
  const certCounter = document.getElementById('atexCounter');
  const prevBtn = document.getElementById('atexPrevBtn');
  const nextBtn = document.getElementById('atexNextBtn');
  const expandBtn = document.getElementById('atexExpandBtn');
  const certTrigger = document.getElementById('atexCertTrigger');
  const lightbox = document.getElementById('atexLightbox');
  const lightboxImg = document.getElementById('atexLightboxImg');
  const lightboxCode = document.getElementById('atexLightboxCode');
  const lightboxCaption = document.getElementById('atexLightboxCaption');
  const lightboxClose = document.getElementById('atexLightboxClose');

  function updateCertSlide(index) {
    currentCertIndex = (index + certsData.length) % certsData.length;
    const cert = certsData[currentCertIndex];
    if (certImg) certImg.src = cert.image;
    if (certCode) certCode.textContent = cert.code;
    if (certCaption) certCaption.textContent = cert.caption;
    if (certCounter) certCounter.textContent = `${currentCertIndex + 1} / ${certsData.length}`;
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => updateCertSlide(currentCertIndex - 1));
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => updateCertSlide(currentCertIndex + 1));
  }

  function openLightbox() {
    if (!lightbox) return;
    const cert = certsData[currentCertIndex];
    if (lightboxImg) lightboxImg.src = cert.image;
    if (lightboxCode) lightboxCode.textContent = cert.code;
    if (lightboxCaption) lightboxCaption.textContent = cert.caption;
    lightbox.style.display = 'flex';
  }

  function closeLightbox() {
    if (lightbox) lightbox.style.display = 'none';
  }

  // 10. 3D Product Machine Viewer (Turntable 360 & Zoom)
  const p3dStage = document.getElementById('p3dStage');
  const p3dRig = document.getElementById('p3dRig');
  const p3dMainImg = document.getElementById('p3dMainImg');
  const p3dReflectImg = document.getElementById('p3dReflectImg');
  const p3dSheen = document.getElementById('p3dSheen');
  const p3dTitle = document.getElementById('p3dTitle');
  const p3dRotateToggle = document.getElementById('p3dRotateToggle');
  const p3dRotateDot = document.getElementById('p3dRotateDot');
  const p3dRotateLabel = document.getElementById('p3dRotateLabel');
  const p3dZoomIn = document.getElementById('p3dZoomIn');
  const p3dZoomOut = document.getElementById('p3dZoomOut');
  const p3dZoomBadge = document.getElementById('p3dZoomBadge');
  const p3dResetBtn = document.getElementById('p3dResetBtn');
  const p3dPopup = document.getElementById('p3dPopup');
  const p3dPopupClose = document.getElementById('p3dPopupClose');
  const p3dPopupTitle = document.getElementById('p3dPopupTitle');
  const p3dPopupDesc = document.getElementById('p3dPopupDesc');
  const p3dPopupBadge = document.getElementById('p3dPopupBadge');

  if (p3dStage && p3dRig) {
    let rotY = 0;
    let rotX = 6;
    let zoomLevel = 1.0;
    let isAutoRotate = true;
    let isDragging3D = false;
    let startX = 0;
    let startY = 0;
    let baseRotY = 0;
    let baseRotX = 0;

    function render3D() {
      p3dRig.style.transform = `perspective(1200px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(${zoomLevel})`;
      if (p3dSheen) {
        const sheenX = ((rotY % 360) / 360) * 120 - 60;
        p3dSheen.style.transform = `translateX(${sheenX}%)`;
      }
    }

    let lastTimestamp = performance.now();
    function animate3D(now) {
      const dt = (now - lastTimestamp) / 1000;
      lastTimestamp = now;
      if (isAutoRotate && !isDragging3D) {
        rotY = (rotY + dt * 12) % 360;
        render3D();
      }
      requestAnimationFrame(animate3D);
    }
    requestAnimationFrame(animate3D);

    // Drag / Orbit
    function onStartDrag(e) {
      isDragging3D = true;
      p3dStage.classList.add('is-dragging');
      const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
      startX = clientX;
      startY = clientY;
      baseRotY = rotY;
      baseRotX = rotX;
    }

    function onMoveDrag(e) {
      if (!isDragging3D) return;
      const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
      const dx = clientX - startX;
      const dy = clientY - startY;

      rotY = (baseRotY + dx * 0.45) % 360;
      rotX = Math.max(-18, Math.min(24, baseRotX - dy * 0.2));
      render3D();
    }

    function onEndDrag() {
      isDragging3D = false;
      p3dStage.classList.remove('is-dragging');
    }

    p3dStage.addEventListener('mousedown', onStartDrag);
    window.addEventListener('mousemove', onMoveDrag);
    window.addEventListener('mouseup', onEndDrag);

    p3dStage.addEventListener('touchstart', onStartDrag, { passive: true });
    window.addEventListener('touchmove', onMoveDrag, { passive: true });
    window.addEventListener('touchend', onEndDrag);

    // Mouse wheel zoom
    p3dStage.addEventListener('wheel', (e) => {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -0.08 : 0.08;
      zoomLevel = Math.max(0.65, Math.min(2.2, +(zoomLevel + delta).toFixed(2)));
      if (p3dZoomBadge) p3dZoomBadge.textContent = `${Math.round(zoomLevel * 100)}%`;
      render3D();
    }, { passive: false });

    // Buttons
    if (p3dZoomIn) {
      p3dZoomIn.addEventListener('click', () => {
        zoomLevel = Math.min(2.2, +(zoomLevel + 0.15).toFixed(2));
        if (p3dZoomBadge) p3dZoomBadge.textContent = `${Math.round(zoomLevel * 100)}%`;
        render3D();
      });
    }

    if (p3dZoomOut) {
      p3dZoomOut.addEventListener('click', () => {
        zoomLevel = Math.max(0.65, +(zoomLevel - 0.15).toFixed(2));
        if (p3dZoomBadge) p3dZoomBadge.textContent = `${Math.round(zoomLevel * 100)}%`;
        render3D();
      });
    }

    if (p3dRotateToggle) {
      p3dRotateToggle.addEventListener('click', () => {
        isAutoRotate = !isAutoRotate;
        if (p3dRotateDot) p3dRotateDot.classList.toggle('active', isAutoRotate);
        if (p3dRotateLabel) p3dRotateLabel.textContent = isAutoRotate ? '360° Rotating' : 'Rotate Paused';
      });
    }

    if (p3dResetBtn) {
      p3dResetBtn.addEventListener('click', () => {
        rotY = 0;
        rotX = 6;
        zoomLevel = 1.0;
        isAutoRotate = true;
        if (p3dRotateDot) p3dRotateDot.classList.add('active');
        if (p3dRotateLabel) p3dRotateLabel.textContent = '360° Rotating';
        if (p3dZoomBadge) p3dZoomBadge.textContent = '100%';
        render3D();
      });
    }

    // Hotspot clicks
    const hotspots = document.querySelectorAll('.product-hotspot');
    const hotspotData = [
      {
        title: 'High-Pressure Jetting & Agitation Nozzles',
        badge: "ZONE 0 IIC CERTIFIED BUILT FOR THE WORLD'S MOST EXPLOSIVE ENVIRONMENTS",
        desc: 'Up to 50 bar directional fluidization nozzles break dense hydrocarbon sludge matrices without sparks or human intervention.'
      },
      {
        title: 'Quick Tool Swapping with Plug-and-Play Interface',
        badge: 'MODULAR HYDRAULIC PAYLOAD ARCHITECTURE',
        desc: 'Universal quick-coupling flange supports interchangeable cutter augers, slurry pumps, and chemical dosing manifolds.'
      },
      {
        title: 'Clear Vision Zone-0 Cameras with Automatic Self-Cleaning',
        badge: 'DUAL MAST OPTICAL TELEMETRY',
        desc: 'Ultra-low-light pan-tilt camera system with high-intensity ATEX LED illuminators and pneumatic self-cleaning lens wipers.'
      },
      {
        title: 'Compact 600 mm Manhole Entry with Ramp Deployment',
        badge: "ZONE 0 IIC CERTIFIED BUILT FOR THE WORLD'S MOST EXPLOSIVE ENVIRONMENTS",
        desc: 'Streamlined low-profile chassis glides effortlessly into standard 24-inch (600 mm) refinery tank manways via robotic ramp deployment.'
      },
      {
        title: 'Stable Robotic Mobility with High Traction',
        badge: 'HEAVY CONTINUOUS TRACK DRIVE',
        desc: 'Extreme chemical-resistant steel-reinforced crawler tracks negotiate slippery sludge beds, sumps, and 35° tank slopes.'
      },
      {
        title: 'Safe Emergency Retrieval from Confined Tanks',
        badge: 'ZERO-ENTRY TRIPLE REDUNDANCY RETRIEVAL',
        desc: 'Integrated heavy-tensile retrieval tether enables instant remote extraction within minutes in case of emergency.'
      }
    ];

    hotspots.forEach((hs) => {
      hs.addEventListener('click', (e) => {
        e.stopPropagation();
        hotspots.forEach((h) => h.classList.remove('is-active'));
        hs.classList.add('is-active');
        const idx = parseInt(hs.getAttribute('data-idx') || '0', 10);
        const data = hotspotData[idx];
        if (data && p3dPopup) {
          if (p3dPopupTitle) p3dPopupTitle.textContent = data.title;
          if (p3dPopupDesc) p3dPopupDesc.textContent = data.desc;
          if (p3dPopupBadge) p3dPopupBadge.textContent = data.badge;
          p3dPopup.style.display = 'block';
        }
      });
    });

    if (p3dPopupClose) {
      p3dPopupClose.addEventListener('click', () => {
        if (p3dPopup) p3dPopup.style.display = 'none';
        hotspots.forEach((h) => h.classList.remove('is-active'));
      });
    }

    // Switcher buttons
    const switcherBtns = document.querySelectorAll('.product-tab-btn');
    const productsData = [
      { name: 'ATEX Zone-0 N-MER', img: 'assets/nmer-product.png' },
      { name: 'Robot MUSHAQ 2.0', img: 'assets/onboard-pump.png' },
      { name: 'Zone-0 Camera', img: 'assets/crm-3.png' }
    ];

    switcherBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        switcherBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const pIdx = parseInt(btn.getAttribute('data-product') || '0', 10);
        const prod = productsData[pIdx];
        if (prod) {
          if (p3dTitle) p3dTitle.textContent = `MEET ${prod.name}`;
          if (p3dMainImg) p3dMainImg.src = prod.img;
          if (p3dReflectImg) p3dReflectImg.src = prod.img;
          rotY = 0;
          rotX = 6;
          zoomLevel = 1.0;
          render3D();
        }
      });
    });
  }

  // Smooth Scroll Reveal Observer for Sections & Cards
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.08
  };

  const handleIntersect = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersect, observerOptions);

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
});

