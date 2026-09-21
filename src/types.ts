export interface Project {
  id: string;
  title: string;
  category: 'Full Stack' | 'Backend & API' | 'Cloud & DevOps' | 'Institutional Portal' | string;
  badge: string;
  client?: string;
  featured?: boolean;
  accentColor?: string;
  description: string;
  fullDescription: string;
  image: string;
  mockupImage?: string;
  techStack: string[];
  metrics: { label: string; value: string; iconName?: string }[];
  keyFeatures: string[];
  githubUrl: string;
  liveDemoUrl: string;
  role: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  summary: string;
  achievements: string[];
  skills: string[];
  badge?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade?: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: number; // 0 to 100
    category: string;
    icon?: string;
  }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  badge?: string;
  description: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  iconName: string;
  metric?: string;
}

export interface FeatureService {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlights: string[];
}
