"use client";

import Link from "next/link";
import React from "react";

import style from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";

interface ActiveLinkProps {
	path: string;
	text: string;
}
export const ActiveLink = ({ path, text }: ActiveLinkProps) => {
	const pathName = usePathname();

	return (
		<Link href={path} className={`${style.link}  mr-2 ${(pathName === path) && style['active-link']} `}>
			{text}
		</Link>
	);
};
