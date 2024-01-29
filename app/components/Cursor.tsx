"use client";

import React, { useContext } from "react";
import useMousePosition from "../hooks/useMousePosition";
import { CursorContext } from "../providers/CursorContext";
export const Cursor = () => {
  const { clientX, clientY } = useMousePosition();
  const { cursor } = useContext(CursorContext);
  return (
    <>
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="ball pointer-events-none   mix-blend-difference  fixed  "
        ></div>
      ))}
    </>
  );
};
