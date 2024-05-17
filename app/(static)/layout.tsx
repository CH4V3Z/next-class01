import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Navbar } from "../../components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Test Next.js App",
	description: "Aprendizaje de NextJS",
};

export default function StaticLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Navbar />
			<main className="flex flex-col items-center p-24">
				<span className="text-lg">STATICOS</span>
				{children}
			</main>
		</>
	);
}
