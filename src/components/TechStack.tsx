import React from 'react';
import {
  Code2,
  Terminal,
  Cpu,
  Layers,
  Box,
  Server,
  Database,
  Cloud,
  Workflow,
  GitBranch,
  Sparkles,
} from 'lucide-react';

interface TechButton {
  id: string;
  name: string;
  icon: React.ElementType;
}

export const TECH_ROWS: { id: string; items: TechButton[] }[] = [
  {
    id: 'row-1',
    items: [
      { id: 'react', name: 'React JS', icon: Code2 },
      { id: 'nextjs', name: 'Next JS', icon: GlobeIcon },
      { id: 'javascript', name: 'JavaScript', icon: Cpu },
      { id: 'typescript', name: 'TypeScript', icon: Terminal },
      { id: 'python', name: 'Python', icon: Code2 },
    ],
  },
  {
    id: 'row-2',
    items: [
      { id: 'nodejs', name: 'Node.js', icon: Server },
      { id: 'express', name: 'Express.js', icon: Layers },
      { id: 'mongodb', name: 'MongoDB', icon: Database },
      { id: 'html-css', name: 'HTML & CSS', icon: Box },
      { id: 'tailwind', name: 'Tailwind CSS', icon: Layers },
    ],
  },
  {
    id: 'row-3',
    items: [
      { id: 'azure', name: 'Azure', icon: Cloud },
      { id: 'aws', name: 'AWS', icon: Cloud },
      { id: 'docker', name: 'Docker', icon: Box },
      { id: 'kubernetes', name: 'Kubernetes', icon: Cloud },
      { id: 'cicd', name: 'CI/CD Pipelines', icon: Workflow },
      { id: 'git', name: 'Git', icon: GitBranch },
      { id: 'github', name: 'GitHub', icon: GitBranch },
    ],
  },
];

function GlobeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

export const TechStack: React.FC = () => {
  return (
    <section id="tech-stack" className="py-20 border-t border-neutral-200/80 bg-[#fafafa]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#ebb02d] text-[#141414] text-[11px] font-extrabold uppercase tracking-[2px] mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CORE EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#141414] tracking-tight leading-tight">
            Technical Stack <span className="text-neutral-400 font-semibold block sm:inline">& Tools</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-xl mx-auto font-normal">
            Technologies, frameworks, databases, and cloud utilities I work with daily to build scalable web applications.
          </p>
        </div>

        {/* Tech Stack 3-Row Layout */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {TECH_ROWS.map((row) => (
            <div
              key={row.id}
              className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
            >
              {row.items.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    id={`tech-btn-${item.id}`}
                    className="group inbio-btn px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-white border border-neutral-200/90 hover:border-[#ebb02d] hover:bg-[#ebb02d] text-[#141414] hover:text-[#141414] shadow-xs hover:shadow-lg hover:shadow-[#ebb02d]/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2.5 cursor-default select-none"
                  >
                    <div className="w-6 h-6 rounded-full bg-neutral-100 group-hover:bg-black/10 flex items-center justify-center text-neutral-700 group-hover:text-[#141414] transition-colors duration-200">
                      <Icon className="w-3.5 h-3.5 transition-transform duration-200 group-hover:scale-110" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold tracking-tight">
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
