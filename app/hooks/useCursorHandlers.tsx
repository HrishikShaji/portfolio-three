import { useContext, useCallback } from "react";
import { CursorContext } from "../providers/CursorContext";

export const useCursorHandlers = () => {
  const { setCursor } = useContext(CursorContext);
  const onMouseEnter = () => {
    setCursor((prev) => ({
      ...prev,
      active: true,
      color: "red",
    }));
  };
  const onMouseLeave = () => {
    setCursor((prev) => ({
      ...prev,
      active: true,
      color: "blue",
    }));
  };

  return { onMouseEnter, onMouseLeave };
};
