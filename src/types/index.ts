export interface Stat {
  number: string;
  label: string;
}

export interface Skill {
  name: string;
  img: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  images: string[];
  demoLink: string;
  repoLink: string;
}

export type Theme = "dark" | "light";
