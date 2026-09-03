'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { TrustStats } from '@/components/TrustStats';
import { ProblemSection } from '@/components/ProblemSection';
import { FeatureSection } from '@/components/FeatureSection';
import { HowItWorks } from '@/components/HowItWorks';
import { PricingSection } from '@/components/PricingSection';
import { FAQSection } from '@/components/FAQSection';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { DemoModal } from '@/components/DemoModal';

export default function LandingPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleOpenDemoModal = () => {
    setIsDemoModalOpen(true);
  };

  const handleCloseDemoModal = () => {
    setIsDemoModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* 1. Sticky Navigation Header */}
      <Navbar onOpenDemoModal={handleOpenDemoModal} />

      <main>
        {/* 2. Hero Section */}
        <Hero onOpenDemoModal={handleOpenDemoModal} />

        {/* 3. Trust Proof Stats Bar */}
        <TrustStats />

        {/* 4. Spreadsheet Trap / Problem Section */}
        <ProblemSection />

        {/* 5. Product Features & Visual UI Showcases */}
        <FeatureSection />

        {/* 6. 3-Step Setup / How It Works */}
        <HowItWorks />

        {/* 7. Simple Owner-First Pricing */}
        <PricingSection onOpenDemoModal={handleOpenDemoModal} />

        {/* 8. Frequently Asked Questions */}
        <FAQSection />

        {/* 9. Final Emerald CTA Banner */}
        <FinalCTA onOpenDemoModal={handleOpenDemoModal} />
      </main>

      {/* 10. Footer */}
      <Footer onOpenDemoModal={handleOpenDemoModal} />

      {/* Interactive Demo Lead Capture Modal */}
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={handleCloseDemoModal} 
      />
    </div>
  );
}
