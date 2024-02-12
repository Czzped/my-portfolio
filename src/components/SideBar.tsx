"use client"

import { useSideBarContext } from "@/context/sideBarContext"

import { X } from "phosphor-react"

export default function SideBar() {
    const { isSideBarOpen, setSideBar } = useSideBarContext()

    return (
        <div className={isSideBarOpen ?
            `flex flex-col w-full z-40 p-8 fixed min-h-screen bg-secondaryColor md:hidden` : "hidden"}
        >
            <div className="flex justify-end">
                <button>
                    <X
                        onClick={() => setSideBar(value => !value)}
                        size={40} weight="bold"
                        className="text-5xl cursor-pointer" />
                </button>
            </div>
            <ul className="flex flex-1 flex-col justify-center gap-8">
                <li className="w-full duration-300 hover:ml-2">
                    <a
                        href={"#início"}
                        className="duration-300 text-5xl font-semibold">
                        início
                    </a>
                </li>
                <li className="w-full duration-300 hover:ml-2">
                    <a
                        href={"#sobre"}
                        className="duration-300 text-5xl font-semibold">
                        sobre
                    </a>
                </li>
                <li className="w-full duration-300 hover:ml-2">
                    <a
                        href={"#projetos"}
                        className="duration-300 text-5xl font-semibold">
                        projetos
                    </a>
                </li>
                <li className="w-full duration-300 hover:ml-2">
                    <a
                        href={"#contato"}
                        className="duration-300 text-5xl font-semibold">
                        contato
                    </a>
                </li>
            </ul>
        </div >
    )
}