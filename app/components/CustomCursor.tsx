"use client";
import gsap from "gsap";
import { useEffect } from "react";

export const CustomCursor = () => {
  useEffect(() => {
    gsap.set(".ball", { xPercent: -50, yPercent: -50 });
    let targets = gsap.utils.toArray(".ball");
    window.addEventListener("mousemove", (e) => {
      gsap.to(targets, {
        duration: 0.5,
        x: e.clientX,
        y: e.clientY,
        ease: "power1.out",
        overwrite: "auto",
        stagger: 0.1,
      });
    });
  }, []);

  return (
    <>
      <div className="ball bg-yellow-500 w-[30px] h-[30px] fixed top-0 left-0 rounded-full"></div>
      <div className="ball bg-yellow-500 w-[25px] h-[25px] fixed top-0 left-0 rounded-full"></div>
      <div className="ball bg-yellow-500 w-[20px] h-[20px] fixed top-0 left-0 rounded-full"></div>
      <div className="ball bg-yellow-500 w-[15px] h-[15px] fixed top-0 left-0 rounded-full"></div>
      <div className="ball bg-yellow-500 w-[10px] h-[10px] fixed top-0 left-0 rounded-full"></div>
      <div className="ball bg-yellow-500 w-[5px] h-[5px] fixed top-0 left-0 rounded-full"></div>
    </>
  );
};
