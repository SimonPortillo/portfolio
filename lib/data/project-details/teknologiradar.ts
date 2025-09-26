import { ProjectDetail } from '@/types/project';

export const teknologiradarProject: ProjectDetail = {
  title: "Digin-Teknologiradar",
  description: "En digital plattform for å kartlegge og evaluere nye teknologier.",
  githubUrl: "https://github.com/mgoberg/Teknologiradar",
  liveUrl: "https://teknologiradar.vercel.app/",
  heroImage: "/teknologiradar.png",
  tags: ["React", "POC", "Digin"],
  teamMembers: ["Martin Goberg","Jone Manneraak", "Petter Kløcker Nærum", "Amund Mikalsen", "Anders Fløysvik", "Simon Portillo"],
  features: [
    "Oversikt over nye og kommende teknologier",
    "Detaljerte beskrivelser og vurderinger av hver teknologi",
    "Brukervennlig grensesnitt for enkel navigasjon",
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