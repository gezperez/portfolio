"use client";

import { motion } from "framer-motion";
import React, { useRef } from "react";

const firstName = "Ezequiel";
const lastName = "Perez";

const DevDescription = () => {
  const ref = useRef(null);

  return (
    <div
      ref={ref}
      className="h-screen flex flex-col justify-center items-center drop-shadow-xl mb-10"
    >
      <div>
        <div className="flex flex-row">
          {firstName.split("").map((value, index) => (
            <motion.div
              key={index}
              className="font-semibold text-7xl mb-6"
              drag
              whileDrag={{ scale: 1.2 }}
              dragConstraints={{
                left: -250,
                right: 250,
                bottom: 250,
                top: -250,
              }}
            >
              {value}
            </motion.div>
          ))}
          <motion.div
            className="font-semibold text-7xl mb-6 text-react"
            drag
            dragConstraints={{
              left: -250,
              right: 250,
              bottom: 250,
              top: -250,
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {lastName}
          </motion.div>
        </div>
        <div className="font-normal text-2xl">Software Developer</div>
      </div>
    </div>
  );
};

export default DevDescription;
