import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Zap, Server } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="project-modal-container"
        className="relative w-full max-w-3xl bg-white text-[#141414] rounded-[32px] p-6 sm:p-10 shadow-2xl my-8 overflow-hidden border border-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-project-modal-btn"
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 hover:text-black flex items-center justify-center transition-colors z-10"
          aria-label="Close Project Details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content */}
        <div className="space-y-6">
          {/* Project Image Banner */}
          <div className="rounded-2xl overflow-hidden aspect-[16/9] w-full max-h-72 bg-neutral-900 relative shadow-inner">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-[#ebb02d] text-black px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider shadow-sm">
              {project.badge}
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white bg-black/60 backdrop-blur-md px-4 py-2.5 rounded-xl">
              <span>Category: <strong>{project.category}</strong></span>
              <span>Role: <strong>{project.role}</strong></span>
            </div>
          </div>

          {/* Title and Category */}
          <div>
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="text-[#ebb02d] text-xs">✦</span>
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                {project.category}
              </span>
              {project.client && (
                <>
                  <span className="text-neutral-400">•</span>
                  <span className="text-xs font-extrabold text-[#10b981] uppercase tracking-wider">
                    CLIENT: {project.client}
                  </span>
                </>
              )}
            </div>
            <h3
              className={`text-2xl sm:text-3xl font-extrabold ${
                project.id === 'ncfe-schools' ? 'text-[#10b981]' : 'text-[#141414]'
              }`}
            >
              {project.title}
            </h3>
          </div>

          {/* Key Metrics row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {project.metrics.map((metric, i) => (
              <div
                key={i}
                className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-100 flex flex-col items-center justify-center text-center"
              >
                <span
                  className={`text-xl sm:text-2xl font-extrabold ${
                    project.id === 'ncfe-schools' ? 'text-[#10b981]' : 'text-[#141414]'
                  }`}
                >
                  {metric.value}
                </span>
                <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider mt-0.5">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

          {/* Detailed Description */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
              <Server className="w-3.5 h-3.5 text-[#ebb02d]" />
              Engineering Overview & Architecture
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Features / Achievements */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-[#ebb02d]" />
              Key Features & Architectural Highlights
            </h4>
            <div className="space-y-2">
              {project.keyFeatures.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-800">
                  <CheckCircle2
                    className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                      project.id === 'ncfe-schools' ? 'text-[#10b981]' : 'text-[#ebb02d]'
                    }`}
                  />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-2">
              Technologies & Tools
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 text-neutral-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Footer CTAs */}
          <div className="pt-4 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0f172a] hover:bg-black text-white text-xs font-bold px-6 py-3 rounded-full flex items-center gap-2 transition-all shadow-md hover:scale-[1.02]"
                title={`Open ${project.title} live application`}
              >
                <span>Explore Application</span>
                <ExternalLink className="w-4 h-4 text-[#ebb02d]" />
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-100 hover:bg-neutral-200 text-[#141414] text-xs font-bold px-5 py-3 rounded-full flex items-center gap-2 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Source</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="text-xs font-bold text-neutral-500 hover:text-black transition-colors cursor-pointer"
            >
              Close Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
