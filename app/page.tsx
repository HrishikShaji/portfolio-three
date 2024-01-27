"use client";
import { ReactNode, useState } from "react";
import { About } from "./components/About";
import { Info } from "./components/Info";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useCursor } from "./hooks/useCursor";

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
  const { setIsMouseEnter, setId } = useCursor();

  return (
    <main className="w-full h-full p-10 flex gap-10 justify-between">
      <div>
        <Info />
        <div className="hover-container flex text-3xl gap-3 text-red-500">
          {buttons.map((item) => (
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
              className="hover-text focus:outline-none mix-blend-difference"
              onClick={() => setSection(item)}
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
      <div className="w-[50vw] h-[50vw]">{lookup[section]}</div>
    </main>
  );
}
