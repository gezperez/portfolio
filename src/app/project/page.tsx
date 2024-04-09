"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ProjectDetailHeader, ProjectTechnologies } from "./components";
import projects from "@/data/projects";

const Component = () => {
  const searchParams = useSearchParams();

  const company = searchParams.get("company");

  const index = searchParams.get("index");

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
        <ProjectDetailHeader project={project} index={index} />
        <ProjectTechnologies project={project} />
      </main>
    </Suspense>
  );
};

export default function Page() {
  return (
    <Suspense>
      <Component />
    </Suspense>
  );
}
