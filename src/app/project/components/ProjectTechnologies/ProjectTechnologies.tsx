"use client";

import React from "react";
import { Project } from "@/types";
import { Technology } from "./components";

type ProjectTechnologiesProps = {
  project: Project;
};

const ProjectTechnologies = ({ project }: ProjectTechnologiesProps) => {
  return (
    <div className="flex h-screen bg-slate-100">
      {project.technologies.map((technology, index) => (
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
