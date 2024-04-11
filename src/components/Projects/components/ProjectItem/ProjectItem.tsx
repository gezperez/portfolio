"use client";

import React, { useEffect, useState } from "react";
import { useDeviceSize } from "@/hooks";
import { Project } from "@/types";
import { Variants, motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

const logoVariants: Variants = {
  closed: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 1,
    },
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

  const searchParams = useSearchParams();

  const paramsReset = searchParams.get("reset");

  const paramsIndex = searchParams.get("index");

  const [projectIndex, setProjectIndex] = useState<number | undefined>(
    undefined
  );

  const reset = paramsReset && Number(paramsIndex) === index;

  const isProjectSelected = projectIndex === index;

  const { scrollY } = useScroll();

  const getTransformValues = () => {
    if (index === 3) {
      return {
        scroll: scrollY,
        first: height / 2.5,
        second: height / 1.5,
      };
    }

    if (index === 4) {
      return {
        scroll: scrollY,
        first: height / 2,
        second: height / 2.5,
      };
    }

    return {
      scroll: scrollY,
      first: 0,
      second: 0,
    };
  };

  const y = useTransform(
    getTransformValues().scroll,
    [0, getTransformValues().first],
    [0, getTransformValues().first],
    {
      clamp: true,
    }
  );

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
      x: 0,
      zIndex: reset ? 999 : 0,
      transition: {
        duration: 1,
      },
    },
    open: {
      scale: 30,
      zIndex: 999,
      x: getPosition(),
      transition: {
        duration: 1.5,
        delay: 0.5,
      },
    },
  };

  const handleProjectPress = (index: number) => {
    if (projectIndex && index === projectIndex) {
      return setProjectIndex(undefined);
    }

    setProjectIndex(index);
    return setTimeout(
      () => router.push(`/project?company=${company}&index=${index}`),
      1500
    );
  };

  useEffect(() => {
    if (reset) {
      setTimeout(() => router.push(`/`, { scroll: false }), 1500);
    }
  }, [reset, router]);

  if (!width) {
    return null;
  }

  return (
    <motion.div
      key={index}
      className="relative overflow-hidden"
      variants={phoneVariants}
      initial={reset ? "open" : "closed"}
      animate={isProjectSelected ? "open" : "closed"}
      onClick={() => handleProjectPress(index)}
      style={{
        y,
      }}
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
          initial={reset ? "open" : "closed"}
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
