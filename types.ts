import { ReactNode } from 'react';

export interface Project {
  id: number;
  title: string;
  category: 'Web Dev' | 'Data Analysis' | 'Graphic Design';
  description: string;
  tags: string[];
  imageUrl: string;
  caseStudyUrl?: string;
  colorTheme: string;
}

export interface Skill {
  name: string;
  icon?: ReactNode;
  level?: number;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatarUrl: string;
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  logo?: string;
}
