import React, { useRef, useState } from "react";
import { Project } from "@/types";
import Image from "next/image";
import { useInView, motion, Variants } from "framer-motion";
import { useDeviceSize } from "@/hooks";

const duration = 4;

const cardVariants: Variants = {
  closed: {
    scale: 0.3,
    rotate: -90,
    borderRadius: "100%",
    marginRight: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 2,
      delay: 0.5,
    },
  },
  open: {
    scale: 1,
    rotate: 0,
    borderRadius: "20%",
    marginRight: 60,

    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 2,
    },
  },
};

const textCardVariants: Variants = {
  closed: {
    width: 200,
    height: 200,
    borderRadius: "20%",
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 2,
      delay: 1,
    },
  },
  open: {
    width: 700,
    height: 400,
    borderRadius: "10%",
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1,
    },
  },
};

const textVariants: Variants = {
  closed: {
    x: -1000,
    opacity: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 2,
    },
  },
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 2,
      delay: 1,
    },
  },
};

interface ProjectItemProps {
  project: Project;
}

const ProjectItem = ({ project }: ProjectItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const [width, height] = useDeviceSize();

  const {
    colors,
    company,
    position,
    description,
    technologies,
    initialDate,
    endDate,
    companyColor,
    image,
  } = project;

  const containerVariants: Variants = {
    closed: {
      height: 300,
      width: 600,
      rotate: 90,
      borderWidth: 5,
      borderColor: "hsla(77, 100%, 0%, 1)",
      background: `linear-gradient(to right, ${colors[0]}, ${colors[1]})`,
      borderRadius: 50,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 2,
        delay: 0.5,
      },
    },
    open: {
      borderWidth: 0,
      background: `linear-gradient(to right, ${companyColor}, ${companyColor})`,
      height,
      width,
      rotate: 0,
      borderRadius: 0,
      transition: {
        bounce: 0.2,
        duration: 1,
      },
    },
  };

  const background = `linear-gradient(306deg, ${colors[0]}, ${colors[1]})`;

  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="flex justify-center items-center h-screen" ref={ref}>
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={containerVariants}
        className="flex flex-col justify-center items-center overflow-hidden"
      >
        <motion.div
          className="flex flex-row overflow-hidden justify-between items-center h-full w-full"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.div
            initial="closed"
            variants={textCardVariants}
            animate={isOpen ? "open" : "closed"}
          >
            <motion.div
              initial="closed"
              className="drop-shadow-xl ml-10"
              variants={textVariants}
              animate={isOpen ? "open" : "closed"}
            >
              <div className="font-semibold text-6xl text-description">
                {position}
              </div>
              <div className="font-semibold text-3xl flex my-6 text-description">
                {company}
              </div>
              <div className="font-normal text-xl flex text-description">
                {description}
              </div>
            </motion.div>
          </motion.div>

          <button>
            <motion.div
              onClick={() => setIsOpen(!isOpen)}
              className="justify-center items-center overflow-hidden drop-shadow-xl"
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                variants={cardVariants}
                className="overflow-hidden mb-3"
              >
                <Image src={image} width={200} height={200} alt={company} />
              </motion.div>
            </motion.div>
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectItem;
