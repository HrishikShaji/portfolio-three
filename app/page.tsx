"use client";
import { ReactNode, useState } from "react";
import { About } from "./components/About";
import { Info } from "./components/Info";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const lookup: Record<string, ReactNode> = {
  about: <About />,
  skills: <Skills />,
  projects: <Projects />,
  contact: <Contact />,
};

export default function Home() {
  const [section, setSection] = useState("about");

  return (
    <main className="w-full h-full p-10 flex gap-10 justify-between">
      <div>
        <Info />
        <div className="flex text-3xl gap-3 text-red-500">
          <button
            className="focus:outline-none"
            onClick={() => setSection("about")}
          >
            ABOUT
          </button>
          <button
            className="focus:outline-none"
            onClick={() => setSection("skills")}
          >
            SKILLS
          </button>
          <button
            className="focus:outline-none"
            onClick={() => setSection("projects")}
          >
            PROJECTS
          </button>
          <button
            className="focus:outline-none"
            onClick={() => setSection("contact")}
          >
            CONTACT
          </button>
        </div>
      </div>
      <div className="w-[50vw] h-[50vw]">{lookup[section]}</div>
    </main>
  );
}
