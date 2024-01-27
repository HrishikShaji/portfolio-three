import { data } from "../lib/data";

export const Skills = () => {
	return (
		<div className="w-full h-full flex flex-col p-10">
			<h1 className="text-3xl text-red-500">SKILLS</h1>
			<div className="grid grid-cols-4 gap-4">
				{data.skills.data.map((item, i) => (
					<div key={i} className="flex flex-col gap-1">
						<h1>{item}</h1>
					</div>
				))}
			</div>
		</div>
	);
};
