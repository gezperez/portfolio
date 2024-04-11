"use client";

import Images from "@/assets/images";
import { useDeviceSize } from "@/hooks";
import Image from "next/image";
import React from "react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const links = [
  {
    name: "LinkedIn",
    Icon: FaLinkedin,
  },
  {
    name: "GitHub",
    Icon: FaGithub,
  },
  {
    name: "Whatsapp",
    Icon: FaWhatsapp,
  },
];

const DevDescription = () => {
  const width = global.window && window.innerWidth;

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="h-screen flex flex-col justify-between items-center">
        <div className="m-6"></div>
        <div className="flex flex-col z-auto text-black">
          <div className="text-6xl font-semibold">EZEQUIEL PEREZ</div>
          <div className="font-normal text-2xl">Software Developer</div>
        </div>
        <div className={`flex flex-row m-6`}>
          {links.map(({ Icon }, index) => (
            <Icon
              key={index}
              color="black"
              size={width / 30}
              className="mx-2"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevDescription;
