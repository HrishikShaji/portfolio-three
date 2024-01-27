"use client";

export const CustomCursor = () => {
	return (
		<>
			{Array.from({ length: 10 }).map((_, i) => (
				<div
					key={i}
					className="ball bg-white  fixed top-0 left-0 "
					style={{
						width: `${30 - i * 2}px`,
						height: `${30 - i * 2}px`,
						opacity: i === 0 ? 1 : `${(30 - i * 2) / 100}`,
					}}
				></div>
			))}
		</>
	);
};
