import { ProjectDetail } from "@/types/project";

export const kartverketProject: ProjectDetail = {
  title: "Kartverket Rapporteringssystem",
  description:
    "En fullstack C# .NET-applikasjon for å rapportere feil i geodata. Systemet lar brukere identifisere og rapportere unøyaktigheter i Norges offisielle kart og forbedrer kvaliteten på nasjonal geografisk informasjon.",
  githubUrl: "https://github.com/mgoberg/kartverketprosjekt",
  liveUrl: "",
  heroImage: "/kartverket.png",
  tags: ["C#", "ASP.NET Core ", "GIS", "MariaDB"],
  teamMembers: [
    "Simon Portillo",
    "Martin Goberg",
    "Jone Manneraak",
    "Amund Mikalsen",
    "Anders Fløysvik",
  ],
  features: [
    "Interaktivt kartgrensesnitt for presis markering av feil",
    "Tilpassbar skjema for ulike typer geografiske avvik",
    "Administrativt dashbord for håndtering og behandling av rapporter",
    "Integrasjon med Kartverkets kommune-API",
    "Brukerautentisering med ulike tilgangsnivåer",
  ],
  challenges: [
    "Håndtering av ulike typer geografiske data og feil",
    "Utvikling av effektive romlige spørringer i MariaDB",
    "Implementering av et responsivt grensesnitt for både desktop og mobil feltregistrering",
    "Sikre dataintegritet gjennom hele rapporteringsflyten",
  ],
  technologies: {
    frontend: ["ASP.NET MVC", "Leaflet.js", "JavaScript"],
    backend: ["C#", ".NET Core", "Entity Framework", "MariaDB"],
    deployment: ["Local"],
  },
};
