import { ProjectDetail } from '@/types/project';

export const teknologiradarProject: ProjectDetail = {
  title: "Digin-Teknologiradar",
  description: "En digital plattform for å kartlegge og evaluere nye teknologier.",
  githubUrl: "https://github.com/SimonPortillo/digin-teknologiradar",
  liveUrl: "https://digin-teknologiradar.vercel.app/",
  heroImage: "/teknologiradar.png",
  tags: ["React", "API Integration", "Geolocation", "Emergency Services"],
  teamMembers: ["Martin Goberg","Jone Manneraak", "Petter Kløcker Nærum", "Amund Mikalsen", "Anders Fløysvik", "Simon Portillo"],
  features: [
    "Real-time shelter location mapping",
    "Distance calculation from user's current position",
    "Filtering shelters by capacity and facilities"
  ],
  challenges: [
    "Finne pålitelige ressurser for nye teknologier",
    "Sikre at ideen er noe Digin kan oprettholde"
  ],
  technologies: {
    frontend: ["React", "TypeScript", "TailwindCSS"],
    backend: ["Ingen"],
    deployment: ["Vercel"]
  }
};