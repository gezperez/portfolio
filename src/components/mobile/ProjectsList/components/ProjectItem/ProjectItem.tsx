"use client";

import { useDeviceSize } from "@/hooks";
import { Project } from "@/types";
import { Color } from "@/utils";
import { Variants, motion, useAnimate } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { BsChevronRight } from "react-icons/bs";

type ProjectItemProps = {
  project: Project;
  index: number;
};

const ProjectItem = ({ project, index }: ProjectItemProps) => {
  const router = useRouter();

  console.log("aca", index);

  const searchParams = useSearchParams();

  const paramsReset = searchParams.get("reset");

  const paramsIndex = searchParams.get("index");

  const [projectIndex, setProjectIndex] = useState<number | undefined>(
    undefined
  );

  const reset = paramsReset && Number(paramsIndex) === index;

  const isProjectSelected = projectIndex === index;

  const { company, companyColor, position } = project;

  const { dimensions } = useDeviceSize();

  const handleNavigation = useCallback(() => {
    router.push(`/project?company=${company}&index=${index}`);
  }, [company, index, router]);

  const handleResetParams = () => {
    router.push(`/`, { scroll: false });
  };

  const handleProjectPress = () => {
    if (projectIndex && index === projectIndex) {
      return setProjectIndex(undefined);
    }

    setProjectIndex(index);
    return setTimeout(
      () => router.push(`/project?company=${company}&index=${index}`),
      2000
    );
  };

  useEffect(() => {
    if (paramsIndex) {
      setTimeout(() => router.push(`/`, { scroll: false }), 1500);
    }
  }, [paramsIndex, router]);

  const duration = 1;

  const containerVariants: Variants = {
    closed: {
      scaleY: 1,
      zIndex: reset ? 999 : 0,
      transition: {
        duration,
      },
    },
    open: {
      scaleY: 15,
      zIndex: 999,
      transition: {
        duration,
        delay: duration,
      },
    },
  };

  const backgroundVariants: Variants = {
    closed: {
      background: Color.PRIMARY,
      transition: {
        duration,
        delay: duration,
      },
    },
    open: {
      background: companyColor,
      transition: {
        duration,
      },
    },
  };

  const contentVariants: Variants = {
    closed: {
      opacity: 1,
      transition: {
        duration,
        delay: duration,
      },
    },
    open: {
      opacity: 0,
      transition: {
        duration,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial={reset ? "open" : "closed"}
      animate={isProjectSelected ? "open" : "closed"}
    >
      <motion.div
        variants={backgroundVariants}
        initial={reset ? "open" : "closed"}
        animate={isProjectSelected ? "open" : "closed"}
      >
        <motion.div
          className="my-4 flex flex-row justify-between items-center relative"
          style={{
            height: dimensions.height / 8,
          }}
          onClick={handleProjectPress}
          variants={contentVariants}
          initial={reset ? "open" : "closed"}
          animate={isProjectSelected ? "open" : "closed"}
        >
          <div className="flex h-full justify-between items-center">
            <div className="ml-6">
              <div className="font-semibold text-xl ml-6 mb-2">{position}</div>
              <div className="font-normal text-lg ml-6">{company}</div>
            </div>
          </div>
          <div className="mr-8">
            <BsChevronRight size={dimensions.height / 30} />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
export default ProjectItem;
