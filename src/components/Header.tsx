import Image from "next/image";
import Link from "next/link";

import menuLine from "../assets/menu-line.svg"

export default function Header() {
    return (
        <header className="bg-transparent py-6 px-32">
            <nav className="flex items-center justify-between">
                <Link href={"#home"}>
                    <h1 className="text-3xl font-bold">
                        pedro.dev
                    </h1>
                </Link>

                <ul className="hidden h-full gap-4 md:flex">
                    <li>
                        <Link
                            href={"#início"}
                            className="duration-300 text-lg font-bold hover:text-primaryColor">
                            início
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={"#sobre"}
                            className="duration-300 text-lg  font-bold hover:text-primaryColor">
                            sobre
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={"#projetos"}
                            className="duration-300 text-lg font-bold hover:text-primaryColor">
                            projetos
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={"#contato"}
                            className="duration-300 text-lg font-bold hover:text-primaryColor">
                            contato
                        </Link>
                    </li>
                </ul>

                <Image src={menuLine} className="md:hidden" alt="menu-Line" />
            </nav>
        </header >
    )
}