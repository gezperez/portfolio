"use client";

import projects from "@/data/projects";
import { ProjectItem } from "./components";

const ProjectList = () => {
  return projects.map((project, index) => (
    <ProjectItem key={index} project={project} />
  ));
};

export default ProjectList;
