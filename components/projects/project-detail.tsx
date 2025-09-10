"use client"

import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GitHubIcon } from "@/components/icons/github-icon"
import { ExternalLinkIcon, ArrowLeftIcon } from "lucide-react"
import { ProjectDetail } from "@/types/project"
import Link from "next/link"

interface ProjectDetailPageProps {
  project: ProjectDetail;
}

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col"
    >
      {/* Back Navigation */}
      <div className="px-4 sm:px-6 md:px-8 pt-4 sm:pt-6">
        <Link href="/projects">
          <Button variant="ghost" size="sm" className="mb-4 gap-2">
            <ArrowLeftIcon className="h-4 w-4" />
            Tilbake til oversikt
          </Button>
        </Link>
      </div>

      {/* Full-width Blurred Hero Section with Project Name and GitHub Link */}
      <div 
        className="relative w-[100vw] h-[50vh] sm:h-[60vh] min-h-[400px] sm:min-h-[450px] overflow-hidden z-0 -mx-4 sm:ml-[calc(-50vw+50%)] sm:w-[100vw]"
        style={{ maxWidth: 'none' }}
      >
        {/* Background blurred image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${project.heroImage})`,
            filter: 'blur(8px)',
            transform: 'scale(1.1)', // Prevents blur edges from showing
            top: '0' // Ensure the image starts from the very top
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Content */}
        <motion.div 
          className="relative h-full flex flex-col items-center justify-center text-primary-foreground p-4 sm:p-6 z-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-center text-white leading-tight">{project.title}</h1>

          <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center mb-6 sm:mb-8 px-2">
            {project.tags.map(tag => (
              <Badge key={tag} variant="secondary" className="mono bg-white/20 text-gray-300 hover:bg-white/30 text-xs sm:text-sm">
                {tag}
              </Badge>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-2xs sm:w-auto max-w-sm sm:max-w-none">
            <Button 
              variant="default" 
              className="gap-2 text-sm sm:text-base"
              asChild
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <GitHubIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                GitHub Repository
              </a>
            </Button>
            
            {project.liveUrl && (
              <Button 
                variant="secondary" 
                className="gap-2 text-sm sm:text-base"
                asChild
              >
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLinkIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
      
      {/* Info Section */}
      <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 py-8 sm:py-12">
        <motion.div 
          className="space-y-8 sm:space-y-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Project Overview */}
          <section>
            <h2 className="serif text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Prosjekt Oversikt</h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{project.description}</p>
          </section>
          
          {/* Team Members */}
          <section>
            <h2 className="serif text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Team</h2>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.teamMembers.map(member => (
                <Badge key={member} variant="outline" className="text-sm sm:text-base px-3 sm:px-4 py-1.5 sm:py-2">
                  {member}
                </Badge>
              ))}
            </div>
          </section>
          
          {/* Key Features */}
          <section>
            <h2 className="serif text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Nøkkelfunksjoner</h2>
            <ul className="space-y-1.5 sm:space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start text-base sm:text-lg text-muted-foreground">
                  <span className="mr-2 text-primary">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>
          
          {/* Challenges */}
          <section>
            <h2 className="serif text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Tekniske Utfordringer</h2>
            <ul className="space-y-1.5 sm:space-y-2">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start text-base sm:text-lg text-muted-foreground">
                  <span className="mr-2 text-primary">•</span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </section>
          
          {/* Technologies Used */}
          <section>
            <h2 className="serif text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Teknologier Brukt</h2>

            <div className="space-y-3 sm:space-y-4">
              <div>
                <h3 className="text-muted-foreground text-lg sm:text-xl font-semibold mb-2">Frontend</h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.technologies.frontend.map(tech => (
                    <Badge key={tech} variant="secondary" className="mono text-xs sm:text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-muted-foreground text-lg sm:text-xl font-semibold mb-2">Backend</h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.technologies.backend.map(tech => (
                    <Badge key={tech} variant="secondary" className="mono text-xs sm:text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-muted-foreground text-lg sm:text-xl font-semibold mb-2">Deployment</h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.technologies.deployment.map(tech => (
                    <Badge key={tech} variant="secondary" className="mono text-xs sm:text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </motion.div>
  )
}