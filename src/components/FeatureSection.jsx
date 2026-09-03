'use client';

import React from 'react';
import { LayoutGrid, MessageSquare, TrendingUp, CheckCircle2, Send } from 'lucide-react';
import { getWhatsAppLink } from './WhatsAppHelper';

export const FeatureSection = () => {
  return (
    <section id="features" style={{ padding: '5rem 0', backgroundColor: '#f8faf9', borderTop: '1px solid #e2e8f0' }}>
      <div className="landing-container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 5rem auto' }}>
          <span className="landing-section-tag">
            PRODUCT FEATURES
          </span>
          <h2 className="landing-heading-h2" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
            Designed for independent hostel operations
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.6' }}>
            Everything you need in one powerful visual hub, built to run without complex student setups.
          </p>
        </div>

        {/* Feature 1: Occupancy at a Glance */}
        <div className="feature-block-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', marginBottom: '6rem' }}>
          
          {/* Left Description */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#eef7f3', color: '#165b46', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <LayoutGrid size={24} />
            </div>
            
            <h3 style={{ fontSize: '1.85rem', fontWeight: '800', color: '#0f172a', letterSpacing: '-0.02em', margin: 0 }}>
              Occupancy at a Glance
            </h3>

            <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Visualise your entire building in a clean interactive floor layout. See room types, vacancy indicators, student details, and billing status in one glance. Drag-and-drop bookings without any friction.
            </p>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingLeft: 0, listStyle: 'none' }}>
              {[
                "Visualise single, double, & triple rooms",
                "Track occupant profiles and deposit history",
                "Manage incoming block bookings instantly"
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#334155', fontWeight: '500', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={18} style={{ color: '#165b46', flexShrink: 0 }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Visual Mockup (Room Floorplan Grid) */}
          <div>
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '20px', padding: '1.75rem', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)' }}>
              
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #f1f5f9', paddingBottom: '1rem', marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em', color: '#94a3b8', textTransform: 'uppercase' }}>
                  BUILDING A — FIRST FLOOR
                </span>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', padding: '0.25rem 0.65rem', borderRadius: '12px', backgroundColor: '#eef7f3', color: '#165b46', border: '1px solid #bce0d0' }}>
                  82% Occupied
                </span>
              </div>

              {/* Grid of rooms */}
              <div className="feature-room-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
                {[
                  { room: "Room 101", status: "1 vacant beds", occupied: 2, total: 3 },
                  { room: "Room 102", status: "2 vacant beds", occupied: 1, total: 3 },
                  { room: "Room 103", status: "0 vacant beds", occupied: 2, total: 2 },
                  { room: "Room 104", status: "1 vacant beds", occupied: 1, total: 2 },
                  { room: "Room 105", status: "1 vacant beds", occupied: 2, total: 3 },
                  { room: "Room 106", status: "0 vacant beds", occupied: 2, total: 2 },
                ].map((r, idx) => (
                  <div key={idx} style={{ backgroundColor: '#f8faf9', border: '1px solid #f0f4f2', borderRadius: '12px', padding: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#0f172a' }}>{r.room}</div>
                    
                    {/* Dots indicator */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      {Array.from({ length: r.total }).map((_, i) => (
                        <span
                          key={i}
                          style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            backgroundColor: i < r.occupied ? '#165b46' : '#cbd5e1'
                          }}
                        />
                      ))}
                    </div>

                    <div style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: '500' }}>
                      {r.status}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

        {/* Feature 2: Rent Collection, Simplified */}
        <div className="feature-block-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', marginBottom: '6rem' }}>
          
          {/* Left Visual Mockup (Overdue Rents UI Card) */}
          <div className="feature-order-2">
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '20px', padding: '1.75rem', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.85rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em', color: '#94a3b8', textTransform: 'uppercase' }}>
                  OVERDUE RENTS
                </span>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#dc2626', backgroundColor: '#fef2f2', border: '1px solid #fecaca', padding: '0.25rem 0.65rem', borderRadius: '12px' }}>
                  ₹48,500 Overdue
                </span>
              </div>

              {/* Student Overdue Rows */}
              {[
                { name: "Rahul Sharma", details: "Room 101B • 5 Days Overdue", amount: "₹8,500" },
                { name: "Vikas Patel", details: "Room 204A • 3 Days Overdue", amount: "₹9,000" },
                { name: "Priya Sharma", details: "Room 108C • 12 Days Overdue", amount: "₹8,500" },
              ].map((s, idx) => (
                <div key={idx} className="student-overdue-row" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center', justifyContent: 'space-between', padding: '0.85rem 1rem', backgroundColor: '#f8faf9', border: '1px solid #f0f4f2', borderRadius: '12px' }}>
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: '700', color: '#0f172a' }}>{s.name}</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.15rem' }}>{s.details}</div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ fontSize: '0.9rem', fontWeight: '800', color: '#0f172a' }}>{s.amount}</span>
                    <a
                      href={getWhatsAppLink(`Hi ${s.name}, gentle reminder regarding rent of ${s.amount} for Nesting Hostel.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: '0.35rem 0.75rem',
                        backgroundColor: '#165b46',
                        color: '#ffffff',
                        fontWeight: '600',
                        fontSize: '0.75rem',
                        borderRadius: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        textDecoration: 'none'
                      }}
                    >
                      <Send size={12} /> WhatsApp
                    </a>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* Right Description */}
          <div className="feature-order-1" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#eef7f3', color: '#165b46', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <MessageSquare size={24} />
            </div>

            <h3 style={{ fontSize: '1.85rem', fontWeight: '800', color: '#0f172a', letterSpacing: '-0.02em', margin: 0 }}>
              Rent Collection, Simplified
            </h3>

            <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Stop chasing students over phone calls or searching through messy bank statements. Send pre-filled 1-tap WhatsApp reminders with exact overdue amounts and UPI payment details directly to tenants.
            </p>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingLeft: 0, listStyle: 'none' }}>
              {[
                "1-tap WhatsApp reminder generation",
                "Auto-calculated overdue rent & late fee tracking",
                "Instant digital payment receipt logging"
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#334155', fontWeight: '500', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={18} style={{ color: '#165b46', flexShrink: 0 }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Feature 3: Expenses & Profit, Finally Clear */}
        <div className="feature-block-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          
          {/* Left Description */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#eef7f3', color: '#165b46', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <TrendingUp size={24} />
            </div>

            <h3 style={{ fontSize: '1.85rem', fontWeight: '800', color: '#0f172a', letterSpacing: '-0.02em', margin: 0 }}>
              Expenses & Profit, Finally Clear
            </h3>

            <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Record daily operations bills like electricity, cleaning staff, water tankers, or Wi-Fi packages. Nesting automatically subtracts expenses from collected rent to calculate your true business profit every month.
            </p>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingLeft: 0, listStyle: 'none' }}>
              {[
                "Log expenses on the go by category",
                "Download monthly P&L statements for tax & partners",
                "Track utility bill cycles and avoid late fees"
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#334155', fontWeight: '500', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={18} style={{ color: '#165b46', flexShrink: 0 }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Visual Mockup (Financial Summary Card) */}
          <div>
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '20px', padding: '1.75rem', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.85rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em', color: '#94a3b8', textTransform: 'uppercase' }}>
                  FINANCIAL SUMMARY
                </span>
                <span style={{ fontSize: '0.75rem', fontWeight: '600', color: '#64748b' }}>
                  October 2025
                </span>
              </div>

              {/* 2 Stat Boxes */}
              <div className="financial-stat-boxes" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ backgroundColor: '#f8faf9', padding: '1rem', borderRadius: '12px', border: '1px solid #f0f4f2' }}>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Total Rent Collected</div>
                  <div style={{ fontSize: '1.35rem', fontWeight: '800', color: '#0f172a', marginTop: '0.25rem' }}>₹4,12,000</div>
                </div>

                <div style={{ backgroundColor: '#fef2f2', padding: '1rem', borderRadius: '12px', border: '1px solid #fecaca' }}>
                  <div style={{ fontSize: '0.75rem', color: '#dc2626' }}>Logged Expenses</div>
                  <div style={{ fontSize: '1.35rem', fontWeight: '800', color: '#dc2626', marginTop: '0.25rem' }}>₹1,18,000</div>
                </div>
              </div>

              {/* Net Operating Profit progress bar */}
              <div style={{ backgroundColor: '#f8faf9', padding: '1.25rem', borderRadius: '12px', border: '1px solid #f0f4f2', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#334155', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Net Operating Profit
                  </span>
                  <span style={{ fontSize: '1.2rem', fontWeight: '800', color: '#165b46' }}>
                    ₹2,94,000
                  </span>
                </div>

                {/* Progress bar split */}
                <div style={{ width: '100%', height: '12px', backgroundColor: '#e2e8f0', borderRadius: '20px', overflow: 'hidden', display: 'flex' }}>
                  <div style={{ width: '71%', height: '100%', backgroundColor: '#165b46' }}></div>
                  <div style={{ width: '29%', height: '100%', backgroundColor: '#ef4444' }}></div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.75rem', color: '#64748b' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#165b46' }}></span>
                    <span>Profit (71%)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ef4444' }}></span>
                    <span>Expenses (29%)</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 991px) {
          .feature-block-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .feature-order-1 {
            order: 1 !important;
          }
          .feature-order-2 {
            order: 2 !important;
          }
        }
        @media (max-width: 480px) {
          .feature-room-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .financial-stat-boxes {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
