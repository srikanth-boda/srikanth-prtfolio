import React from 'react';
import { Search, GitFork, BarChart3 } from 'lucide-react';

export const Philosophy: React.FC = () => {
  const cards = [
    {
      title: 'System Audits & Profiling',
      icon: (
        <div className="w-20 h-20 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400 group-hover:text-[#ebb02d] transition-colors">
          <Search className="w-10 h-10" />
        </div>
      ),
      description:
        'Identify performance bottlenecks and optimize MongoDB compound indexes and React render cycles to achieve sub-100ms query latency.',
    },
    {
      title: 'Scalable MERN Funnels',
      icon: (
        <div className="w-20 h-20 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400 group-hover:text-[#ebb02d] transition-colors">
          <GitFork className="w-10 h-10" />
        </div>
      ),
      description:
        'Build end-to-end booking platforms and automated transaction workflows with JWT and RBAC systems supporting 10,000+ registered users.',
    },
    {
      title: 'Data-Driven Reliability',
      icon: (
        <div className="w-20 h-20 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400 group-hover:text-[#ebb02d] transition-colors">
          <BarChart3 className="w-10 h-10" />
        </div>
      ),
      description:
        'Validate concurrency under 1,000+ simultaneous users and implement blue-green Kubernetes workloads for seamless, zero-downtime deployments.',
    },
  ];

  return (
    <section id="philosophy" className="py-16 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto">
      
      {/* Eyebrow */}
      <div className="text-center mb-3">
        <span className="text-xs font-semibold tracking-widest text-neutral-500 uppercase flex items-center justify-center gap-1.5">
          <span className="text-[#ebb02d]">✦</span> MY PHILOSOPHY
        </span>
      </div>

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#141414] tracking-tight leading-tight">
          Architect-Led
          <br />
          <span className="text-neutral-400">Built On Data</span>
        </h2>
        <p className="mt-4 text-xs sm:text-sm text-neutral-600 max-w-xl mx-auto leading-relaxed">
          I Don't Just Write Code; I Build Resilient Systems Backed By Rigorous Analysis To Ensure Your Product Goals Are Met With Precision.
        </p>
      </div>

      {/* 3 Minimalist Cards Grid matching template */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white border border-neutral-200/90 rounded-[28px] p-8 sm:p-10 flex flex-col justify-between items-center text-center shadow-sm hover:shadow-md hover:border-neutral-300 transition-all group"
          >
            {/* Title */}
            <h3 className="text-base sm:text-lg font-bold text-[#141414] mb-8">
              {card.title}
            </h3>

            {/* Large Minimalist Graphic */}
            <div className="my-6">
              {card.icon}
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed mt-6">
              {card.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};
