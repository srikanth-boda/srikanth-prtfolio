import React, { useState } from 'react';
import { X, Printer, Copy, Check, Download, FileText, Loader2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  if (!isOpen) return null;

  const resumePlainText = `Boda Srikanth
Hyderabad | +91 9182315305 | bodasrikanth2004@gmail.com
linkedin.com/in/bodasrikanth | github.com/srikanth-boda

PROFESSIONAL SUMMARY
Full-Stack Developer Intern with hands-on experience building backend and frontend applications using the MERN stack — writing clean, maintainable code, designing REST APIs, and working with SQL and NoSQL databases. Proficient in JavaScript, TypeScript, and Python with strong fundamentals in OOP, data structures, and software design patterns. Collaborative team player with a growth mindset, eager to learn rapidly, adapt to new technologies, and contribute to quality software delivery alongside experienced engineers.

TECHNICAL SKILLS
Languages: JavaScript (ES6+), TypeScript, Python
Frontend: React.js, Next.js, Redux, HTML5, CSS3, Tailwind CSS, Bootstrap
Backend: Node.js, Express.js, RESTful APIs, JWT Authentication
Databases: MongoDB, MySQL
Tools & Cloud: Git, GitHub, GitHub Actions, Docker, Kubernetes, CI/CD, AWS, Azure, Linux, Postman

EXPERIENCE
Full-Stack Developer Intern                                    Dec 2025 – Apr 2026
DevGnan Technologies Pvt. Ltd.                                Hyderabad, India
• Wrote clean, maintainable code for backend and frontend applications using JavaScript, TypeScript, Node.js, Express.js, and React.js — contributing to feature development from requirements to deployment across the full software lifecycle.
• Worked with REST APIs, MongoDB and MySQL databases, and cloud infrastructure on AWS and Azure — applying strong fundamentals in OOP, data structures, and software design patterns throughout.
• Participated in code reviews and learned from senior engineers — incorporated feedback to continuously improve code quality, debugging approach, and software development best practices in a team environment.
• Resolved a critical React performance bottleneck by identifying the root cause and applying targeted optimisations using code splitting and lazy loading — significantly reducing application load time in production.
• Built a JWT and RBAC authentication system that substantially reduced unauthorised access incidents — designed using middleware-based route protection and role-based access control logic.
• Used Git for version control throughout all feature development — collaborated with cross-functional teams from requirements to deployment with clear, consistent communication.

PROJECTS
Train Booking Platform
React.js · Node.js · Express.js · MongoDB · JWT · TypeScript · Jest
• Wrote clean, maintainable MERN application code — JWT authentication, RBAC admin dashboard, REST APIs, and real-time seat allocation. Applied OOP principles and software design patterns; used Git throughout from requirements to deployment.
• Debugged data consistency issues by optimising MongoDB schema and indexing, improving query response time significantly. Reduced search errors meaningfully using station-name normalisation logic. Wrote Jest unit tests and maintained documentation.

E-Commerce REST API
Node.js · Express.js · MongoDB · TypeScript · Docker · Postman
• Built RESTful API endpoints in Node.js and Express.js — implemented bcrypt password hashing, and Razorpay payment gateway integration with reliable and accurate payment processing.
• Implemented structured error handling — demonstrating eagerness to build quality software solutions end to end.

EDUCATION
B.Tech, Electronics & Communication Engineering               2022 – 2026
R.V.R & J.C. College of Engineering                          Guntur, India

CERTIFICATIONS & ACHIEVEMENTS
• Microsoft Azure Fundamentals (AZ-900) — 2025
• Led a team for final-year project — demonstrated leadership, communication, and end-to-end delivery
• Organised cloud computing workshops for a large group of students — strong communication and knowledge-sharing
`.trim();

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(resumePlainText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = async () => {
    setIsGeneratingPdf(true);
    try {
      const { jsPDF } = await import('jspdf');
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 12;
    const contentWidth = pageWidth - margin * 2;
    let y = 14;

    // Header Name
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(17);
    doc.setTextColor(15, 15, 15);
    doc.text('Boda Srikanth', pageWidth / 2, y, { align: 'center' });
    y += 5;

    // Contact line 1
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(50, 50, 50);
    doc.text('Hyderabad  |  +91 9182315305  |  bodasrikanth2004@gmail.com', pageWidth / 2, y, { align: 'center' });
    y += 4.2;

    // Contact line 2
    doc.text('linkedin.com/in/bodasrikanth  |  github.com/srikanth-boda', pageWidth / 2, y, { align: 'center' });
    y += 5.5;

    const addSectionHeader = (title: string) => {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(15, 15, 15);
      doc.text(title, margin, y);
      y += 1.2;
      doc.setDrawColor(160, 160, 160);
      doc.setLineWidth(0.35);
      doc.line(margin, y, pageWidth - margin, y);
      y += 3.8;
    };

    // 1. Professional Summary
    addSectionHeader('PROFESSIONAL SUMMARY');
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(35, 35, 35);
    const summaryLines = doc.splitTextToSize(
      'Full-Stack Developer Intern with hands-on experience building backend and frontend applications using the MERN stack — writing clean, maintainable code, designing REST APIs, and working with SQL and NoSQL databases. Proficient in JavaScript, TypeScript, and Python with strong fundamentals in OOP, data structures, and software design patterns. Collaborative team player with a growth mindset, eager to learn rapidly, adapt to new technologies, and contribute to quality software delivery alongside experienced engineers.',
      contentWidth
    );
    doc.text(summaryLines, margin, y);
    y += summaryLines.length * 3.4 + 2.5;

    // 2. Technical Skills
    addSectionHeader('TECHNICAL SKILLS');
    const skillsList = [
      { label: 'Languages', value: 'JavaScript (ES6+), TypeScript, Python' },
      { label: 'Frontend', value: 'React.js, Next.js, Redux, HTML5, CSS3, Tailwind CSS, Bootstrap' },
      { label: 'Backend', value: 'Node.js, Express.js, RESTful APIs, JWT Authentication' },
      { label: 'Databases', value: 'MongoDB, MySQL' },
      { label: 'Tools & Cloud', value: 'Git, GitHub, GitHub Actions, Docker, Kubernetes, CI/CD, AWS, Azure, Linux, Postman' },
    ];

    skillsList.forEach((s) => {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(20, 20, 20);
      doc.text(`${s.label}: `, margin, y);
      const labelWidth = doc.getTextWidth(`${s.label}: `);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(40, 40, 40);
      const valueLines = doc.splitTextToSize(s.value, contentWidth - labelWidth);
      doc.text(valueLines, margin + labelWidth, y);
      y += valueLines.length * 3.4 + 0.4;
    });
    y += 2.2;

    // 3. Experience
    addSectionHeader('EXPERIENCE');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 15, 15);
    doc.text('Full-Stack Developer Intern', margin, y);
    doc.setFont('helvetica', 'normal');
    doc.text('Dec 2025 – Apr 2026', pageWidth - margin, y, { align: 'right' });
    y += 3.6;

    doc.setFont('helvetica', 'italic');
    doc.setTextColor(50, 50, 50);
    doc.text('DevGnan Technologies Pvt. Ltd.', margin, y);
    doc.setFont('helvetica', 'normal');
    doc.text('Hyderabad, India', pageWidth - margin, y, { align: 'right' });
    y += 3.8;

    const expBullets = [
      'Wrote clean, maintainable code for backend and frontend applications using JavaScript, TypeScript, Node.js, Express.js, and React.js — contributing to feature development from requirements to deployment across the full software lifecycle.',
      'Worked with REST APIs, MongoDB and MySQL databases, and cloud infrastructure on AWS and Azure — applying strong fundamentals in OOP, data structures, and software design patterns throughout.',
      'Participated in code reviews and learned from senior engineers — incorporated feedback to continuously improve code quality, debugging approach, and software development best practices in a team environment.',
      'Resolved a critical React performance bottleneck by identifying the root cause and applying targeted optimisations using code splitting and lazy loading — significantly reducing application load time in production.',
      'Built a JWT and RBAC authentication system that substantially reduced unauthorised access incidents — designed using middleware-based route protection and role-based access control logic.',
      'Used Git for version control throughout all feature development — collaborated with cross-functional teams from requirements to deployment with clear, consistent communication.',
    ];

    expBullets.forEach((bullet) => {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.8);
      doc.setTextColor(35, 35, 35);
      doc.text('•', margin + 1, y);
      const lines = doc.splitTextToSize(bullet, contentWidth - 5);
      doc.text(lines, margin + 4.5, y);
      y += lines.length * 3.2 + 0.8;
    });
    y += 2;

    // 4. Projects
    addSectionHeader('PROJECTS');

    // Project 1
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 15, 15);
    doc.text('Train Booking Platform', margin, y);
    y += 3.4;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(70, 70, 70);
    doc.text('React.js · Node.js · Express.js · MongoDB · JWT · TypeScript · Jest', margin, y);
    y += 3.4;

    const proj1Bullets = [
      'Wrote clean, maintainable MERN application code — JWT authentication, RBAC admin dashboard, REST APIs, and real-time seat allocation. Applied OOP principles and software design patterns; used Git throughout from requirements to deployment.',
      'Debugged data consistency issues by optimising MongoDB schema and indexing, improving query response time significantly. Reduced search errors meaningfully using station-name normalisation logic. Wrote Jest unit tests and maintained documentation.',
    ];

    proj1Bullets.forEach((bullet) => {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.8);
      doc.setTextColor(35, 35, 35);
      doc.text('•', margin + 1, y);
      const lines = doc.splitTextToSize(bullet, contentWidth - 5);
      doc.text(lines, margin + 4.5, y);
      y += lines.length * 3.2 + 0.8;
    });
    y += 1.8;

    // Project 2
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 15, 15);
    doc.text('E-Commerce REST API', margin, y);
    y += 3.4;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(70, 70, 70);
    doc.text('Node.js · Express.js · MongoDB · TypeScript · Docker · Postman', margin, y);
    y += 3.4;

    const proj2Bullets = [
      'Built RESTful API endpoints in Node.js and Express.js — implemented bcrypt password hashing, and Razorpay payment gateway integration with reliable and accurate payment processing.',
      'Implemented structured error handling — demonstrating eagerness to build quality software solutions end to end.',
    ];

    proj2Bullets.forEach((bullet) => {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.8);
      doc.setTextColor(35, 35, 35);
      doc.text('•', margin + 1, y);
      const lines = doc.splitTextToSize(bullet, contentWidth - 5);
      doc.text(lines, margin + 4.5, y);
      y += lines.length * 3.2 + 0.8;
    });
    y += 2.2;

    // 5. Education
    addSectionHeader('EDUCATION');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 15, 15);
    doc.text('B.Tech, Electronics & Communication Engineering', margin, y);
    doc.setFont('helvetica', 'normal');
    doc.text('2022 – 2026', pageWidth - margin, y, { align: 'right' });
    y += 3.6;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(60, 60, 60);
    doc.text('R.V.R & J.C. College of Engineering', margin, y);
    doc.text('Guntur, India', pageWidth - margin, y, { align: 'right' });
    y += 5;

    // 6. Certifications & Achievements
    addSectionHeader('CERTIFICATIONS & ACHIEVEMENTS');
    const certs = [
      'Microsoft Azure Fundamentals (AZ-900) — 2025',
      'Led a team for final-year project — demonstrated leadership, communication, and end-to-end delivery',
      'Organised cloud computing workshops for a large group of students — strong communication and knowledge-sharing',
    ];
    certs.forEach((cert) => {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.8);
      doc.setTextColor(35, 35, 35);
      doc.text('•', margin + 1, y);
      doc.text(cert, margin + 4.5, y);
      y += 3.5;
    });

    doc.save('Boda_Srikanth_Resume.pdf');
    } catch (err) {
      console.error('Failed to generate PDF:', err);
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="resume-modal-container"
        className="relative w-full max-w-3xl bg-white text-[#141414] rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-8 my-6 max-h-[92vh] flex flex-col border border-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-neutral-200 mb-5 flex-shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#ebb02d]/20 text-[#141414] flex items-center justify-center font-bold">
              <FileText className="w-4 h-4 text-[#ebb02d]" />
            </div>
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-neutral-800 block">
                Resume Document Preview
              </span>
              <span className="text-[11px] text-neutral-500 font-medium">
                Boda Srikanth • Full Stack Developer
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {/* Download Resume Button */}
            <button
              id="modal-download-resume-btn"
              onClick={handleDownload}
              disabled={isGeneratingPdf}
              className="px-3.5 py-1.5 rounded-full bg-[#ebb02d] text-[#141414] hover:bg-[#d99f24] text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm cursor-pointer disabled:opacity-75"
              title="Download Resume as PDF"
            >
              {isGeneratingPdf ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Download className="w-3.5 h-3.5" />}
              <span>{isGeneratingPdf ? 'Generating...' : 'Download PDF'}</span>
            </button>

            {/* Print / Save PDF Button */}
            <button
              id="modal-print-resume-btn"
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-full bg-[#141414] text-white hover:bg-black hover:text-[#ebb02d] text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            {/* Copy Text Button */}
            <button
              id="modal-copy-resume-btn"
              onClick={handleCopyText}
              className="px-3 py-1.5 rounded-full border border-neutral-300 hover:bg-neutral-100 text-xs font-bold text-neutral-700 flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Copy plain text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>

            {/* Close Button */}
            <button
              id="close-resume-modal-btn"
              onClick={onClose}
              className="p-1.5 rounded-full text-neutral-400 hover:text-neutral-800 hover:bg-neutral-100 transition-colors ml-1 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Paper Body */}
        <div className="overflow-y-auto pr-2 space-y-4 text-sm text-[#141414] leading-relaxed bg-[#fafafa] p-6 sm:p-8 rounded-xl border border-neutral-200/80 shadow-inner font-sans">
          {/* Header */}
          <div className="text-center pb-2">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-black">
              Boda Srikanth
            </h1>
            <div className="mt-1 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-neutral-700">
              <span>Hyderabad</span>
              <span>|</span>
              <a href="tel:+919182315305" className="hover:text-[#ebb02d] transition-colors font-medium">
                +91 9182315305
              </a>
              <span>|</span>
              <a href="mailto:bodasrikanth2004@gmail.com" className="hover:text-[#ebb02d] transition-colors font-medium">
                bodasrikanth2004@gmail.com
              </a>
            </div>
            <div className="mt-0.5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-neutral-700">
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ebb02d] underline underline-offset-2 transition-colors"
              >
                linkedin.com/in/bodasrikanth
              </a>
              <span>|</span>
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ebb02d] underline underline-offset-2 transition-colors"
              >
                github.com/srikanth-boda
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold tracking-wide uppercase text-black border-b border-neutral-400 pb-0.5 mb-1.5">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs text-neutral-800 leading-relaxed text-justify">
              Full-Stack Developer Intern with hands-on experience building backend and frontend applications using the MERN stack — writing clean, maintainable code, designing REST APIs, and working with SQL and NoSQL databases. Proficient in JavaScript, TypeScript, and Python with strong fundamentals in OOP, data structures, and software design patterns. Collaborative team player with a growth mindset, eager to learn rapidly, adapt to new technologies, and contribute to quality software delivery alongside experienced engineers.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold tracking-wide uppercase text-black border-b border-neutral-400 pb-0.5 mb-1.5">
              TECHNICAL SKILLS
            </h2>
            <div className="space-y-1 text-xs text-neutral-800">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                <span className="font-bold sm:col-span-3 text-neutral-900">Languages:</span>
                <span className="sm:col-span-9">JavaScript (ES6+), TypeScript, Python</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                <span className="font-bold sm:col-span-3 text-neutral-900">Frontend:</span>
                <span className="sm:col-span-9">React.js, Next.js, Redux, HTML5, CSS3, Tailwind CSS, Bootstrap</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                <span className="font-bold sm:col-span-3 text-neutral-900">Backend:</span>
                <span className="sm:col-span-9">Node.js, Express.js, RESTful APIs, JWT Authentication</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                <span className="font-bold sm:col-span-3 text-neutral-900">Databases:</span>
                <span className="sm:col-span-9">MongoDB, MySQL</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                <span className="font-bold sm:col-span-3 text-neutral-900">Tools & Cloud:</span>
                <span className="sm:col-span-9">Git, GitHub, GitHub Actions, Docker, Kubernetes, CI/CD, AWS, Azure, Linux, Postman</span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-bold tracking-wide uppercase text-black border-b border-neutral-400 pb-0.5 mb-1.5">
              EXPERIENCE
            </h2>
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs text-neutral-900 font-bold">
                <span>Full-Stack Developer Intern</span>
                <span className="text-neutral-700 font-semibold">Dec 2025 – Apr 2026</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs text-neutral-800 italic">
                <span>DevGnan Technologies Pvt. Ltd.</span>
                <span className="not-italic text-neutral-700">Hyderabad, India</span>
              </div>
              <ul className="list-disc list-outside ml-4 mt-1.5 space-y-1 text-xs text-neutral-800">
                <li>
                  Wrote clean, maintainable code for backend and frontend applications using JavaScript, TypeScript, Node.js, Express.js, and React.js — contributing to feature development from requirements to deployment across the full software lifecycle.
                </li>
                <li>
                  Worked with REST APIs, MongoDB and MySQL databases, and cloud infrastructure on AWS and Azure — applying strong fundamentals in OOP, data structures, and software design patterns throughout.
                </li>
                <li>
                  Participated in code reviews and learned from senior engineers — incorporated feedback to continuously improve code quality, debugging approach, and software development best practices in a team environment.
                </li>
                <li>
                  Resolved a critical React performance bottleneck by identifying the root cause and applying targeted optimisations using code splitting and lazy loading — significantly reducing application load time in production.
                </li>
                <li>
                  Built a JWT and RBAC authentication system that substantially reduced unauthorised access incidents — designed using middleware-based route protection and role-based access control logic.
                </li>
                <li>
                  Used Git for version control throughout all feature development — collaborated with cross-functional teams from requirements to deployment with clear, consistent communication.
                </li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold tracking-wide uppercase text-black border-b border-neutral-400 pb-0.5 mb-1.5">
              PROJECTS
            </h2>
            <div className="space-y-3">
              <div>
                <div className="text-xs font-bold text-neutral-900">
                  Train Booking Platform
                </div>
                <div className="text-xs text-neutral-600 italic">
                  React.js · Node.js · Express.js · MongoDB · JWT · TypeScript · Jest
                </div>
                <ul className="list-disc list-outside ml-4 mt-1 space-y-0.5 text-xs text-neutral-800">
                  <li>
                    Wrote clean, maintainable MERN application code — JWT authentication, RBAC admin dashboard, REST APIs, and real-time seat allocation. Applied OOP principles and software design patterns; used Git throughout from requirements to deployment.
                  </li>
                  <li>
                    Debugged data consistency issues by optimising MongoDB schema and indexing, improving query response time significantly. Reduced search errors meaningfully using station-name normalisation logic. Wrote Jest unit tests and maintained documentation.
                  </li>
                </ul>
              </div>

              <div>
                <div className="text-xs font-bold text-neutral-900">
                  E-Commerce REST API
                </div>
                <div className="text-xs text-neutral-600 italic">
                  Node.js · Express.js · MongoDB · TypeScript · Docker · Postman
                </div>
                <ul className="list-disc list-outside ml-4 mt-1 space-y-0.5 text-xs text-neutral-800">
                  <li>
                    Built RESTful API endpoints in Node.js and Express.js — implemented bcrypt password hashing, and Razorpay payment gateway integration with reliable and accurate payment processing.
                  </li>
                  <li>
                    Implemented structured error handling — demonstrating eagerness to build quality software solutions end to end.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold tracking-wide uppercase text-black border-b border-neutral-400 pb-0.5 mb-1.5">
              EDUCATION
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs font-bold text-neutral-900">
              <span>B.Tech, Electronics & Communication Engineering</span>
              <span className="text-neutral-700 font-semibold">2022 – 2026</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs text-neutral-800">
              <span>R.V.R & J.C. College of Engineering</span>
              <span className="text-neutral-700">Guntur, India</span>
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div>
            <h2 className="text-xs font-bold tracking-wide uppercase text-black border-b border-neutral-400 pb-0.5 mb-1.5">
              CERTIFICATIONS & ACHIEVEMENTS
            </h2>
            <ul className="list-disc list-outside ml-4 mt-1 space-y-0.5 text-xs text-neutral-800">
              <li>Microsoft Azure Fundamentals (AZ-900) — 2025</li>
              <li>Led a team for final-year project — demonstrated leadership, communication, and end-to-end delivery</li>
              <li>Organised cloud computing workshops for a large group of students — strong communication and knowledge-sharing</li>
            </ul>
          </div>
        </div>

        {/* Modal Footer Quick Actions */}
        <div className="mt-4 pt-3 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-500">
          <span>Recruiter inquiries & portfolio contact: {PERSONAL_INFO.email}</span>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="px-4 py-2 rounded-full bg-[#ebb02d] text-[#141414] hover:bg-[#d99f24] font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-full border border-neutral-300 hover:bg-neutral-100 text-neutral-700 font-bold transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
