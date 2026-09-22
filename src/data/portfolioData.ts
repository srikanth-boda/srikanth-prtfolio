import { Project, Experience, Education, SkillCategory, Certification, Achievement, FeatureService } from '../types';
import devPortrait from '../assets/images/srikanth1.webp';
import financeSchoolProjectImg from '../assets/images/finance_school_project.webp';
import cricketProjectImg from '../assets/images/cricket_ground_booking_1789952589332.webp';
import ecommerceProjectImg from '../assets/images/ecommerce_api_dashboard_1789952602025.webp';
import ncfeProjectImg from '../assets/images/ncfe_schools_project.webp';
import ncfeMockupImg from '../assets/images/ncfe_schools_mockup.webp';

export const PERSONAL_INFO = {
  name: 'Boda Srikanth',
  firstName: 'Srikanth',
  lastName: 'Boda',
  role: 'Full Stack Developer',
  tagline: 'Specializing in MERN Stack & Cloud Deployments',
  typewriterRoles: [
    'a Fullstack Developer.',
    'writing clean code.',
    'building scalable solutions.',
  ],
  bio: 'Full Stack Developer building high-performance web applications and secure REST APIs. Passionate about engineering scalable architectures with React, Node.js, Docker, and Cloud CI/CD.',
  email: 'bodasrikanth2004@gmail.com',
  phone: '+91 9182315305',
  location: 'Hyderabad, India',
  linkedinUrl: 'https://linkedin.com/in/bodasrikanth',
  githubUrl: 'https://github.com/srikanth-boda',
  portraitImage: devPortrait,
};

