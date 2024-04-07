import { useState, RefObject, useEffect } from "react";

const usePointer = (ref: RefObject<HTMLElement>, boundaries: number) => {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;

      const x = clientX - element.offsetLeft - element.offsetWidth / 2;
      const y = clientY - element.offsetTop - element.offsetHeight / 2;

      if (
        x >= boundaries ||
        x <= -boundaries ||
        y >= boundaries ||
        y <= -boundaries
      ) {
        return setPoint({ x: 0, y: 0 });
      }

      setPoint({ x, y });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return point;
};

export default usePointer;
