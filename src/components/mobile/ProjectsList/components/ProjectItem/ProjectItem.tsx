"use client";

import { useDeviceSize } from "@/hooks";
import { Project } from "@/types";
import { motion, useAnimate } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { BsChevronRight } from "react-icons/bs";

type ProjectItemProps = {
  project: Project;
  index: number;
};

const ProjectItem = ({ project, index }: ProjectItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const [scope, animate] = useAnimate();

  const router = useRouter();

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

  const handleProjectPress = () => {
    if (projectIndex && index === projectIndex) {
      return setProjectIndex(undefined);
    }

    setProjectIndex(index);
  };

  const openAnimation = useCallback(async () => {
    setIsExpanded(true);
    await animate(
      scope.current,
      { x: dimensions.width + 10 },
      { duration: 0.5 }
    );
    await animate(scope.current, { scaleY: 15 }, { duration: 0.5 });
    handleNavigation();
  }, [animate, dimensions.width, handleNavigation, scope]);

  const closeAnimation = useCallback(async () => {
    await animate(scope.current, { scaleY: 1 }, { duration: 0.5 });
    await animate(scope.current, { x: 0 }, { duration: 0.5 });
    setIsExpanded(false);
  }, [animate, scope]);

  useEffect(() => {
    if (scope.current) {
      if (isProjectSelected) {
        openAnimation();
      } else {
        closeAnimation();
      }
    }
  }, [
    animate,
    closeAnimation,
    dimensions.width,
    isProjectSelected,
    openAnimation,
    reset,
    scope,
  ]);

  useEffect(() => {
    if (reset) {
      setTimeout(() => router.push(`/`, { scroll: false }), 1000);
    }
  }, [reset, router]);

  return (
    <motion.div
      className="my-4 flex flex-row justify-between items-center relative"
      style={{
        height: dimensions.height / 8,
      }}
      onClick={handleProjectPress}
    >
      <div className="flex h-full justify-between items-center">
        <motion.div
          className="h-full"
          style={{
            position: "absolute",
            width: dimensions.width + 20,
            left: -dimensions.width - 10,
            borderTopRightRadius: 30,
            borderBottomRightRadius: 30,
            background: companyColor,
            zIndex: isExpanded ? 999 : 0,
          }}
          ref={scope}
        />
        <div className="ml-6">
          <div className="font-semibold text-xl ml-6 mb-2">{position}</div>
          <div className="font-normal text-lg ml-6">{company}</div>
        </div>
      </div>
      <div className="mr-8">
        <BsChevronRight size={dimensions.height / 30} />
      </div>
    </motion.div>
  );
};
export default ProjectItem;
