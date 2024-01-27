import { useCursor } from "../hooks/useCursor";

export const Projects = () => {
  const { setIsMouseEnter, setId } = useCursor();
  return (
    <div className="h-full w-full p-10  flex flex-col gap-10">
      <h1 className="text-3xl text-red-500">PROJECTS</h1>
      <div className="h-full w-full flex flex-col gap-5">
        <div className="bg-red-500 w-full h-full"></div>
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
            className="hover-text   p-2 rounded-full overflow-hidden focus:outline-none mix-blend-difference hover:bg-red-500 hover:text-black"
          >
            PREV
          </button>
          <button
            id={`next-button`}
            onMouseEnter={() => {
              setIsMouseEnter(true);
              setId(`next-button`);
            }}
            onMouseLeave={() => {
              setIsMouseEnter(false);
              setId("");
            }}
            className="hover-text   p-2 focus:outline-none mix-blend-difference hover:bg-red-500 hover:text-black"
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
};
