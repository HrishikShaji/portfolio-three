import { data } from "../lib/data";

export const Info = () => {
	return (
		<div className="flex flex-col gap-2 items-start">
			<h1 className="text-xl">{data.personal.name}</h1>
			<h1 className="text-xl">{data.personal.position}</h1>
			<h1 className="text-xl">{data.personal.email}</h1>
			<h1 className="text-xl">{data.personal.phone}</h1>
			<h1 className="text-xl">{data.personal.address}</h1>

		</div>
	);
};
