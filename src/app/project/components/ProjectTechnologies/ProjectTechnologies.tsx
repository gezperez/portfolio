"use client";

import React from "react";
import { Project } from "@/types";
import { Technology } from "./components";

type ProjectTechnologiesProps = {
  project: Project;
};

const ProjectTechnologies = ({ project }: ProjectTechnologiesProps) => {
  const firstTechnologies = project.technologies.slice(0, 2);

  return (
    <div className="flex h-screen bg-slate-100">
      {firstTechnologies.map((technology, index) => (
        <div
          key={index}
          style={{
            margin: 20,
          }}
          className="flex"
        >
          <Technology technology={technology} />
        </div>
      ))}
    </div>
  );
};

export default ProjectTechnologies;
