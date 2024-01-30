import { useCursor } from "../hooks/useCursor";
import { data } from "../lib/data";
import { motion } from "framer-motion";

export const Skills = () => {
	return (
		<div className="h-full w-full   flex flex-col p-2 ">
			<div className="grid grid-cols-4 gap-4 text-3xl">
				{data.skills.data.map((item, i) => (
					<div key={i} className="flex gap-2 h-[50px] relative   items-center">
						<motion.div
							initial={{ scaleX: 0.1, originX: "left" }}
							whileHover={{ scaleX: 1 }}
							transition={{ duration: 1 }}
							className="w-full h-full  bg-red-500 absolute mix-blend-difference"
						/>
						<h1 className="text-2xl pl-[25px] leading-tight">{item}</h1>
					</div>
				))}
			</div>
		</div>
	);
};
