"use client";

import { useDeviceSize } from "@/hooks";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Variants, motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

const links = [
  {
    name: "LinkedIn",
    Icon: FaLinkedin,
    url: "https://www.linkedin.com/in/ezequiel-p%C3%A9rez-888629184/",
  },
  {
    name: "GitHub",
    Icon: FaGithub,
    url: "https://github.com/gezperez",
  },
  {
    name: "Gmail",
    Icon: SiGmail,
  },
];

const containerVariants: Variants = {
  closed: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  open: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const DevDescription = () => {
  const [width] = useDeviceSize();

  const searchParams = useSearchParams();

  const reset = searchParams.get("reset");

  return (
    <motion.div
      variants={containerVariants}
      initial={reset ? "open" : "closed"}
      animate={reset ? "open" : "closed"}
      className="h-screen flex flex-col justify-center items-center "
    >
      <div className="h-screen flex flex-col justify-between items-center">
        <div className="h-full flex flex-col text-black justify-center items-start">
          <div className="text-6xl font-semibold">EZEQUIEL PEREZ</div>
          <div className="font-normal text-2xl mt-2">Software Developer</div>
        </div>
        <div className="bg-slate-700 w-screen flex justify-center items-start flex-col p-8 text-white">
          <div className="text-justify w-1/2">
            Experienced mobile developer skilled in React Native, with a proven
            track record of delivering user-friendly interfaces and optimizing
            performance. I bring dedication and expertise to every project,
            focusing on optimizing cross-application features, ensuring the
            application stays updated with the latest React Native guidelines
            and library versions, and creating scalable and comprehensive UI
            design systems.
          </div>
          <div className={`flex flex-row mt-6`}>
            {links.map(({ Icon, url }, index) => (
              <a key={index} className="mr-4" href={url} target="_blank">
                <Icon color="white" size={width / 40} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DevDescription;
