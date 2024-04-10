"use client";

import { Project } from "@/types";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { CgClose } from "react-icons/cg";

type ProjectDetailHeaderProps = {
  project: Project;
  index: string | null;
  isOpen: boolean;
};

const ProjectDetailHeader = ({
  project,
  index,
  isOpen,
}: ProjectDetailHeaderProps) => {
  const router = useRouter();

  const width = global.window && window.innerWidth;

  const { imageCorner, company, description, logo, position, companyColor } =
    project;

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
      background: `linear-gradient(to left, hsla(227, 53%, 100%, 1), hsla(227, 53%, 100%, 1))`,
      transition: {
        duration: 0.5,
      },
    },
    open: {
      opacity: 1,
      background: `linear-gradient(to left, hsla(225, 94%, 89%, 1), hsla(227, 53%, 100%, 1))`,
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
      <motion.div
        variants={descriptionVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="h-screen flex w-1/2 items-start justify-center pt-10"
      >
        <div className="flex flex-col justify-center items-center mx-20 text-justify">
          <Image
            alt={logo}
            src={logo}
            width={100}
            style={{
              borderRadius: 30,
            }}
            className="drop-shadow-lg"
          />

          <div className="text-description font-normal mt-20 text-xl"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetailHeader;
