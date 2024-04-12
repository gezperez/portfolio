"use client";

import React, { Suspense } from "react";
import projects from "@/data/projects";
import { ProjectItem } from "./components";
import { useDeviceSize } from "@/hooks";
import { motion } from "framer-motion";
import { Color } from "@/utils";

type ProjectsProps = {};

const Projects = ({}: ProjectsProps) => {
  const { dimensions } = useDeviceSize();

  const height = dimensions.height;

  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className="w-screen h-screen flex flex-row justify-between items-center px-20"
        style={{
          background: `linear-gradient(to top, ${Color.PRIMARY}, ${Color.WHITE})`,
        }}
      >
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
    </div>
  );
};

export default Projects;
