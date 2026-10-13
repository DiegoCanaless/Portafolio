import type { ReactNode } from "react";
import { FaGraduationCap, FaShieldHalved, FaCode } from "react-icons/fa6";
import Reveal from "../ui/Reveal";

interface EducationItem {
    icon: ReactNode;
    title: string;
    institution?: string;
    status: string;
    statusVariant: "done" | "progress";
    description: string;
}

// Orden cronológico: formación inicial → tecnicatura → especialización en curso.
const education: EducationItem[] = [
    {
        icon: <FaCode className="text-secondary" />,
        title: "Desarrollo Web",
        status: "Completado",
        statusVariant: "done",
        description:
            "Curso básico de desarrollo web donde arrancó todo: HTML, CSS y JavaScript.",
    },
    {
        icon: <FaGraduationCap className="text-secondary" />,
        title: "Técnico Universitario en Programación",
        institution: "UTN · Facultad Regional Mendoza",
        status: "Egresado",
        statusVariant: "done",
        description:
            "Tecnicatura universitaria donde aprobé todas las materias y consolidé las bases de programación, bases de datos y desarrollo de software.",
    },
    {
        icon: <FaShieldHalved className="text-secondary" />,
        title: "Diplomatura en Pentesting",
        status: "En curso",
        statusVariant: "progress",
        description:
            "Formación en seguridad ofensiva: reconocimiento, análisis de vulnerabilidades, explotación y reporte.",
    },
];

export default function Education() {
    return (
        <section id="Education" className="min-h-screen flex items-center justify-center px-4 scroll-mt-22">
            <div className="max-w-7xl w-full">

                <Reveal className="mb-14 text-center">
                    <p className="text-secondary font-medium mb-2">Formación</p>

                    <h2 className="text-2xl md:text-3xl font-bold">Dónde me formé</h2>

                    <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm md:text-base">
                        Mi recorrido académico y de especialización, del desarrollo web a la seguridad.
                    </p>
                </Reveal>

                <div className="relative">
                    <span
                        aria-hidden="true"
                        className="hidden md:block absolute top-[7px] left-[16%] right-[16%] h-px bg-slate-700"
                    />

                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {education.map((item, i) => (
                            <li key={item.title} className="flex flex-col items-center">
                                <span
                                    aria-hidden="true"
                                    className="w-4 h-4 rounded-full border-2 border-secondary bg-primary z-10"
                                />

                                <Reveal delay={i * 0.1} className="w-full flex-1 mt-5">
                                    <div className="h-full w-full bg-gray-900 border border-slate-700 rounded-xl p-5 transition-all hover:border-secondary">
                                        <div className="flex items-start justify-between gap-3 mb-3">
                                            <div className="w-fit p-2 rounded-lg bg-secondary/10">
                                                {item.icon}
                                            </div>

                                            <span
                                                className={`text-xs font-medium px-3 py-1 rounded-full ${
                                                    item.statusVariant === "progress"
                                                        ? "bg-amber-400 text-primary"
                                                        : "bg-secondary text-primary"
                                                }`}
                                            >
                                                {item.status}
                                            </span>
                                        </div>

                                        <h3 className="font-semibold text-light">{item.title}</h3>

                                        {item.institution && (
                                            <p className="text-sm text-secondary mt-1">{item.institution}</p>
                                        )}

                                        <p className="text-sm text-gray-400 mt-2">{item.description}</p>
                                    </div>
                                </Reveal>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
