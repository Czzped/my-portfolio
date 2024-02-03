"use client"

import Image from "next/image";

import menuLine from "../assets/menu-line.svg"
import ProgressBar from "./ProgressBar";

export default function Header() {

    return (
        <>
            <header className="z-40 fixed top-0 w-full flex bg-secondaryColor">
                <nav className="flex justify-between items-center w-full max-w-7xl px-12 py-8 m-auto" >
                    <a href={"#início"}>
                        <h1 className="text-3xl font-bold">
                            pedro.dev
                        </h1>
                    </a>

                    <ul className="hidden gap-4 md:flex items-end">
                        <li>
                            <a
                                href={"#início"}
                                className="duration-300 text-xl font-semibold hover:text-primaryColor">
                                início
                            </a>
                        </li>
                        <li>
                            <a
                                href={"#sobre"}
                                className="duration-300 text-xl font-semibold hover:text-primaryColor">
                                sobre
                            </a>
                        </li>
                        <li>
                            <a
                                href={"#projetos"}
                                className="duration-300 text-xl font-semibold hover:text-primaryColor">
                                projetos
                            </a>
                        </li>
                        <li>
                            <a
                                href={"#contato"}
                                className="duration-300 text-xl font-semibold hover:text-primaryColor">
                                contato
                            </a>
                        </li>
                    </ul>

                    <Image src={menuLine} className="md:hidden" alt="menu-Line" />
                </nav >
                <ProgressBar />
            </header >
        </>
    )
}