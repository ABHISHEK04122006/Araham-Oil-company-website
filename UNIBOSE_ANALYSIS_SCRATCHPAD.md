# UNIBOSE TECHNOLOGY PRIVATE LIMITED
## Comprehensive Website Analysis, UI/UX Architecture & Development Blueprint
**Source URL**: [https://www.unibose.com/](https://www.unibose.com/)  
**Analysis Date**: September 2026  
**Document Type**: In-Depth UI/UX Audit, Functional Architecture & Implementation Scratchpad  

---

## 1. Executive Summary & Company Profile

### 1.1 Brand Identity & Mission
* **Company Name**: Unibose Technology Private Limited (Unibose)
* **Tagline / Hero Proposition**: *"Leading Hazardous Space Robotics – from India to the World"*
* **Core Technological Achievement**: Developer of **Asia’s 1st Robot to achieve EU ATEX Zone-0 (IIC) Certification** (`N-MER` - No Man Entry Robot), the global benchmark for safe industrial tank cleaning in explosive, confined spaces.
* **Founder & Leadership**: Manikandan Dakshinamoorthy (Founder & CEO)
  > *"A Robot cannot replace humans, but it should, and it must replace, hundreds and thousands of fellow human beings entering confined spaces daily for their livelihood."*
* **Core Philosophy**: Human-First engineering, Zero Life Loss, Eliminating confined space entry, 40% reduction in downtime, and 45% OPEX reduction.
* **Patents**: Technology protected by **7 active patents**.
* **Corporate Certifications**: An ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 certified robotics enterprise.

### 1.2 Headquarters & Direct Contact Information
* **Factory / Registered Office**:  
  `No.33, SIDCO Industrial Estate, CMDA Phase – 2, Maraimalai Nagar, Chengalpattu, Tamil Nadu - 603209, India`
* **Direct Telephones**:  
  - `+91 98197 41402`  
  - `+91 96770 99223`
* **General Email**: `contact@unibose.com`
* **Target Industry Verticals**: Oil & Gas Refineries, Petrochemicals, Marine Terminals, Fertilizer & Phosphoric Acid Wagons, Power Generation (Cooling Towers), and ETP/OWS Basins.

---

## 2. In-Depth UI/UX Design System Analysis

### 2.1 Color Palette & Design Tokens
* **Primary Deep Navy**: `#173042` (Used for navigation drawer, prominent cards, headings, and branding elements).
* **Secondary Slate Navy**: `#203c52` (Hero background and deep container sections).
* **Background Light Gray**: `#F5F5F5` (Clean contrast for content sections like Unibose Technology & Product features).
* **Accent Olive Green**: `#7cad3e` (Used in hero play-button concentric pulse rings).
* **Muted Slate / Gray**: `#8AA7BC` (Subheadings, office metadata in navigation drawer, and secondary badges).
* **Charcoal / Primary Dark Text**: `#1B1A1A` and `#173042`.
* **Pure White**: `#FFFFFF` (Cards, hero titles, button text, and high-contrast badges).
* **Border Line Blue**: `#AFCAE2` (Subtle 1px grid borders in dark drawer and button elements).

### 2.2 Typography Hierarchy
* **Headings**: Modern geometric sans-serif (Proxima Nova / Outfit / Inter), font-weight 400 to 700.
  - Hero Main H1: Large scale `4.4rem` on desktop, `2.25rem` on mobile, leading `1.0`, capitalized.
  - Section Headings (H2): `2.5rem` to `3.75rem`, crisp and clean.
  - Card Titles (H3): `1.25rem` to `1.75rem`.
* **Body Text**: `1rem` to `1.125rem` (`16px` to `18px`), line-height `1.5` to `1.6`, high legibility against white and light gray backgrounds.
* **Button Labels & Badges**: Uppercase / Titlecase, letter-spacing `0.05em`, rounded pill buttons (`rounded-full`), border 1px solid.

### 2.3 Navigation & Header UX
* **Fixed Floating Header**: Translucent/clean top bar with company logo on the left (`Logo.5194cddc.svg`).
* **Right Header Actions**:
  - Text link: *"GET IN TOUCH"* with animated bottom border and subtle hover sheen.
  - Grid Icon Button (9-dot `3x3` matrix) that activates the **Full-Screen Slide-in Navigation Drawer** from the right.
* **Off-Canvas Slide-In Navigation Drawer**:
  - Deep Navy background (`#173042`), occupying ~75% to 90% of screen width.
  - Close button (`X`) with smooth hover state.
  - Large menu links (`2.5rem`): *Our Story*, *Our Products*, *RaaS*, *Contact*.
  - Nested Mega-Menu under *Our Products*:
    - **Sludge Extraction**: Flat Bottom Tank (Crude, Cooling Tower, Slop/Distillates, Lagoons, Chemical, White Oil), Horizontal Tanks (Solvents, Acid Wagons, Bullets), Vertical Tanks (Columns, Reactors, Silos).
    - **Tank Maintenance**: Roof Cleaning, Tank Shell Cleaning, Surface Painting, Surface Preparation.
    - **Tank Inspection**: Bottom Plate Inspection, Roof Inspection, Shell Inspection.
  - Bottom Drawer Metadata: Physical Office Address, Direct Phone numbers with click-to-call, and email.

---

## 3. Page Structure & Component Breakdown

### Section 1: Hero Banner
* **Visuals**: Full-bleed high-definition industrial photograph of the ATEX Zone-0 robot operating on an oil tank floor with rich blue/petroleum tone (`banner-01.webp` on desktop, `mobile-Intro-4.png` on mobile).
* **Floating Video CTA**: Circular play button with concentric animated circles (`#7cad3e`) and hovering text: *"See our robot in action"*.
* **H1 Headline**: *"Leading Hazardous Space Robotics – from India to the World"*.
* **Animated Rotating Badge**: Central pill badge that smoothly cycles through key claims:
  1. `Human-First`
  2. `Proven Performance`
  3. `Protected by 7 patents`
  4. `ATEX Zone-0 Certified`
  5. `40% Down Time Reduction`

### Section 2: "Trusted By" Client Logos
* Clean marquee logo slider featuring prominent partners:
  - Indian Oil Corporation Limited (IOCL)
  - Chennai Petroleum Corporation Limited (CPCL)
  - Poly-Tech Maintenance & Industrial Operation (Saudi Arabia)

### Section 3: "Unibose Technology" Overview
* **Layout**: Asymmetric 60/40 split with an industrial robot image (`Technology-scaled.png`) on the left and white content card on the right.
* **Key Copy**: Chemical, mechanical, and robotic engineers with 45+ years combined experience designing intrinsically safe ATEX Zone-0 robots.
* **Highlight Pills**:
  - `45+ years of combined experience`
  - `Zero Life Loss`
  - `cut downtime by 40%`
  - `ATEX Zone-0 robots`

### Section 4: Split Showcase: N-MER vs. RaaS
* **Two Full-Height Visual Columns**:
  - **Left**: **N-MER (No Man Entry Robot)** – Asia's 1st Robot to achieve EU ATEX Zone-0 (IIC) Certification. Magnetic "Discover" button with geometric stair-step arrow icon.
  - **Right**: **RaaS (Robotics-as-a-Service)** – Zero Capex operational model giving industries instant access to certified robotics. Magnetic "Discover" button.

### Section 5: Complex Geometries Capability (Interactive Tabs)
* **Headline**: *"Asia's 1st ATEX Zone-0 Certified Robot - Raising the Bar Across Complex Geometries"*
* **Sub-headline**: *"One Robotic Platform. Modular for Every Geometry"*
* **Interactive Geometry Filters**:
  1. **Flat Bottom Storage Tanks**: Crude Tanks, Cooling Tower Basins, Slop/Distillates, Waste Lagoon Pits, Chemical Tanks, White Oil.
  2. **Horizontal Storage Tanks**: Chemical & Solvent, Acid Wagons, Petroleum Products, Underground Vessels, Bullet Tanks.
  3. **Vertical Tanks / Vessels**: Columns, Catalyst Reactors, Flash Vessels, Silos.

### Section 6: Official Certifications & Compliance Carousel
* **EU-Type ATEX Zone-0 Certification** (`NMER-TI23ATEX-1679-X`)
* **ATEX Zone-0 Camera Certification** (`AT0207053-X`)
* **ISO 9001:2015 / 14001:2015 / 45001:2018**
* **CPCL & IOCL Formal Appreciation Letters** (Certified for 60°C operating environments).

### Section 7: Interactive Robot Hotspots ("MEET ATEX Zone-0 N-MER")
* Interactive hardware callouts highlighting:
  1. High-Pressure Jetting and Sludge Agitation Nozzles
  2. Quick Tool Swapping with Plug-and-Play Interface
  3. Clear Vision Zone-0 Cameras with Automatic Self-Cleaning
  4. Compact 600 mm Manhole Entry with Ramp Deployment
  5. Safe Emergency Retrieval from Confined Tanks (Exclusive Fail-Safe Mode)
  6. Stable Robotic Mobility with High-Traction Tracks

### Section 8: Key Innovations That Set N-MER Apart
* **Onboard Pump Robot**: World's first ATEX Zone-0 certified robot with autonomous onboard pump (10–12 m³/hr) eliminating external vacuum trucks.
* **Revolutionary Two-Line Hydraulic Architecture**: Replaces messy 10–16 competitor hose bundles with a streamlined dual-line umbilical.
* **ATEX Zone-0 Vision System**: 360° pan-tilt low-light cameras with certified LED lighting.
* **Exclusive Fail-Safe Mode**: Quick emergency mechanical retrieval system within minutes.
* **Advanced Automated Handling**: Automatic hydraulic & vacuum hose winders eliminating manual labor.

### Section 9: "What Makes N-MER Rare Globally" (Data Grid)
* `Zero life loss` in Hazardous Tanks.
* `100% Elimination` of Human Entry with 24/7 Robotic Operation.
* `40% reduction` in turnaround downtime.
* `45% OPEX reduction` through speed and efficiency.
* Scalable across tanks from `10 meters to 110 meters` in diameter.
* Sludge handling capability up to `1200 mm` depth.

### Section 10: In-Depth FAQ Accordion
* 10 complete, comprehensive domain questions explaining Zone-0 vs. Zone-1/2, mechanical augers vs. water dilution, RaaS financial models, OEM partnerships, and predictive maintenance.

### Section 11: Customer Stories & Testimonials
* **Mr. K. Suresh Bacon** – Chief General Manager (Tamil Nadu State Operations Dept), Indian Oil Corporation Limited (IOCL).
* **Mr. S.P. Velavan** – Deputy General Manager (TS - Inspection), CPCL Manali Refinery (90 KL lube sludge removal in Zone-0 trial).
* **Mr. Rajakumar P** – Manager (R&D), Poly-Tech Maintenance & Industrial Operation, Saudi Arabia (Phosphoric acid rail wagons cleaning).

### Section 12: Lead Capture, Brochure Download & Footer
* **Brochure Download Form**: Instant lead capture modal and form.
* **Founder Statement**: Manikandan Dakshinamoorthy quote.
* **Comprehensive Footer**: Office addresses, phone links, emails, quick links, and ISO credentials.

---

## 4. Development Strategy & Tech Stack
To reproduce this exact website with high fidelity, peak performance, and zero bloatware:
1. **Core Language**: Semantic HTML5 with accessible ARIA tags and schema metadata.
2. **Styling**: Pure modern Vanilla CSS3 (`style.css`) with CSS custom properties (`--color-navy: #173042`, etc.), flexbox, CSS grid, backdrop-filter glassmorphism, responsive media queries, and smooth cubic-bezier transitions.
3. **Logic**: Clean Vanilla JavaScript (`script.js`) powering:
   - Off-canvas 9-dot mega-menu drawer with accordion sub-levels.
   - Text ticker/pill badge cycling every 2.5 seconds.
   - Geometry category filter switching.
   - Interactive FAQ accordion open/close animations.
   - Modal popups for "See our robot in action" video preview and "Download Brochure".
   - Sticky header reveal on scroll.
4. **Asset Optimization**: High-resolution SVG icons, webp images, and SVG fallbacks ensuring instant loading.
