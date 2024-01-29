"use client";
import React, { ReactNode, createContext, useState } from "react";
import { Cursor } from "../components/Cursor";

export const CursorContext = createContext<any>(null);

interface CursorContextProps {
  children: ReactNode;
}

const CursorContextProvider = ({ children }: CursorContextProps) => {
  const [cursor, setCursor] = useState({ active: false });

  return (
    <CursorContext.Provider value={{ cursor: cursor, setCursor: setCursor }}>
      <Cursor />
      {children}
    </CursorContext.Provider>
  );
};

export default CursorContextProvider;
