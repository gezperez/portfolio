"use client";

import React, { Suspense } from "react";
import projects from "@/data/projects";
import { ProjectItem } from "./components";

type ProjectsProps = {};

const Projects = ({}: ProjectsProps) => {
  return (
    <div className="h-screen flex flex-row justify-between items-center mx-20 mb-0">
      {projects.map((project, index) => (
        <Suspense key={index}>
          <ProjectItem project={project} index={index} />
        </Suspense>
      ))}
    </div>
  );
};

export default Projects;
