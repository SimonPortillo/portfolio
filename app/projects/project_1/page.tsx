"use client"

import { ProjectDetailPage } from "@/components/projects/project-detail"
import { kartverketProject } from "@/lib/data/project-details"

export default function Project1Page() {
  return <ProjectDetailPage project={kartverketProject} />
}