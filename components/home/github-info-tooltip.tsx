"use client"

import { motion } from "motion/react"
import { GitHubIcon } from "@/components/icons/github-icon"
import { InfoIcon } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function GitHubInfoTooltip() {
  return (
    <motion.div 
      className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-2"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <GitHubIcon className="h-4 w-4" />
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="flex items-center gap-1">
            Profile information is fetched from GitHub  
            <InfoIcon className="h-4 w-4" />
          </TooltipTrigger>
          <TooltipContent>
            <p className="max-w-xs pb-1.5 text-center">All profile images, bio information, and repository data are fetched directly from GitHub&apos;s API in real-time.</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </motion.div>
  )
}