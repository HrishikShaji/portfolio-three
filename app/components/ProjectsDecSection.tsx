import { Dispatch, SetStateAction } from "react";
import { Project } from "../page";

interface ProjectsDescSectionProps {
	project: Project;
}

export const ProjectsDescSection: React.FC<ProjectsDescSectionProps> = ({
	project,
}) => {
	return (
		<div className="w-full flex-grow place-items-center grid grid-cols-5">
			<div className="flex flex-col gap-3">
				<h1 className="text-3xl">/TITLE</h1>
				<p className="text-2xl">{project.title}</p>
			</div>
			<div className="flex flex-col gap-3">
				<h1 className="text-3xl">/YEAR</h1>
				<p className="text-2xl">{project.year}</p>
			</div>
			<div className="flex flex-col gap-3">
				<h1 className="text-3xl">/TECHNOLOGIES</h1>
				<p className="text-2xl">{project.tools}</p>
			</div>
			<div className="flex flex-col gap-3">
				<h1 className="text-3xl">/SOURCE CODE</h1>
				<p className="text-2xl">{project.year}</p>
			</div>
			<div className="flex flex-col gap-3">
				<h1 className="text-3xl">/URL</h1>
				<p className="text-2xl">{project.year}</p>
			</div>
		</div>
	);
};
