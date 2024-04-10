"use client";

import React, { useEffect, useState } from "react";
import { Project } from "@/types";
import { Technology } from "./components";
import { useScroll, motion, useTransform, Variants } from "framer-motion";

type ProjectTechnologiesProps = {
  project: Project;
  isOpen: boolean;
};

const containerVariants: Variants = {
  closed: {
    y: 100,
    opacity: 0,
    transition: {
      duration: 1,
      delay: 0.5,
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

  const firstTechnologies = project.technologies.slice(0, 3);

  const { scrollY } = useScroll();
  const technologiesY = useTransform(scrollY, [0, 200], [0, 200], {
    clamp: true,
  });

  const titleY = useTransform(scrollY, [0, 200], [0, 150], {
    clamp: true,
  });

  return (
    <motion.div
      variants={containerVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="h-screen"
    >
      <motion.div className="flex flex-row w-screen justify-between px-10">
        <motion.div
          style={{
            y: titleY,
          }}
          className="relative font-bold text-7xl -top-12 z-0 text-descriptionBackground"
        >
          Technologies
        </motion.div>
        <motion.div
          className="flex flex-row w-1/2 pl-10 justify-between"
          style={{
            y: technologiesY,
          }}
        >
          {firstTechnologies.map((technology, index) => (
            <div key={index} className="relative flex -top-20">
              <Technology technology={technology} />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectTechnologies;
