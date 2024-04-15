import links from "@/data/links";
import projects from "@/data/projects";
import { useDeviceSize } from "@/hooks";
import { Color } from "@/utils";
import React from "react";
import { ProjectItem } from "./components";

const ProjectsList = () => {
  const { dimensions } = useDeviceSize();

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
    <div
      className="h-full"
      style={{
        background: `linear-gradient(to bottom, ${Color.PRIMARY}, ${Color.PRIMARY})`,
      }}
    >
      <div className="flex flex-col items-center text-white">
        <div className="flex p-6 justify-start items-start">
          {links.map(({ name, url, Icon, type }, index) => (
            <a
              onClick={() => handleOnPress(name)}
              key={index}
              className="mx-4"
              href={url}
              target="_blank"
            >
              <Icon color="white" size={dimensions.width / 12} />
            </a>
          ))}
        </div>
        <div className="h-full flex flex-col text-white justify-center items-start mt-12">
          <div className="text-4xl font-semibold">EZEQUIEL PEREZ</div>
          <div className="font-normal text-xl mt-2">Software Developer</div>
        </div>
        <div className="text-justify text-white mt-10 pb-10 border-b-2 border-white mx-10">
          Experienced Software Developer, with a proven track record of
          delivering user-friendly interfaces and optimizing performance. I
          bring dedication to every project, focusing on optimizing
          cross-application features, ensuring the application stays updated
          with the latest guidelines and library versions, and creating scalable
          and comprehensive UI design systems.
        </div>
        <div className="font-normal text-xl mt-10">Projects</div>
        <div className="flex flex-col w-full">
          {projects.map((project, index) => (
            <ProjectItem key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;
