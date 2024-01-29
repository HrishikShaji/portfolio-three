"use client";
import { ReactNode, useState } from "react";
import { About } from "./components/About";
import { Info } from "./components/Info";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { data } from "./lib/data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useCursorHandlers } from "./hooks/useCursorHandlers";
import { TitleSection } from "./components/TitleSection";
import { Navbar } from "./components/Navbar";
import { AboutDescSection } from "./components/AboutDescSection";
import { SkillsDescSection } from "./components/SkillDescSection";
import { ProjectsDescSection } from "./components/ProjectsDecSection";

gsap.registerPlugin(useGSAP);

const buttons = [
  { name: "about", desc: "I JUST LOVE CODING." },
  { name: "skills", desc: "I'M PRETTY GOOD AT THIS." },
  { name: "projects", desc: "I'M PROUD OF THESE..." },
  { name: "contact", desc: "GIVE ME A CALL." },
];

type Project = {
  name: string;
  img: string;
};

export default function Home() {
  const [section, setSection] = useState("about");
  const [title, setTitle] = useState(buttons[0].desc);
  const [name, setName] = useState(data.projects.data[0].title);

  const lookup: Record<string, ReactNode> = {
    about: <About />,
    skills: <Skills />,
    projects: <Projects setName={setName} />,
    contact: <Contact />,
  };
  const descLookup: Record<string, ReactNode> = {
    about: <AboutDescSection />,
    skills: <SkillsDescSection />,
    projects: <ProjectsDescSection name={name} />,
  };
  const { buttonMouseEnter, buttonMouseLeave } = useCursorHandlers();
  return (
    <main className="w-full h-full px-10  flex flex-col ">
      <Navbar />
      <div className="flex justify-between gap-10 w-full ">
        <div className="flex flex-col gap-10 w-full">
          <Info />
          <TitleSection title={title} />
        </div>
        <div className="flex flex-col ">
          <div className="hover-container flex text-5xl gap-3 text-red-500">
            {buttons.map((item) => (
              <button
                key={item.name}
                id={`${item.name}-button`}
                onMouseEnter={() =>
                  buttonMouseEnter({ id: `${item.name}-button` })
                }
                onMouseLeave={buttonMouseLeave}
                className={`   p-2 focus:outline-none mix-blend-difference hover:bg-red-500 hover:text-black ${
                  section === item.name ? "text-black bg-red-500" : ""
                }`}
                onClick={() => {
                  setSection(item.name);
                  setTitle(item.desc);
                }}
              >
                {item.name.toUpperCase()}
              </button>
            ))}
          </div>
          <div className="w-[50vw] h-[50vh]">{lookup[section]}</div>
        </div>
      </div>
      {descLookup[section]}
    </main>
  );
}
