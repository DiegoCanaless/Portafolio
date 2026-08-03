import Reveal from "../ui/Reveal";
import { FaCheck } from "react-icons/fa6";

const experiencia = [
    {
        fecha: "Diciembre 2025",
        titulo: "RJC Transportes",
        descripcion: "Web para un cliente real que transporta niños con discapacidad.",
        acciones: ["Diseño", "Desarrollo", "Despliegue"],
        link: "https://rjc-transportes.com/",
        tecnologias: ["Next.js", "Tailwind"],
    },
];

export default function Experience() {
    return (
        <section id="Experience" className="min-h-screen flex items-center justify-center px-4" >
            <div className="max-w-7xl w-full">

                <Reveal className="mb-10 text-center">
                    <p className="text-secondary font-medium mb-2">Experiencia</p>
                    <h2 className="text-2xl md:text-3xl font-bold">Un cliente real</h2>
                </Reveal>

                <div className="max-w-2xl mx-auto flex flex-col gap-6">
                    {experiencia.map((e) => (
                        <Reveal key={e.titulo}>
                            <div className="relative border-l-2 border-secondary pl-6">
                                <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-secondary"></span>

                                <p className="text-xs font-medium text-secondary uppercase tracking-wide">{e.fecha}</p>
                                <h3 className="mt-1 text-xl font-semibold text-light">{e.titulo}</h3>

                                <p className="mt-2 text-sm text-gray-400">{e.descripcion}</p>

                                <div className="mt-3 flex gap-2 flex-wrap">
                                    {e.acciones.map((accion) => (
                                        <span key={accion} className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-lg border border-slate-700 text-light">
                                            <FaCheck className="text-secondary" size={10} />
                                            {accion}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-3 flex gap-2 flex-wrap">
                                    {e.tecnologias.map((tech) => (
                                        <span key={tech} className="text-xs px-3 py-1 rounded-full bg-secondary/10 text-secondary">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={e.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                                >
                                    Ver el sitio
                                </a>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
