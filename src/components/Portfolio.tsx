import React, { useState } from 'react';
import {
  Github,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Institutional Portal', 'Full Stack', 'Backend & API'];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter || (activeFilter === 'Full Stack' && p.id === 'ncfe-schools'));

  return (
    <section id="portfolio" className="py-20 border-t border-neutral-200/80 bg-neutral-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#ebb02d] text-[#141414] text-[11px] font-extrabold uppercase tracking-[2px] mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>VIEW MY WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#141414] tracking-tight leading-tight">
            Project <span className="text-neutral-400 font-semibold block sm:inline">Case Studies</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto font-normal">
            Production full-stack applications, enterprise institutional portals, and high-performance web systems.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  id={`portfolio-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#ebb02d] text-[#141414] shadow-md shadow-[#ebb02d]/25 scale-105'
                      : 'inbio-btn text-neutral-600 hover:text-black'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-10">
          {filteredProjects.map((project) => {
            const isNcfe = project.id === 'ncfe-schools';
            return (
              <div
                key={project.id}
                id={`portfolio-card-${project.id}`}
                onClick={() => setSelectedProject(project)}
                className="inbio-card p-6 sm:p-8 flex flex-col justify-between group cursor-pointer hover:shadow-xl transition-all duration-300"
              >
                <div>
                  {/* Project Image Banner */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-neutral-100 mb-6 group-hover:scale-[1.01] transition-transform">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-3.5 right-3.5 bg-black/75 backdrop-blur-md text-white px-3.5 py-1 rounded-full text-[11px] font-semibold">
                      {project.category}
                    </div>
                  </div>

                  {/* Sub-header row */}
                  <div className="flex items-center justify-between text-xs text-neutral-500 mb-2">
                    <span
                      className={`font-bold uppercase tracking-wider text-[11px] ${
                        isNcfe ? 'text-[#10b981]' : 'text-[#ebb02d]'
                      }`}
                    >
                      {project.role}
                    </span>
                    {project.client ? (
                      <span className="text-[11px] font-medium text-neutral-500 truncate max-w-[180px]">
                        {project.client}
                      </span>
                    ) : (
                      <span className="text-[11px] font-medium text-neutral-400">
                        Production Verified
                      </span>
                    )}
                  </div>

                  {/* Project Title */}
                  <h3
                    className={`text-xl sm:text-2xl font-extrabold text-[#141414] transition-colors mb-3 flex items-center justify-between gap-2 ${
                      isNcfe
                        ? 'group-hover:text-[#10b981]'
                        : 'group-hover:text-[#ebb02d]'
                    }`}
                  >
                    <span>{project.title}</span>
                    <span
                      className={`text-lg opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ${
                        isNcfe ? 'text-[#10b981]' : 'text-[#ebb02d]'
                      }`}
                    >
                      ↳
                    </span>
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-neutral-600 leading-relaxed mb-6 font-normal line-clamp-3">
                    {project.description}
                  </p>

                  {/* Metrics row */}
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    {project.metrics.slice(0, 3).map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-2.5 rounded-xl bg-white/80 border border-neutral-200/70 text-center shadow-xs"
                      >
                        <div
                          className={`text-xs sm:text-sm font-extrabold ${
                            isNcfe ? 'text-[#10b981]' : 'text-[#141414]'
                          }`}
                        >
                          {m.value}
                        </div>
                        <div className="text-[10px] text-neutral-500 font-bold uppercase truncate mt-0.5">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/90 border border-neutral-200 text-neutral-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions: Features direct "Explore Application" button */}
                <div className="pt-4 border-t border-neutral-200/70 flex flex-wrap items-center justify-between gap-2.5">
                  {/* Direct Explore Application button */}
                  <a
                    id={`explore-app-${project.id}`}
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-extrabold text-white transition-all shadow-sm hover:shadow-md hover:scale-[1.02] ${
                      isNcfe
                        ? 'bg-[#0f172a] hover:bg-black hover:text-[#10b981]'
                        : 'bg-[#0f172a] hover:bg-black hover:text-[#ebb02d]'
                    }`}
                    title={`Directly open ${project.title} live application`}
                  >
                    <span>Explore Application</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  {/* Details and GitHub links */}
                  <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-extrabold text-neutral-700 hover:text-black flex items-center gap-1 transition-colors uppercase tracking-wider px-2.5 py-1.5 rounded-lg hover:bg-neutral-100 cursor-pointer"
                      title="Read Technical Case Study"
                    >
                      <span>Details</span>
                      <span className="font-bold">↳</span>
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-neutral-600 hover:text-black inbio-btn flex items-center justify-center transition-colors rounded-lg"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Details Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
