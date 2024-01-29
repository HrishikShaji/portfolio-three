import { Dispatch, SetStateAction } from "react";

interface ProjectsDescSectionProps {
	name: string
}

export const ProjectsDescSection: React.FC<ProjectsDescSectionProps> = ({ name }) => {
	return (
		<div className="w-full flex-grow">
			<p className="text-2xl">
				{name}</p>
		</div>
	);
};
