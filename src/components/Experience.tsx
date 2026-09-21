import React from 'react';
import { Calendar, MapPin, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-1.5 mb-2">
        <span className="text-[#ebb02d] text-xs">✦</span>
        <span className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">
          WORK EXPERIENCE
        </span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
        <div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#141414] tracking-tight leading-tight">
            Production Track Record
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-neutral-600">
            Real-world software engineering impact, latency optimizations, and high-concurrency features.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-semibold text-neutral-700">
          <span className="w-2 h-2 rounded-full bg-[#ebb02d]" />
          <span>Bangalore, India</span>
        </div>
      </div>

      {/* Experience Timeline / Cards */}
      <div className="space-y-6">
        {EXPERIENCES.map((exp) => (
          <div
            key={exp.id}
            id={`experience-card-${exp.id}`}
            className="bg-white border border-neutral-200/90 rounded-[32px] p-6 sm:p-10 shadow-sm hover:shadow-md transition-all"
          >
            {/* Top Info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-neutral-100">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-[#ebb02d]/15 text-neutral-900 text-xs font-bold uppercase tracking-wider mb-2">
                  {exp.type}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#141414]">
                  {exp.role}
                </h3>
                <p className="text-sm sm:text-base font-bold text-[#ebb02d] mt-0.5">
                  {exp.company}
                </p>
              </div>

              <div className="flex flex-col sm:items-end gap-1.5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-100 text-xs font-semibold text-neutral-700">
                  <Calendar className="w-3.5 h-3.5 text-[#ebb02d]" />
                  <span>{exp.period}</span>
                </div>
                <div className="inline-flex items-center gap-1 text-xs text-neutral-500">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            {/* Role Summary */}
            <p className="mt-6 text-sm text-neutral-600 leading-relaxed max-w-3xl">
              {exp.summary}
            </p>

            {/* Concrete Achievements List from Resume */}
            <div className="mt-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4">
                Key Contributions & Engineering Outcomes:
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {exp.achievements.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-neutral-50 border border-neutral-100 flex items-start gap-3 text-xs sm:text-sm text-neutral-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#ebb02d] flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-wrap gap-2 items-center">
              <span className="text-xs font-bold text-neutral-400 mr-2 uppercase tracking-wider">
                Technologies:
              </span>
              {exp.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-neutral-100 text-neutral-800 hover:bg-[#ebb02d] hover:text-black transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
