import profilePicture from "../../assets/portfolio-imgs/profile-picture.png"

import { SubTitle } from "@/components/SubTitle";
import { Title } from "@/components/Tittle";
import Image from "next/image";

export default function AboutMeSection() {
    return (
        <section id="sobre" className="flex flex-col p-8 max-w-7xl">
            <main className="flex flex-col items-center text-center gap-10 md:flex-row md:items-start md:text-start">
                <Image
                    src={profilePicture.src}
                    alt="profile-image"
                    width={280}
                    height={280}
                    className="rounded-3xl"
                />
                <div className="flex flex-col h-full justify-between gap-12 text-lg">
                    <div>
                        <SubTitle>
                            Sobre Mim
                        </SubTitle>
                        <Title>Desenvolvedor Front-End</Title>
                    </div>
                    <div className="flex flex-col flex-1 gap-4 py-2 justify-between items-center md:items-start">
                        <p>
                            Olá, meu nome é Pedro. Sou um desenvolvedor Front-End apaixodado em criar coisas bonitas e uteis aos meus usuários. Atualmente utilizo techs como <b>NextJs</b>, <b>ReactJs</b>, <b>TalwindCss</b>, <b>SASS</b> e muito mais!!
                            <br />
                            Busco me aprimorar constantemente, com meus interesses e necessidades lado a lado caminhando assim para ser um cada vez melhor profissional.🚀
                        </p>
                        <a href={"#contato"} className="w-48">
                            <button className="w-full duration-300 text-secondaryColor font-bold bg-primaryColor rounded-md border-2 border-primaryColor p-2 hover:opacity-90">
                                entre em contato
                            </button>
                        </a>
                    </div>
                </div>
            </main >
        </section >
    )
} 