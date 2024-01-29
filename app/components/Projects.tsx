import { data } from "../lib/data";
import { Slider } from "./Slider";

export const Projects = () => {
	return (
		<div className="h-full w-full   flex flex-col p-2 ">
			<Slider images={data.projects.data} />
		</div>
	);
};
