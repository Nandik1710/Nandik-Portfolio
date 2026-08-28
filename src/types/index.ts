export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  description: string;
  image?: string;
  cardImage?: string;
  technologies: string[];
  category: string;
  accent: string;
  role?: string;
  timeline?: string;
  keyConcepts: string[];
  features: string[];
  overview: string;
  problem: string;
  solution: string;
  architecture: ArchitectureStep[];
  engineeringChallenges: string[];
  learned: string[];
  visuals: ProjectVisual[];
  visualTreatment: "document" | "interview" | "wellness" | "rental";
  github?: string;
  live?: string;
}

export interface ArchitectureStep {
  label: string;
  detail?: string;
}

export interface ProjectVisual {
  label: string;
  detail: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Achievement {
  title: string;
  detail: string;
  year?: string;
}

export interface AboutHighlight {
  title: string;
  detail: string;
  icon: string;
}

export interface DevelopmentCard {
  title: string;
  themes: string[];
}

export interface ContactDetail {
  label: string;
  value: string;
  href?: string;
  icon: string;
}
