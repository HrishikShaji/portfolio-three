import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "../page";

interface SliderProps {
	projects: Project[];
	setProject: Dispatch<SetStateAction<Project>>;
}

export const Slider: React.FC<SliderProps> = ({ projects, setProject }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState(0);

	const variants = {
		initial: (direction: number) => {
			return {
				x: direction > 0 ? "100%" : "-100%",
			};
		},
		animate: {
			x: "0%",
			transition: {
				x: { duration: 1 },
			},
		},
		exit: (direction: number) => {
			return {
				x: direction > 0 ? "-100%" : "100%",
				transition: {
					x: { duration: 1 },
				},
			};
		},
	};

	const dotsVariants = {
		initial: {
			y: 0,
		},
		animate: {
			y: -10,
			scale: 1.2,
			transition: { type: "spring", stiffness: 1000, damping: "10" },
		},
		hover: {
			scale: 1.1,
			transition: { duration: 0.2 },
		},
	};

	const handleNext = () => {
		setDirection(1);
		setCurrentIndex((prevIndex) =>
			prevIndex + 1 === projects.length ? 0 : prevIndex + 1,
		);
	};

	const handlePrevious = () => {
		setDirection(-1);

		setCurrentIndex((prevIndex) =>
			prevIndex - 1 < 0 ? projects.length - 1 : prevIndex - 1,
		);
	};

	const handleDotClick = (index: number) => {
		setDirection(index > currentIndex ? 1 : -1);
		setCurrentIndex(index);
	};

	useEffect(() => {
		setProject(projects[currentIndex]);
	}, [handleNext, handlePrevious, currentIndex]);

	return (
		<div className="carousel flex flex-col gap-5">
			<div className="relative   h-[40vh] w-full  overflow-hidden">
				<AnimatePresence initial={false} custom={direction} mode="popLayout">
					<motion.img
						className="w-full h-full object-cover"
						custom={direction}
						key={currentIndex}
						src={projects[currentIndex].img}
						initial="initial"
						animate="animate"
						exit="exit"
						variants={variants}
					/>
				</AnimatePresence>
			</div>
			<div className=" flex text-2xl justify-between items-center text-red-500 ">
				<motion.button onClick={handlePrevious}>PREV</motion.button>
				<div className="carousel-indicator  flex justify-center gap-[20px]">
					{projects.map((_, index) => (
						<motion.div
							key={index}
							className={` cursor-pointer w-[30px] h-[5px]  ${currentIndex === index ? "bg-red-500" : "bg-neutral-500"
								}`}
							onClick={() => handleDotClick(index)}
							initial="initial"
							animate={currentIndex === index ? "animate" : ""}
							whileHover="hover"
							variants={dotsVariants}
						></motion.div>
					))}
				</div>
				<motion.button onClick={handleNext}>NEXT</motion.button>
			</div>
		</div>
	);
};
