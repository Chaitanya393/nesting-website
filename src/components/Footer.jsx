'use client';

import React from 'react';
import Link from 'next/link';
import { getWhatsAppLink } from './WhatsAppHelper';

export const Footer = ({ onOpenDemoModal }) => {
  return (
    <footer style={{ backgroundColor: '#0f172a', color: '#94a3b8', padding: '4rem 0 2rem 0', borderTop: '1px solid #1e293b' }}>
      <div className="landing-container">
        
        <div className="footer-columns-grid" style={{ display: 'grid', gridTemplateColumns: '5fr 3fr 4fr', gap: '3rem', paddingBottom: '3rem', borderBottom: '1px solid #1e293b' }}>
          
          {/* Brand Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#165b46', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '1rem' }}>
                N
              </div>
              <span style={{ fontWeight: '800', fontSize: '1.25rem', color: '#ffffff', letterSpacing: '-0.02em' }}>
                nesting
              </span>
            </Link>

            <p style={{ color: '#94a3b8', fontSize: '0.85rem', maxWidth: '360px', lineHeight: '1.6', margin: 0 }}>
              The Operating System for Hostel & PG Owners. Designed specifically for independent operators in Indore, India.
            </p>

            <div style={{ paddingTop: '0.5rem' }}>
              <span style={{ fontSize: '0.7rem', fontWeight: '700', color: '#34d399', backgroundColor: 'rgba(6, 78, 59, 0.5)', border: '1px solid #065f46', padding: '0.25rem 0.75rem', borderRadius: '20px', display: 'inline-block' }}>
                Indore Market Launch • B2B SaaS ERP
              </span>
            </div>
          </div>

          {/* Links Column 1: Product */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: '700', color: '#f8fafc', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Product
            </div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingLeft: 0, listStyle: 'none', margin: 0, fontSize: '0.85rem' }}>
              <li><a href="#features" style={{ color: '#94a3b8', textDecoration: 'none' }}>Occupancy Floorplan</a></li>
              <li><a href="#features" style={{ color: '#94a3b8', textDecoration: 'none' }}>WhatsApp Rent Reminders</a></li>
              <li><a href="#features" style={{ color: '#94a3b8', textDecoration: 'none' }}>Expenses & P&L Download</a></li>
              <li><a href="#pricing" style={{ color: '#94a3b8', textDecoration: 'none' }}>Pricing Plans</a></li>
            </ul>
          </div>

          {/* Links Column 2: Navigation & Support */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: '700', color: '#f8fafc', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Get in Touch
            </div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingLeft: 0, listStyle: 'none', margin: 0, fontSize: '0.85rem' }}>
              <li>
                <button onClick={onOpenDemoModal} style={{ background: 'none', border: 'none', color: '#34d399', fontWeight: '700', cursor: 'pointer', padding: 0, textAlign: 'left', fontSize: '0.85rem' }}>
                  Book a 1-on-1 Demo →
                </button>
              </li>
              <li>
                <a 
                  href={getWhatsAppLink("Hi Nesting, I'm reaching out from the Nesting website footer.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#94a3b8', textDecoration: 'none' }}
                >
                  WhatsApp Onboarding Support
                </a>
              </li>
              <li>
                <a href="https://app.nesting.in" target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8', textDecoration: 'none' }}>
                  Owner Dashboard Login
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ paddingTop: '2rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.75rem', color: '#64748b', gap: '1rem' }}>
          <div>
            © 2026 Nesting Operating Systems. All rights reserved.
          </div>
          <div>
            Built for independent hostel & PG owners in Indore, India.
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-columns-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </footer>
  );
};
