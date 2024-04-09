"use client";

import { useSearchParams } from "next/navigation";
import { ProjectDetailHeader, ProjectTechnologies } from "./components";
import { Project } from "@/types";
import projects from "@/data/projects";

export default function Page() {
  const searchParams = useSearchParams();

  const index = searchParams.get("index");

  const project: Project = projects[index] || {};

  return (
    <main>
      <ProjectDetailHeader project={project} />
      <ProjectTechnologies project={project} />
    </main>
  );
}
