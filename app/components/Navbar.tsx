"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export const Navbar = () => {
  const overlay = useRef();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useLayoutEffect(() => {
    if (isMounted) {
      let ctx = gsap.context(() => {
        gsap.set(overlay.current, { scaleX: 0 });
      });

      return () => ctx.revert();
    }
  }, [isMounted]);

  const onMouseEnter = ({ currentTarget }) => {
    let q = gsap.utils.selector(currentTarget);

    gsap.to(q(".overlay"), { scaleX: 1, transformOrigin: "left" });
  };

  const onMouseLeave = ({ currentTarget }) => {
    let q = gsap.utils.selector(currentTarget);

    gsap.to(q(".overlay"), { scaleX: 0, transformOrigin: "right" });
  };
  return (
    <div className="w-full bg-transparent p-10 items-center flex  justify-between">
      <h1 className="text-5xl ">ANAKIN</h1>
      <div className={`flex gap-3 items-center text-xl leading-none`}>
        <Link
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="button relative border-[2px] border-white py-1 px-2"
          href="/projects"
        >
          <div
            ref={overlay}
            className="overlay absolute left-0 top-0 w-full h-full bg-white"
          />
          <h1 className="mix-blend-difference text-white">PROJECTS</h1>
        </Link>

        <Link className="border-[2px] border-white py-1 px-2" href="/about">
          ABOUT
        </Link>
      </div>
    </div>
  );
};
