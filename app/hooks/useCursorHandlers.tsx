import { useContext, useCallback } from "react";
import { CursorContext } from "../providers/CursorContext";
import useMousePosition from "./useMousePosition";

export const useCursorHandlers = () => {
  const { setCursor } = useContext(CursorContext);

  const buttonMouseEnter = ({ id }: { id: string }) => {
    const hoverElement = document.getElementById(id);
    const rect = hoverElement?.getBoundingClientRect();

    if (rect && hoverElement) {
      console.log("mouse entered");
      setCursor((prev) => ({
        ...prev,
        active: true,
        color: "red",
        scale: 1,
        left: rect.left,
        top: rect.top,
        height: hoverElement.clientHeight,
        width: hoverElement.clientWidth,
        radius: "0%",
      }));
    }
  };
  const buttonMouseLeave = () => {
    console.log("mouse left");
    setCursor((prev) => ({
      ...prev,
      active: false,
      scale: 1,
      color: "blue",
      left: 0,
      top: 0,
      height: 10,
      width: 10,
      radius: "50%",
    }));
  };

  const descMouseEnter = () => {
    setCursor((prev) => ({
      ...prev,
      active: true,
      color: "green",
      scale: 5,
    }));
  };
  const descMouseLeave = () => {
    setCursor((prev) => ({
      ...prev,
      active: false,
      scale: 1,
      color: "blue",
    }));
  };
  const logoMouseEnter = () => {
    setCursor((prev) => ({
      ...prev,
      active: true,
      color: "yellow",
      scale: 5,
    }));
  };
  const logoMouseLeave = () => {
    setCursor((prev) => ({
      ...prev,
      active: false,
      scale: 1,
      color: "blue",
    }));
  };
  return {
    buttonMouseEnter,
    buttonMouseLeave,
    descMouseEnter,
    descMouseLeave,
    logoMouseLeave,
    logoMouseEnter,
  };
};
