import React, { useEffect, useState } from "react";
import { Project } from "@/types";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import { useDeviceSize } from "@/hooks";
import { CloseProjectIcon } from "@/app/project/components";

type ProjectDetailProps = {
  project: Project;
  index: string | null;
};

const duration = 0.5;

const descriptionVariants: Variants = {
  closed: {
    opacity: 0,
    transition: {
      duration,
    },
  },
  open: {
    opacity: 1,
    transition: {
      duration,
    },
  },
};

const ProjectDetail = ({ project, index }: ProjectDetailProps) => {
  const { company, logo, description, position, technologies } = project;

  const { dimensions } = useDeviceSize();

  const [isOpen, setIsOpen] = useState(false);

  const handleOnClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <motion.div
      variants={descriptionVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="w-full"
    >
      <CloseProjectIcon index={index} isOpen={isOpen} onClose={handleOnClose} />
      <div>
        <div className="flex flex-col items-center overflow-hidden">
          <Image
            alt={company}
            src={logo}
            className="drop-shadow-xl overflow-hidden mt-10 mb-6"
            width={dimensions.height / 6}
            height={dimensions.height / 6}
            priority
            style={{
              borderRadius: 30,
            }}
          />
        </div>
        <div className="flex flex-col text-white justify-center items-center text-center border-b-2 border-white pb-6 mx-10">
          <div className="text-3xl font-semibold">{position.toUpperCase()}</div>
          <div className="font-normal text-xl mt-4">
            {`${company} App`.toUpperCase()}
          </div>
        </div>
        <div className="mt-4 border-b-2 border-white pb-6 px-10">
          <div className="font-semibold mb-4 text-lg text-leftDescription">
            EXPERIENCE
          </div>
          <div className="text-justify text-leftDescription">{description}</div>
        </div>
        <div className="pt-4 flex flex-col bg-white px-10 pb-10">
          <div className="font-semibold mb-6 text-lg text-black">
            TECHNOLOGIES
          </div>
          <div className="grid grid-cols-3 gap-16 gap-y-6">
            {technologies.map(({ name, icon }, index) => (
              <div key={index}>
                <Image alt={name} src={icon} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
