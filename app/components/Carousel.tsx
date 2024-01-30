import { useRef, useState } from "react";
import { useCursor } from "../hooks/useCursor";
import { data } from "../lib/data";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion } from "framer-motion";

export const Carousel = () => {
	const length = data.projects.data.length;
	const [index, setIndex] = useState(0);
	const [prevIndex, setPrevIndex] = useState(length - 1);
	const [nextIndex, setNextIndex] = useState(1);
	const prev = () => {
		let prevIndexValue = index - 1 >= 0 ? index - 1 : length - 1; // Handle loop back to the last item
		let prevPrevIndexValue =
			prevIndexValue - 1 >= 0 ? prevIndexValue - 1 : length - 1; // Calculate previous previous index
		setIndex(prevIndexValue);
		setPrevIndex(prevPrevIndexValue);
		setNextIndex(index);
	};

	const next = () => {
		let nextIndexValue = index + 1 < length ? index + 1 : 0; // Handle loop back to the first item
		let nextNextIndexValue =
			nextIndexValue + 1 < length ? nextIndexValue + 1 : 0; // Calculate next next index
		setIndex(nextIndexValue);
		setPrevIndex(index);
		setNextIndex(nextNextIndexValue);
	};

	const nextRef = useRef<HTMLButtonElement>(null);
	const prevRef = useRef<HTMLButtonElement>(null);
	const currentImage = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			const cur = document.querySelector(".current-image");
			const animation = () => {
				gsap.fromTo(
					cur,
					{
						xPercent: 100,
						scaleX: 0,
					},
					{
						scaleX: 1,
						duration: 2,
					},
				);
			};

			nextRef.current?.addEventListener("click", animation);
		},
		{ dependencies: [currentImage] },
	);

	const { setIsMouseEnter, setId } = useCursor();
	return (
		<div className="h-full overflow-hidden  w-full flex flex-col gap-5">
			<div className="flex slider bg-red-500 overflow-hidden  h-[40vh]">
				<Image
					id={`image-${prevIndex}`}
					src={data.projects.data[prevIndex].img}
					alt="image"
					height={2000}
					width={2000}
					className="h-full w-[50vw] flex-shrink-0 object-cover"
				/>
				<motion.div
					initial={{ scale: 0 }}
					whileInView={{ scale: 2 }}
					transition={{ duration: 2 }}
					ref={currentImage}
					className="current-image"
				>
					<Image
						id={`image-${index}`}
						src={data.projects.data[index].img}
						alt="image"
						height={2000}
						width={2000}
						className="h-full w-[50vw] flex-shrink-0 object-cover "
					/>
				</motion.div>
				<Image
					id={`image-${nextIndex}`}
					src={data.projects.data[nextIndex].img}
					alt="image"
					height={2000}
					width={2000}
					className="h-full w-[50vw] flex-shrink-0 object-cover"
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
					ref={nextRef}
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
	);
};
