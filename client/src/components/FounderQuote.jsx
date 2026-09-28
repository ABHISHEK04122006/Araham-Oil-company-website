import React from 'react';

export default function FounderQuote() {
  return (
    <section className="founder-quote-section" id="vision">
      <div className="founder-quote-container">
        {/* Lime Green Double Quote Icon */}
        <div className="founder-quote-icon" aria-hidden="true">
          <svg width="48" height="40" viewBox="0 0 46 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 24.5V42H17.5V24.5H8.75C8.75 14.875 14 9.625 21 7L16.625 0C6.125 4.375 0 12.25 0 24.5ZM24.5 24.5V42H42V24.5H33.25C33.25 14.875 38.5 9.625 45.5 7L41.125 0C30.625 4.375 24.5 12.25 24.5 24.5Z"
              fill="#7cad3e"
            />
          </svg>
        </div>

        {/* Main Quote Statement */}
        <blockquote className="founder-quote-text">
          A Robot cannot replace humans, but it should, and it must replace, hundreds and thousands of fellow human beings entering confined spaces daily for their livelihood.
        </blockquote>

        {/* Vertical Divider */}
        <div className="founder-vertical-divider" aria-hidden="true" />

        {/* Founder Attribution */}
        <h3 className="founder-author-name">Manikandan Dakshinamoorthy</h3>
        <p className="founder-author-role">Founder &amp; CEO at Arham Oil</p>
      </div>
    </section>
  );
}
