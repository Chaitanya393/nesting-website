'use client';

import React from 'react';
import { Home, Users, Activity } from 'lucide-react';

export const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Home,
      title: "Add your property",
      description: "Input your hostel block name, rooms, beds, and standard rent rates. Supports multiple hostels."
    },
    {
      number: "02",
      icon: Users,
      title: "Add your residents",
      description: "Import tenant name, WhatsApp number, security deposit, and actual move-in date. No app login required for students."
    },
    {
      number: "03",
      icon: Activity,
      title: "Run your business",
      description: "Instantly track occupied rooms, receive UPI payments directly, log bills, and see real-time daily profit reports."
    }
  ];

  return (
    <section id="how-it-works" style={{ padding: '5rem 0', backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
      <div className="landing-container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem auto' }}>
          <span className="landing-section-tag">
            3-STEP START
          </span>
          <h2 className="landing-heading-h2" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
            Setup in 15 minutes. Start running today.
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.6' }}>
            Nesting is designed exclusively for busy property owners. Absolutely zero learning curve.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="steps-cards-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                style={{
                  backgroundColor: '#f8faf9',
                  border: '1px solid #e2e8f0',
                  borderRadius: '20px',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.2s ease'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: '#eef7f3', color: '#165b46', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={22} />
                    </div>
                    <span style={{ fontSize: '1.75rem', fontWeight: '800', color: '#cbd5e1', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                      {step.number}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0f172a', marginBottom: '0.75rem' }}>
                    {step.title}
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.6', margin: 0 }}>
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        @media (max-width: 991px) {
          .steps-cards-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};
