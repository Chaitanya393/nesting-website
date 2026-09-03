'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';

export const Navbar = ({ onOpenDemoModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="landing-header" style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.96)' : '#ffffff',
      backdropFilter: scrolled ? 'blur(8px)' : 'none',
      borderBottom: '1px solid #e2e8f0',
      padding: scrolled ? '0.85rem 0' : '1.2rem 0',
      transition: 'all 0.2s ease'
    }}>
      <div className="landing-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none' }}>
          <div style={{
            width: '34px',
            height: '34px',
            borderRadius: '8px',
            backgroundColor: 'var(--nesting-emerald, #165b46)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '800',
            fontSize: '1.1rem'
          }}>
            N
          </div>
          <span style={{ fontWeight: '800', fontSize: '1.35rem', letterSpacing: '-0.03em', color: '#0f172a', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            nesting
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav-links" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <a href="#features" style={{ color: '#475569', fontSize: '0.9rem', fontWeight: '500', textDecoration: 'none' }}>Features</a>
          <a href="#how-it-works" style={{ color: '#475569', fontSize: '0.9rem', fontWeight: '500', textDecoration: 'none' }}>How it works</a>
          <a href="#pricing" style={{ color: '#475569', fontSize: '0.9rem', fontWeight: '500', textDecoration: 'none' }}>Pricing</a>
          <a href="#faq" style={{ color: '#475569', fontSize: '0.9rem', fontWeight: '500', textDecoration: 'none' }}>FAQ</a>
        </nav>

        {/* Desktop Right CTAs */}
        <div className="desktop-cta-group" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a 
            href="https://app.nesting.in" 
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#334155', fontSize: '0.9rem', fontWeight: '600', textDecoration: 'none', padding: '0.5rem 0.75rem' }}
          >
            Owner Login
          </a>
          <button
            onClick={onOpenDemoModal}
            className="landing-btn-primary"
            style={{ padding: '0.65rem 1.25rem', fontSize: '0.9rem' }}
          >
            Book a Demo
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-toggle-btn"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', color: '#0f172a' }}
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav-links, .desktop-cta-group {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: block !important;
          }
        }
        @media (min-width: 769px) {
          .mobile-toggle-btn {
            display: none !important;
          }
        }
      `}</style>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <a href="#features" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#0f172a', fontWeight: '600', padding: '0.5rem 0', borderBottom: '1px solid #f1f5f9' }}>Features</a>
          <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#0f172a', fontWeight: '600', padding: '0.5rem 0', borderBottom: '1px solid #f1f5f9' }}>How it works</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#0f172a', fontWeight: '600', padding: '0.5rem 0', borderBottom: '1px solid #f1f5f9' }}>Pricing</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#0f172a', fontWeight: '600', padding: '0.5rem 0', borderBottom: '1px solid #f1f5f9' }}>FAQ</a>
          <a href="https://app.nesting.in" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#165b46', fontWeight: '700', padding: '0.5rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            Owner ERP Login <ArrowRight size={16} />
          </a>
          <button
            onClick={() => { setMobileMenuOpen(false); onOpenDemoModal(); }}
            className="landing-btn-primary"
            style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
          >
            Book a Demo
          </button>
        </div>
      )}
    </header>
  );
};
