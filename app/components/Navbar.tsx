"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import {
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { CursorContext } from "../providers/CursorContext";
import { useCursorHandlers } from "../hooks/useCursorHandlers";

export const Navbar = () => {
  const cursorHandlers = useCursorHandlers();

  return (
    <div className="w-full bg-transparent p-10 items-center flex  justify-between">
      <h1 className="text-5xl ">ANAKIN</h1>
      <div className={`flex gap-3 items-center text-xl leading-none`}>
        <Link
          {...cursorHandlers}
          className="button relative border-[2px] border-white py-1 px-2"
          href="/projects"
        >
          <div className="overlay absolute left-0 top-0 w-full h-full bg-white" />
          <h1 className="mix-blend-difference text-white">PROJECTS</h1>
        </Link>

        <Link className="border-[2px] border-white py-1 px-2" href="/about">
          ABOUT
        </Link>
      </div>
    </div>
  );
};
