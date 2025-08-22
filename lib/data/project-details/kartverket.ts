import { ProjectDetail } from '@/types/project';

export const kartverketProject: ProjectDetail = {
  title: "Kartverket Reporting System",
  description: "A full-stack C# .NET application for reporting errors in geospatial data. This system allows users to identify and report inaccuracies in Norway's official maps, improving the quality of national geographical information.",
  githubUrl: "https://github.com/mgoberg/kartverketprosjekt",
  liveUrl: "https://kartverket-demo.azurewebsites.net",
  heroImage: "/kartverket.png",
  tags: ["C#", "ASP.NET Core ", "Geospatial", "MariaDB"],
  teamMembers: ["Simon Portillo", "Martin Goberg", "Jone Manneraak", "Amund Mikalsen", "Anders Fløysvik"],
  features: [
    "Interactive map interface for precise error location marking",
    "Customizable form builder for different types of geographical errors",
    "Administrative dashboard for managing and processing reports",
    "Integration with Norwegian mapping authority's API",
    "Automatic geographic validation of submitted reports",
    "User authentication with different permission levels"
  ],
  challenges: [
    "Handling complex geospatial data with varying coordinate systems",
    "Developing efficient spatial queries for large datasets",
    "Implementing a responsive interface for both desktop and mobile field reporting",
    "Ensuring data integrity across the reporting workflow"
  ],
  technologies: {
    frontend: ["ASP.NET MVC", "Leaflet.js", "Bootstrap", "JavaScript"],
    backend: ["C#", ".NET Core", "Entity Framework", "MariaDB"],
    deployment: ["Local"]
  }
};