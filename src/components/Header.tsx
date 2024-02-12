"use client"

import { useSideBarContext } from "@/context/sideBarContext";
import { List } from "phosphor-react";

export default function Header() {
    const { setSideBar } = useSideBarContext()

    return (
        <>
            <header className="z-30 fixed top-0 w-full flex bg-secondaryColor">
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
                    <List size={33} weight="bold" className="md:hidden" alt="menu-Line" onClick={() => setSideBar(value => !value)} />
                </nav >
            </header >
        </>
    )
}