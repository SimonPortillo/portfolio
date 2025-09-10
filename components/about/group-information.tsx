"use client"

import { motion } from "motion/react"
import { Badge } from "@/components/ui/badge"

interface GroupInfoProps {
  description: string;
  university: string;
  department: string;
  program: string;
  founded: string;
  values: string[];
}

export function GroupInformation({
  description,
  university,
  department,
  program,
  founded,
  values
}: GroupInfoProps) {
  return (
    <motion.section 
      className="max-w-4xl mx-auto w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2 className="serif text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Hvem vi er</h2>
        <p className="text-muted-foreground whitespace-pre-line text-sm sm:text-base">{description}</p>

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

          <h3 className="serif text-xl sm:text-2xl lg:text-3xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">Våre verdier</h3>
        <ul className="space-y-1.5 sm:space-y-2">
          {values.map((value, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 text-primary">•</span>
              <span className="text-sm sm:text-base">{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}