export const FEATURES: FeatureService[] = [
  {
    id: 'mern-dev',
    title: 'Full Stack Web Development',
    description: 'Engineering responsive, high-performance web applications using React.js, Node.js, Express, and MongoDB with modern state management.',
    icon: 'Layers',
    highlights: ['ReactJS and NextJS (SPA)', 'Responsive Design', 'Backend', 'Database'],
  },
  {
    id: 'api-arch',
    title: 'REST APIs & Payments',
    description: 'Designing enterprise-grade RESTful APIs with Razorpay payment integration, JWT authentication, RBAC access control, and clean controller middleware architecture.',
    icon: 'CreditCard',
    highlights: ['Razorpay Payment Integration', 'JWT & RBAC Access Control', 'Clean Controller & Middleware Architecture', 'Debouncing and Throttling'],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & Kubernetes DevOps',
    description: 'Deploying containerized workloads on Kubernetes & Azure, setting up CI/CD automation with GitHub Actions, and blue-green zero-downtime releases.',
    icon: 'Cloud',
    highlights: ['Docker & Containerization', 'Kubernetes Orchestration', 'Azure Cloud & Linux Administration', 'Blue-Green Zero Downtime Deployments'],
  },
  {
    id: 'frontend-perf',
    title: 'Frontend Performance & UI',
    description: 'Optimizing client-side load speed through code splitting, React.lazy, lazy image loading, and micro-interactions for seamless UX.',
    icon: 'Zap',
    highlights: ['57% Load Time Reduction (4.2s to 1.8s)', 'Code Splitting & Route Chunking', 'Mobile-First Accessibility', 'Pixel-Perfect Modern Layouts'],
  },
  {
    id: 'database-opt',
    title: 'Database & Query Optimization',
    description: 'Architecting MongoDB collections, designing schema models, compound indexing, and aggregation pipelines for sub-100ms response times.',
    icon: 'Database',
    highlights: ['MongoDB Indexing Strategies', 'Sub-100ms Query Optimization', 'Schema Design', 'Data Normalization'],
  },
  {
    id: 'payment-integrations',
    title: 'Search Engine Optimization (SEO)',
    description: 'Optimizing web applications for organic search rankings, structured schema metadata, fast indexing, and Core Web Vitals performance.',
    icon: 'Search',
    highlights: ['Search Engine Optimization (SEO)', 'Structured Schema & Meta Tags', 'Core Web Vitals Performance', 'Search Visibility & Indexing'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'ncfe-schools',
    title: 'NCFE Schools',
    category: 'Institutional Portal',
    badge: 'Institutional Portal',
    client: 'National Center for Excellence',
    featured: true,
    accentColor: '#10b981',
    description: 'A comprehensive digital transformation for a premier multi-campus school system. We engineered a unified institutional portal that manages student admissions, high-fidelity campus storytelling, and automated notice boards across various school branches.',
    fullDescription: 'A comprehensive digital transformation for a premier multi-campus school system. We engineered a unified institutional portal that manages student admissions, high-fidelity campus storytelling, and automated notice boards across various school branches. Supporting four campuses across Bangalore and Ballari with an automated enrollment engine, interactive branch roadmaps, and 99.9% global uptime.',
    image: ncfeProjectImg,
    mockupImage: ncfeMockupImg,
    techStack: ['Institutional', 'Next.js', 'Education', 'Enterprise', 'React', 'Tailwind CSS'],
    role: 'Lead Web Engineer',
    metrics: [
      { label: 'Campus Reach', value: 'Multi-Campus', iconName: 'GraduationCap' },
      { label: 'Enrollment Upswing', value: '+40%', iconName: 'TrendingUp' },
      { label: 'Global Uptime', value: '99.9%', iconName: 'ShieldCheck' },
    ],
    keyFeatures: [
      'DYNAMIC BRANCH MANAGEMENT',
      'INTERACTIVE CAMPUS ROADMAPS',
      'AUTOMATED ENROLLMENT ENGINE',
      'REAL-TIME PARENT NOTICE BOARD',
    ],
    githubUrl: 'https://github.com/srikanth-boda',
    liveDemoUrl: 'https://ncfeschools.com/',
  },
  {
    id: 'finance-school',
    title: 'The Finance School',
    category: 'Full Stack',
    badge: 'EdTech Trading',
    client: 'Student Trading Community',
    description: 'A specialized trading education platform engineered for students to master the financial markets. Features high-fidelity charts, risk-free simulations, and a comprehensive performance tracking dashboard for emerging traders.',
    fullDescription: 'Engineered a full-featured EdTech and trading education platform — The Finance School — serving 1,200+ active students and Indian traders. Built using Next.js 19 with a dark-themed UI featuring animated hero sections, course marketplace with Razorpay-integrated payments, 1-on-1 consultation booking with live calendar scheduling, and a resource library. Implemented real-time market data feeds, interactive trading simulations, and student analytics engine. Achieved Verified 100/100 performance score on Vercel with sub-300ms API response times.',
    image: financeSchoolProjectImg,
    techStack: ['Next.js 19', 'React 19', 'TypeScript', 'Tailwind CSS', 'Razorpay', 'Vercel'],
    role: 'Lead Full Stack Engineer',
    metrics: [
      { label: 'Active Students', value: '1,200+' },
      { label: 'API Latency', value: '0.3s' },
      { label: 'Engagement Rate', value: '95%' },
    ],
    keyFeatures: [
      'Real-time market data feeds & interactive trading simulation engine',
      'Course marketplace with Razorpay payment gateway & webhook validation',
      'Live consultation booking system with calendar scheduling',
      'Student analytics dashboard with progress tracking & performance metrics',
      'Resource library with NISM certification study materials & mock tests',
    ],
    githubUrl: 'https://github.com/srikanth-boda',
    liveDemoUrl: 'https://inancechool.vercel.app/',
  },
  {
    id: 'ecommerce-api',
    title: 'E-Commerce REST API & Payment Engine',
    category: 'Backend & API',
    badge: 'Node.js and Security',
    description: 'Secure, production-grade 25+ endpoint REST API with bcrypt hashing, rate limiting, and Razorpay payment integration.',
    fullDescription: 'Architected and implemented a robust RESTful API with 25+ endpoints for an e-commerce platform. Hardened security with bcrypt password hashing, 100 req/min rate limiting, and automated account lockout after 5 consecutive failed login attempts. Integrated Razorpay payment gateway, successfully handling 2L+ in test transactions with zero reconciliation errors.',
    image: ecommerceProjectImg,
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'Razorpay SDK', 'Bcrypt', 'JWT'],
    role: 'Backend & Security Architect',
    metrics: [
      { label: 'REST Endpoints', value: '25+' },
      { label: 'Rate Limiting', value: '100 req/min' },
      { label: 'Test Transactions', value: '₹2 Lakh+' },
    ],
    keyFeatures: [
      '25+ RESTful endpoints following clean controller-service architecture',
      'Bcrypt password hashing with salt rounds and strict input sanitization',
      'IP-based rate limiting (100 req/min) & 5-attempt account lockout shield',
      'Razorpay payment gateway integration with cryptographic webhook validation',
      'Comprehensive error handling and standardized JSON response envelopes',
    ],
    githubUrl: 'https://github.com/srikanth-boda/ecommerce-rest-api',
    liveDemoUrl: 'https://github.com/srikanth-boda/ecommerce-rest-api',
  },
  {
    id: 'cricket-ground-booking',
    title: 'Cricket-Ground Booking Platform',
    category: 'Full Stack',
    badge: 'Production Experience',
    description: 'Dual-sided sports reservation portal allowing sports lovers to book slots and turf owners to manage grounds.',
    fullDescription: 'Engineered during my internship at DevGnan Technologies. Built responsive web application features using React, Node.js, Express.js, and MongoDB. Enabled users to discover local cricket grounds and book available hourly slots while giving ground owners a dashboard to manage pricing and availability. Built JWT + RBAC authentication for 10K+ users and improved load time by 57%.',
    image: cricketProjectImg,
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'RBAC', 'Azure'],
    role: 'Full Stack Developer Intern',
    metrics: [
      { label: 'Active Users Served', value: '10,000+' },
      { label: 'Load Time Boost', value: '57% Faster' },
      { label: 'Unauthorized Drops', value: '-60%' },
    ],
    keyFeatures: [
      'Dual portal for players (search & booking) and ground owners (management)',
      'JWT + RBAC authentication supporting 10,000+ users',
      '60% reduction in unauthorized access through middleware route protection',
      'Reduced initial load time from 4.2s to 1.8s with React.lazy and code splitting',
      'Seamless multi-slot calendar reservation and conflict prevention',
    ],
    githubUrl: 'https://github.com/srikanth-boda',
    liveDemoUrl: 'https://github.com/srikanth-boda',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'devgnan-intern',
    role: 'Full Stack Developer Intern',
    company: 'DevGnan Technologies Pvt. Ltd.',
    location: 'Hyderabad, India',
    period: 'Aug 2025 – July 2026',
    type: 'Internship',
    summary: 'Spearheaded frontend and backend feature engineering for a cricket-ground booking platform serving 10,000+ registered users.',
    badge: 'Internship',
    achievements: [
      'Developed responsive full-stack features for a cricket-ground booking platform using React.js, Node.js, Express.js, and MongoDB, supporting ground discovery and time-slot booking workflows.',
      'Built a JWT + RBAC authentication system for 10K+ users, reducing unauthorized access incidents by 60% through middleware-based route protection.',
      'Optimized React application load time from 4.2s to 1.8s (57% improvement) via code splitting, React.lazy, and image lazy loading across 15+ routes.',
      'Implemented blue-green deployment strategies for Kubernetes workloads, enabling zero-downtime updates and seamless traffic switching during releases.',
    ],
    skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'RBAC', 'Docker', 'Kubernetes', 'CI/CD', 'Azure'],
  },
];

