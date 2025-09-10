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
      className="w-full text-center py-8 sm:py-12 lg:py-16 px-4 sm:px-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
        Møt Studiegruppen Vår
      </h1>
      <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-4 sm:mb-6 px-2">
        Studentene bak prosjektene våre. Hver deltaker bidrar med unike ferdigheter og kompetanse.
        Utforsk gjerne GitHub-kortene deres nedenfor for å se prosjektene.
      </p>
      
      <div className="flex flex-wrap gap-2 sm:gap-3 justify-center max-w-2xl mx-auto my-6 sm:my-8 px-2">
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
              className={`text-sm sm:text-md px-2 sm:px-4 py-1 sm:py-1.5 ${badge.bgColor} ${badge.textColor} ${badge.hoverColor} cursor-pointer transition-all`}
            >
              {badge.name}
            </Badge>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}