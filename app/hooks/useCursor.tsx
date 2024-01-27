import gsap from "gsap";
import { useEffect, useState } from "react";

export const useCursor = () => {
	const [isMouseEnter, setIsMouseEnter] = useState(false);
	useEffect(() => {
		console.log(isMouseEnter);
		gsap.set(".ball", { xPercent: -50, yPercent: -50 });
		let targets = gsap.utils.toArray(".ball");

		const animation = (e: MouseEvent) => {
			gsap.to(targets, {
				duration: 0.5,
				x: e.clientX,
				y: e.clientY,
				ease: "power1.out",
				overwrite: "auto",
				stagger: 0.1,
				scale: isMouseEnter ? 2 : 1,
				backgroundColor: isMouseEnter ? "red" : "white",
			});
		};
		window.addEventListener("mousemove", animation);

		return () => window.removeEventListener("mousemove", animation);
	}, [isMouseEnter]);

	return { isMouseEnter, setIsMouseEnter };
};
