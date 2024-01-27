import { useCursor } from "../hooks/useCursor";
import { data } from "../lib/data";

export const Skills = () => {
  const { setId, setIsMouseEnter } = useCursor();
  return (
    <div className="w-full h-full flex flex-col p-10 gap-10">
      <h1 className="text-3xl text-red-500">SKILLS</h1>
      <div className="grid grid-cols-4 gap-4">
        {data.skills.data.map((item, i) => (
          <div
            id={`${item}-button`}
            onMouseEnter={() => {
              setIsMouseEnter(true);
              setId(`${item}-button`);
            }}
            onMouseLeave={() => {
              setIsMouseEnter(false);
              setId("");
            }}
            key={i}
            className="hover-text flex flex-col gap-1 p-2  mix-blend-difference"
          >
            <h1>{item}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
