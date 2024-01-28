import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SliderProps {
	images: any[];
}

export const Slider: React.FC<SliderProps> = ({ images }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState<string | null>(null);

	const slideVariants = {
		hiddenRight: {
			x: "100%",
			opacity: 0,
		},
		hiddenLeft: {
			x: "-100%",
			opacity: 0,
		},
		visibleRight: {
			x: "0",
			opacity: 1,
			transition: {
				delay: 1,
				duration: 1,
			},
		},
		visibleLeft: {
			x: "-0",
			opacity: 1,
			transition: {
				delay: 1,
				duration: 1,
			},
		},

		exitRight: {
			x: "-100%",
			transition: {
				duration: 1,
			},
		},
		exitLeft: {
			x: "100%",
			transition: {
				duration: 1,
			},
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
		setDirection("right");
		setCurrentIndex((prevIndex) =>
			prevIndex + 1 === images.length ? 0 : prevIndex + 1,
		);
	};

	const handlePrevious = () => {
		setDirection("left");

		setCurrentIndex((prevIndex) =>
			prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1,
		);
	};

	const handleDotClick = (index: number) => {
		setDirection(index > currentIndex ? "right" : "left");
		setCurrentIndex(index);
	};

	return (
		<div className="carousel flex flex-col gap-5">
			<div className="relative   h-[40vh] w-full  overflow-hidden">
				<AnimatePresence>
					<motion.img
						className="w-full h-full object-cover"
						key={currentIndex}
						src={images[currentIndex].img}
						initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
						animate={direction === "right" ? "visibleRight" : "visibleLeft"}
						exit={direction === "right" ? "exitRight" : "exitLeft"}
						variants={slideVariants}
					/>
				</AnimatePresence>
			</div>
			<div className=" flex text-2xl justify-between items-center text-red-500 ">
				<motion.button onClick={handlePrevious}>PREV</motion.button>
				<div className="carousel-indicator  flex justify-center gap-[20px]">
					{images.map((_, index) => (
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
