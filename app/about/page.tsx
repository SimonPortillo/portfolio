"use client"

import { motion } from "motion/react"
import { HeroSection } from "@/components/about/hero-section"
import { GroupInformation } from "@/components/about/group-information"
import { TeamMembers } from "@/components/about/team-members"
import { Coursework } from "@/components/about/coursework"
import { groupInfo } from "@/lib/data/group-info"

export default function AboutPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col"
    >
      {/* Hero Section */}
      <HeroSection />
      
      {/* Content Sections */}
      <div className="flex flex-col space-y-8 sm:space-y-12 py-8 sm:py-12 px-4 sm:px-6">
        {/* Group Info Section */}
        <GroupInformation 
          description={groupInfo.description}
          university={groupInfo.university}
          department={groupInfo.department}
          program={groupInfo.program}
          founded={groupInfo.founded}
        />
      
        {/* Members Section */}
        <TeamMembers members={groupInfo.members} />
        
        {/* Coursework Section */}
        <Coursework courses={groupInfo.coursework} />
      </div>
    </motion.main>
  )
}