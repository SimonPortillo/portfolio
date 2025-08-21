"use client" //client component

import { motion } from "motion/react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  // Group information
  const groupInfo = {
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

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col space-y-12 py-8"
    >
      {/* Hero Section */}
      <motion.section 
        className="w-full text-center py-8 pt-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="serif text-5xl md:text-6xl font-bold mb-4">About Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
          Get to know our student group, our background, and our journey through university.
        </p>
      </motion.section>
      
      {/* Group Info Section */}
      <motion.section 
        className="max-w-4xl mx-auto w-full px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2 className="serif text-3xl font-bold mb-4">Who We Are</h2>
          <p>{groupInfo.description}</p>
          
          <div className="my-6 flex flex-wrap gap-2">
            <Badge className="px-3 py-1">
              {groupInfo.university}
            </Badge>
            <Badge variant="outline" className="px-3 py-1">
              {groupInfo.department}
            </Badge>
            <Badge variant="secondary" className="px-3 py-1">
              {groupInfo.program}
            </Badge>
            <Badge variant="outline" className="px-3 py-1">
              Est. {groupInfo.founded}
            </Badge>
          </div>
          
          <h3 className="serif text-2xl font-bold mt-8 mb-4">Our Values</h3>
          <ul className="space-y-2">
            {groupInfo.values.map((value, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.section>
      
      {/* Members Section */}
      <motion.section
        className="max-w-4xl mx-auto w-full px-6 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="serif text-3xl font-bold mb-8 text-center">Our Team</h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          {groupInfo.members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{member.role}</p>
                  <p className="text-sm">{member.background}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>
      
      {/* Coursework Section */}
      <motion.section
        className="max-w-4xl mx-auto w-full px-6 py-8 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="serif text-3xl font-bold mb-6">Relevant Coursework</h2>
        <div className="flex flex-wrap gap-3">
          {groupInfo.coursework.map(course => (
            <Badge key={course} variant="secondary" className="px-3 py-2 text-sm">
              {course}
            </Badge>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
