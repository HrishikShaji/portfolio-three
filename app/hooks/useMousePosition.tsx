"use client";
import { useState, useEffect, useContext } from "react";
import { CursorContext } from "../providers/CursorContext";
import gsap from "gsap";

const useMousePosition = () => {
	const [position, setPosition] = useState({
		clientX: 0,
		clientY: 0,
	});
	const { cursor } = useContext(CursorContext);

	const updatePosition = (event: MouseEvent) => {
		const { pageX, pageY, clientX, clientY } = event;
		console.log(clientY, clientX, cursor);
		setPosition({
			clientX,
			clientY,
		});

		let targets = gsap.utils.toArray(".ball");

		gsap.to(targets, {
			duration: 0.5,
			x: cursor.left ? cursor.left : clientX,
			y: cursor.top ? cursor.top : clientY,
			height: cursor.height ? cursor.height : 10,
			width: cursor.width ? cursor.width : 10,
			ease: "power1.out",
			overwrite: "auto",
			stagger: 0.1,
			borderRadius: cursor.radius ? cursor.radius : "50%",
			backgroundColor: cursor.color ? cursor.color : `hsl(10,10%,80%)`,
		});
	};

	useEffect(() => {
		document.addEventListener("mousemove", updatePosition, false);
		document.addEventListener("mouseleave", updatePosition, false);
		document.addEventListener("mouseenter", updatePosition, false);

		return () => {
			document.removeEventListener("mousemove", updatePosition);
			document.removeEventListener("mouseleave", updatePosition);
			document.removeEventListener("mouseenter", updatePosition);
		};
	}, [cursor]);

	return position;
};

export default useMousePosition;
