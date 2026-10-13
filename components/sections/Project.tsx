"use client";

import { useRef, useState } from "react";
import type { ComponentProps } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CardProject from "../ui/CardProject";
import Reveal from "../ui/Reveal";

const PROJECTS_PER_PAGE = 6;

type ProjectData = ComponentProps<typeof CardProject>;

const projects: ProjectData[] = [
    {
        imagen: "/equidatyshop.webp",
        titulo: "EquidaTy Shop",
        descripcion: "Tienda multi-tenant que nace de una planilla: el cliente carga su catálogo en Google Sheets y la venta se cierra por WhatsApp.",
        tecnologias: ["Next.js", "React", "TypeScript", "Tailwind"],
        deployment: true,
        deploy: "https://equida-ty-shop.vercel.app/",
        badge: "En desarrollo",
    },
    {
        imagen: "/ZarpV2.webp",
        titulo: "Zarp V2",
        descripcion: "Remake del marketplace donde esta vez desarrollo también el backend y sumo nuevas funcionalidades.",
        tecnologias: ["Next.js", "Node.js", "TypeScript", "Tailwind", "Express", "Prisma", "PostgreSQL", "Socket.io", "Stripe", "Redis"],
        github: "https://github.com/DiegoCanaless/ZarpV2",
        deployment: true,
        deploy: "https://zarp-v2-web.vercel.app/",
        badge: "En desarrollo",
    },
    {
        imagen: "/rjc.webp",
        titulo: "RJC Transportes",
        descripcion: "Web para un cliente real que transporta niños con discapacidad.",
        tecnologias: ["Next.js", "Tailwind"],
        github: "https://github.com/DiegoCanaless/RJC---Transportes-Seguros",
        deploy: "https://rjc-transportes.com/",
        deployment: true,
        cliente: true,
    },
    {
        imagen: "/DentalCare.webp",
        titulo: "Dental Care",
        descripcion: "Gestión dental: turnos, pacientes y profesionales.",
        tecnologias: ["OpenCode", "NextJS", "TypeScript", "PostgreSQL"],
        github: "https://github.com/DiegoCanaless/DentalCareFront",
        githubBackend: "https://github.com/DiegoCanaless/DentalCareBack",
        deployment: true,
        deploy: "https://dental-care-front.vercel.app/",
    },
    {
        imagen: "/lacerobarber.webp",
        titulo: "LaCero Barber",
        descripcion: "Gestión de barberías: turnos, empleados y negocio.",
        tecnologias: ["React", "TypeScript", "Node.js"],
        github: "https://github.com/DiegoCanaless/barberiacero",
        githubBackend: "https://github.com/DiegoCanaless/backendbarberiacero",
        deployment: true,
        deploy: "https://barberiacero.vercel.app/",
    },
    {
        imagen: "/zarp.webp",
        titulo: "Zarp",
        descripcion: "Marketplace de alojamientos temporales.",
        tecnologias: ["React", "TypeScript", "Tailwind"],
        github: "https://github.com/DiegoCanaless/Zarp",
        deployment: true,
        deploy: "https://zarp-sepia.vercel.app/",
    },
    {
        imagen: "/bigbite.webp",
        titulo: "Big Bite",
        descripcion: "Ecommerce de comida rápida con compra simple.",
        tecnologias: ["React", "TypeScript", "Bootstrap"],
        github: "https://github.com/diegoCardenas03/ElBuenSabor",
        deployment: false,
        deploy: "",
    },
];

export default function Project() {
    const [page, setPage] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);

    const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
    const start = page * PROJECTS_PER_PAGE;
    const visibleProjects = projects.slice(start, start + PROJECTS_PER_PAGE);

    const isFirstPage = page === 0;
    const isLastPage = page === totalPages - 1;

    const goToPage = (nextPage: number) => {
        if (nextPage < 0 || nextPage >= totalPages) return;
        setPage(nextPage);
        sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const navButtonClass = (disabled: boolean) =>
        `flex items-center justify-center w-11 h-11 rounded-xl bg-gray-900 border transition-all ${
            disabled
                ? "border-slate-700 text-light opacity-40 cursor-not-allowed"
                : "border-slate-700 text-light hover:border-secondary hover:text-secondary"
        }`;

    return (
        <section ref={sectionRef} id="Project" className="min-h-screen flex items-center justify-center px-4 scroll-mt-22" >
            <div className="max-w-7xl w-full">

                <Reveal className="mb-10 text-center">
                    <p className="text-secondary font-medium mb-2">Mi trabajo</p>

                    <h2 className="text-2xl md:text-3xl font-bold">Lo que construí</h2>

                    <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm md:text-base">Proyectos reales que diseñé, desarrollé y desplegué.</p>
                </Reveal>

                <div key={page} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {visibleProjects.map((project, index) => (
                        <Reveal key={project.titulo} delay={index * 0.1} className="h-full">
                            <CardProject {...project} />
                        </Reveal>
                    ))}
                </div>

                {totalPages > 1 && (
                    <div className="mt-10 flex items-center justify-center gap-4">
                        <button
                            type="button"
                            onClick={() => goToPage(page - 1)}
                            disabled={isFirstPage}
                            aria-label="Página anterior"
                            className={navButtonClass(isFirstPage)}
                        >
                            <FaChevronLeft />
                        </button>

                        <span className="text-sm text-gray-400 tabular-nums">
                            {page + 1} / {totalPages}
                        </span>

                        <button
                            type="button"
                            onClick={() => goToPage(page + 1)}
                            disabled={isLastPage}
                            aria-label="Página siguiente"
                            className={navButtonClass(isLastPage)}
                        >
                            <FaChevronRight />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
