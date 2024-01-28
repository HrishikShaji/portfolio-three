import { Carousel } from "./Carousel";

export const Projects = () => {
	return (
		<div className="h-full w-full p-10  flex flex-col gap-10">
			<h1 className="text-3xl text-red-500">PROJECTS</h1>
			<Carousel />
		</div>
	);
};
