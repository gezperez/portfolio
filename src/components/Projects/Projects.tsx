"use client";

import React, { Suspense } from "react";
import projects from "@/data/projects";
import { ProjectItem } from "./components";

type ProjectsProps = {};

const Projects = ({}: ProjectsProps) => {
  return (
    <div
      className="h-screen flex flex-row justify-between items-center px-20"
      style={{
        background: `linear-gradient(to top, hsla(225, 94%, 89%, 1), hsla(227, 53%, 100%, 1))`,
      }}
    >
      {projects.map((project, index) => (
        <Suspense key={index}>
          <ProjectItem project={project} index={index} />
        </Suspense>
      ))}
    </div>
  );
};

export default Projects;
