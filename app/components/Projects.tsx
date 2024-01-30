import { Dispatch, SetStateAction } from "react";
import { data } from "../lib/data";
import { Slider } from "./Slider";
import { Project } from "../page";

interface ProjectsProps {
	setProject: Dispatch<SetStateAction<Project>>;
}

export const Projects: React.FC<ProjectsProps> = ({ setProject }) => {
	return (
		<div className="h-full w-full   flex flex-col p-2 ">
			<Slider projects={data.projects.data} setProject={setProject} />
		</div>
	);
};
