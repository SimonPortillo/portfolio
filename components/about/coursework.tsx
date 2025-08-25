"use client"

import { motion } from "motion/react"
import { Badge } from "@/components/ui/badge"

interface CourseworkProps {
  courses: string[];
}

export function Coursework({ courses }: CourseworkProps) {
  return (
    <motion.section
      className="max-w-4xl mx-auto w-full px-6 py-8 mb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <h2 className="serif text-3xl font-bold mb-6">Relevant Coursework</h2>
      <div className="flex flex-wrap gap-3">
        {courses.map(course => (
          <Badge key={course} variant="secondary" className="mono px-3 py-2 text-sm">
            {course}
          </Badge>
        ))}
      </div>
    </motion.section>
  );
}