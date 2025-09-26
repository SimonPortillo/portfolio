"use client"

import { motion } from "motion/react"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from 'lucide-react';
import Link from "next/link";

interface GroupInfoProps {
  description: string;
  university: string;
  department: string;
  program: string;
  founded: string;
}

export function GroupInformation({
  description,
  university,
  department,
  program,
  founded,
}: GroupInfoProps) {
  return (
    <motion.section 
      className="max-w-4xl mx-auto w-full overflow-x-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2 className="serif text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Hvem vi er</h2>
        <p className="whitespace-pre-line leading-relaxed text-sm sm:text-base">{description} 
          <Link className="pl-2 text-primary underline hover:text-primary-muted hover:transition-colors" href="/projects">Se prosjekter <ArrowUpRight className="inline-block" /></Link> 
        </p>
        

        <div className="my-4 sm:my-6 flex flex-wrap gap-1.5 sm:gap-2">
          <Badge className="px-2 sm:px-3 py-1 text-xs sm:text-sm">
            {university}
          </Badge>
          <Badge variant="outline" className="px-2 sm:px-3 py-1 text-xs sm:text-sm">
            {department}
          </Badge>
          <Badge variant="secondary" className="px-2 sm:px-3 py-1 text-xs sm:text-sm">
            {program}
          </Badge>
          <Badge variant="outline" className="px-2 sm:px-3 py-1 text-xs sm:text-sm">
            Etablert. {founded}
          </Badge>
        </div>
      </div>
    </motion.section>
  );
}