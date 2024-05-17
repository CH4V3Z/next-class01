import Image from "next/image";
import AboutPage from './(static)/about/page';
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<span> Hola Mundo!! {new Date().getTime()}</span>
			<Link href={'/about'}>AboutPage</Link>
		</main>
	);
}
