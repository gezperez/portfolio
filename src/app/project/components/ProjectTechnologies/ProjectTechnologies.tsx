"use client";

import React from "react";
import { Project } from "@/types";
import { Technology } from "./components";
import { motion, Variants } from "framer-motion";
import { Color } from "@/utils";

type ProjectTechnologiesProps = {
  project: Project;
  isOpen: boolean;
};

const technologiesVariants: Variants = {
  closed: {
    opacity: 0,
    background: `linear-gradient(to top, ${Color.WHITE}, ${Color.WHITE})`,
    transition: {
      duration: 1,
    },
  },
  open: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 2,
    },
  },
};

const ProjectTechnologies = ({ project, isOpen }: ProjectTechnologiesProps) => {
  const { technologies } = project;

  return (
    <motion.div
      variants={technologiesVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="h-screen w-screen flex flex-col justify-center items-center"
    >
      <div className="relative font-semibold mb-12 text-4xl text-description">
        Technologies
      </div>
      <div className="w-full grid grid-rows-3 grid-flow-col gap-10 px-10 justify-center items-center">
        {technologies.map((technology, index) => (
          <div key={index} className="drop-shadow-xl">
            <Technology technology={technology} />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectTechnologies;
