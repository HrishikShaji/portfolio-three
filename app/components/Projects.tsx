import { useState } from "react";
import { useCursor } from "../hooks/useCursor";
import { data } from "../lib/data";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Projects = () => {
  const length = data.projects.data.length;
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(length - 1);
  const [nextIndex, setNextIndex] = useState(1);
  const [direction, setDirection] = useState(0);
  const prev = () => {
    setDirection(-100);
    let prevIndexValue = index - 1 >= 0 ? index - 1 : length - 1; // Handle loop back to the last item
    let prevPrevIndexValue =
      prevIndexValue - 1 >= 0 ? prevIndexValue - 1 : length - 1; // Calculate previous previous index
    setIndex(prevIndexValue);
    setPrevIndex(prevPrevIndexValue);
    setNextIndex(index);
  };

  const next = () => {
    setDirection(100);
    let nextIndexValue = index + 1 < length ? index + 1 : 0; // Handle loop back to the first item
    let nextNextIndexValue =
      nextIndexValue + 1 < length ? nextIndexValue + 1 : 0; // Calculate next next index
    setIndex(nextIndexValue);
    setPrevIndex(index);
    setNextIndex(nextNextIndexValue);
  };

  console.log(prevIndex, index, nextIndex, "length is", length);

  useGSAP(
    () => {
      const element = document.getElementById(`image-${index}`);
      const nextElement = document.getElementById(`image-${index + 1}`);
      gsap.fromTo(
        element,
        {
          xPercent: direction,
        },
        {
          xPercent: 0,
        },
      );
    },
    { dependencies: [index, direction] },
  );

  const { setIsMouseEnter, setId } = useCursor();
  return (
    <div className="h-full w-full p-10  flex flex-col gap-10">
      <h1 className="text-3xl text-red-500">PROJECTS</h1>
      <div className="h-full  w-full flex flex-col gap-5">
        <div id={`image-${index}`} className=" flex bg-red-500 w-full h-[40vh]">
          <Image
            src={data.projects.data[prevIndex].img}
            alt="image"
            height={2000}
            width={2000}
            className="h-full w-full object-cover"
          />
          <Image
            src={data.projects.data[index].img}
            alt="image"
            height={2000}
            width={2000}
            className="h-full w-full object-cover"
          />
          <Image
            src={data.projects.data[nextIndex].img}
            alt="image"
            height={2000}
            width={2000}
            className="h-full w-full object-cover"
          />
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
