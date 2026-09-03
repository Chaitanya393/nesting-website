'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, Building2, Phone, User, BedSingle, MapPin } from 'lucide-react';
import { getWhatsAppLink } from './WhatsAppHelper';

export const DemoModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    hostelName: '',
    totalBeds: '',
    city: 'Indore'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const msg = `Hi Nesting team, I submitted a demo request!\n\nName: ${formData.name}\nHostel/PG: ${formData.hostelName}\nBeds: ${formData.totalBeds}\nPhone: ${formData.phone}\nCity: ${formData.city}`;
    window.open(getWhatsAppLink(msg), '_blank');
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      backgroundColor: 'rgba(15, 23, 42, 0.65)',
      backdropFilter: 'blur(6px)'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '520px',
        backgroundColor: '#ffffff',
        borderRadius: '20px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        overflow: 'hidden',
        border: '1px solid #e2e8f0'
      }}>
        
        {/* Header */}
        <div style={{
          padding: '1.25rem 1.5rem',
          backgroundColor: '#064e3b',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              backgroundColor: '#047857',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '800',
              fontSize: '1.1rem'
            }}>
              N
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', margin: 0, lineHeight: 1.2 }}>Book a Nesting Demo</h3>
              <p style={{ fontSize: '0.75rem', color: '#a7f3d0', margin: '0.15rem 0 0 0' }}>See how Nesting runs your hostel operations in 15 mins</p>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: '#a7f3d0', cursor: 'pointer', padding: '0.35rem', borderRadius: '6px' }}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div style={{ padding: '1.5rem' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
              <div style={{ width: '56px', height: '56px', backgroundColor: '#d1fae5', color: '#047857', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                <CheckCircle2 size={32} />
              </div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0f172a', marginBottom: '0.5rem' }}>Demo Request Received!</h4>
              <p style={{ fontSize: '0.9rem', color: '#475569', marginBottom: '1.5rem', maxWidth: '380px', margin: '0 auto 1.5rem auto' }}>
                Thank you, <span style={{ fontWeight: '700', color: '#0f172a' }}>{formData.name}</span>. Our Indore onboarding team will contact you shortly on <span style={{ fontWeight: '700', color: '#0f172a' }}>{formData.phone}</span>.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <button
                  onClick={handleWhatsAppRedirect}
                  className="landing-btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Connect Immediately on WhatsApp →
                </button>
                <button
                  onClick={onClose}
                  style={{ width: '100%', padding: '0.65rem 1rem', backgroundColor: '#f1f5f9', border: 'none', color: '#334155', fontWeight: '600', borderRadius: '12px', cursor: 'pointer', fontSize: '0.85rem' }}
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', color: '#334155', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>Your Full Name *</label>
                <div style={{ position: 'relative' }}>
                  <User size={16} style={{ position: 'absolute', left: '12px', top: '12px', color: '#94a3b8' }} />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Verma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ width: '100%', paddingLeft: '38px', paddingRight: '12px', paddingTop: '10px', paddingBottom: '10px', fontSize: '0.9rem', border: '1px solid #cbd5e1', borderRadius: '10px', outline: 'none', color: '#0f172a' }}
                  />
                </div>
              </div>

              <div className="demo-modal-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', color: '#334155', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>WhatsApp Phone *</label>
                  <div style={{ position: 'relative' }}>
                    <Phone size={16} style={{ position: 'absolute', left: '12px', top: '12px', color: '#94a3b8' }} />
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{ width: '100%', paddingLeft: '38px', paddingRight: '12px', paddingTop: '10px', paddingBottom: '10px', fontSize: '0.9rem', border: '1px solid #cbd5e1', borderRadius: '10px', outline: 'none', color: '#0f172a' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', color: '#334155', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>City / Market *</label>
                  <div style={{ position: 'relative' }}>
                    <MapPin size={16} style={{ position: 'absolute', left: '12px', top: '12px', color: '#94a3b8' }} />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Indore"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      style={{ width: '100%', paddingLeft: '38px', paddingRight: '12px', paddingTop: '10px', paddingBottom: '10px', fontSize: '0.9rem', border: '1px solid #cbd5e1', borderRadius: '10px', outline: 'none', color: '#0f172a' }}
                    />
                  </div>
                </div>
              </div>

              <div className="demo-modal-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', color: '#334155', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>Hostel / PG Name *</label>
                  <div style={{ position: 'relative' }}>
                    <Building2 size={16} style={{ position: 'absolute', left: '12px', top: '12px', color: '#94a3b8' }} />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Royal PG for Boys"
                      value={formData.hostelName}
                      onChange={(e) => setFormData({ ...formData, hostelName: e.target.value })}
                      style={{ width: '100%', paddingLeft: '38px', paddingRight: '12px', paddingTop: '10px', paddingBottom: '10px', fontSize: '0.9rem', border: '1px solid #cbd5e1', borderRadius: '10px', outline: 'none', color: '#0f172a' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', color: '#334155', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>Approx. Beds *</label>
                  <div style={{ position: 'relative' }}>
                    <BedSingle size={16} style={{ position: 'absolute', left: '12px', top: '12px', color: '#94a3b8' }} />
                    <input
                      type="number"
                      required
                      min="1"
                      placeholder="e.g. 45"
                      value={formData.totalBeds}
                      onChange={(e) => setFormData({ ...formData, totalBeds: e.target.value })}
                      style={{ width: '100%', paddingLeft: '38px', paddingRight: '12px', paddingTop: '10px', paddingBottom: '10px', fontSize: '0.9rem', border: '1px solid #cbd5e1', borderRadius: '10px', outline: 'none', color: '#0f172a' }}
                    />
                  </div>
                </div>
              </div>

              <div style={{ paddingTop: '0.5rem' }}>
                <button
                  type="submit"
                  className="landing-btn-primary"
                  style={{ width: '100%', justifyContent: 'center', padding: '0.85rem' }}
                >
                  Book 1-on-1 Demo →
                </button>
              </div>

              <p style={{ textAlign: 'center', fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem' }}>
                Zero spam promise. We only use your phone for scheduling the demo.
              </p>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 520px) {
          .demo-modal-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
