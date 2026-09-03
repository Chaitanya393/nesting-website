'use client';

import React from 'react';

export const TrustStats = () => {
  const stats = [
    { number: '50+', label: 'Properties Active' },
    { number: '5,000+', label: 'Beds Managed' },
    { number: '₹2Cr+', label: 'Rent Tracked' },
    { number: '1 Tap', label: 'WhatsApp Reminder' },
  ];

  return (
    <section style={{ backgroundColor: '#f8faf9', padding: '3rem 0', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
      <div className="landing-container" style={{ textAlign: 'center' }}>
        
        {/* Header Tag */}
        <p style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.12em', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '2rem' }}>
          TRUSTED BY 50+ HOSTEL OWNERS IN INDORE
        </p>

        {/* 4 Stats Grid */}
        <div className="stats-grid-wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
          {stats.map((stat, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <div style={{ fontSize: '2.25rem', fontWeight: '800', color: '#165b46', letterSpacing: '-0.02em', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                {stat.number}
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: '500', color: '#64748b' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .stats-grid-wrap {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};
