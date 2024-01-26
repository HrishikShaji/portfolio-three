import Link from "next/link"

export const Navbar = () => {
	return (
		<div className="w-full bg-transparent p-10 items-center flex justify-between">
			<h1 className="text-3xl">ANAKIN</h1>
			<div className="flex gap-3">
				<Link className="border-[2px] border-white p-2" href="/projects">PROJECTS</Link>

				<Link className="border-[2px] border-white p-2" href="/about" >ABOUT</Link>
			</div>
		</div>
	)
}
