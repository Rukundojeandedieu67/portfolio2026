export type ThemeMode = 'dark' | 'midnight' | 'light';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  imageUrl?: string;
  metrics: {
    label: string;
    value: string;
    detail: string;
  }[];
  frontendStack: string[];
  backendStack: string[];
  cloudStack: string[];
  highlights: string[];
  architectureSummary: string;
  githubUrl: string;
  liveUrl?: string;
  demoComponent?: string;
  stars?: number;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Proficient';
    years: number;
    pct?: number;
    description: string;
    tags: string[];
  }[];
}

export interface SoftSkill {
  icon: string;
  title: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  badge?: string;
  description: string;
  impactMetrics: string[];
  keyTechnologies: string[];
  architecturalHighlights: string[];
}

export interface ArchitectureNode {
  id: string;
  layer: 'Client Layer' | 'Edge & Gateway' | 'Services & Compute' | 'Data & Events';
  name: string;
  icon: string;
  tech: string;
  role: string;
  metrics: string;
  reliability: string;
}

export interface CommandItem {
  id: string;
  title: string;
  category: 'Navigation' | 'Actions' | 'Tools';
  icon: string;
  shortcut?: string;
  action: () => void;
}
