"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  CloseProjectIcon,
  ProjectDetailHeader,
  ProjectTechnologies,
} from "./components";
import projects from "@/data/projects";

const Component = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleClosePress = () => {
    setIsOpen(false);
  };

  if (!project) {
    return null;
  }

  return (
    <Suspense>
      <ProjectDetailHeader project={project} index={index} isOpen={isOpen} />
      <ProjectTechnologies project={project} isOpen={isOpen} />
      <CloseProjectIcon
        index={index}
        isOpen={isOpen}
        onClose={handleClosePress}
      />
    </Suspense>
  );
};

export default function Page() {
  return (
    <Suspense>
      <div>
        <Component />
      </div>
    </Suspense>
  );
}
