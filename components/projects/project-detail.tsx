"use client"

import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GitHubIcon } from "@/components/icons/github-icon"
import { ExternalLinkIcon } from "lucide-react"
import { ProjectDetail } from "@/types/project"

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
      {/* Blurred Hero Section with Project Name and GitHub Link */}
      <div className="relative w-full h-[60vh] min-h-[450px] overflow-hidden z-0 pt-16">
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
          className="relative h-full flex flex-col items-center justify-center text-primary-foreground p-6 z-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">{project.title}</h1>
          
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {project.tags.map(tag => (
              <Badge key={tag} variant="secondary" className="mono bg-white/20 text-primary-foreground hover:bg-white/30">
                {tag}
              </Badge>
            ))}
          </div>
          
          <div className="flex gap-4">
            <Button 
              variant="default" 
              className="gap-2"
              asChild
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <GitHubIcon className="w-5 h-5" />
                GitHub Repository
              </a>
            </Button>
            
            {project.liveUrl && (
              <Button 
                variant="secondary" 
                className="gap-2"
                asChild
              >
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLinkIcon className="w-4 h-4" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
      
      {/* Info Section */}
      <div className="max-w-4xl mx-auto w-full px-6 py-12">
        <motion.div 
          className="space-y-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Project Overview */}
          <section>
            <h2 className="serif text-3xl font-bold mb-4">Project Overview</h2>
            <p className="text-lg text-muted-foreground">{project.description}</p>
          </section>
          
          {/* Team Members */}
          <section>
            <h2 className="serif text-3xl font-bold mb-4">Team</h2>
            <div className="flex flex-wrap gap-2">
              {project.teamMembers.map(member => (
                <Badge key={member} variant="outline" className="text-base px-4 py-2">
                  {member}
                </Badge>
              ))}
            </div>
          </section>
          
          {/* Key Features */}
          <section>
            <h2 className="serif text-3xl font-bold mb-4">Key Features</h2>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start text-lg text-muted-foreground">
                  <span className="mr-2 text-primary">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>
          
          {/* Challenges */}
          <section>
            <h2 className="serif text-3xl font-bold mb-4">Technical Challenges</h2>
            <ul className="space-y-2">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start text-lg text-muted-foreground">
                  <span className="mr-2 text-primary">•</span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </section>
          
          {/* Technologies Used */}
          <section>
            <h2 className="serif text-3xl font-bold mb-4">Technologies Used</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-muted-foreground text-xl font-semibold mb-2">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.frontend.map(tech => (
                    <Badge key={tech} variant="secondary" className="mono text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-muted-foreground text-xl font-semibold mb-2">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.backend.map(tech => (
                    <Badge key={tech} variant="secondary" className="mono text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-muted-foreground text-xl font-semibold mb-2">Deployment</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.deployment.map(tech => (
                    <Badge key={tech} variant="secondary" className="mono text-sm">
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