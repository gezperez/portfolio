"use client";

import React, { Suspense } from "react";
import projects from "@/data/projects";
import { ProjectItem } from "./components";
import { useDeviceSize } from "@/hooks";
import { motion } from "framer-motion";

type ProjectsProps = {};

const Projects = ({}: ProjectsProps) => {
  const [width, height] = useDeviceSize();

  return (
    <div className="h-screen flex flex-row justify-between items-center px-20">
      {projects.map((project, index) => {
        let top = 0;

        if (index === projects.length - 2) {
          top = -height / 2.5;
        }

        if (index === projects.length - 1) {
          top = -height / 2;
        }

        return (
          <motion.div
            key={index}
            style={{
              position: "relative",
              top,
            }}
          >
            <Suspense>
              <ProjectItem project={project} index={index} />
            </Suspense>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Projects;
