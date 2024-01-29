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
			<div
				className="w-[50vw] text-5xl  focus:outline-none mix-blend-difference hover:bg-red-500 text-red-500 p-2 hover:text-black"
				id="logo-container"
				onMouseEnter={() => logoMouseEnter({ id: "logo-container" })}
				onMouseLeave={logoMouseLeave}
			>
				ANAKIN
			</div>
			<div className={`flex gap-3 items-center text-xl leading-none`}>
				<Link
					id="projects-link"
					onMouseEnter={() => buttonMouseEnter({ id: "projects-link" })}
					onMouseLeave={buttonMouseLeave}
					className="button relative text-red-500 hover:bg-red-500 py-1 px-2"
					href="/projects"
				>
					<h1 className=" text-white">PROJECTS</h1>
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
