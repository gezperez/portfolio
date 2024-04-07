import React, { useRef } from "react";
import { Project } from "@/types";
import Image from "next/image";
import { useInView, motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  offscreen: {
    y: 1000,
  },
  onscreen: {
    y: 0,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 1.5,
    },
  },
};

const textVariants: Variants = {
  offscreen: {
    x: -1000,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1.5,
    },
  },
};

interface ProjectItemProps {
  project: Project;
}

const ProjectItem = ({ project }: ProjectItemProps) => {
  const {
    colors,
    company,
    position,
    description,
    technologies,
    initialDate,
    endDate,
    image,
  } = project;

  const background = `linear-gradient(306deg, ${colors[0]}, ${colors[1]})`;

  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      className=" h-screen flex flex-row overflow-hidden py-60 bg-slate-100 justify-center items-center origin-center top-left-1/3-3/4"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      style={{
        background,
      }}
      ref={ref}
    >
      <div className="w-3/5">
        <motion.div
          className="mr-44 drop-shadow-xl"
          variants={textVariants}
          animate={isInView ? "onscreen" : "offscreen"}
        >
          <div className="font-semibold text-6xl mb-4 text-white">
            {position}
          </div>
          <div className="font-normal text-3xl flex text-white">{company}</div>
        </motion.div>
      </div>

      <motion.div
        className="flex flex-col justify-center items-center"
        variants={cardVariants}
        animate={isInView ? "onscreen" : "offscreen"}
      >
        <div className="rounded-2xl overflow-hidden drop-shadow-xl mb-3">
          <Image src={image} width={200} height={200} alt={company} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectItem;
