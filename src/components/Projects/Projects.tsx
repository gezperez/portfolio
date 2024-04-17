"use client";

import React, { Suspense, useEffect } from "react";
import projects from "@/data/projects";
import { ProjectItem } from "./components";
import { Color } from "@/utils";
import { IoArrowBack } from "react-icons/io5";
import { motion, useAnimate } from "framer-motion";
import { useRouter } from "next/navigation";

type ProjectsProps = {};

const Projects = ({}: ProjectsProps) => {
  const router = useRouter();

  const [scope, animate] = useAnimate();

  const handleBackPress = async () => {
    await animate(scope.current, { opacity: 0 }, { duration: 0.5 });
    router.push(`/`, { scroll: false });
  };

  useEffect(() => {
    if (scope?.current) {
      animate(scope.current, { opacity: 1 }, { duration: 0.5 });
    }
  }, [animate, scope]);

  return (
    <motion.div
      className="flex flex-col justify-center items-start"
      style={{
        background: `linear-gradient(to left top, ${Color.PRIMARY}, ${Color.WHITE})`,
        opacity: 0,
      }}
      ref={scope}
    >
      <div className="flex flex-row top-10 left-10 fixed items-center">
        <motion.div
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.8 }}
          onClick={handleBackPress}
        >
          <IoArrowBack
            style={{
              color: Color.PRIMARY,
            }}
            size={30}
          />
        </motion.div>
        <div
          className="ml-6 text-3xl font-semibold"
          style={{
            color: Color.PRIMARY,
          }}
        >
          Projects
        </div>
      </div>
      <div className="w-screen h-screen flex flex-row justify-between items-center px-20">
        {projects.map((project, index) => {
          return (
            <div key={index}>
              <Suspense>
                <ProjectItem project={project} index={index} />
              </Suspense>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Projects;
