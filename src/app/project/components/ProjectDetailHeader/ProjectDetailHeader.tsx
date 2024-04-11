"use client";

import React from "react";
import { Project } from "@/types";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import { useDeviceSize } from "@/hooks";

type ProjectDetailHeaderProps = {
  project: Project;
  index: string | null;
  isOpen: boolean;
};

const ProjectDetailHeader = ({ project, isOpen }: ProjectDetailHeaderProps) => {
  const width = global.window && window.innerWidth;

  const [deviceWidth, deviceHeight] = useDeviceSize();

  const { imageCorner, company, logo, position, colors } = project;

  const leftWindowVariants: Variants = {
    closed: {
      x: -width / 2,
      transition: {
        duration: 1,
        delay: 1,
      },
    },
    open: {
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const imageCornerVariants: Variants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
    open: {
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
        type: "spring",
        bounce: 0.2,
        duration: 2,
        delay: 0.5,
      },
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 2,
        delay: 1,
      },
    },
  };

  const descriptionVariants: Variants = {
    closed: {
      opacity: 0,
      background: `linear-gradient(to bottom, hsla(227, 53%, 100%, 1), hsla(227, 53%, 100%, 1))`,
      transition: {
        duration: 0.5,
      },
    },
    open: {
      opacity: 1,
      background: `linear-gradient(to bottom, ${colors[0]}, ${colors[1]})`,
      transition: {
        duration: 1,
        delay: 2,
      },
    },
  };

  return (
    <div className="flex h-screen z-1">
      <div className="w-1/2">
        <motion.div
          className="h-screen bg-descriptionBackground"
          variants={leftWindowVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
        >
          <motion.div
            variants={imageCornerVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
          >
            <Image
              alt={company}
              src={imageCorner}
              className="aspect-auto"
              width={deviceHeight / 1.5}
              height={deviceHeight / 1.5}
              priority
            />
          </motion.div>
          <motion.div
            variants={titleVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            className="ml-10"
          >
            <div className="text-leftDescription mt-10 font-normal text-2xl">
              {position.toUpperCase()}
            </div>
            <div className="text-leftDescription mt-5 font-light text-1xl">
              {`${company} App`.toUpperCase()}
            </div>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        variants={descriptionVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="h-screen flex w-1/2 p-10 items-center justify-center"
      >
        <motion.div className="flex flex-col items-center justify-center">
          <Image
            alt={company}
            src={logo}
            width={250}
            className="aspect-auto"
            style={{
              borderRadius: 30,
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectDetailHeader;
