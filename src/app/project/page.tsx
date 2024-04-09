"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ProjectDetailHeader, ProjectTechnologies } from "./components";
import projects from "@/data/projects";

export default function Page() {
  const searchParams = useSearchParams();

  const company = searchParams.get("company");

  const getProject = () => {
    if (company) {
      return projects.find((project) => project.company === company);
    }

    return undefined;
  };

  const project = getProject();

  if (!project) {
    return null;
  }

  return (
    <Suspense>
      <main>
        <ProjectDetailHeader project={project} />
        <ProjectTechnologies project={project} />
      </main>
    </Suspense>
  );
}
