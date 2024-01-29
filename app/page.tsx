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
import { TitleSection } from "./components/TitleSection";

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
	const [title, setTitle] = useState("ABOUT");

	const { buttonMouseEnter, buttonMouseLeave } = useCursorHandlers();
	return (
		<main className="w-full px-10 flex-col  items-stretch">
			<div className="flex justify-between gap-10 w-full ">
				<div className="flex flex-col gap-10 w-full">
					<Info />
					<TitleSection title={title} />
				</div>
				<div className="flex flex-col ">
					<div className="hover-container flex text-5xl gap-3 text-red-500">
						{buttons.map((item) => (
							<button
								key={item}
								id={`${item}-button`}
								onMouseEnter={() => buttonMouseEnter({ id: `${item}-button` })}
								onMouseLeave={buttonMouseLeave}
								className={`   p-2 focus:outline-none mix-blend-difference hover:bg-red-500 hover:text-black ${section === item ? "text-black bg-red-500" : ""
									}`}
								onClick={() => {
									setSection(item);
									setTitle(item);
								}}
							>
								{item.toUpperCase()}
							</button>
						))}
					</div>
					<div className="w-[50vw] h-[50vh]">{lookup[section]}</div>
				</div>
			</div>
		</main>
	);
}
