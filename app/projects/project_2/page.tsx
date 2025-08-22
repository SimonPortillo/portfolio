"use client"

import { ProjectDetailPage } from "@/components/projects/project-detail"
import { nuketownProject } from "@/lib/data/project-details"

export default function Project2Page() {
  return <ProjectDetailPage project={nuketownProject} />
}