import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Copy, Check, CheckCircle2, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (errorMessage) setErrorMessage('');
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
      });
      setTimeout(() => setSubmitted(false), 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#ebb02d] text-[#141414] text-[11px] font-extrabold uppercase tracking-[2px] mb-3 shadow-xs">
            <span>✨</span>
            <span>LET'S WORK TOGETHER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#141414] tracking-tight leading-tight">
            Connect With Me <span className="text-neutral-400 font-semibold block sm:inline">Get In Touch</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto font-normal">
            Available for software engineering roles, high-concurrency MERN systems, and full-stack software development.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
          
          {/* Left Column: Developer Profile Card */}
          <div className="lg:col-span-5 inbio-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Photo */}
              <div className="aspect-[16/11] rounded-2xl overflow-hidden bg-neutral-200 mb-6 shadow-inner relative group">
                <img
                  src={PERSONAL_INFO.portraitImage}
                  alt={PERSONAL_INFO.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3.5 left-4 text-white">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#ebb02d]">
                    Full Stack Developer
                  </span>
                  <p className="text-sm font-bold text-white">MERN & Cloud Specialist</p>
                </div>
              </div>

              {/* Name & Role */}
              <h3 className="text-2xl font-extrabold text-[#141414]">
                {PERSONAL_INFO.name}
              </h3>
              <p className="text-xs font-bold text-[#ebb02d] uppercase tracking-wider mt-1">
                Full Stack Developer (MERN Stack)
              </p>

              {/* Bio */}
              <p className="mt-4 text-sm text-neutral-600 leading-relaxed font-normal">
                I am available for full-time engineering roles, high-performance web engineering projects, and architectural collaborations. Connect with me via email or phone.
              </p>

              {/* Direct Details */}
              <div className="mt-6 space-y-3.5 text-xs sm:text-sm border-t border-neutral-200/80 pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#ebb02d]/15 text-[#141414] flex items-center justify-center">
                    <Phone className="w-4 h-4 text-[#ebb02d]" />
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-400 font-bold uppercase block">Phone</span>
                    <a href={`tel:${PERSONAL_INFO.phone}`} className="font-bold text-[#141414] hover:text-[#ebb02d] transition-colors">
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#ebb02d]/15 text-[#141414] flex items-center justify-center">
                    <Mail className="w-4 h-4 text-[#ebb02d]" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] text-neutral-400 font-bold uppercase block">Email</span>
                    <div className="flex items-center justify-between gap-2">
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="font-bold text-[#141414] hover:text-[#ebb02d] transition-colors truncate">
                        {PERSONAL_INFO.email}
                      </a>
                      <button
                        onClick={handleCopyEmail}
                        className="p-1 rounded-lg bg-neutral-100 hover:bg-[#ebb02d] text-neutral-600 hover:text-black transition-colors flex items-center gap-1 text-[10px] font-bold px-2 py-0.5"
                        title="Copy email address"
                      >
                        {copiedEmail ? <Check className="w-3 h-3 text-black" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#ebb02d]/15 text-[#141414] flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-[#ebb02d]" />
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-400 font-bold uppercase block">Location</span>
                    <span className="font-bold text-[#141414]">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-neutral-200/80">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 block mb-3">
                FIND WITH ME
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 inbio-btn flex items-center justify-center text-neutral-700 hover:text-black"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 inbio-btn flex items-center justify-center text-neutral-700 hover:text-black"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="w-10 h-10 inbio-btn flex items-center justify-center text-neutral-700 hover:text-black"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7 inbio-card p-6 sm:p-10">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#141414] mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 mb-6">
              Have an open role, project proposal, or inquiry? Fill in the details below.
            </p>

            {submitted && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center gap-3 text-emerald-800 text-xs sm:text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>Thank you! Your message has been sent successfully. Srikanth will reply shortly.</span>
              </div>
            )}

            {errorMessage && (
              <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 flex items-center gap-3 text-red-800 text-xs sm:text-sm">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Henderson"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-300 focus:border-[#ebb02d] focus:ring-2 focus:ring-[#ebb02d]/20 text-xs sm:text-sm text-[#141414] outline-none transition-all shadow-xs"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 or international format"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-300 focus:border-[#ebb02d] focus:ring-2 focus:ring-[#ebb02d]/20 text-xs sm:text-sm text-[#141414] outline-none transition-all shadow-xs"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="alex@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-300 focus:border-[#ebb02d] focus:ring-2 focus:ring-[#ebb02d]/20 text-xs sm:text-sm text-[#141414] outline-none transition-all shadow-xs"
                  required
                />
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Software Engineer Opportunity / Project Inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-300 focus:border-[#ebb02d] focus:ring-2 focus:ring-[#ebb02d]/20 text-xs sm:text-sm text-[#141414] outline-none transition-all shadow-xs"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
                  Your Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your project details or message here..."
                  className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-300 focus:border-[#ebb02d] focus:ring-2 focus:ring-[#ebb02d]/20 text-xs sm:text-sm text-[#141414] outline-none transition-all resize-none shadow-xs"
                  required
                />
              </div>

              <button
                type="submit"
                id="contact-submit-btn"
                disabled={isSubmitting}
                className="w-full bg-[#ebb02d] hover:bg-[#d99f24] text-[#141414] font-extrabold uppercase tracking-wider text-xs py-4 px-6 rounded-full flex items-center justify-center gap-2 transition-all duration-200 shadow-md shadow-[#ebb02d]/25 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
