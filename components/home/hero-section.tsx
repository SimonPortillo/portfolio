"use client"

import { motion } from "motion/react"
import { Badge } from "@/components/ui/badge"

interface TechBadge {
  name: string;
  bgColor: string;
  textColor: string;
  hoverColor: string;
}

interface HeroSectionProps {
  techBadges: TechBadge[];
}

export function HeroSection({ techBadges }: HeroSectionProps) {
  return (
    <motion.section 
      className="w-full text-center py-16"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="serif text-5xl md:text-6xl font-bold mb-4">Møt Studiegruppen Vår</h1>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
        Studentene bak prosjektene våre. Hver deltaker bidrar med unike ferdigheter og kompetanse.
        Utforsk gjerne GitHub-kortene deres nedenfor for å se prosjektene.
      </p>

      <blockquote className="italic text-sm text-muted-foreground max-w-3xl mx-auto mb-6">
        &ldquo;klokka møde me imårå&rdquo; ― Anders Fløyelsmyk
      </blockquote>
      
      <div className="flex flex-wrap gap-3 justify-center max-w-2xl mx-auto my-8">
        {techBadges.map((badge, index) => (
          <motion.div
            key={badge.name}
            initial={{ rotate: 0 }}
            whileHover={{ 
              rotate: [-2, -4, -2, 0, 2, 4, 2, 0],
              scale: 1.1,
              transition: { 
                duration: 0.6, 
                ease: "easeInOut" 
              } 
            }}
            whileTap={{ scale: 0.95 }}
            animate={{ 
              y: [0, -2, -4, -5, -4, -2, 0, 2, 4, 5, 4, 2, 0],
              transition: { 
                repeat: Infinity, 
                repeatType: "loop",
                duration: 3,
                ease: "easeInOut",
                delay: index * 0.15 % 1.5, 
              }
            }}
          >
            <Badge 
              variant="secondary" 
              className={`text-md px-4 py-1.5 ${badge.bgColor} ${badge.textColor} ${badge.hoverColor} cursor-pointer`}
            >
              {badge.name}
            </Badge>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}