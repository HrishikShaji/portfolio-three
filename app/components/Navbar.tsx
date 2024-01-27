"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useRef } from "react";

export const Navbar = () => {
	const ref = useRef<HTMLAnchorElement>(null);
	const overlay = useRef<HTMLDivElement>(null);
	useGSAP(() => {
		const button = document.querySelector(".button");
		const tl = gsap.timeline();

		if (ref.current) {
			ref.current.addEventListener("mouseenter", () => {
				gsap.fromTo(
					overlay.current,
					{
						scaleX: 0,
						transformOrigin: "left",
					},
					{
						scaleX: 1,
					},
				);
			});
			ref.current.addEventListener("mouseleave", () => {
				gsap.fromTo(
					overlay.current,
					{
						scaleX: 1,
						transformOrigin: "right",
					},
					{
						scaleX: 0,
					},
				);
			});
		}
	}, {});

	return (
		<div className="w-full bg-transparent p-10 items-center flex  justify-between">
			<h1 className="text-3xl ">ANAKIN</h1>
			<div className={`flex gap-3 items-center text-xl leading-none`}>
				<Link
					ref={ref}
					className="button relative border-[2px] border-white py-1 px-2"
					href="/projects"
				>
					<div
						ref={overlay}
						className="absolute left-0 top-0 w-full h-full bg-white"
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
