"use client";
import { useContext } from "react";
import { useCursor } from "../hooks/useCursor";
import { data } from "../lib/data";
import { CursorContext } from "../providers/CursorContext";
import { useCursorHandlers } from "../hooks/useCursorHandlers";

export const About = () => {
	const { descMouseEnter, buttonMouseEnter, descMouseLeave } =
		useCursorHandlers();
	return (
		<div className="h-full w-full text-3xl  flex flex-col p-2 ">
			<p onMouseEnter={descMouseEnter} onMouseLeave={descMouseLeave}>
				{data.about.description}
			</p>
		</div>
	);
};
