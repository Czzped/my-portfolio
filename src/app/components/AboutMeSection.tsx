import { Title } from "@/components/Tittle";
import Image from "next/image";
import Link from "next/link";

export default function AboutMeSection() {
    return (
        <section id="sobre" className="flex flex-col p-8 max-w-7xl">
            <main className="flex flex-col items-center text-center gap-10 md:flex-row md:items-start md:text-start">
                <Image
                    src={"https://static.wikia.nocookie.net/jackstauber/images/b/b5/SHOP.jpg/revision/latest?cb=20200308141253"}
                    alt="profile-image"
                    width={320}
                    height={320}
                    className="rounded-3xl"
                />
                <div className="flex flex-col h-[320px] justify-between gap-2 text-lg">
                    <Title>Sobre Mim</Title>
                    <div className="flex flex-col flex-1 gap-4 py-2 justify-between items-center md:items-start">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem iste corporis nemo optio enim, unde in praesentium eligendi nesciunt magni dolorem eos! Earum veritatis tempore dolorem iure voluptates temporibus quam?
                        </p>
                        <Link href={"#contato"} className="w-48">
                            <button className="w-full duration-300 text-secondaryColor font-bold bg-primaryColor rounded-md border-2 border-primaryColor p-2 hover:mb-2 hover:opacity-90">
                                entre em contato
                            </button>
                        </Link>
                    </div>
                </div>
            </main >
        </section >
    )
} 