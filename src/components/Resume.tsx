import React, { useState } from 'react';
import {
  Briefcase,
  Wrench,
  CheckCircle2,
  Calendar,
  MapPin,
  FileDown,
  Sparkles,
  Layers,
  Database,
  Cloud,
} from 'lucide-react';
import {
  EXPERIENCES,
  SKILL_CATEGORIES,
} from '../data/portfolioData';

export const Resume: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'skills'>('experience');

  const tabs = [
    { id: 'experience', label: 'Work Experience', icon: Briefcase },
    { id: 'skills', label: 'Technical & Engineering Skills', icon: Wrench },
  ] as const;

  return (
    <section id="resume" className="py-20 border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#ebb02d] text-[#141414] text-[11px] font-extrabold uppercase tracking-[2px] mb-3 shadow-xs">
            <span>✨</span>
            <span>EXPERIENCE & SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#141414] tracking-tight leading-tight">
            My Resume <span className="text-neutral-400 font-semibold block sm:inline">Track Record</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto font-normal">
            Hands-on software development experience, high-concurrency MERN systems, and cloud architectures.
          </p>

          {/* Tab Selection & Modal Action */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`resume-tab-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? 'bg-[#ebb02d] text-[#141414] shadow-md shadow-[#ebb02d]/25 scale-[1.02]'
                      : 'inbio-btn text-neutral-600 hover:text-black'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab 1: Experience */}
        {activeTab === 'experience' && (
          <div className="space-y-8 max-w-4xl mx-auto">
            {EXPERIENCES.map((exp) => (
              <div
                key={exp.id}
                id={`resume-exp-${exp.id}`}
                className="inbio-card p-6 sm:p-10"
              >
                {/* Header Information */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-200/80">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-[#ebb02d]/15 text-[#141414] text-xs font-extrabold uppercase tracking-wider mb-2">
                      {exp.type}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#141414]">
                      {exp.role}
                    </h3>
                    <p className="text-sm sm:text-base font-bold text-[#ebb02d] mt-1">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 text-xs text-neutral-500">
                    <span className="inline-flex items-center gap-1.5 font-bold text-neutral-700 bg-white px-3 py-1.5 rounded-full border border-neutral-200 shadow-xs">
                      <Calendar className="w-3.5 h-3.5 text-[#ebb02d]" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1 mt-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="mt-6 text-sm text-neutral-600 leading-relaxed font-normal">
                  {exp.summary}
                </p>

                {/* Concrete Achievements List */}
                <div className="mt-8">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-neutral-500 mb-4">
                    Key Contributions & Production Impact:
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {exp.achievements.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-white/70 border border-neutral-200/70 flex items-start gap-3 text-xs sm:text-sm text-neutral-800 shadow-xs"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#ebb02d] flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="mt-8 pt-6 border-t border-neutral-200/80 flex flex-wrap gap-2 items-center">
                  <span className="text-xs font-bold text-neutral-500 mr-2 uppercase tracking-wider">
                    Technologies Used:
                  </span>
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-white border border-neutral-200 text-neutral-800 shadow-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Technical Skills */}
        {activeTab === 'skills' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {SKILL_CATEGORIES.map((category, catIdx) => (
              <div
                key={catIdx}
                className="inbio-card p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-6 pb-4 border-b border-neutral-200/80">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ebb02d]" />
                    <h3 className="text-lg font-extrabold text-[#141414]">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-5">
                    {category.skills.map((skill, sIdx) => (
                      <div key={sIdx}>
                        <div className="flex justify-between items-center text-xs font-bold text-neutral-700 mb-1.5">
                          <span className="text-[#141414]">{skill.name}</span>
                          <span className="text-[#ebb02d]">{skill.level}%</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-neutral-200/70 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-[#ebb02d] to-[#d99f24] transition-all duration-700"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-neutral-200/80 flex items-center justify-between text-[11px] text-neutral-500 font-semibold">
                  <span>Category: {category.title.split(' ')[0]}</span>
                  <span className="text-[#ebb02d] font-bold">Production Tested</span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
