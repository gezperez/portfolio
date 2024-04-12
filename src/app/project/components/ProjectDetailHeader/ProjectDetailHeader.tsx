"use client";

import React from "react";
import { Project } from "@/types";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import { useDeviceSize } from "@/hooks";
import { Color } from "@/utils";
import { Technology } from "../ProjectTechnologies/components";

type ProjectDetailHeaderProps = {
  project: Project;
  index: string | null;
  isOpen: boolean;
};

const ProjectDetailHeader = ({ project, isOpen }: ProjectDetailHeaderProps) => {
  const width = global.window && window.innerWidth;

  const height = global.window && window.innerHeight;

  const { dimensions } = useDeviceSize();

  const { imageCorner, company, description, position, colors } = project;

  const leftWindowVariants: Variants = {
    closed: {
      background: `linear-gradient(to bottom, ${Color.WHITE}, ${Color.WHITE})`,
      transition: {
        duration: 1,
        delay: 1,
      },
    },
    open: {
      background: `linear-gradient(to bottom, ${Color.PRIMARY}, ${Color.WHITE})`,
      transition: {
        duration: 1,
      },
    },
  };

  const imageCornerVariants: Variants = {
    closed: {
      x: -width / 2,
      y: -height / 2,
      opacity: 0,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
    open: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 1,
      },
    },
  };

  const titleVariants: Variants = {
    closed: {
      x: -width / 2,
      opacity: 0,
      transition: {
        duration: 2,
        delay: 0.5,
      },
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 2,
        delay: 1,
      },
    },
  };

  const descriptionVariants: Variants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.5,
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

  return (
    <motion.div
      className="flex h-screen z-1"
      style={{
        background: `linear-gradient(to bottom, ${Color.PRIMARY}, ${Color.WHITE})`,
      }}
      variants={leftWindowVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
    >
      <div className="w-1/2">
        <div className="h-screen">
          <motion.div
            variants={imageCornerVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
          >
            <Image
              alt={company}
              src={imageCorner}
              className="aspect-auto"
              width={dimensions.height / 1.5}
              height={dimensions.fullHeight / 1.5}
              priority
            />
          </motion.div>
          <motion.div
            variants={titleVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            className="ml-10"
          >
            <div className="text-description mt-10 text-2xl font-semibold">
              {position.toUpperCase()}
            </div>
            <div className="text-description mt-5 font-normal text-1xl">
              {`${company} App`.toUpperCase()}
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        variants={descriptionVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="h-screen flex flex-col w-1/2 p-10 items-start justify-center"
      >
        <div>
          <div className="font-semibold mb-4 text-lg text-leftDescription">
            EXPERIENCE
          </div>
          <div className="text-justify text-leftDescription">{description}</div>
        </div>
        <div className="mt-14">
          <div className="font-semibold mb-4 text-lg text-leftDescription">
            Technologies
          </div>
          <div className="w-full grid grid-rows-2 grid-flow-col gap-6 justify-center items-center">
            {project.technologies.map((technology, index) => (
              <div key={index} className="drop-shadow-xl">
                <Technology technology={technology} />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetailHeader;
