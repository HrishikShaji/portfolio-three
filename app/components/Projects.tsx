import { Dispatch, SetStateAction } from "react";
import { data } from "../lib/data";
import { Slider } from "./Slider";

interface ProjectsProps {
  setName: Dispatch<SetStateAction<string>>;
}

export const Projects: React.FC<ProjectsProps> = ({ setName }) => {
  return (
    <div className="h-full w-full   flex flex-col p-2 ">
      <Slider images={data.projects.data} setName={setName} />
    </div>
  );
};
