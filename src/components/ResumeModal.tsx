import React, { useState } from 'react';
import { X, Printer, Copy, Check, Download, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `
Boda Srikanth
Hyderabad | +91 9182315305 | bodasrikanth2004@gmail.com
linkedin.com/in/bodasrikanth | github.com/srikanth-boda

Professional Summary:
Full Stack Developer specializing in the MERN stack (React.js, Node.js, Express.js, and MongoDB), with experience building scalable and secure web applications. Skilled in designing REST APIs, implementing JWT authentication, and deploying web applications using Docker, Kubernetes, CI/CD pipelines, and Azure. Passionate about building impactful products, continuously learning new technologies, and delivering scalable software solutions.

Technical Skills:
- Languages: JavaScript (ES6+), TypeScript, Python
- Frontend: HTML5, CSS3, Tailwind CSS, React.js, Next.js
- Backend: Node.js, Express.js, REST APIs, Authentication (JWT)
- Databases: MongoDB
- Tools & Cloud: Git, GitHub, Docker, Azure, AWS, CI/CD, GitHub Actions, Kubernetes, Terraform, Linux

Experience:
Full Stack Developer Intern | Dec 2025 - Apr 2026
AIZEL Technologies Pvt. Ltd., Bangalore, India
- Developed responsive web application features for a cricket-ground booking platform using React, Node.js, Express.js, and MongoDB, enabling users to discover grounds and book available time slots while allowing ground owners to manage their grounds.
- Built JWT + RBAC authentication system for 10K+ users, reducing unauthorized access incidents by 60% through middleware-based route protection.
- Optimized React application load time from 4.2s to 1.8s (57% improvement) by implementing code splitting, React.lazy, and image lazy loading across 15+ routes.
- Implemented blue-green deployment strategies for Kubernetes workloads, enabling zero-downtime application updates and seamless traffic switching during releases.

Projects:
NCFE Schools Institutional Portal | Next.js, React, TypeScript, Tailwind CSS
- Engineered a unified institutional portal for a premier multi-campus school system (https://ncfeschools.com/) managing student admissions, campus storytelling, and notices.
- Built interactive branch roadmaps and dynamic campus management across Bangalore and Ballari locations with 99.9% uptime.

Train Booking Platform (Full Stack) | React, Node.js, Express, MongoDB, JWT
- Developed a MERN-based train reservation platform with JWT authentication, protected routes, role-based admin dashboard, booking history, and real-time seat allocation. Validated performance using load tests supporting over 1000 concurrent users.
- Implemented station name normalization, reducing search-no-result errors by 35%.
- Optimized MongoDB schema and indexing, enabling sub-100 ms user history queries.

E-Commerce REST API | Node.js, Express, MongoDB
- Built 25+ RESTful endpoints with bcrypt hashing, rate limiting (100 req/min), and account lockout after 5 failed attempts.
- Integrated Razorpay payment gateway, processing 2L+ in test transactions with zero reconciliation errors.

Education:
Electronics & Communication Engineering | 2022 – 2026
R.V.R & JC College of Engineering, Guntur

Certifications & Achievements:
- Microsoft Azure Fundamentals (2025)
- Led a team of 3 members for a final-year project.
- Organized cloud workshops attended by 150+ students.
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="resume-modal-container"
        className="relative w-full max-w-4xl bg-white text-[#1e2125] rounded-3xl shadow-2xl p-6 sm:p-10 my-6 max-h-[92vh] flex flex-col border border-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Control Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-200 mb-6 flex-shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-2 text-xs font-bold uppercase tracking-wider text-gray-500">
              Resume Document Preview
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 rounded-lg border border-gray-300 hover:bg-gray-100 text-xs font-semibold text-gray-700 flex items-center gap-1.5 transition-colors"
              title="Copy plain text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-[#ff014f] text-white hover:bg-[#e00146] text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors ml-2"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Paper Body */}
        <div className="overflow-y-auto pr-2 space-y-6 text-sm text-gray-800 font-sans leading-relaxed">
          {/* Header */}
          <div className="text-center border-b border-gray-300 pb-5">
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Boda Srikanth
            </h1>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-gray-600 font-medium">
              <span>Hyderabad, India</span>
              <span>•</span>
              <a href="tel:+919182315305" className="hover:text-[#ff014f]">+91 9182315305</a>
              <span>•</span>
              <a href="mailto:bodasrikanth2004@gmail.com" className="hover:text-[#ff014f]">bodasrikanth2004@gmail.com</a>
            </div>
            <div className="mt-1 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-blue-700">
              <a href="https://linkedin.com/in/bodasrikanth" target="_blank" rel="noopener noreferrer" className="hover:underline">
                linkedin.com/in/bodasrikanth
              </a>
              <span>•</span>
              <a href="https://github.com/srikanth-boda" target="_blank" rel="noopener noreferrer" className="hover:underline">
                github.com/srikanth-boda
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-gray-900 border-b border-gray-300 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 leading-normal">
              Full Stack Developer specializing in the MERN stack (React.js, Node.js, Express.js, and MongoDB), with experience
              building scalable and secure web applications. Skilled in designing REST APIs, implementing JWT authentication, and
              deploying web applications using Docker, Kubernetes, CI/CD pipelines, and Azure. Passionate about building impactful
              products, continuously learning new technologies, and delivering scalable software solutions.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-gray-900 border-b border-gray-300 pb-1 mb-2">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs text-gray-700">
              <p><strong>Languages:</strong> JavaScript (ES6+), TypeScript, Python</p>
              <p><strong>Frontend:</strong> HTML5, CSS3, Tailwind CSS, React.js, Next.js</p>
              <p><strong>Backend:</strong> Node.js, Express.js, REST APIs, Authentication (JWT)</p>
              <p><strong>Databases:</strong> MongoDB</p>
              <p className="sm:col-span-2"><strong>Tools & Cloud:</strong> Git, GitHub, Docker, Azure, AWS, CI/CD, GitHub Actions, Kubernetes, Terraform, Linux</p>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-gray-900 border-b border-gray-300 pb-1 mb-2">
              Experience
            </h2>
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm font-bold text-gray-900">
                <span>Full Stack Developer Intern — AIZEL Technologies Pvt. Ltd.</span>
                <span className="text-xs font-semibold text-gray-600">Dec 2025 – Apr 2026 | Bangalore, India</span>
              </div>
              <ul className="list-disc list-outside ml-4 mt-2 space-y-1.5 text-xs text-gray-700">
                <li>Developed responsive web application features for a cricket-ground booking platform using React, Node.js, Express.js, and MongoDB, enabling users to discover grounds and book available time slots while allowing ground owners to manage their grounds.</li>
                <li>Built JWT + RBAC authentication system for 10K+ users, reducing unauthorized access incidents by 60% through middleware-based route protection.</li>
                <li>Optimized React application load time from 4.2s to 1.8s (57% improvement) by implementing code splitting, React.lazy, and image lazy loading across 15+ routes.</li>
                <li>Implemented blue-green deployment strategies for Kubernetes workloads, enabling zero-downtime application updates and seamless traffic switching during releases.</li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-gray-900 border-b border-gray-300 pb-1 mb-2">
              Projects
            </h2>
            
            <div className="space-y-4">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm font-bold text-gray-900">
                  <span className="text-[#10b981]">NCFE Schools (Institutional Portal)</span>
                  <span className="text-xs font-normal text-gray-600">Next.js, React, TypeScript, Tailwind CSS</span>
                </div>
                <ul className="list-disc list-outside ml-4 mt-1.5 space-y-1 text-xs text-gray-700">
                  <li>Engineered a unified institutional portal for a premier multi-campus school system (<a href="https://ncfeschools.com/" target="_blank" rel="noopener noreferrer" className="text-[#10b981] underline">https://ncfeschools.com/</a>) managing student admissions, campus storytelling, and notices.</li>
                  <li>Built interactive branch roadmaps and dynamic campus management across Bangalore and Ballari locations with 99.9% uptime.</li>
                  <li>Achieved verified 100/100 Lighthouse performance metrics with code splitting and optimized media delivery.</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm font-bold text-gray-900">
                  <span>Train Booking Platform (Full Stack)</span>
                  <span className="text-xs font-normal text-gray-600">React, Node.js, Express, MongoDB, JWT</span>
                </div>
                <ul className="list-disc list-outside ml-4 mt-1.5 space-y-1 text-xs text-gray-700">
                  <li>Developed a MERN-based train reservation platform with JWT authentication, protected routes, role-based admin dashboard, booking history, and real-time seat allocation. Validated performance using load tests supporting over 1,000 concurrent users.</li>
                  <li>Implemented station name normalization, reducing search-no-result errors by 35%.</li>
                  <li>Optimized MongoDB schema and indexing, enabling sub-100 ms user history queries.</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm font-bold text-gray-900">
                  <span>E-Commerce REST API</span>
                  <span className="text-xs font-normal text-gray-600">Node.js, Express, MongoDB</span>
                </div>
                <ul className="list-disc list-outside ml-4 mt-1.5 space-y-1 text-xs text-gray-700">
                  <li>Built 25+ RESTful endpoints with bcrypt hashing, rate limiting (100 req/min), and account lockout after 5 failed attempts.</li>
                  <li>Integrated Razorpay payment gateway, processing 2L+ in test transactions with zero reconciliation errors.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-gray-900 border-b border-gray-300 pb-1 mb-2">
              Education
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm font-bold text-gray-900">
              <span>Electronics & Communication Engineering</span>
              <span className="text-xs font-semibold text-gray-600">2022 – 2026</span>
            </div>
            <p className="text-xs text-gray-700">R.V.R & JC College of Engineering, Guntur</p>
          </div>

          {/* Certifications & Achievements */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-gray-900 border-b border-gray-300 pb-1 mb-2">
              Certifications & Achievements
            </h2>
            <ul className="list-disc list-outside ml-4 mt-1.5 space-y-1 text-xs text-gray-700">
              <li>Microsoft Azure Fundamentals (2025)</li>
              <li>Led a team of 3 members for a final-year project.</li>
              <li>Organized cloud workshops attended by 150+ students.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
