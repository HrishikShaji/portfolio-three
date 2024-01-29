"use client";
import { ReactNode, useState } from "react";
import { About } from "./components/About";
import { Info } from "./components/Info";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useCursorHandlers } from "./hooks/useCursorHandlers";

gsap.registerPlugin(useGSAP);

const buttons = ["about", "skills", "projects", "contact"];

const lookup: Record<string, ReactNode> = {
  about: <About />,
  skills: <Skills />,
  projects: <Projects />,
  contact: <Contact />,
};

export default function Home() {
  const [section, setSection] = useState("about");

  const { buttonMouseEnter, buttonMouseLeave } = useCursorHandlers();
  return (
    <main className="w-full h-full p-10 flex gap-10 justify-between">
      <div className="flex flex-col gap-20">
        <Info />
        <div className="hover-container flex text-3xl gap-3 text-red-500">
          {buttons.map((item) => (
            <button
              key={item}
              id={`${item}-button`}
              onMouseEnter={() => buttonMouseEnter({ id: `${item}-button` })}
              onMouseLeave={buttonMouseLeave}
              className="hover-text   p-2 focus:outline-none mix-blend-difference hover:bg-red-500 hover:text-black"
              onClick={() => setSection(item)}
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
      <div className="w-[50vw] h-[70vh]">{lookup[section]}</div>
    </main>
  );
}

{
  /*   old animation
			      
			      
									      <button
										      key={item}
										      id={`${item}-button`}
										      onMouseEnter={() => {
											      setIsMouseEnter(true);
											      setId(`${item}-button`);
										      }}
										      onMouseLeave={() => {
											      setIsMouseEnter(false);
											      setId("");
										      }}
										      className="hover-text   p-2 focus:outline-none mix-blend-difference hover:bg-red-500 hover:text-black"
										      onClick={() => setSection(item)}
									      >
										      {item.toUpperCase()}
									      </button>
			      
			      */
}
