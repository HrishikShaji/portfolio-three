"use client";
import { useContext } from "react";
import { useCursor } from "../hooks/useCursor";
import { data } from "../lib/data";
import { CursorContext } from "../providers/CursorContext";
import { useCursorHandlers } from "../hooks/useCursorHandlers";

export const About = () => {
	const { descMouseEnter, buttonMouseEnter, descMouseLeave } = useCursorHandlers();
	return (
		<div className="h-full w-full p-10  flex flex-col gap-10">
			<h1
				onMouseEnter={buttonMouseEnter}
				onMouseLeave={descMouseLeave}
				className="text-3xl text-red-500"
			>
				ABOUT
			</h1>
			<p onMouseEnter={descMouseEnter} onMouseLeave={descMouseLeave}>
				{data.about.description}
			</p>
		</div>
	);
};
