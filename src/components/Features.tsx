import React from 'react';
import {
  Layers,
  ShieldCheck,
  Cloud,
  Zap,
  Database,
  CreditCard,
  ArrowRight,
  Check,
} from 'lucide-react';
import { FEATURES } from '../data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  Layers: <Layers className="w-8 h-8 text-[#ebb02d]" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-[#ebb02d]" />,
  Cloud: <Cloud className="w-8 h-8 text-[#ebb02d]" />,
  Zap: <Zap className="w-8 h-8 text-[#ebb02d]" />,
  Database: <Database className="w-8 h-8 text-[#ebb02d]" />,
  CreditCard: <CreditCard className="w-8 h-8 text-[#ebb02d]" />,
};

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#ebb02d] text-[#141414] text-[11px] font-extrabold uppercase tracking-[2px] mb-3 shadow-xs">
            <span>✨</span>
            <span>FEATURES & EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#141414] tracking-tight leading-tight">
            What I Do <span className="text-neutral-400 font-semibold block sm:inline">Built for Scale</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-2xl font-normal">
            Delivering production-tested web engineering, cloud-native deployments, and scalable backend architectures.
          </p>
        </div>

        {/* Features 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-9">
          {FEATURES.map((feature, idx) => (
            <div
              key={feature.id}
              id={`feature-card-${feature.id}`}
              className="inbio-card p-8 sm:p-10 flex flex-col justify-between group cursor-default"
            >
              <div>
                {/* Icon Container */}
                <div className="mb-7 flex items-center justify-between">
                  <div className="p-3 inbio-inner-shadow rounded-2xl inline-flex items-center justify-center group-hover:scale-110 transition-transform">
                    {iconMap[feature.icon] || <Layers className="w-8 h-8 text-[#ebb02d]" />}
                  </div>
                  <span className="text-xs font-bold text-neutral-400 tracking-widest uppercase">
                    0{idx + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#141414] group-hover:text-[#ebb02d] transition-colors mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-neutral-600 leading-relaxed mb-6 font-normal">
                  {feature.description}
                </p>

                {/* Key Points */}
                <ul className="space-y-2 mb-6 border-t border-neutral-200/60 pt-4">
                  {feature.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-center gap-2 text-xs text-neutral-700">
                      <Check className="w-3.5 h-3.5 text-[#ebb02d] flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Hover Arrow */}
              <div className="pt-2 flex items-center gap-2 text-xs font-bold text-[#ebb02d] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                <span>Core Competency</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
