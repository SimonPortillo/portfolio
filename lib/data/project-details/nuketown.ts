import { ProjectDetail } from '@/types/project';

export const nuketownProject: ProjectDetail = {
  title: "NukeTown",
  description: "An emergency shelter finder app built with React helping users find nearby shelters during crises.",
  githubUrl: "https://github.com/SimonPortillo/nuketown",
  liveUrl: "https://nuketown-one.vercel.app/",
  heroImage: "/nuketown.png",
  tags: ["React", "API Integration", "Geolocation", "Emergency Services"],
  teamMembers: ["Simon Portillo", "Martin Goberg"],
  features: [
    "Real-time shelter location mapping",
    "Distance calculation from user's current position",
    "Filtering shelters by capacity and facilities"
  ],
  challenges: [
    "Ensuring accurate geolocation data in emergency situations",
    "Ensuring the data for the shelters are updated and trustworthy"
  ],
  technologies: {
    frontend: ["React", "Maplibre", "Mapbox"],
    backend: ["Node.js", "Geonorge", "API's"],
    deployment: ["Vercel"]
  }
};