export const EDUCATION: Education[] = [
  {
    id: 'rvr-jc-college',
    degree: 'Electronics & Communication Engineering',
    institution: 'R.V.R & JC College of Engineering',
    location: 'Guntur, Andhra Pradesh, India',
    period: '2022 - 2026',
    highlights: [
      'Strong foundational training in Computer Systems, Microprocessors, Network Protocols, and Software Engineering.',
      'Active contributor to technical societies, coding hackathons, and cloud workshops.',
      'Selected to lead a 3-member engineering team for the final-year capstone project.',
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React.js', level: 92, category: 'Frontend' },
      { name: 'Tailwind CSS', level: 95, category: 'Frontend' },
      { name: 'JavaScript (ES6+)', level: 90, category: 'Languages' },
      { name: 'TypeScript', level: 85, category: 'Languages' },
      { name: 'Next.js', level: 80, category: 'Frontend' },
      { name: 'HTML5 & CSS3', level: 95, category: 'Frontend' },
    ],
  },
  {
    title: 'Backend & Databases',
    skills: [
      { name: 'Node.js', level: 90, category: 'Backend' },
      { name: 'Express.js', level: 92, category: 'Backend' },
      { name: 'REST APIs & JWT', level: 92, category: 'Backend' },
      { name: 'MongoDB', level: 88, category: 'Database' },
      { name: 'RBAC Authentication', level: 86, category: 'Security' },
      { name: 'Python', level: 75, category: 'Languages' },
    ],
  },
  {
    title: 'Cloud, DevOps & Tools',
    skills: [
      { name: 'Docker', level: 85, category: 'DevOps' },
      { name: 'Kubernetes', level: 80, category: 'DevOps' },
      { name: 'Microsoft Azure', level: 82, category: 'Cloud' },
      { name: 'Git & GitHub', level: 92, category: 'Tools' },
      { name: 'CI/CD & GitHub Actions', level: 84, category: 'DevOps' },
      { name: 'Linux & Terraform', level: 78, category: 'DevOps' },
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'azure-fundamentals',
    title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    year: '2025',
    badge: 'Verified Certification',
    description: 'Demonstrated foundational knowledge of cloud concepts, Azure architectural components, core compute, networking, security, privacy, and compliance services.',
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'workshop-lead',
    title: 'Organized Cloud Workshops',
    description: 'Conducted hands-on cloud computing and containerization workshops attended by 150+ engineering students, delivering practical sessions on Azure and Docker fundamentals.',
    iconName: 'Users',
    metric: '150+ Students',
  },
  {
    id: 'team-lead',
    title: 'Final-Year Project Lead',
    description: 'Selected to lead a cross-functional team of 3 engineering members to architect, build, and deliver an enterprise-grade web and hardware solution.',
    iconName: 'Award',
    metric: 'Team Lead',
  },
  {
    id: 'load-tested',
    title: 'Concurrencies & Scale Validation',
    description: 'Validated MERN stack system stability through rigorous load testing sustaining 1,000+ concurrent users with zero drop-offs.',
    iconName: 'TrendingUp',
    metric: '1,000+ CCU',
  },
  {
    id: 'perf-optimization',
    title: '57% Application Load Time Boost',
    description: 'Reduced initial client bundle load times from 4.2 seconds to 1.8 seconds via route-based lazy loading and asset chunking.',
    iconName: 'Zap',
    metric: '57% Speedup',
  },
];
