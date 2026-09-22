import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';

interface NavbarProps {
  onOpenResumeModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Projects', href: '#portfolio' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);

          const sections = ['home', 'features', 'portfolio', 'tech-stack', 'contact'];
          const scrollPosition = window.scrollY + 180;

          for (const sectionId of sections) {
            const el = document.getElementById(sectionId);
            if (el) {
              const top = el.offsetTop;
              const height = el.offsetHeight;
              if (scrollPosition >= top && scrollPosition < top + height) {
                setActiveSection(sectionId);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Rounded Shape Navbar */}
      <header className="fixed top-2 sm:top-3 left-0 right-0 z-50 px-4 sm:px-6 max-w-7xl mx-auto">
        <div
          id="main-navbar"
          className={`bg-[#141414]/95 backdrop-blur-md text-white rounded-full px-5 sm:px-8 py-2 sm:py-2.5 flex items-center justify-between transition-all duration-300 shadow-xl border border-white/10 ${
            isScrolled ? 'shadow-black/25 ring-1 ring-white/10' : ''
          }`}
        >
          {/* Brand Logo */}
          <a
            id="nav-logo"
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-1 group"
          >
            <span className="font-['Plus_Jakarta_Sans'] font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-[#ebb02d] transition-colors">
              srikanth<span className="text-[#ebb02d]">.</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav id="desktop-nav-menu" className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  id={`nav-link-${link.name.toLowerCase()}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-xs font-semibold tracking-wide uppercase transition-all duration-200 ${
                    isActive
                      ? 'text-[#ebb02d] font-bold'
                      : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA Button (Pill shape in golden yellow) */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              id="nav-resume-cta"
              onClick={onOpenResumeModal}
              className="bg-[#ebb02d] hover:bg-[#d99f24] text-[#141414] text-xs font-extrabold px-5 py-2.5 rounded-full flex items-center gap-1.5 transition-all transform hover:scale-[1.03] shadow-md shadow-[#ebb02d]/20 cursor-pointer"
              title="View & Download Resume"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
              <span className="text-xs">↗</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              id="nav-mobile-resume-btn"
              onClick={onOpenResumeModal}
              className="bg-[#ebb02d] text-[#141414] text-[11px] font-extrabold px-3 py-1.5 rounded-full flex items-center gap-1 cursor-pointer"
              title="View & Download Resume"
            >
              <FileText className="w-3 h-3" />
              <span>Resume</span>
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(true)}
              className="p-1.5 text-neutral-300 hover:text-white rounded-full bg-white/5 cursor-pointer"
              aria-label="Open Navigation"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-menu-drawer-backdrop" className="fixed inset-0 z-50 flex justify-end">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div
            id="mobile-menu-drawer-content"
            className="relative w-full max-w-xs bg-[#171717] text-white h-full p-6 flex flex-col justify-between overflow-y-auto shadow-2xl z-10 border-l border-white/10"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-neutral-800">
                <span className="font-extrabold text-xl tracking-tight text-white">
                  srikanth<span className="text-[#ebb02d]">.</span>
                </span>
                <button
                  id="close-mobile-menu-btn"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-neutral-400 hover:text-white rounded-full bg-white/5"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Bio */}
              <p className="text-xs text-neutral-400 mt-4 leading-relaxed">
                Full Stack MERN Developer specializing in React, Node.js, Express, MongoDB, and Cloud DevOps.
              </p>

              {/* Navigation Links */}
              <nav className="mt-6 flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.replace('#', '');
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`px-4 py-3 rounded-full text-sm font-semibold transition-all ${
                        isActive
                          ? 'bg-[#ebb02d] text-[#141414] font-bold'
                          : 'text-neutral-300 hover:bg-neutral-800 hover:text-white'
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-neutral-800 flex flex-col gap-2.5">
              <button
                type="button"
                id="drawer-view-resume-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal?.();
                }}
                className="w-full bg-[#ebb02d] hover:bg-[#d99f24] text-[#141414] text-xs font-bold py-3 rounded-full flex items-center justify-center gap-2 transition-colors shadow-md cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>View & Download Resume</span>
                <span className="font-bold">↗</span>
              </button>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full border border-neutral-700 hover:border-neutral-500 text-neutral-200 text-xs font-bold py-2.5 rounded-full flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Get In Touch</span>
                <span className="font-bold">↳</span>
              </a>
              <div className="text-[11px] text-neutral-400 text-center font-medium mt-1">
                Hyderabad • bodasrikanth2004@gmail.com
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
