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
      className="flex flex-col space-y-8 sm:space-y-12 py-4 sm:py-8"
    >
      {/* Hero Section */}
      <motion.section 
        className="w-full text-center py-6 sm:py-8 px-4 sm:px-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
          Våre Prosjekter
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-4 sm:mb-6 px-2">
          Utforsk prosjektene vi har jobbet med gjennom studiet. Hvert prosjekt reflekterer vår samlede innsats og ferdigheter.
        </p>
      </motion.section>
      
      {/* Projects Grid */}
      <motion.div 
        className="grid gap-4 sm:gap-6 grid-cols-1 lg:grid-cols-2 px-4 sm:px-6"
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
              <CardHeader className="p-4 sm:p-6">
                {project.imageUrl ? (
                  <div className="w-full h-40 sm:h-48 rounded-md mb-4 overflow-hidden relative">
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
                  <div className="w-full h-40 sm:h-48 bg-muted-foreground rounded-md mb-4 flex items-center justify-center text-balance">
                    Ingen bilder tilgjengelig
                  </div>
                )}
                <h2 className="text-xl sm:text-2xl font-bold">{project.title}</h2>
              </CardHeader>
              <CardContent className="flex-grow p-4 sm:p-6 pt-0">
                <p className="text-muted-foreground mb-4 text-sm sm:text-base">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-4 sm:p-6 pt-0">
                <Button asChild className="w-full">
                  <a href={project.link}>Se prosjekt</a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.section
        className="w-full text-center py-6 sm:py-8 px-4 sm:px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <p className="text-muted-foreground text-sm sm:text-base">
          Vi jobber stadig med nye prosjekter.
        </p>
      </motion.section>
    </motion.main>
  )
}