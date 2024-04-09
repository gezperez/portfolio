"use client";

import React from "react";
import projects from "@/data/projects";
import { Project } from "./components";
import Link from "next/link";

type ProjectsProps = {};

const Projects = ({}: ProjectsProps) => {
  return (
    <div className="h-screen flex flex-row justify-between items-center mx-20 mb-0">
      {projects.map((project, index) => (
        <Project key={index} project={project} index={index} />
      ))}
    </div>
  );
};

export default Projects;
