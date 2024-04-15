"use client";

import { useDeviceSize } from "@/hooks";
import { Project } from "@/types";
import { Variants, motion, useAnimate } from "framer-motion";
import React, { useEffect, useState } from "react";
import { BsChevronRight } from "react-icons/bs";

type ProjectItemProps = {
  project: Project;
  index: number;
};

const ProjectItem = ({ project, index }: ProjectItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const [scope, animate] = useAnimate();

  const { company, companyColor, position } = project;

  const { dimensions } = useDeviceSize();

  const handleItemPress = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (scope.current) {
      if (isOpen) {
        setIsExpanded(true);
        animate(scope.current, { x: dimensions.width + 10 }, { duration: 0.5 });
        setTimeout(() => {
          animate(scope.current, { scaleY: 20 }, { duration: 0.5 });
        }, 500);
      } else {
        animate(scope.current, { scaleY: 1 }, { duration: 0.5 });
        setTimeout(() => {
          setIsExpanded(false);
          animate(scope.current, { x: 0 }, { duration: 0.5 });
        }, 500);
      }
    }
  }, [animate, dimensions.width, isOpen, scope]);

  return (
    <motion.div
      className="my-4 flex flex-row justify-between items-center relative"
      style={{
        height: dimensions.height / 8,
      }}
      onClick={handleItemPress}
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
