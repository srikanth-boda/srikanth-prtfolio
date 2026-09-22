/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Portfolio } from './components/Portfolio';
import { TechStack } from './components/TechStack';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const ResumeModal = React.lazy(() =>
  import('./components/ResumeModal').then((m) => ({ default: m.ResumeModal }))
);

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#141414] selection:bg-[#ebb02d] selection:text-black">
      {/* Floating Rounded Shape Navbar */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. What I Do (Features) */}
        <Features />

        {/* 3. Portfolio & Featured Work */}
        <Portfolio />

        {/* 4. Technical Stack & Systems */}
        <TechStack />

        {/* 5. Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Full Resume Preview & Download Modal */}
      {isResumeModalOpen && (
        <React.Suspense fallback={null}>
          <ResumeModal
            isOpen={isResumeModalOpen}
            onClose={() => setIsResumeModalOpen(false)}
          />
        </React.Suspense>
      )}
    </div>
  );
}
