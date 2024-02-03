"use client"

import Icon from "@/components/Icon";
import { Title } from "@/components/Tittle";

import { projecstList } from "@/utils/projectsList";
import Image from "next/image";

import { Eye, Code } from "phosphor-react";

export function ProjectsSection() {
    return (
        <section id="projetos" className="flex flex-col max-w-7xl p-4 gap-20">
            <header className="flex flex-col text-center">
                <Title>Projetos</Title>
            </header>
            <main className="flex flex-col gap-32">
                {
                    projecstList.map(project =>
                        <div key={project.id} className="flex flex-col gap-4 max-w-4xl md:flex-row">
                            <div className="flex flex-col justify-between items-center text-center text-gray-800 w-full gap-4">
                                <h1 className="text-2xl text-thirdColor font-bold">
                                    {project.projectName}
                                    {project.emoji}
                                </h1>
                                <p className="text-lg">
                                    {project.description}
                                </p>
                                <ul className="flex gap-2">
                                    {
                                        project.techs.map(tech => <div key={Math.random() * 10000} className="font-extrabold cursor-pointer duration-300 hover:text-primaryColor">{tech}</div>)
                                    }
                                </ul>
                                <div className="flex gap-2">
                                    <Icon href={project.codeURL}>
                                        <Code
                                            className="stroke-current text-secondaryColor duration-200 group-hover:text-primaryColor"
                                            size={24} weight="bold"
                                        />
                                    </Icon>
                                    <Icon href={project.deployURL}>
                                        <Eye
                                            className="stroke-current text-secondaryColor duration-200 group-hover:text-primaryColor"
                                            size={24} weight="bold"
                                        />
                                    </Icon>
                                </div>
                            </div>
                            <Image
                                src={project.imageURL} alt={project.projectName + "-img"}
                                className={`rounded-lg order-first md:w-1/2 ${project.position === "left" ? 'md:order-first' : 'md:order-last'}`}
                            />
                        </div>
                    )
                }
            </main>
        </section >
    )
}