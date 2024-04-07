"use client";

import React from "react";
import {
  motion,
  useTransform,
  useScroll,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";
import { Project } from "@/types";

type ProjectDescriptionProps = {
  project: Project;
  index: number;
};

const ProjectDescription = ({ project, index }: ProjectDescriptionProps) => {
  const { title } = project;

  const indexValue = useMotionValue(index);

  const { scrollY } = useScroll();

  const progressValue = useTransform(
    () => (scrollY.get() / indexValue.get()) * window.innerHeight
  );

  const scale = useTransform(scrollY, [0, window.innerHeight], [1., 2]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (index === 0) {
      console.log("Scale:", scale.get());
    }
  });

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-slate-100 border-slate-200 border-2">
      <motion.div
        style={{ scale }}
        className="rounded-lg h-1/3 w-2/5 bg-white flex justify-center items-center"
      >
        <motion.div>
          <div>{title}</div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectDescription;
