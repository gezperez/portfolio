"use client";

import React from "react";
import { Project } from "@/types";
import { Technology } from "./components";
import { useScroll, motion, useTransform, Variants } from "framer-motion";

type ProjectTechnologiesProps = {
  project: Project;
  isOpen: boolean;
};

const technologiesVariants: Variants = {
  closed: {
    opacity: 0,
    background: `linear-gradient(to top, hsla(227, 53%, 100%, 1), hsla(227, 53%, 100%, 1))`,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
  open: {
    opacity: 1,
    background: `linear-gradient(to top, hsla(225, 94%, 89%, 1), hsla(227, 53%, 100%, 1))`,
    transition: {
      duration: 1,
      delay: 2,
    },
  },
};

const ProjectTechnologies = ({ project, isOpen }: ProjectTechnologiesProps) => {
  const { scrollY } = useScroll();
  const technologiesY = useTransform(scrollY, [0, 200], [0, 150], {
    clamp: true,
  });

  return (
    <div className="h-screen flex ">
      <motion.div
        variants={technologiesVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="flex flex-col justify-start items-center px-10 w-screen"
      >
        <div className="font-bold text-5xl text-descriptionBackground my-10">
          Technologies
        </div>
        <div className="grid grid-rows-3 grid-flow-col gap-12">
          {project.technologies.map((technology, index) => (
            <div key={index}>
              <Technology technology={technology} />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectTechnologies;
