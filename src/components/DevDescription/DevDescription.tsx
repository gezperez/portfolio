"use client";

import { useDeviceSize } from "@/hooks";
import React, { useEffect } from "react";
import { Variants, motion, useAnimate } from "framer-motion";
import { useRouter } from "next/navigation";
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
  const [scope, animate] = useAnimate();

  const { dimensions } = useDeviceSize();

  useEffect(() => {
    if (scope?.current) {
      animate(scope.current, { opacity: 1 }, { duration: 0.5 });
    }
  }, [animate, scope]);

  const router = useRouter();

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

  const handleProjectsPress = async () => {
    await animate(scope.current, { opacity: 0 }, { duration: 0.5 });
    router.push(`/projects`, { scroll: false });
  };

  return (
    <motion.div
      variants={containerVariants}
      className="h-screen flex flex-col justify-center items-center "
      style={{
        opacity: 0,
        background: `linear-gradient(to right bottom, ${Color.PRIMARY}, ${Color.WHITE})`,
      }}
      ref={scope}
    >
      <div className="h-screen flex flex-col justify-between items-center">
        <div className="h-full flex flex-col text-white justify-center items-start">
          <div className="text-6xl font-semibold">Ezequiel Perez</div>
          <div className="font-normal text-2xl mt-2">Software Developer</div>
        </div>
        <div className="w-full flex flex-row justify-between items-center px-10 mb-6">
          <div className={`flex flex-row`}>
            {links.map(({ Icon, url, name }, index) => {
              return (
                <motion.div
                  key={index}
                  className="mr-6"
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <a
                    onClick={() => handleOnPress(name)}
                    href={url}
                    target="_blank"
                  >
                    <Icon color="white" size={dimensions.width / 35} />
                  </a>
                </motion.div>
              );
            })}
          </div>
          <motion.div
            className="text-white px-8 py-4"
            style={{
              background: Color.PRIMARY,
              borderRadius: 100,
            }}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.8 }}
            onClick={handleProjectsPress}
          >
            <div className="text-2xl font-semibold">Projects</div>
          </motion.div>
        </div>
        <div className="flex flex-row">
          <div
            className="w-full flex justify-center items-start flex-col p-8 text-white"
            style={{
              background: Color.PRIMARY,
            }}
          >
            <div className="text-2xl font-semibold mb-4">Description</div>
            <div className="text-justify">
              I am an experienced Software developer with seven years of
              professional experience in designing and implementing robust
              mobile and web applications. My expertise lies in creating
              efficient, scalable, and user-friendly solutions that leverage the
              full potential of any technology.
            </div>
          </div>
          <div
            className="w-full flex justify-center items-start flex-col p-8 text-white"
            style={{
              background: Color.PRIMARY,
            }}
          >
            <div className="text-2xl font-semibold mb-4">Technical Skills</div>
            <div className="text-justify">
              - React, TypeScript, State Management, Animations, Navigation -
              RESTful APIs, GraphQL, third-party integrations. - Web and Mobile
              app architecture, design patterns, best practices. - Version
              Control Systems, CD/CI, App Stores Management - Firebase, AWS,
              SQL, No-SQL
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DevDescription;
