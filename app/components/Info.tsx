import { data } from "../lib/data";

export const Info = () => {
  return (
    <div className="flex flex-col text-2xl leading-none gap-2 items-start">
      <h1>{data.personal.name}</h1>
      <h1>{data.personal.position}</h1>
      <h1>{data.personal.email}</h1>
      <h1>{data.personal.phone}</h1>
      <h1>{data.personal.address}</h1>
    </div>
  );
};
