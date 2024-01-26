import { Teko } from "next/font/google";

export const teko_init = Teko({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-teko",
	weight: "300",
});

export const teko = teko_init.variable;
