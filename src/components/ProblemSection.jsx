'use client';

import React from 'react';
import { HelpCircle } from 'lucide-react';

export const ProblemSection = () => {
  const problems = [
    {
      title: "How many beds are vacant?",
      description: "No real-time grid means you either double-book or keep premium rooms empty for days."
    },
    {
      title: "Who hasn't paid rent?",
      description: "Manually matching bank transfers against student names in WhatsApp groups is exhausting."
    },
    {
      title: "How much money should I collect?",
      description: "Unclear overdue records cause forgotten utility fees, deposit disputes, and missed rent."
    },
    {
      title: "Where did my money go?",
      description: "Cash expenses for repairs, cleaners, and security vanish without instant logging."
    },
    {
      title: "What is my actual profit?",
      description: "Without structured dashboards, you only know if you made money at the end of the year."
    }
  ];

  return (
    <section style={{ padding: '5rem 0', backgroundColor: '#ffffff' }}>
      <div className="landing-container">
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem auto' }}>
          <span className="landing-section-tag">
            THE SPREAD-SHEET TRAP
          </span>
          <h2 className="landing-heading-h2" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
            Running a hostel shouldn't mean drowning in spreadsheets.
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.6' }}>
            Independent owners waste 15+ hours every month chasing rent, reconciling cash, and updating room occupancy on WhatsApp.
          </p>
        </div>

        {/* 5 Cards Row/Grid */}
        <div className="problem-cards-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1.25rem' }}>
          {problems.map((problem, idx) => (
            <div 
              key={idx} 
              style={{
                backgroundColor: '#f8faf9',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.2s ease'
              }}
              className="problem-card-hover"
            >
              <div>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: '#eef7f3',
                  color: '#165b46',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}>
                  <HelpCircle size={20} />
                </div>
                <h3 style={{ fontWeight: '700', color: '#0f172a', fontSize: '1rem', lineHeight: '1.35', marginBottom: '0.5rem' }}>
                  {problem.title}
                </h3>
                <p style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: '1.5', margin: 0 }}>
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .problem-card-hover:hover {
          border-color: #bce0d0 !important;
          background-color: #ffffff !important;
          box-shadow: 0 10px 25px -5px rgba(0,0,0,0.06) !important;
          transform: translateY(-2px);
        }
        @media (max-width: 1100px) {
          .problem-cards-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .problem-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 540px) {
          .problem-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
