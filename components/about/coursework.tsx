"use client"

import { motion } from "motion/react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react";

interface CourseworkProps {
  courses: {
    name: string;
    link?: string;
  }[];
}

export function Coursework({ courses }: CourseworkProps) {
  return (
    <motion.section
      className="max-w-4xl mx-auto w-full py-6 sm:py-8 mb-8 sm:mb-12 overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <h2 className="serif text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Relevante emner</h2>
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {courses.map(course => {
          const href = course.link;
          return href ? (
            <Link key={course.name} href={course.link!} className="focus:outline-none focus:ring-primary rounded group">
              <Badge
                variant="secondary"
                className="mono px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm transition-colors group-hover:bg-primary group-hover:text-primary-foreground group-focus:bg-primary group-focus:text-primary-foreground cursor-pointer"
              >
                {course.name}
              </Badge>
            </Link>
          ) : (
            <Badge key={course.name} variant="secondary" className="mono px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm">
              {course.name}
            </Badge>
          );
        })}
      </div>
    </motion.section>
  );
}