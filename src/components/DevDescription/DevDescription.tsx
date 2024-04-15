"use client";

import { useDeviceSize } from "@/hooks";
import React from "react";
import { Variants, motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { Color } from "@/utils";
import links from "@/data/links";

const containerVariants: Variants = {
  closed: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  open: {
    opacity: 0,
    background: "black",
    transition: {
      duration: 0.5,
    },
  },
};

const DevDescription = () => {
  const { dimensions } = useDeviceSize();

  const searchParams = useSearchParams();

  const reset = searchParams.get("reset");

  const handleOnPress = (name: string) => {
    if (name === "Gmail") {
      const emailAddress = "ezequielperezpc@gmail.com";
      const subject = "";
      const body = "";

      const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      window.open(mailtoLink);
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial={reset ? "open" : "closed"}
      animate={reset ? "open" : "closed"}
      className="h-screen flex flex-col justify-center items-center "
      style={{
        background: `linear-gradient(to left bottom, ${Color.PRIMARY}, ${Color.WHITE})`,
      }}
    >
      <div className="h-screen flex flex-col justify-between items-center">
        <div className="h-full flex flex-col text-white justify-center items-start">
          <div className="text-6xl font-normal">EZEQUIEL PEREZ</div>
          <div className="font-normal text-2xl mt-2">Software Developer</div>
        </div>
        <div
          className="w-screen flex justify-center items-start flex-col p-8 text-white"
          style={{
            background: Color.PRIMARY,
          }}
        >
          <div className="text-justify w-1/2">
            Experienced Software Developer, with a proven track record of
            delivering user-friendly interfaces and optimizing performance. I
            bring dedication to every project, focusing on
            optimizing cross-application features, ensuring the application
            stays updated with the latest guidelines and library versions, and
            creating scalable and comprehensive UI design systems.
          </div>
          <div className={`flex flex-row mt-6`}>
            {links.map(({ Icon, url, name }, index) => {
              return (
                <a
                  onClick={() => handleOnPress(name)}
                  key={index}
                  className="mr-4"
                  href={url}
                  target="_blank"
                >
                  <Icon color="white" size={dimensions.width / 50} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DevDescription;
