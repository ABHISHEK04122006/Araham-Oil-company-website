import React, { useState, useEffect } from 'react';

export default function AdminLeadsModal({ isOpen, onClose }) {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      fetchLeads();
    }
  }, [isOpen]);

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/leads');
      const data = await res.json();
      if (data.leads) {
        setLeads(data.leads);
      }
    } catch (e) {
      console.warn('Could not fetch leads:', e);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="video-modal-backdrop active" onClick={onClose}>
      <div className="admin-modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="admin-modal-header">
          <div>
            <h3>Arham Oil — MongoDB Leads & Inquiries Database</h3>
            <span className="admin-badge">Connected to mongodb://127.0.0.1:27017/arham_oil_db</span>
          </div>
          <button className="modal-close-btn" onClick={onClose}>&times;</button>
        </div>

        <div className="admin-modal-body">
          {loading ? (
            <p className="admin-status">Loading leads from MongoDB...</p>
          ) : leads.length === 0 ? (
            <div className="empty-leads">
              <p>No inquiries found in database yet. Submit the technical brochure form on the page to record your first lead!</p>
            </div>
          ) : (
            <div className="leads-table-wrap">
              <table className="leads-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Full Name</th>
                    <th>Work Email</th>
                    <th>Company</th>
                    <th>Tank Application</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((l, idx) => (
                    <tr key={l._id || idx}>
                      <td>{new Date(l.createdAt).toLocaleDateString()}</td>
                      <td><strong>{l.fullName}</strong></td>
                      <td>{l.workEmail}</td>
                      <td>{l.companyName}</td>
                      <td><span className="tank-badge">{l.tankType}</span></td>
                      <td><span className="status-badge-green">Recorded</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
