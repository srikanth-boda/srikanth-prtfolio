import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowDown, Code2, Database, Server, Container } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  // Typewriter effect states
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  const roles = PERSONAL_INFO.typewriterRoles;

  useEffect(() => {
    if (!roles || roles.length === 0) return;
    const safeIndex = currentRoleIndex % roles.length;
    const fullRole = roles[safeIndex] || '';

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing characters
        setCurrentText(fullRole.substring(0, currentText.length + 1));

        if (currentText.length + 1 === fullRole.length) {
          // Pause before starting deletion
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        // Deleting characters
        setCurrentText(fullRole.substring(0, currentText.length - 1));

        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 60 : typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, roles, typingSpeed]);

  return (
    <section id="home" className="pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        
        {/* Left Column: Hero Text Content */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
          

          {/* Main Name & Title with Inspiration Font Hierarchy */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#141414] tracking-tight leading-[1.15] mb-2.5">
            Hi, I'm <span className="text-[#141414]">{PERSONAL_INFO.name}</span>
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#ebb02d] text-[#141414] text-base font-black ml-2 align-middle shadow-xs">
              ↳
            </span>
            <br />
            <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-500 block mt-2">
              <span className="text-[#141414]">I am </span>
              <span className="text-[#ebb02d] underline decoration-[#ebb02d]/40 decoration-wavy underline-offset-8">
                {currentText}
              </span>
              <span className="animate-pulse text-[#ebb02d] font-normal ml-0.5">|</span>
            </span>
          </h1>

          {/* Bio Description Strictly Reduced to 2 Lines */}
          <p className="mt-3 sm:mt-3.5 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
            Full Stack MERN Developer building high-performance web applications and secure REST APIs.
            <br className="hidden sm:inline" />
            Specialized in scalable frontend engineering and automated Cloud CI/CD deployments.
          </p>

          {/* Action CTAs in inspiration pill styling */}
          <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3">
            <a
              href="#contact"
              className="bg-[#ebb02d] hover:bg-[#d99f24] text-[#141414] text-xs font-extrabold px-6 py-3.5 rounded-full flex items-center gap-2 transition-all shadow-md shadow-[#ebb02d]/25 hover:scale-[1.02]"
            >
              <span>Connect With Me</span>
              <span className="font-black text-sm">↳</span>
            </a>
            <a
              href="#portfolio"
              className="bg-white hover:bg-neutral-50 text-[#141414] text-xs font-extrabold px-6 py-3.5 rounded-full flex items-center gap-2 transition-all border border-neutral-300 shadow-xs hover:scale-[1.02]"
            >
              <span>View Projects</span>
              <span className="font-black text-sm">↳</span>
            </a>
          </div>

          {/* Social & Skill Dual Section */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 border-t border-neutral-200/80 pt-5 sm:pt-6">
            
            {/* Find With Me */}
            <div className="text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 block mb-2.5 sm:mb-3">
                FIND WITH ME
              </span>
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 sm:w-12 sm:h-12 inbio-btn flex items-center justify-center text-neutral-700 hover:text-black transition-all"
                  aria-label="GitHub Profile"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 sm:w-12 sm:h-12 inbio-btn flex items-center justify-center text-neutral-700 hover:text-black transition-all"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="w-11 h-11 sm:w-12 sm:h-12 inbio-btn flex items-center justify-center text-neutral-700 hover:text-black transition-all"
                  aria-label="Send Email"
                  title="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Best Skill On */}
            <div className="text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 block mb-2.5 sm:mb-3">
                BEST SKILL ON
              </span>
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <div
                  className="w-11 h-11 sm:w-12 sm:h-12 inbio-btn flex items-center justify-center text-neutral-700 hover:text-black transition-all group"
                  title="React.js"
                >
                  <Code2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </div>
                <div
                  className="w-11 h-11 sm:w-12 sm:h-12 inbio-btn flex items-center justify-center text-neutral-700 hover:text-black transition-all group"
                  title="Node.js & Express"
                >
                  <Server className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </div>
                <div
                  className="w-11 h-11 sm:w-12 sm:h-12 inbio-btn flex items-center justify-center text-neutral-700 hover:text-black transition-all group"
                  title="MongoDB"
                >
                  <Database className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </div>
                <div
                  className="w-11 h-11 sm:w-12 sm:h-12 inbio-btn flex items-center justify-center text-neutral-700 hover:text-black transition-all group"
                  title="Docker & Kubernetes"
                >
                  <Container className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Right Column: Tactile Portrait Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm sm:max-w-md">
            {/* The main InBio Tactile Card */}
            <div className="inbio-card p-4 sm:p-6 relative overflow-hidden">
              <div className="aspect-[4/3.7] rounded-2xl overflow-hidden bg-neutral-100 shadow-inner relative group">
                <img
                  src={PERSONAL_INFO.portraitImage}
                  alt={PERSONAL_INFO.name}
                  width="400"
                  height="370"
                  fetchPriority="high"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.02] group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                {/* Bottom label on portrait */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#ebb02d] block">
                    Full Stack Engineer
                  </span>
                  <p className="text-sm font-bold text-white mt-0.5">
                    MERN • REST APIs • Cloud CI/CD
                  </p>
                </div>
              </div>

              {/* Quick status badge */}
              <div className="mt-3.5 flex items-center justify-between text-xs text-neutral-600 font-semibold px-1 sm:px-2">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#ebb02d] animate-pulse" />
                  Available for full-time roles
                </span>
                <span className="text-neutral-400">Hyderabad, India</span>
              </div>
            </div>

            {/* Floating Dual Achievement Cards matching inspiration photo */}
            <div className="absolute -bottom-5 sm:-bottom-6 left-2 right-2 sm:left-4 sm:right-4 grid grid-cols-2 gap-3 z-10">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-neutral-200/90 flex flex-col justify-between">
                <div className="text-xl sm:text-2xl font-black text-[#141414] tracking-tight">
                  57<span className="text-[#ebb02d] text-base font-extrabold">%</span>
                </div>
                <div className="text-[11px] font-bold text-neutral-800 leading-tight mt-0.5">
                  Speed Optimization
                </div>
                <div className="text-[10px] text-emerald-700 font-semibold mt-1 flex items-center gap-0.5">
                  <span>↑</span> 4.2s to 1.8s @DevGnan
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-neutral-200/90 flex flex-col justify-between">
                <div className="text-xl sm:text-2xl font-black text-[#141414] tracking-tight">
                  +99.9<span className="text-[#ebb02d] text-base font-extrabold">%</span>
                </div>
                <div className="text-[11px] font-bold text-neutral-800 leading-tight mt-0.5">
                  API Reliability
                </div>
                <div className="text-[10px] text-emerald-700 font-semibold mt-1 flex items-center gap-0.5">
                  <span>↑</span> Containerized CI/CD
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
