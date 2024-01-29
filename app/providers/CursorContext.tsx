"use client";
import React, { ReactNode, createContext, useState } from "react";

export interface CursorData {
  active: boolean;
  color: string;
}

export const CursorContext = createContext<{
  cursor: CursorData;
  setCursor: React.Dispatch<React.SetStateAction<CursorData>>;
}>({
  cursor: { active: false, color: "black" },
  setCursor: () => {},
});

interface CursorContextProps {
  children: ReactNode;
}

const CursorContextProvider = ({ children }: CursorContextProps) => {
  const [cursor, setCursor] = useState<CursorData>({
    active: false,
    color: "black",
  });

  return (
    <CursorContext.Provider value={{ cursor, setCursor }}>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorContextProvider;
