"use client";

import { useCursor } from "../hooks/useCursor";

export const CustomCursor = () => {
	return (
		<>
			{Array.from({ length: 10 }).map((_, i) => (
				<div
					key={i}
					className="ball  mix-blend-difference  fixed  "
					style={{
						backgroundColor: `hsl(10,10%,${100 - i * 2}%)`,
					}}
				></div>
			))}
		</>
	);
};
