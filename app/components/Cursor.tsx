"use client";

import React, { useContext, useEffect } from "react";
import useMousePosition from "../hooks/useMousePosition";
import { CursorContext } from "../providers/CursorContext";
import gsap from "gsap";
export const Cursor = () => {
	const { clientX, clientY } = useMousePosition();
	const { cursor } = useContext(CursorContext);
	useEffect(() => {
		let targets = gsap.utils.toArray(".ball");

		gsap.to(targets, {
			duration: cursor.active ? 0.5 : 0.5,
			x: cursor.left ? cursor.left : clientX ? clientX : 0,
			y: cursor.top ? cursor.top : clientX ? clientY : 0,
			height: cursor.height ? cursor.height : 10,
			width: cursor.width ? cursor.width : 10,
			ease: "power1.out",
			overwrite: "auto",
			stagger: cursor.active ? 0.1 : 0.1,
			transform: cursor.active ? "translate(50%,50%)" : "translate(-50%,-50%)",
			borderRadius: cursor.radius ? cursor.radius : "50%",
			backgroundColor: cursor.color ? cursor.color : `hsl(10,10%,80%)`,
		});
	}, [cursor, clientY, clientX]);
	return (
		<>
			{Array.from({ length: 4 }).map((_, i) => (
				<div
					key={i}
					className="ball h-2 w-2 top-0 left-0 rounded-full pointer-events-none  z-[9999]  mix-blend-difference  fixed  "
					style={{ backgroundColor: "white" }}
				></div>
			))}
		</>
	);
};
