export interface ProjectSummary {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
}

export interface ProjectDetail {
  title: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
  heroImage: string;
  tags: string[];
  teamMembers: string[];
  features: string[];
  challenges: string[];
  technologies: {
    frontend: string[];
    backend: string[];
    deployment: string[];
  }
}