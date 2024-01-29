"use client";
import React, { ReactNode, createContext, useState } from "react";

export interface CursorData {
  active: boolean;
  color: string;
  scale: number;
  elementId?: string;
  top?: number;
  left?: number;
  height?: number;
  width?: number;
  radius?: string;
}

export const CursorContext = createContext<{
  cursor: CursorData;
  setCursor: React.Dispatch<React.SetStateAction<CursorData>>;
}>({
  cursor: { active: false, color: "black", scale: 1 },
  setCursor: () => {},
});

interface CursorContextProps {
  children: ReactNode;
}

const CursorContextProvider = ({ children }: CursorContextProps) => {
  const [cursor, setCursor] = useState<CursorData>({
    active: false,
    color: "black",
    scale: 1,
  });

  return (
    <CursorContext.Provider value={{ cursor, setCursor }}>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorContextProvider;
