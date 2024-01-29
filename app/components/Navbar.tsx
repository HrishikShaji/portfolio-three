"use client";
import Link from "next/link";
import { useCursorHandlers } from "../hooks/useCursorHandlers";

export const Navbar = () => {
  const {
    buttonMouseLeave,
    descMouseEnter,
    descMouseLeave,
    buttonMouseEnter,
    logoMouseEnter,
    logoMouseLeave,
  } = useCursorHandlers();

  return (
    <div className="w-full bg-transparent p-10 items-center flex  justify-between">
      <h1
        className="text-5xl "
        onMouseEnter={logoMouseEnter}
        onMouseLeave={logoMouseLeave}
      >
        ANAKIN
      </h1>
      <div className={`flex gap-3 items-center text-xl leading-none`}>
        <Link
          onMouseEnter={buttonMouseEnter}
          onMouseLeave={buttonMouseLeave}
          className="button relative border-[2px] border-white py-1 px-2"
          href="/projects"
        >
          <div className="overlay absolute left-0 top-0 w-full h-full bg-white" />
          <h1 className="mix-blend-difference text-white">PROJECTS</h1>
        </Link>

        <Link
          onMouseEnter={descMouseEnter}
          onMouseLeave={descMouseLeave}
          className="border-[2px] border-white py-1 px-2"
          href="/about"
        >
          ABOUT
        </Link>
      </div>
    </div>
  );
};
