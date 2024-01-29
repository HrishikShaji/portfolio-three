"use client";
import React, { ReactNode, createContext, useState } from "react";
import { Cursor } from "../components/Cursor";

export interface CursorData {
	active: boolean;
	color: string;
	scale: number;
	elementId?: string;
	top?: number;
	left?: number;
	height?: number;
	width?: number;
	radius?: string;
}

export const CursorContext = createContext<{
	cursor: CursorData;
	setCursor: React.Dispatch<React.SetStateAction<CursorData>>;
}>({
	cursor: {
		active: false,
		color: "white",
		scale: 1,
		top: 0,
		left: 0,
		height: 10,
		width: 10,
		radius: "50%",
	},
	setCursor: () => { },
});

interface CursorContextProps {
	children: ReactNode;
}

const CursorContextProvider = ({ children }: CursorContextProps) => {
	const [cursor, setCursor] = useState<CursorData>({
		active: false,
		color: "white",
		scale: 1,
		top: 0,
		left: 0,
	});

	return (
		<CursorContext.Provider value={{ cursor, setCursor }}>
			{children}
		</CursorContext.Provider>
	);
};

export default CursorContextProvider;
