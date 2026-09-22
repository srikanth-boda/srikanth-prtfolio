import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResumeModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResumeModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="py-12 border-t border-black/10 bg-[#141414] text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <span className="font-['Plus_Jakarta_Sans'] font-extrabold text-xl tracking-tight text-white">
            srikanth<span className="text-[#ebb02d]">.</span>
          </span>
          <span className="hidden sm:inline text-neutral-600">|</span>
          <span className="text-xs text-neutral-400 font-medium">
            © {new Date().getFullYear()} Boda Srikanth. Full Stack MERN Developer.
          </span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-xs font-bold text-neutral-300 uppercase tracking-wider">
          <a href="#home" className="hover:text-[#ebb02d] transition-colors">Home</a>
          <a href="#features" className="hover:text-[#ebb02d] transition-colors">Features</a>
          <a href="#portfolio" className="hover:text-[#ebb02d] transition-colors">Projects</a>
          <a href="#tech-stack" className="hover:text-[#ebb02d] transition-colors">Tech Stack</a>
          <a href="#contact" className="hover:text-[#ebb02d] transition-colors">Contact</a>
        </div>

        {/* Right Socials & Back To Top */}
        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#ebb02d] text-white hover:text-black flex items-center justify-center transition-all"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#ebb02d] text-white hover:text-black flex items-center justify-center transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-[#ebb02d] hover:bg-[#d99f24] text-[#141414] font-bold flex items-center justify-center ml-2 transition-all shadow-md"
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
