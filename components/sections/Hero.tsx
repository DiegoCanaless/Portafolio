"use client"
import { FaEnvelope, FaLinkedinIn } from "react-icons/fa6";

export default function Hero() {
    return (
        <section id="Hero" className="min-h-screen flex flex-col justify-center items-center text-center px-6">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Hola, soy <br />
                <span className="text-secondary">Diego Canales</span>
            </h1>

            <p className="mt-4 text-lg md:text-xl text-gray-300">Programador FullStack · Mendoza, Argentina</p>

            <p className="mt-4 max-w-2xl text-sm md:text-base text-gray-400">Me apasiona crear interfaces limpias, funcionales y bien pensadas,enfocadas en la experiencia del usuario y la escalabilidad.</p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=diegocanales112@gmail.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl bg-secondary flex items-center justify-center gap-2 hover:scale-105 transition-transform" > <FaEnvelope /> Hablemos </a>
                <a href="https://www.linkedin.com/in/diego-canales-236332254/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl border border-secondary flex items-center justify-center gap-2 hover:bg-secondary/10 transition-colors" > <FaLinkedinIn /> Linkedin </a>
            </div>
        </section>
    );
}
