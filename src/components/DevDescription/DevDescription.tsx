"use client";

import { useDeviceSize } from "@/hooks";
import React from "react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

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

const DevDescription = () => {
  const [width] = useDeviceSize();

  return (
    <div className="h-screen flex flex-col justify-center items-center ">
      <div className="h-screen flex flex-col justify-between items-center">
        <div className="h-full flex flex-col text-black justify-center items-start">
          <div className="text-6xl font-semibold">EZEQUIEL PEREZ</div>
          <div className="font-normal text-2xl mt-2">Software Developer</div>
        </div>
        <div className="bg-slate-200 w-screen flex justify-center items-start flex-col p-8">
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
                <Icon color="black" size={width / 30} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevDescription;
