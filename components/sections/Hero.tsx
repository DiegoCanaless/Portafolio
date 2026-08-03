"use client"
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { FaEnvelope, FaBriefcase } from "react-icons/fa6";

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" as const },
    },
};

export default function Hero() {
    const shouldReduceMotion = useReducedMotion();

    const item = shouldReduceMotion
        ? { hidden: { opacity: 0, y: 0 }, visible: { opacity: 1, y: 0, transition: { duration: 0.2 } } }
        : itemVariants;

    return (
        <motion.section
            id="Hero"
            className="min-h-screen flex flex-col justify-center items-center text-center px-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.h1 variants={item} className="text-4xl md:text-6xl font-extrabold leading-tight">
                Hola, soy <br />
                <span className="text-secondary">Diego Canales</span>
            </motion.h1>

            <motion.p variants={item} className="mt-4 text-lg md:text-xl text-gray-300">Desarrollador Full Stack · Mendoza, Argentina</motion.p>

            <motion.p variants={item} className="mt-4 max-w-2xl text-sm md:text-base text-gray-400">Técnico en Programación (UTN). Construí proyectos en producción, de landings a marketplaces, y aprendo rápido cualquier tecnología que el equipo necesite.</motion.p>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link href="/#Project" className="px-6 py-3 rounded-xl bg-secondary flex items-center justify-center gap-2 hover:scale-105 transition-transform" > <FaBriefcase /> Ver proyectos </Link>
                <Link href="/#Contact" className="px-6 py-3 rounded-xl border border-secondary flex items-center justify-center gap-2 hover:bg-secondary/10 transition-colors" > <FaEnvelope /> Hablemos </Link>
            </motion.div>
        </motion.section>
    );
}
