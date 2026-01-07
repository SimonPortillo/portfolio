import { ProjectDetail } from "@/types/project";

export const nuketownProject: ProjectDetail = {
  title: "NukeTown",
  description:
    "En app bygget i React som hjelper brukere å finne nærmeste tilfluktsrom under krisesituasjoner.",
  githubUrl: "https://github.com/SimonPortillo/nuketown",
  liveUrl: "https://nuketown-one.vercel.app/",
  heroImage: "/nuketown.png",
  tags: ["React", "API-integrasjon", "Geolokasjon", "Nødtjenester"],
  teamMembers: ["Simon Portillo", "Martin Goberg"],
  features: [
    "Kartvisning av tilfluktsrom fra DSB",
    "Avstandskalkulering fra brukerens nåværende posisjon",
    "Beregning av rute, estimert tid og dekningsgrad for tilfluktsrom",
  ],
  challenges: [
    "Sikre nøyaktige geolokasjonsdata i nødsituasjoner",
    "Sikre at data om tilfluktsrom er oppdatert og pålitelig",
  ],
  technologies: {
    frontend: ["React", "Maplibre", "Mapbox"],
    backend: ["Node.js", "Supabase", "API-er"],
    deployment: ["Vercel"],
  },
};
