import { useContext } from "react";
import { CursorContext } from "../providers/CursorContext";

export const useCursorHandlers = () => {
	const { setCursor } = useContext(CursorContext);

	const buttonMouseEnter = ({ id }: { id: string }) => {
		const hoverElement = document.getElementById(id);
		const rect = hoverElement?.getBoundingClientRect();

		if (rect && hoverElement) {
			setCursor((prev) => ({
				...prev,
				active: true,
				color: "red",
				scale: 1,
				left: rect.left,
				top: rect.top,
				height: hoverElement.clientHeight,
				width: hoverElement.clientWidth,
				radius: "0%",
			}));
		}
	};
	const buttonMouseLeave = () => {
		setCursor((prev) => ({
			...prev,
			active: false,
			scale: 1,
			color: "blue",
			left: 0,
			top: 0,
			height: 10,
			width: 10,
			radius: "50%",
		}));
	};

	const descMouseEnter = () => {
		setCursor((prev) => ({
			...prev,
			active: true,
			color: "green",
			scale: 5,
		}));
	};
	const descMouseLeave = () => {
		setCursor((prev) => ({
			...prev,
			active: false,
			scale: 1,
			color: "blue",
		}));
	};
	const logoMouseEnter = ({ id }: { id: string }) => {
		const hoverElement = document.getElementById(id);
		const rect = hoverElement?.getBoundingClientRect();

		if (rect && hoverElement) {
			setCursor((prev) => ({
				...prev,
				active: true,
				color: "red",
				scale: 1,
				left: rect.left,
				top: rect.top,
				height: hoverElement.clientHeight,
				width: hoverElement.clientWidth,
				radius: "0%",
			}));
		}
	};
	const logoMouseLeave = () => {
		setCursor((prev) => ({
			...prev,
			active: false,
			scale: 1,
			color: "blue",
			left: 0,
			top: 0,
			height: 10,
			width: 10,
			radius: "50%",
		}));
	};
	return {
		buttonMouseEnter,
		buttonMouseLeave,
		descMouseEnter,
		descMouseLeave,
		logoMouseLeave,
		logoMouseEnter,
	};
};
