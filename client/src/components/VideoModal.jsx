import React from 'react';

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="video-modal-backdrop active" onClick={onClose}>
      <div className="video-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close Modal">&times;</button>
        <div className="video-container-placeholder">
          <div className="video-inner-sim">
            <img src="/assets/banner.webp" alt="N-MER in Action" className="video-preview-img" />
            <div className="video-status-overlay">
              <span className="status-live-dot"></span> LIVE ATEX ZONE-0 ROBOTIC TANK DEPLOYMENT
              <h3>N-MER Autonomous 12 m³/hr Sludge Extraction Cycle</h3>
              <p>Recorded at IOCL Terminal & CPCL Manali Refinery Zone-0 Crude Storage Tank</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
