import React, { useState } from 'react';
import { ArrowRight, Check, Code, Shield, Cloud, Database } from 'lucide-react';

export const Expertise: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const services = [
    {
      num: '01',
      title: 'MERN Stack Engineering',
      tag: 'Frontend & Architecture',
      icon: Code,
      desc: 'Building responsive Single Page Applications in React.js and Next.js, optimizing render paths, and leveraging Tailwind CSS for pixel-perfect mobile-first designs.',
      highlights: [
        '57% reduction in initial load time via code splitting and React.lazy',
        'State management & clean modular component architectures',
        'Mobile-first responsive fluid layouts across all viewport sizes',
      ],
    },
    {
      num: '02',
      title: 'REST APIs & Security',
      tag: 'Backend Infrastructure',
      icon: Shield,
      desc: 'Architecting secure backend microservices with Express.js and Node.js, implementing JWT authentication, password hashing, and defensive rate limiting.',
      highlights: [
        '25+ RESTful endpoints following controller-service separation',
        'Bcrypt hashing, IP rate limiting, and 5-attempt account lockout',
        'JWT + RBAC protecting routes and serving 10,000+ users safely',
      ],
    },
    {
      num: '03',
      title: 'Cloud & Kubernetes DevOps',
      tag: 'Container Workloads',
      icon: Cloud,
      desc: 'Deploying containerized Docker workloads onto Kubernetes clusters on Microsoft Azure and AWS, automating CI/CD with GitHub Actions.',
      highlights: [
        'Blue-green deployment strategies ensuring zero-downtime releases',
        'Automated CI/CD pipelines with GitHub Actions and Docker registry',
        'Linux server administration, Terraform IaC, and cloud monitoring',
      ],
    },
    {
      num: '04',
      title: 'Database Performance & Indexing',
      tag: 'Data Architecture',
      icon: Database,
      desc: 'Designing normalized schemas and high-throughput data collections in MongoDB, using compound indexes and pipeline aggregations.',
      highlights: [
        'Sub-100ms user history query speeds through compound indexing',
        'Station name normalization reducing search error drop-offs by 35%',
        'High-volume load testing validating 1,000+ concurrent user sessions',
      ],
    },
  ];

  return (
    <section id="expertise" className="py-16 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Header Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-1.5 mb-2">
            <span className="text-[#ebb02d] text-xs">✦</span>
            <span className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">
              EXPERTISE
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#141414] tracking-tight leading-tight">
            Growth-Focused
            <br />
            <span className="text-neutral-400">Full-Stack Solutions</span>
          </h2>
        </div>

        <div className="lg:col-span-5">
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
            From High-Concurrency MERN Architectures To Hardened Security and Cloud CI/CD, I Provide The Engineering You Need To Scale.
          </p>
        </div>
      </div>

      {/* Dark Tabs Bar matching bottom bar in template */}
      <div className="bg-[#141414] text-white rounded-2xl p-2 flex flex-wrap gap-2 mb-8">
        {services.map((item, idx) => {
          const isActive = activeTab === idx;
          return (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex-1 min-w-[160px] py-3 px-4 rounded-xl text-left transition-all ${
                isActive
                  ? 'bg-[#ebb02d] text-black font-bold shadow-sm'
                  : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
              }`}
            >
              <div className="text-[10px] tracking-wider uppercase opacity-80">
                {item.num} — {item.tag}
              </div>
              <div className="text-xs sm:text-sm font-semibold truncate mt-0.5">
                {item.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Service Content Card */}
      <div className="bg-white border border-neutral-200 rounded-[28px] p-6 sm:p-10 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-700 text-xs font-bold">
                {services[activeTab].num}
              </span>
              <span className="text-xs font-bold text-[#ebb02d] uppercase tracking-wider">
                {services[activeTab].tag}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#141414] mb-4">
              {services[activeTab].title}
            </h3>

            <p className="text-sm text-neutral-600 leading-relaxed mb-6">
              {services[activeTab].desc}
            </p>

            <div className="space-y-2.5">
              {services[activeTab].highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-800">
                  <span className="w-5 h-5 rounded-full bg-[#ebb02d]/20 text-[#ebb02d] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </span>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#171717] text-white rounded-2xl p-6 flex flex-col justify-between h-full min-h-[220px]">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-[#ebb02d] font-bold block mb-2">
                Engineered for Impact
              </span>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Backed by real production experience at AIZEL Technologies and validated via rigorous automated load benchmarks.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between">
              <span className="text-xs text-neutral-400">Ready to build?</span>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ebb02d] hover:underline"
              >
                <span>Discuss Project</span>
                <span>↳</span>
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
