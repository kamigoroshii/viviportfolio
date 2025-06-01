export interface ProjectType {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  proficiency: number; // 0-100
}