"use client"

import { useState } from "react";
import { FaHouse, FaEnvelope, FaUser, FaBriefcase, FaBars, FaXmark, FaGithub, FaLinkedinIn } from "react-icons/fa6";

export default function Navbar() {

    const [navbarOpen, setNavbarOpen] = useState<boolean>(false)

    const enlaces = [
        { icon: <FaHouse size={22} />, label: "Inicio", href: "/#Hero" },
        { icon: <FaBriefcase size={22} />, label: "Proyectos", href: "/#Project" },
        { icon: <FaUser size={22} />, label: "Sobre Mí", href: "/#About" },
        { icon: <FaEnvelope size={22} />, label: "Contacto", href: "/#Contact" },
    ]

    const redes = [
        { icon: <FaGithub size={22} />, href: "https://github.com/DiegoCanaless" },
        { icon: <FaLinkedinIn size={22} />, href: "https://www.linkedin.com/in/diego-canales-236332254/" }
    ]

    return (
        <>
            <nav onClick={() => { setNavbarOpen(!navbarOpen) }} className={`z-20 transition-colors cursor-pointer w-10 h-10 fixed rounded-xl top-5 right-5  flex justify-center items-center   ${navbarOpen ? "bg-secondary" : "border-gray-700 border bg-opaque"} lg:hidden`}>
                {navbarOpen ? (
                    <FaXmark className={`transition-colors z-20`} size={20} />
                ) : <FaBars color="white" className={`transition-colors z-20`} size={20} />}
            </nav>

            <nav className="hidden z-20 text-gray-200 shadow-md shadow-secondary justify-center px-6  rounded-xl py-2 gap-10 fixed top-5 left-1/2 -translate-x-1/2 items-center bg-primary lg:flex">
                {enlaces.map((e) => (
                    <a key={e.href} href={e.href} className="p-2 px-4 py-2 whitespace-nowrap  transition-colors cursor-pointer rounded-2xl hover:bg-gray-600/25 hover:text-light" >
                        {e.label}
                    </a>
                ))}
                <hr className="w-px h-4 bg-white border-0" />
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/DiegoCanaless"><FaGithub className="cursor-pointer hover:text-secondary transition-colors" size={22} /></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/diego-canales-236332254/"><FaLinkedinIn className="cursor-pointer hover:text-secondary transition-colors" size={22} /></a>
            </nav>

            {navbarOpen ? (
                <div className="fixed text-light inset-0 z-10 bg-dark/50 backdrop-blur-md flex flex-col items-center justify-center gap-4">
                    {enlaces.map((e, i) => {
                        return (
                            <a key={i} href={e.href} className="text-gray gap-4 text-xl flex items-center hover:text-secondary transition-colors" >
                                {e.icon}
                                {e.label}
                            </a>
                        );
                    })}
                    <div className="flex gap-5 mt-2 text-white transition-colors">
                        {redes.map((e) => {
                            return (
                                <a key={e.href} target="_blank" rel="noopener noreferrer" href={e.href} className="cursor-pointer flex justify-center items-center p-4 border-secondary border rounded-lg bg-opaque hover:text-secondary">{e.icon}</a>
                            )
                        })}
                    </div>
                </div>
            ) : null}

        </>
    )
}