"use client"

import { motion } from "motion/react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { projectsSummary } from "@/lib/data/projects-summary"

export default function ProjectsPage() {
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
        <h1 className="serif text-5xl md:text-6xl font-bold mb-4">Våre Prosjekter</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
          Utforsk prosjektene vi har jobbet med som en del av studiegruppen vår. Hvert prosjekt reflekterer vår kollektive innsats, ferdigheter og lidenskap for teknologi.
        </p>
      </motion.section>
      
      {/* Projects Grid */}
      <motion.div 
        className="grid gap-6 md:grid-cols-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {projectsSummary.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                {project.imageUrl ? (
                  <div className="w-full h-48 rounded-md mb-4 overflow-hidden relative">
                    <Image 
                      src={project.imageUrl} 
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      priority={index < 2}
                    />
                  </div>
                ) : (
                  <div className="w-full h-48 bg-muted-foreground rounded-md mb-4 flex items-center justify-center text-balance">
                    Ingen bilder tilgjengelig
                  </div>
                )}
                <h2 className="text-2xl font-bold">{project.title}</h2>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">{project.description}</p>
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
                  <a href={project.link}>Se prosjekt detaljer</a>
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
          Vi jobber stadig med nye prosjekter.
        </p>
      </motion.section>
    </motion.main>
  )
}