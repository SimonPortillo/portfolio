import { ProjectSummary } from '@/types/project';

export const projectsSummary: ProjectSummary[] = [
  {
    id: 1,
  title: "Kartverket Rapporteringssystem",
  description: "En fullstack C# .NET-applikasjon for å rapportere feil i geodata.",
  tags: ["C#", ".NET", "Geodata"],
    imageUrl: "/kartverket.png",
    link: "/projects/project_1"
  },
  {
    id: 2,
    title: "NukeTown",
  description: "En React-app som hjelper brukere å finne nærmeste tilfluktsrom i krisesituasjoner.",
  tags: ["React", "API-integrasjon", "Geolokasjon"],
    imageUrl: "/nuketown.png",
    link: "/projects/project_2"
  },
  {
    id: 3,
    title: "Digin-Teknologiradar",
    description: "En digital plattform for å kartlegge og evaluere nye teknologier.",
    tags: ["React", "Vercel", "TypeScript"],
    imageUrl: "/teknologiradar.png", 
    link: "/projects/project_3"
  },
  {
    id: 4,
  title: "Porteføljenettsted (viser nå)",
  description: "Et responsivt gruppeporteføljenettsted bygget med Next.js og Tailwind CSS.",
  tags: ["Next.js", "GitHub API", "Tailwind CSS"],
    imageUrl: "/portfolio.png", 
    link: "/"
  }
];