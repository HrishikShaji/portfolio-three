import gsap from "gsap";
import { useEffect, useState } from "react";

export const useCursor = () => {
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const [id, setId] = useState<string>("");
  useEffect(() => {
    gsap.set(".ball", { xPercent: -50, yPercent: -50 });
    let targets = gsap.utils.toArray(".ball");

    const hoverElement = document.getElementById(id);
    console.log(targets[0]);

    const animation = (e: MouseEvent) => {
      gsap.to(targets, {
        duration: 0.5,
        x: e.clientX,
        y: e.clientY,
        height: hoverElement?.clientHeight ? hoverElement.clientHeight : 10,
        width: hoverElement?.clientWidth ? hoverElement.clientWidth : 10,
        ease: "power1.out",
        overwrite: "auto",
        stagger: 0.1,
        backgroundColor: isMouseEnter ? "red" : "white",
      });
    };
    window.addEventListener("mousemove", animation);

    return () => window.removeEventListener("mousemove", animation);
  }, [isMouseEnter, id]);

  return { isMouseEnter, setIsMouseEnter, setId };
};
