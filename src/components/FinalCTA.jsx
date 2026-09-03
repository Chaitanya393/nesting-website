'use client';

import React from 'react';
import { MessageSquare } from 'lucide-react';
import { getWhatsAppLink } from './WhatsAppHelper';

export const FinalCTA = ({ onOpenDemoModal }) => {
  return (
    <section style={{ padding: '4rem 0 6rem 0', backgroundColor: '#ffffff' }}>
      <div className="landing-container">
        
        <div style={{
          backgroundColor: '#064e3b',
          borderRadius: '28px',
          padding: '4rem 2rem',
          textAlign: 'center',
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(6, 78, 59, 0.25)'
        }}>

          <div style={{ position: 'relative', zIndex: 10, maxWidth: '720px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', tracking: '-0.02em', lineHeight: '1.2', margin: 0 }}>
              Ready to run your hostel like a real business?
            </h2>

            <p style={{ color: '#a7f3d0', fontSize: '1.1rem', maxWidth: '540px', margin: '0 auto', fontWeight: '400', lineHeight: '1.6' }}>
              Join 50+ independent owners in Indore who saved 15+ hours every month with Nesting.
            </p>

            <div style={{ paddingTop: '1rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
              <button
                onClick={onOpenDemoModal}
                style={{
                  padding: '0.9rem 1.75rem',
                  backgroundColor: '#ffffff',
                  color: '#064e3b',
                  fontWeight: '800',
                  borderRadius: '12px',
                  border: 'none',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                }}
              >
                Book a Demo
              </button>

              <a
                href={getWhatsAppLink("Hi Nesting! I want to get started with Nesting for my hostel.")}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '0.9rem 1.75rem',
                  backgroundColor: '#047857',
                  color: '#ffffff',
                  fontWeight: '700',
                  borderRadius: '12px',
                  border: '1px solid #059669',
                  fontSize: '1rem',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <MessageSquare size={18} style={{ color: '#6ee7b7' }} />
                Talk on WhatsApp
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
