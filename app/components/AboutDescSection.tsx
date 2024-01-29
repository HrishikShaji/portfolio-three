import { AnimatePresence, motion } from "framer-motion";

interface AboutDescSectionProps {
  data: Record<string, any>;
}

const areas = [
  "UI/UX",
  "FULL STACK WEB DEVELOPMENT",
  "BLOCKCHAIN",
  "ARTIFICIAL INTELLIGENCE",
];

const features = ["CLEAN CODE", "REUSABILITY", "RESPONSIVE", "EFFICIENCY"];

export const AboutDescSection: React.FC<AboutDescSectionProps> = ({ data }) => {
  return (
    <div className="w-full flex-grow   flex flex-col justify-between items-start">
      <div className="flex  justify-between w-full items-center">
        <div className="h-[50px] w-[30%] text-center flex items-center px-2 text-3xl text-white">
          {`My Area of Expertise includes    -`}
        </div>
        <div className="grid grid-cols-4 gap-4 w-full ">
          {areas.map((item, i) => (
            <div key={i} className="flex gap-2 relative   items-center">
              <motion.div
                initial={{ scaleX: 0.1, originX: "left" }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 1 }}
                className="w-full h-[50px] -left-8 bg-red-500 absolute mix-blend-difference"
              />
              <h1 className="text-2xl leading-tight">{item}</h1>
            </div>
          ))}
        </div>
      </div>
      <div className="flex  items-center justify-between w-full">
        <div className="h-[50px] w-[30%] text-center flex items-center px-2 text-3xl text-white">
          {`I'm Mostly Known For    -`}
        </div>
        <div className="grid grid-cols-4 gap-4 w-full">
          {features.map((item, i) => (
            <div key={i} className="flex gap-2 relative   items-center">
              <motion.div
                initial={{ scaleX: 0.1, originX: "left" }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 1 }}
                className="w-full h-[50px] -left-8 bg-red-500 absolute mix-blend-difference"
              />
              <h1 className="text-2xl leading-tight">{item}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
