"use client"

import { motion, useScroll } from "framer-motion";

export default function ProgressBar() {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            className="bg-primaryColor h-2 fixed top-0 left-0 right-0 z-50"
            style={{ scaleX: scrollYProgress }}
        />
    )
}