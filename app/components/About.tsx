import { data } from "../lib/data";

export const About = () => {
	return (
		<div className="h-full w-full p-10  flex flex-col gap-10">
			<h1 className="text-3xl text-red-500">ABOUT</h1>
			<h1>{data.about.description}</h1>
		</div>
	);
};
