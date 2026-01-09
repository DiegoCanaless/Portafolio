"use client"
import { FaEnvelope, FaLinkedinIn } from "react-icons/fa6";



export default function Hero() {
    return (
        <>
            <section id="Hero" className="min-h-screen flex flex-col justify-center text-center px-6">
                {/* Nombre */}
                <h1 className="text-4xl md:text-5xl font-extrabold">
                    Hola, soy <br />
                    <span className="text-secondary">Diego Canales</span>
                </h1>

                {/* Rol y ubicación */}
                <p className="mt-4 text-lg md:text-xl text-gray-300">
                    Programador Frontend · Mendoza Argentina
                </p>

                {/* Descripción breve */}
                <p className="m-auto my-2 text-sm text-center w-full md:text-base text-gray-400">
                    Me apasiona crear interfaces limpias y funcionales, siempre buscando mejorar cada proyecto.
                </p>

                <div className="flex flex-col mt-5 mx-auto gap-5 w-12/12 md:flex-row">
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=diegocanales112@gmail.com" target="_blank-" rel="noreferrer noopener " className="px-2 py-2 rounded-xl gap-2 bg-secondary flex items-center justify-center  w-60"><FaEnvelope/>Hablemos</a>
                    <a href="https://www.linkedin.com/in/diego-canales-236332254/" target="_blank-" rel="noreferrer noopener" className="px-2 py-2 rounded-xl gap-2 border border-secondary bg-transparent flex items-center justify-center  w-60"><FaLinkedinIn/>Linkedin</a>
                </div>

            </section>
        </>
    )
}