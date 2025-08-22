import { ProjectSummary } from '@/types/project';

export const projectsSummary: ProjectSummary[] = [
  {
    id: 1,
    title: "Kartverket Reporting System",
    description: "A full-stack C# .NET application for reporting errors in geospatial data.",
    tags: ["C#", ".NET", "Geospatial"],
    imageUrl: "/kartverket.png",
    link: "/projects/project_1"
  },
  {
    id: 2,
    title: "NukeTown",
    description: "An emergency shelter finder app built with React helping users find nearby shelters during crises.",
    tags: ["React", "API Integration", "Geolocation"],
    imageUrl: "/nuketown.png",
    link: "/projects/project_2"
  },
  {
    id: 3,
    title: "IS-310????",
    description: "What might this be?",
    tags: ["C--", "MongoDB", "Bash"],
    imageUrl: "", // No image for this project
    link: "/projects/project_3"
  },
  {
    id: 4,
    title: "Portfolio Website (currently viewing)",
    description: "A responsive group portfolio website built with Next.js and Tailwind CSS.",
    tags: ["Next.js", "GitHub API", "Tailwind CSS"],
    imageUrl: "/portfolio.png", 
    link: "/"
  }
];