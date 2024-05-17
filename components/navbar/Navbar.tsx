// "use client";

import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import Home from "../../app/page";
import { ActiveLink } from "../active-link/ActiveLink";

const navItems = [
	{ name: "About", href: "/about" },
	{ name: "Pricing", href: "/pricing" },
	{ name: "Contact", href: "/contact" },
];

export const Navbar = async () => {
	return (
		<nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
			<Link href="/">
				<HomeIcon size={24} className="mr-2" />
				Home
			</Link>
			<span className="flex flex-1"></span>
			{navItems.map((item, index) => (
				<ActiveLink key={index} path={item.href} text={item.name} />
			))}
		</nav>
	);
};
