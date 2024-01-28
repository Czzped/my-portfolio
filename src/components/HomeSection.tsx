"use client"

import Link from "next/link"

import { useRef } from "react";
import { motion } from "framer-motion";


export function HomeSection() {
    const constraintsRef = useRef(null);

    return (
        <motion.section className="flex flex-1 flex-col items-center max-w-7xl gap-32 py-12 px-24" ref={constraintsRef}>
            <div className="flex flex-col items-center justify-center text-center gap-24 w-full md:flex-row md:text-start">
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
                    className="flex  justify-center"
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

                        className="min-w-max shadow-lg shadow-thirdColor animate-wiggle rounded-full"
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
                        <h1 className="justify-center text-4xl font-bold break-words text-primaryColor md:text-5xl">
                            Desenvolvedor Front-End Para Suas Aplicações
                        </h1>

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
                        className="flex justify-center gap-2 md:justify-start">
                        <li>
                            <Link href="https://github.com/czzped" className="flex p-1 bg-thirdColor rounded-3xl group" target="_blank">
                                <svg className="stroke-current text-secondaryColor duration-200 group-hover:text-primaryColor"
                                    xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                >
                                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                                    <path d="M8 11l0 5"></path>
                                    <path d="M8 8l0 .01"></path>
                                    <path d="M12 16l0 -5"></path>
                                    <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.linkedin.com/in/pedro-henrique-costa-4a1813289/" className="flex p-1 bg-thirdColor rounded-3xl group" target="_blank">
                                <svg className="stroke-current text-secondaryColor duration-200 group-hover:text-primaryColor"
                                    xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                >
                                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                                </svg>
                            </Link>
                        </li>
                    </motion.ul>
                </div>
            </div>

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
                                delay: .6,
                                bounceDamping: true
                            }
                        }
                    }
                }
                className="flex flex-col w-full items-start gap-4 ">
                <h1 className="text-xl font-semibold">Techs:</h1>
                <div className="flex flex-wrap gap-4">
                    <motion.img className="item cursor-pointer" src="https://skillicons.dev/icons?i=html,css" drag dragConstraints={constraintsRef} />
                    <motion.img className="item cursor-pointer" src="https://skillicons.dev/icons?i=js,ts" drag dragConstraints={constraintsRef} />
                    <motion.img className="item cursor-pointer" src="https://skillicons.dev/icons?i=react,next" drag dragConstraints={constraintsRef} />
                    <motion.img className="item cursor-pointer" src="https://skillicons.dev/icons?i=tailwind,scss" drag dragConstraints={constraintsRef} />
                </div>
            </motion.div>
        </motion.section >
    )
}