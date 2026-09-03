'use client';

import React from 'react';
import { Check } from 'lucide-react';

export const PricingSection = ({ onOpenDemoModal }) => {
  return (
    <section id="pricing" style={{ padding: '5rem 0', backgroundColor: '#f8faf9', borderTop: '1px solid #e2e8f0' }}>
      <div className="landing-container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem auto' }}>
          <span className="landing-section-tag">
            PRICING
          </span>
          <h2 className="landing-heading-h2" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
            Simple, transparent, owner-first pricing
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.6' }}>
            Start managing your hostel for free. Upgrade to unlock direct automated WhatsApp reminders and unlimited rooms.
          </p>
        </div>

        {/* 2 Pricing Cards */}
        <div className="pricing-cards-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', maxWidth: '900px', margin: '0 auto', alignItems: 'stretch' }}>
          
          {/* Card 1: Free Plan */}
          <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '20px', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#0f172a', margin: '0 0 0.5rem 0' }}>Free Plan</h3>
              
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', margin: '1rem 0' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0f172a', letterSpacing: '-0.02em' }}>₹0</span>
              </div>

              <p style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '1.5rem', fontWeight: '500' }}>
                Perfect for getting started with small properties
              </p>

              <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {[
                  "Up to 1 property",
                  "Up to 20 beds maximum",
                  "Visual Room Grid",
                  "Basic occupancy reports",
                  "Email support"
                ].map((feature, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.85rem', color: '#334155', fontWeight: '500' }}>
                    <Check size={16} style={{ color: '#165b46', flexShrink: 0 }} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ paddingTop: '2rem' }}>
              <button
                onClick={onOpenDemoModal}
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem',
                  backgroundColor: '#f1f5f9',
                  color: '#1e293b',
                  fontWeight: '700',
                  borderRadius: '12px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.9rem'
                }}
              >
                Get Started Free
              </button>
            </div>
          </div>

          {/* Card 2: Pro Plan (Recommended) */}
          <div style={{ backgroundColor: '#ffffff', border: '2px solid #165b46', borderRadius: '20px', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 20px 35px -8px rgba(22, 91, 70, 0.08)', position: 'relative' }}>
            
            {/* Top Recommended Tag */}
            <div style={{ position: 'absolute', top: '-14px', right: '24px', backgroundColor: '#eef7f3', border: '1px solid #bce0d0', color: '#165b46', fontWeight: '800', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.25rem 0.75rem', borderRadius: '20px' }}>
              RECOMMENDED
            </div>

            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#0f172a', margin: '0 0 0.5rem 0' }}>Pro Plan</h3>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', margin: '1rem 0' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0f172a', letterSpacing: '-0.02em' }}>₹999</span>
                <span style={{ color: '#64748b', fontWeight: '600', fontSize: '0.85rem' }}>/month</span>
              </div>

              <p style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '1.5rem', fontWeight: '500' }}>
                For owners running professional operations
              </p>

              <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {[
                  "Unlimited Properties & Buildings",
                  "Unlimited Rooms & Beds",
                  "Automated WhatsApp reminders",
                  "Direct UPI integration",
                  "Expense tracking & P&L download",
                  "24/7 Priority WhatsApp Support"
                ].map((feature, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.85rem', color: '#0f172a', fontWeight: '600' }}>
                    <Check size={16} style={{ color: '#165b46', flexShrink: 0 }} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ paddingTop: '2rem' }}>
              <button
                onClick={onOpenDemoModal}
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem',
                  backgroundColor: '#165b46',
                  color: '#ffffff',
                  fontWeight: '700',
                  borderRadius: '12px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  boxShadow: '0 4px 12px rgba(22, 91, 70, 0.2)'
                }}
              >
                Go Pro — ₹999/mo
              </button>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .pricing-cards-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};
