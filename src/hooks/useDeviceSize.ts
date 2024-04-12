"use client";

import { useEffect, useState } from "react";

const useDeviceSize = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [fullHeight, setFullHeight] = useState(0);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    setFullHeight(window.document.body.offsetHeight);
  };

  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const dimensions = {
    width,
    height,
    fullHeight,
  };

  const isMobile = width < 768;

  return { dimensions, isMobile };
};

export default useDeviceSize;
