'use client';

import React from 'react';
import { ArrowRight, MessageSquare, AlertCircle } from 'lucide-react';
import { getWhatsAppLink } from './WhatsAppHelper';

export const Hero = ({ onOpenDemoModal }) => {
  return (
    <section style={{ backgroundColor: '#ffffff', padding: '4rem 0 5rem 0', overflow: 'hidden' }}>
      <div className="landing-container">

        {/* 2 Column Hero Grid */}
        <div className="hero-grid-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2.5rem', alignItems: 'center' }}>

          {/* Left Hero Content */}
          <div className="hero-left-col" style={{ gridColumn: 'span 7' }}>

            {/* Subtitle pill badge */}
            <div style={{ marginBottom: '1.25rem' }}>
              <span className="landing-section-tag">
                BUILT FOR HOSTEL & PG OWNERS
              </span>
            </div>

            {/* Main H1 Headline */}
            <h1 className="landing-heading-h1" style={{ maxWidth: '640px', marginBottom: '1.25rem' }}>
              Run your hostel like a business, not a spreadsheet.
            </h1>

            {/* Description Subtitle */}
            <p style={{ fontSize: '1.15rem', color: '#475569', lineHeight: '1.6', maxWidth: '540px', fontWeight: '400', marginBottom: '2rem' }}>
              Nesting gives independent hostel and PG owners one clear control room for occupancy, rent, payments, expenses and profit.
            </p>

            {/* Dual CTA Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem' }}>
              <button
                onClick={onOpenDemoModal}
                className="landing-btn-primary"
                style={{ padding: '0.9rem 1.75rem', fontSize: '1rem' }}
              >
                Book a Demo
              </button>

              <a
                href={getWhatsAppLink("Hi Nesting! I'd like to know more about Nesting for my hostel.")}
                target="_blank"
                rel="noopener noreferrer"
                className="landing-btn-secondary"
                style={{ padding: '0.9rem 1.75rem', fontSize: '1rem' }}
              >
                <MessageSquare size={18} />
                Talk on WhatsApp
              </a>
            </div>

          </div>

          {/* Right Hero UI Mockup Card (Owner Control Room) */}
          <div className="hero-right-col" style={{ gridColumn: 'span 5', position: 'relative' }}>

            {/* Owner Control Room Card */}
            <div className="hero-control-card" style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 20px 35px -8px rgba(22, 91, 70, 0.08), 0 6px 12px -4px rgba(0,0,0,0.04)'
            }}>

              {/* Header Label */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #f1f5f9', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em', color: '#94a3b8', textTransform: 'uppercase' }}>
                  OWNER CONTROL ROOM
                </span>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#22c55e' }}></span>
              </div>

              {/* Primary Stat Block */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 className="hero-card-title" style={{ fontSize: '2.25rem', fontWeight: '800', color: '#0f172a', letterSpacing: '-0.02em', margin: 0 }}>
                  26 Vacant Beds
                </h3>
                <p style={{ fontSize: '0.9rem', fontWeight: '500', color: '#64748b', marginTop: '0.35rem' }}>
                  Potential monthly revenue: <span style={{ fontWeight: '700', color: '#165b46' }}>₹1,82,000</span>
                </p>
              </div>

              {/* Action Required Box */}
              <div style={{
                backgroundColor: '#f8faf9',
                border: '1px solid #e6ebe8',
                borderRadius: '14px',
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#334155', fontWeight: '600', fontSize: '0.85rem' }}>
                  <AlertCircle size={16} style={{ color: '#f59e0b' }} />
                  <span>Action Required</span>
                </div>

                <div>
                  <div style={{ fontSize: '1.35rem', fontWeight: '800', color: '#0f172a', wordBreak: 'break-word' }}>
                    ₹68,000 Rent Pending
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.15rem' }}>
                    17 residents overdue
                  </div>
                </div>

                <div style={{ paddingTop: '0.25rem' }}>
                  <a
                    href={getWhatsAppLink("Hi Nesting, I'd like to test sending WhatsApp rent reminders.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.8rem',
                      fontWeight: '700',
                      color: '#165b46',
                      textDecoration: 'none'
                    }}
                  >
                    Send WhatsApp reminders <ArrowRight size={14} />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 991px) {
          .hero-grid-container {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .hero-left-col,
          .hero-right-col {
            grid-column: auto !important;
          }
        }
        @media (max-width: 480px) {
          .hero-control-card {
            padding: 1.25rem !important;
          }
          .hero-card-title {
            font-size: 1.75rem !important;
          }
        }
      `}</style>
    </section>
  );
};
