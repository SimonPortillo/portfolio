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
      className="max-w-4xl mx-auto w-full px-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2 className="serif text-3xl font-bold mb-4">Hvem vi er</h2>
        <p className="text-muted-foreground whitespace-pre-line">{description}</p>

        <div className="my-6 flex flex-wrap gap-2">
          <Badge className="px-3 py-1">
            {university}
          </Badge>
          <Badge variant="outline" className="px-3 py-1">
            {department}
          </Badge>
          <Badge variant="secondary" className="px-3 py-1">
            {program}
          </Badge>
          <Badge variant="outline" className="px-3 py-1">
            Etablert. {founded}
          </Badge>
        </div>

          <h3 className="serif text-3xl font-bold mt-8 mb-4">Våre verdier</h3>
        <ul className="space-y-2">
          {values.map((value, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 text-primary">•</span>
              <span>{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}