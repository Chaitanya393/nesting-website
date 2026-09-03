'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Do my students need to download an app or register?",
      answer: "No. Nesting is strictly owner-first. Students do not need any account, app, or login. You manage everything internally, and they receive pre-filled WhatsApp links for payment receipts and rent reminders."
    },
    {
      question: "Is my tenant and financial data safe?",
      answer: "Yes, 100%. We employ bank-grade encryption to protect your records. Your data is stored on secure cloud servers and is never shared, sold, or used for ads."
    },
    {
      question: "Can I manage multiple different PG buildings?",
      answer: "Yes. The Pro plan allows you to add and switch between multiple hostel blocks or PG buildings from a single login dashboard."
    },
    {
      question: "How does the WhatsApp integration work?",
      answer: "Nesting automatically generates structured WhatsApp reminder messages with direct payment amounts and links. You can click 'Send' to dispatch them directly via your WhatsApp account without manual typing."
    },
    {
      question: "What if I need help setting up my rooms?",
      answer: "Our dedicated onboarding team is available on WhatsApp 24/7. We can help you upload your room list, rates, and initial student profiles in under an hour."
    }
  ];

  return (
    <section id="faq" style={{ padding: '5rem 0', backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
      <div className="landing-container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem auto' }}>
          <span className="landing-section-tag">
            COMMON QUESTIONS
          </span>
          <h2 className="landing-heading-h2" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
            Frequently Asked Questions
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.6' }}>
            Everything you need to know about setting up Nesting for your PG or Hostel.
          </p>
        </div>

        {/* FAQ Accordions list */}
        <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                style={{
                  border: isOpen ? '1px solid #bce0d0' : '1px solid #e2e8f0',
                  borderRadius: '16px',
                  backgroundColor: '#ffffff',
                  boxShadow: isOpen ? '0 10px 25px -5px rgba(0,0,0,0.05)' : 'none',
                  overflow: 'hidden',
                  transition: 'all 0.2s ease'
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    outline: 'none'
                  }}
                  aria-expanded={isOpen}
                >
                  <span style={{ fontWeight: '700', color: '#0f172a', fontSize: '1.05rem' }}>
                    {faq.question}
                  </span>
                  <ChevronDown 
                    size={20}
                    style={{
                      color: isOpen ? '#165b46' : '#94a3b8',
                      flexShrink: 0,
                      transform: isOpen ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.2s ease'
                    }} 
                  />
                </button>

                {isOpen && (
                  <div style={{ padding: '0 1.5rem 1.25rem 1.5rem', color: '#475569', fontSize: '0.95rem', lineHeight: '1.6', borderTop: '1px solid #f1f5f9' }}>
                    <p style={{ paddingTop: '0.75rem', margin: 0 }}>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
