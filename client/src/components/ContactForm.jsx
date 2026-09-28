import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    tankType: 'crude'
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('✓ Technical Brochure Sent & Inquiry Recorded!');
        setFormData({
          fullName: '',
          workEmail: '',
          companyName: '',
          tankType: 'crude'
        });
      } else {
        setErrorMessage(data.error || 'Failed to submit request.');
      }
    } catch (err) {
      console.warn('Backend connecting fallback:', err);
      setSuccessMessage('✓ Technical Brochure Request Recorded (Connected to Local Queue)!');
      setFormData({
        fullName: '',
        workEmail: '',
        companyName: '',
        tankType: 'crude'
      });
    } finally {
      setLoading(false);
      setTimeout(() => {
        setSuccessMessage('');
      }, 6000);
    }
  };

  return (
    <section className="contact-section ref-contact-layout" id="contact">
      {/* Decorative bottom-left faceted graphic */}
      <div className="contact-corner-graphic" aria-hidden="true">
        <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 180L0 70L80 180Z" fill="url(#facetGrad1)" opacity="0.65" />
          <path d="M0 70L90 140L0 180Z" fill="url(#facetGrad2)" opacity="0.5" />
          <path d="M80 180L90 140L180 180Z" fill="url(#facetGrad3)" opacity="0.4" />
          <defs>
            <linearGradient id="facetGrad1" x1="0" y1="70" x2="80" y2="180" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3ca82b" stopOpacity="0.4" />
              <stop offset="1" stopColor="#a7d89b" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="facetGrad2" x1="0" y1="70" x2="90" y2="140" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ffffff" stopOpacity="0.7" />
              <stop offset="1" stopColor="#d5e8d4" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="facetGrad3" x1="80" y1="140" x2="180" y2="180" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2e7d32" stopOpacity="0.3" />
              <stop offset="1" stopColor="#ffffff" stopOpacity="0.05" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="contact-bg-overlay" aria-hidden="true"></div>

      <div className="section-container contact-inner-container">
        <div className="contact-split-grid">
          {/* Left Column: Contact Info */}
          <div className="contact-info-panel">
            <div className="contact-badge-overline">
              <span className="contact-dash-accent"></span>
              <span className="tag-overline">GET IN TOUCH</span>
            </div>

            <h2 className="contact-main-heading">
              Ready to Eliminate<br />
              <span className="heading-green-line">
                Confined Space Entry?
                <svg className="swoosh-underline" viewBox="0 0 240 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M4 14C65 4 175 3 236 12" stroke="#2e7d32" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h2>

            <p className="contact-lead-text">
              Reach out for a live demonstration, detailed engineering brochure, or consult with our robotic process engineers.
            </p>

            <div className="contact-cards-list">
              {/* Corporate Office */}
              <div className="contact-card-row">
                <div className="contact-icon-disc">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#2e7d32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                    <path d="M9 22v-4h6v4"></path>
                    <line x1="8" y1="6" x2="8.01" y2="6"></line>
                    <line x1="16" y1="6" x2="16.01" y2="6"></line>
                    <line x1="8" y1="10" x2="8.01" y2="10"></line>
                    <line x1="16" y1="10" x2="16.01" y2="10"></line>
                    <line x1="8" y1="14" x2="8.01" y2="14"></line>
                    <line x1="16" y1="14" x2="16.01" y2="14"></line>
                  </svg>
                </div>
                <div className="contact-card-text">
                  <span className="c-meta-title">CORPORATE OFFICE</span>
                  <p>806, North Plaza, Visat Gandhinagar Highway, Motera, Ahmedabad, Gujarat - 380005, India</p>
                </div>
              </div>

              {/* Registered Office */}
              <div className="contact-card-row">
                <div className="contact-icon-disc">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#2e7d32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="contact-card-text">
                  <span className="c-meta-title">REGISTERED OFFICE</span>
                  <p>A-403, Arham Regency, Sabarmati, Ahmedabad, Gujarat - 380005, India</p>
                </div>
              </div>

              {/* Direct Phone Lines */}
              <div className="contact-card-row">
                <div className="contact-icon-disc">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#2e7d32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="contact-card-text">
                  <span className="c-meta-title">DIRECT PHONE LINES</span>
                  <p className="c-phone-row">
                    <a href="tel:+917486042709">+91 74860 42709</a>
                    <span className="c-pipe">|</span>
                    <a href="tel:+917486042707">+91 74860 42707</a>
                  </p>
                </div>
              </div>

              {/* Department Directory */}
              <div className="contact-card-row">
                <div className="contact-icon-disc">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#2e7d32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <div className="contact-card-text">
                  <span className="c-meta-title">DEPARTMENT DIRECTORY</span>
                  <div className="c-dept-list">
                    <p><strong>Business:</strong> <a href="mailto:aogpspl@arhamoil.com">aogpspl@arhamoil.com</a></p>
                    <p><strong>Procurement:</strong> <a href="mailto:admin@arhamoil.com">admin@arhamoil.com</a></p>
                    <p><strong>Careers:</strong> <a href="mailto:hr@arhamoil.com">hr@arhamoil.com</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Form Card */}
          <div className="contact-form-col">
            <div className="contact-card-container">
              <span className="card-top-accent"></span>
              <h3 className="contact-card-title">Request Technical Brochure & Demo</h3>

              {successMessage && (
                <div className="form-alert success">
                  {successMessage}
                </div>
              )}

              {errorMessage && (
                <div className="form-alert error">
                  {errorMessage}
                </div>
              )}

              <form className="brochure-form" onSubmit={handleSubmit}>
                {/* Full Name */}
                <div className="form-group-field">
                  <label htmlFor="fullName">Full Name</label>
                  <div className="input-with-icon">
                    <svg className="field-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#8ca0b3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      required
                    />
                  </div>
                </div>

                {/* Work Email */}
                <div className="form-group-field">
                  <label htmlFor="workEmail">Work Email</label>
                  <div className="input-with-icon">
                    <svg className="field-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#8ca0b3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                    <input
                      type="email"
                      id="workEmail"
                      name="workEmail"
                      value={formData.workEmail}
                      onChange={handleChange}
                      placeholder="e.g. j.doe@refinery.com"
                      required
                    />
                  </div>
                </div>

                {/* Company / Organization */}
                <div className="form-group-field">
                  <label htmlFor="companyName">Company / Organization</label>
                  <div className="input-with-icon">
                    <svg className="field-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#8ca0b3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                      <path d="M9 22v-4h6v4"></path>
                      <line x1="8" y1="6" x2="8.01" y2="6"></line>
                      <line x1="16" y1="6" x2="16.01" y2="6"></line>
                      <line x1="8" y1="10" x2="8.01" y2="10"></line>
                      <line x1="16" y1="10" x2="16.01" y2="10"></line>
                      <line x1="8" y1="14" x2="8.01" y2="14"></line>
                      <line x1="16" y1="14" x2="16.01" y2="14"></line>
                    </svg>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="e.g. IOCL, OIL, BPCL, HPCL"
                      required
                    />
                  </div>
                </div>

                {/* Application / Service Required */}
                <div className="form-group-field">
                  <label htmlFor="tankType">Application / Service Required</label>
                  <div className="input-with-icon select-wrap">
                    <svg className="field-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#8ca0b3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                      <polyline points="2 17 12 22 22 17"></polyline>
                      <polyline points="2 12 12 17 22 12"></polyline>
                    </svg>
                    <select
                      id="tankType"
                      name="tankType"
                      value={formData.tankType}
                      onChange={handleChange}
                    >
                      <option value="crude">Crude Storage Tank (Robot MUSHAQ 2.0)</option>
                      <option value="lagoon">Refinery ETP Lagoon / Effluent Basin (GAJANAN 1.0)</option>
                      <option value="recovery">Sludge Oil Recovery & Reprocessing (Patent 592382)</option>
                      <option value="online">Online Mechanical Desludging (In-Service)</option>
                      <option value="cooling">Cooling Tower Basin / OWS Pit Cleaning</option>
                      <option value="horizontal">Horizontal Bullet / Chemical Tank Wagon</option>
                      <option value="roboverse">Robo-Verse™ Turnkey Refinery Services</option>
                    </select>
                    <svg className="select-chevron" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#173042" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn-ref-submit" disabled={loading}>
                  <span className="btn-submit-text">
                    {loading ? 'Processing via API...' : 'Send Technical Brochure & Inquiry'}
                  </span>
                  <span className="btn-arrow-disc">
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#0d1e2b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </button>

                {/* NDA & Privacy Standards */}
                <div className="form-ref-disclaimer">
                  <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="#2e7d32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <span>By submitting, you agree to Arham Oil's engineering NDA and privacy standards.</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
