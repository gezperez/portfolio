"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { FaArrowDown } from "react-icons/fa6";
import { BsFillMouseFill } from "react-icons/bs";

const animationDuration = 5;

const FloatingMouse = () => {
  const { scrollYProgress } = useScroll();

  const scale = useTransform(scrollYProgress, [1, 1.5], [1.5, 1]);
  const opacity = useTransform(scrollYProgress, [1, 0], [0, 1]);

  return (
    <motion.div
      style={{
        scale,
        opacity,
      }}
      className="absolute bottom-12 flex flex-col items-center justify-center"
    >
      <motion.div
        animate={{
          y: [-5, 5, -5],
          scale: [1, 0.7, 1],
          transition: {
            duration: animationDuration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          },
        }}
      >
        <BsFillMouseFill size={30} />
      </motion.div>
      <motion.div
        animate={{
          y: [5, 0, 5],
          transition: {
            duration: animationDuration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          },
        }}
        className="mt-4"
      >
        <FaArrowDown size={10} />
      </motion.div>
    </motion.div>
  );
};

export default FloatingMouse;
