"use client";

import React from "react";
import { Project } from "@/types";
import { Technology } from "./components";
import {
  clamp,
  cubicBezier,
  motion,
  useScroll,
  useTransform,
  Variants,
} from "framer-motion";

type ProjectTechnologiesProps = {
  project: Project;
  isOpen: boolean;
};

const technologiesVariants: Variants = {
  closed: {
    y: 100,
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 2,
    },
  },
};

const ProjectTechnologies = ({ project, isOpen }: ProjectTechnologiesProps) => {
  const { scrollY } = useScroll();

  const { technologies, description } = project;

  const y = useTransform(scrollY, [0, 250], [0, 200], { clamp: true });

  return (
    <div className="h-screen flex w-screen">
      <motion.div className="flex flex-col justify-center items-start px-10 w-1/2">
        <div className="font-semibold mb-4 text-lg">EXPERIENCE</div>
        <div className="text-justify">{description}</div>
      </motion.div>
      <motion.div
        variants={technologiesVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="flex flex-col justify-between items-center px-10 w-1/2"
      >
        <motion.div
          style={{
            y,
          }}
          className="relative grid grid-rows-3 grid-flow-col -top-20 gap-y-6"
        >
          {technologies.map((technology, index) => (
            <div key={index}>
              <Technology technology={technology} />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectTechnologies;
