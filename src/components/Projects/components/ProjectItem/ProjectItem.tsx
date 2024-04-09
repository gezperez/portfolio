"use client";

import { useDeviceSize } from "@/hooks";
import { Project } from "@/types";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const logoVariants: Variants = {
  closed: {
    opacity: 1,
  },
  open: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

type ProjectItemProps = {
  project: Project;
  index: number;
};

const ProjectItem = ({ project, index }: ProjectItemProps) => {
  const { company, logo, image } = project;

  const [width, height] = useDeviceSize();

  const router = useRouter();

  const [projectIndex, setProjectIndex] = useState<number | undefined>(
    undefined
  );

  const isProjectSelected = projectIndex === index;

  const getPosition = () => {
    if (index === 0) {
      return width / 3;
    }

    if (index === 1) {
      return width / 5;
    }

    if (index === 2) {
      return 0;
    }

    if (index === 3) {
      return -width / 5;
    }

    if (index === 4) {
      return -width / 3;
    }

    return 0;
  };

  const phoneVariants: Variants = {
    closed: {
      scale: 1,
      zIndex: 0,
      x: 0,
      transition: {
        duration: 1,
      },
    },
    open: {
      scale: 30,
      zIndex: 999,
      x: getPosition(),
      transition: {
        duration: 2,
        delay: 0.5,
      },
    },
  };

  const handleProjectPress = (index: number) => {
    if (projectIndex && index === projectIndex) {
      return setProjectIndex(undefined);
    }

    setProjectIndex(index);
    return setTimeout(() => router.push(`/project?company=${company}`), 2000);
  };

  if (!width) {
    return null;
  }

  return (
    <motion.div
      key={index}
      className="relative overflow-hidden"
      variants={phoneVariants}
      initial="closed"
      animate={isProjectSelected ? "open" : "closed"}
      onClick={() => handleProjectPress(index)}
    >
      <Image
        src={image}
        width={width / 6.5}
        height={height / 4.5}
        alt={company}
      />
      <div
        style={{
          width: width / 18,
          height: width / 18,
          borderRadius: 20,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "white",
        }}
      >
        <motion.div
          variants={logoVariants}
          initial="closed"
          animate={isProjectSelected ? "open" : "closed"}
        >
          <Image
            src={logo}
            width={width / 18}
            height={width / 18}
            alt={company}
            style={{
              borderRadius: 20,
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectItem;