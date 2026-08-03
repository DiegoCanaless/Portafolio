"use client";

import { motion } from "motion/react";

export default function Footer(){
    return(
        <>
            <footer className="h-auto bg-primary text-light">
                {/* Animación disparada al montar (no whileInView): el footer es el
                    último elemento y mide menos de 100px, por lo que un reveal por
                    scroll nunca se dispararía y el copyright quedaría invisible. */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                >
                    <h5 className="text-center py-4 text-sm text-slate-400">© 2026 Diego Canales — Hecho a mano con Next.js y TypeScript.</h5>
                </motion.div>
                <div className="w-full h-5 bg-secondary"></div>
            </footer>
        </>
    )
}
