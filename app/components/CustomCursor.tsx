"use client";

import { useCursor } from "../hooks/useCursor";

export const CustomCursor = () => {
  return (
    <>
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="ball  mix-blend-difference rounded-full fixed top-0 left-0 "
          style={{
            width: `${30 - i * 2}px`,
            height: `${30 - i * 2}px`,
            backgroundColor: `hsl(10,10%,${100 - i * 2}%)`,
          }}
        ></div>
      ))}
    </>
  );
};
