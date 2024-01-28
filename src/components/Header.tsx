"use client"

import Image from "next/image";
import Link from "next/link";

import menuLine from "../assets/menu-line.svg"

import { motion, useScroll } from "framer-motion";

export default function Header() {
    const { scrollYProgress } = useScroll();

    return (
        <>
            <header className="z-40 sticky top-0 w-full flex bg-secondaryColor">
                <nav className="flex justify-between items-center w-full max-w-7xl px-12 py-8 m-auto" >
                    <Link href={"#home"}>
                        <h1 className="text-3xl font-bold">
                            pedro.dev
                        </h1>
                    </Link>

                    <ul className="hidden gap-4 md:flex items-end">
                        <li>
                            <Link
                                href={"#início"}
                                className="duration-300 text-xl font-semibold hover:text-primaryColor">
                                início
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"#sobre"}
                                className="duration-300 text-xl font-semibold hover:text-primaryColor">
                                sobre
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"#projetos"}
                                className="duration-300 text-xl font-semibold hover:text-primaryColor">
                                projetos
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"#contato"}
                                className="duration-300 text-xl font-semibold hover:text-primaryColor">
                                contato
                            </Link>
                        </li>
                    </ul>

                    <Image src={menuLine} className="md:hidden" alt="menu-Line" />
                </nav > <motion.div
                    className="bg-primaryColor h-1 fixed top-24 left-0 right-0"
                    style={{ scaleX: scrollYProgress }}
                />
            </header >
        </>
    )
}