"use client"

import { motion } from "framer-motion";
import { Title } from "@/components/Tittle";

import Icon from "@/components/Icon";


export function HomeSection() {

    return (
        <motion.section id="início" className="flex flex-col justify-center max-w-4xl min-h-screen gap-20 mt-10 md:mt-4">
            <main className="flex flex-col items-center justify-center text-center gap-12 p-4 w-full md:flex-row md:text-start">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={
                        {
                            hidden: {
                                scale: 0.8,
                                opacity: 0
                            },
                            visible: {
                                scale: 1,
                                opacity: 1,
                                transition: {
                                    delay: .2,
                                    bounceDamping: true
                                }
                            }
                        }}
                    className="flex justify-center p-12"
                >
                    <motion.img
                        animate={
                            {
                                visibility: "initial",
                                borderRadius: ["70%", "35%", "45%", "20%", "50%"],
                            }}

                        transition={{
                            repeat: Infinity,
                            duration: 15,
                        }}

                        className="min-w-max shadow-lg shadow-thirdColor rounded-full"
                        src="https://cdns-images.dzcdn.net/images/cover/d56efaad75086e7866e9a64a6d830ede/264x264.jpg"
                    />
                </motion.div>

                <div className="flex flex-col gap-4">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={
                            {
                                hidden: {
                                    scale: 0.8,
                                    opacity: 0
                                },
                                visible: {
                                    scale: 1,
                                    opacity: 1,
                                    transition: {
                                        delay: .3,
                                        bounceDamping: true
                                    }
                                }
                            }
                        }
                        className="flex flex-col gap-4">
                        <Title>
                            Desenvolvedor Front-End Para Suas Aplicações
                        </Title>

                        <p className="text-lg font-medium md:text-xl">
                            Ola, sou o Pedro. Um amante da tecnologia desde sempre, e apaixonado em desenvolver coisas novas🖤
                        </p>
                    </motion.div>
                    <motion.ul
                        initial="hidden"
                        animate="visible"
                        variants={
                            {
                                hidden: {
                                    scale: 0.8,
                                    opacity: 0
                                },
                                visible: {
                                    scale: 1,
                                    opacity: 1,
                                    transition: {
                                        delay: .4,
                                        bounceDamping: true
                                    }
                                }
                            }
                        }
                        className="flex justify-center items-center gap-2 md:justify-start">
                        <li>
                            <Icon href="https://www.linkedin.com/in/pedro-henrique-costa-4a1813289/">
                                <svg className="stroke-current text-secondaryColor duration-200 group-hover:text-primaryColor" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                                    <path d="M8 11l0 5"></path>
                                    <path d="M8 8l0 .01"></path>
                                    <path d="M12 16l0 -5"></path>
                                    <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                                </svg>
                            </Icon>
                        </li>
                        <li>
                            <Icon href="https://github.com/czzped">
                                <svg className="stroke-current text-secondaryColor duration-200 group-hover:text-primaryColor"
                                    xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                >
                                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                                </svg>
                            </Icon>
                        </li>
                    </motion.ul>
                </div>
            </main>

            <motion.footer
                initial="hidden"
                animate="visible"
                variants={
                    {
                        hidden: {
                            scale: 0.8,
                            opacity: 0
                        },
                        visible: {
                            scale: 1,
                            opacity: 1,
                            transition: {
                                delay: .6,
                                bounceDamping: true
                            }
                        }
                    }
                }
                className="flex flex-col w-full items-start gap-6 p-4">
                <h1 className="text-xl font-semibold">Techs:</h1>
                <div className="flex flex-wrap gap-4 max-w-[80vw]">
                    <motion.img
                        whileHover={{ scale: 1.2 }}
                        onHoverStart={e => { }}
                        onHoverEnd={e => { }}
                        className="cursor-pointer" src="https://skillicons.dev/icons?i=html,css" />
                    <motion.img
                        whileHover={{ scale: 1.2 }}
                        onHoverStart={e => { }}
                        onHoverEnd={e => { }}
                        className="cursor-pointer" src="https://skillicons.dev/icons?i=js,ts" />
                    <motion.img
                        whileHover={{ scale: 1.2 }}
                        onHoverStart={e => { }}
                        onHoverEnd={e => { }}
                        className="cursor-pointer" src="https://skillicons.dev/icons?i=react,next" />
                    <motion.img
                        whileHover={{ scale: 1.2 }}
                        onHoverStart={e => { }}
                        onHoverEnd={e => { }}
                        className="cursor-pointer" src="https://skillicons.dev/icons?i=tailwind,scss" />
                </div>
            </motion.footer>
        </motion.section >
    )
}