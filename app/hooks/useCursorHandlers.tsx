import { useContext, useCallback } from "react";
import { CursorContext } from "../providers/CursorContext";

export const useCursorHandlers = () => {
  const { setCursor } = useContext(CursorContext);
  const buttonMouseEnter = () => {
    setCursor((prev) => ({
      ...prev,
      active: true,
      color: "red",
      scale: 2,
    }));
  };
  const buttonMouseLeave = () => {
    setCursor((prev) => ({
      ...prev,
      active: false,
      scale: 1,
      color: "blue",
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
