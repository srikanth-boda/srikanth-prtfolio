import React from 'react';

export const TechTicker: React.FC = () => {
  const techs = [
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Kubernetes',
    'Docker',
    'Microsoft Azure',
    'TypeScript',
    'Tailwind CSS',
    'REST APIs',
    'GitHub Actions',
    'JWT & RBAC',
  ];

  return (
    <div className="py-8 sm:py-10 border-y border-neutral-200/80 my-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6">
          Core Technologies & Engineering Stack
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-12 gap-y-4">
          {techs.map((tech, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 text-sm sm:text-base font-bold text-neutral-500 hover:text-[#141414] transition-colors"
            >
              <span className="text-[#ebb02d] text-xs">●</span>
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
