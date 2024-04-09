"use client";

import { Project } from "@/types";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type ProjectDetailHeaderProps = {
  project: Project;
};

const ProjectDetailHeader = ({ project }: ProjectDetailHeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const width = global.window && window.innerWidth;

  const height = global.window && window.innerHeight;

  const { imageCorner, company, description, logo, position } = project;

  const leftWindowVariants: Variants = {
    closed: {
      x: -width / 2,
    },
    open: {
      x: 0,
      transition: {
        duration: 1.5,
      },
    },
  };

  const imageCornerVariants: Variants = {
    closed: {
      opacity: 0,
    },
    open: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 2,
      },
    },
  };

  const titleVariants: Variants = {
    closed: {
      x: -width / 2,
      opacity: 0,
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 2,
        delay: 2,
      },
    },
  };

  const descriptionVariants: Variants = {
    closed: {
      opacity: 0,
    },
    open: {
      opacity: 1,
      transition: {
        duration: 2,
        delay: 2,
      },
    },
  };

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <div className="flex h-screen">
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
            <Image alt={company} src={imageCorner} width={width / 3} />
          </motion.div>
          <motion.div
            variants={titleVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            className="ml-10"
          >
            <div className="text-leftDescription mt-10 font-bold text-2xl">
              {position.toUpperCase()}
            </div>
            <div className="text-leftDescription mt-5 font-semibold text-1xl">
              {`${company} App`.toUpperCase()}
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="w-1/2 ">
        <motion.div
          variants={descriptionVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          className="h-screen  flex flex-col justify-center items-center mx-20 text-justify"
        >
          <Image
            alt={logo}
            src={logo}
            width={200}
            style={{
              borderRadius: 30,
            }}
            className="drop-shadow-lg"
          />

          <div className="text-description font-normal mt-20 text-xl">
            {description}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetailHeader;
