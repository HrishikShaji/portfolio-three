import gsap from "gsap";
import { useEffect, useState } from "react";

export const useCursor = () => {
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const [id, setId] = useState<string>("");
  useEffect(() => {
    let targets = gsap.utils.toArray(".ball");

    const hoverElement = document.getElementById(id);
    const rect = hoverElement?.getBoundingClientRect();
    const animation = (e: MouseEvent) => {
      console.log(e.clientX, hoverElement?.offsetTop);
      gsap.to(targets, {
        duration: 0.5,
        x: hoverElement ? rect?.left : e.clientX,
        y: hoverElement ? rect?.top : e.clientY,
        height: hoverElement?.clientHeight ? hoverElement.clientHeight : 10,
        width: hoverElement?.clientWidth ? hoverElement.clientWidth : 10,
        ease: "power1.out",
        overwrite: "auto",
        stagger: 0.1,
        backgroundColor: isMouseEnter ? "red" : "white",
        borderRadius: isMouseEnter ? "0%" : "50%",
      });
    };
    window.addEventListener("mousemove", animation);

    return () => window.removeEventListener("mousemove", animation);
  }, [isMouseEnter, id]);

  return { isMouseEnter, setIsMouseEnter, setId };
};
