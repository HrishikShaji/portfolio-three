import { useCursor } from "../hooks/useCursor";
import { data } from "../lib/data";

export const Skills = () => {
	const { setId, setIsMouseEnter } = useCursor();
	return (
		<div className="h-full w-full   flex flex-col p-2 ">
			<div className="grid grid-cols-4 gap-4 text-3xl">
				{data.skills.data.map((item, i) => (
					<div
						id={`${item}-button`}
						onMouseEnter={() => {
							setIsMouseEnter(true);
							setId(`${item}-button`);
						}}
						onMouseLeave={() => {
							setIsMouseEnter(false);
							setId("");
						}}
						key={i}
						className="hover-text bg-red-500 flex flex-col gap-1 p-2 text-black  "
					>
						<h1>{item}</h1>
					</div>
				))}
			</div>
		</div>
	);
};
