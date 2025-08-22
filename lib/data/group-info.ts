import { GroupInformation } from '@/types/about';

export const groupInfo: GroupInformation = {
  name: "Student Group 42",
  university: "University of Agder",
  department: "Faculty of Engineering and Science",
  program: "Information and Communication Technology",
  founded: "August 2024",
  description: "We are a passionate group of IT students focused on developing innovative solutions through collaborative projects. Our diverse skillsets and backgrounds allow us to approach problems from different angles and create comprehensive solutions.",
  values: [
    "Collaboration and teamwork",
    "Innovation and creativity",
    "Quality code and documentation",
    "Continuous learning",
    "User-centered design"
  ],
  members: [
    {
      name: "Simon Portillo",
      role: "Full Stack Developer",
      background: "Simon has experience with web development and system design. He is particularly interested in React and modern JavaScript frameworks."
    },
    {
      name: "Martin Goberg",
      role: "Backend Developer",
      background: "Martin specializes in backend architecture and database design. He has strong skills in C# and .NET development."
    },
    {
      name: "Jone Manneraak",
      role: "Front End Developer",
      background: "Jone focuses on creating intuitive and responsive user interfaces. He has a keen eye for design and user experience."
    },
    {
      name: "Amund Mikalsen",
      role: "DevOps Engineer",
      background: "Amund manages deployment processes and infrastructure. He ensures smooth operation of applications through CI/CD pipelines."
    },
    {
      name: "Anders Fløysvik",
      role: "UX Designer",
      background: "Anders combines design thinking with technical knowledge to create user-friendly interfaces and experiences."
    },
    {
      name: "Petter Kløcker Nærum",
      role: "Project Manager",
      background: "Petter oversees project timelines and ensures successful delivery of project goals."
    }
  ],
  coursework: [
    "IS-110 Object Oriented Programming",
    "IS-309 Advanced Database Systems",
    "IS-218 Geographic Information Systems and AI",
    "IS-310 Internship Project",
    "IS-202 Programming Project"
  ]
};