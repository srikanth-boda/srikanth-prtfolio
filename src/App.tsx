/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Portfolio } from './components/Portfolio';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#141414] selection:bg-[#ebb02d] selection:text-black">
      {/* Floating Rounded Shape Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. What I Do (Features) */}
        <Features />

        {/* 3. Portfolio & Featured Work */}
        <Portfolio />

        {/* 4. Resume (Experience & Technical Skills - Academic credentials removed) */}
        <Resume />

        {/* 5. Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
