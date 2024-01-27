import { useState } from "react";
import { useCursor } from "../hooks/useCursor";
import { data } from "../lib/data";

export const Projects = () => {
  const [index, setIndex] = useState(0);
  const length = data.projects.data.length;

  const prev = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    } else {
      setIndex(length - 1);
    }
  };

  const next = () => {
    if (index < length - 1) {
      setIndex((prev) => prev + 1);
    } else {
      setIndex(0);
    }
  };
  console.log(index, length);

  const { setIsMouseEnter, setId } = useCursor();
  return (
    <div className="h-full w-full p-10  flex flex-col gap-10">
      <h1 className="text-3xl text-red-500">PROJECTS</h1>
      <div className="h-full w-full flex flex-col gap-5">
        <div className="bg-red-500 w-full h-full">
          {data.projects.data[index].title}
        </div>
        <div className="flex justify-between">
          <button
            id={`prev-button`}
            onMouseEnter={() => {
              setIsMouseEnter(true);
              setId(`prev-button`);
            }}
            onMouseLeave={() => {
              setIsMouseEnter(false);
              setId("");
            }}
            onClick={prev}
            className="hover-text   p-2 rounded-full overflow-hidden focus:outline-none mix-blend-difference hover:bg-red-500 hover:text-black"
          >
            PREV
          </button>
          <button
            id={`next-button`}
            onMouseEnter={() => {
              setIsMouseEnter(true);
              setId(`next-button`);
            }}
            onMouseLeave={() => {
              setIsMouseEnter(false);
              setId("");
            }}
            onClick={next}
            className="hover-text   p-2 focus:outline-none mix-blend-difference hover:bg-red-500 hover:text-black"
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
};
