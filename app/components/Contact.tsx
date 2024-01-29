export const Contact = () => {
	return (
		<div className="h-full w-full   flex flex-col p-2 ">
			<form className="w-full flex flex-col gap-5">
				<input
					className="border-b-[2px] border-black p-2 bg-neutral-700"
					placeholder="NAME..."
				/>
				<input
					className="border-b-[2px] border-black p-2 bg-neutral-700"
					placeholder="EMAIL..."
				/>
				<textarea
					className="border-b-[2px] border-black p-2 bg-neutral-700"
					placeholder="MESSAGE..."
				/>
				<button className="p-2  text-black bg-neutral-700">SEND</button>
			</form>
		</div>
	);
};
