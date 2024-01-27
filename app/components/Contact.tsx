export const Contact = () => {
	return (
		<div className="h-full w-full p-10  flex flex-col gap-10">
			<h1 className="text-3xl text-red-500">CONTACT</h1>
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
