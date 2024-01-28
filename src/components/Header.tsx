import Image from "next/image";
import Link from "next/link";

import menuLine from "../assets/menu-line.svg"

export default function Header() {
    return (
        <header className="py-6 px-8">
            <nav className="flex justify-between items-center max-w-7xl px-4 py-4 m-auto" >
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
            </nav >
        </header >
    )
}