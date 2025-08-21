"use client" //client component

import { motion, AnimatePresence } from "motion/react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
  // Sample projects data
  const projects = [
    
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

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col space-y-12 py-8"
    >
      {/* Hero Section */}
      <motion.section 
        className="w-full text-center py-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="serif text-5xl md:text-6xl font-bold mb-4">Our Projects</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
          Explore the various projects we've developed throughout our academic journey.
          Each project demonstrates different skills and technologies.
        </p>
      </motion.section>
      
      {/* Projects Grid */}
      <motion.div 
        className="grid gap-6 md:grid-cols-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                {project.imageUrl ? (
                  <div className="w-full h-48 rounded-md mb-4 overflow-hidden">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-full h-48 bg-gray-200 rounded-md mb-4 flex items-center justify-center text-gray-500">
                    No Image Available
                  </div>
                )}
                <h2 className="text-2xl font-bold">{project.title}</h2>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <a href={project.link}>View Project Details</a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.section
        className="w-full text-center py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <p className="text-gray-600">
          Our group is constantly working on new and exciting projects.
        </p>
      </motion.section>
    </motion.main>
  )
}
