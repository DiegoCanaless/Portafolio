import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FaServer } from "react-icons/fa6";

interface CardProjectProp {
    imagen: string;
    titulo: string;
    descripcion: string;
    tecnologias: string[];
    github: string;
    githubBackend?: string;
    deploy?: string;
    deployment?: boolean;
}

export default function CardProject({
    imagen,
    titulo,
    descripcion,
    tecnologias,
    github,
    githubBackend,
    deploy,
    deployment
}: CardProjectProp) {
    return (
        <div className="group flex flex-col rounded-xl bg-gray-900 border border-slate-700 overflow-hidden transition-all hover:border-secondary hover:scale-[1.02]">
            <div className="relative w-full">
                <img src={imagen} alt={titulo} className="w-full h-48 object-cover" />

                <div className="absolute inset-0 bg-black/70 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={github} target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-light hover:text-secondary text-2xl" />
                    </a>

                    {githubBackend && (
                        <a href={githubBackend} target="_blank" rel="noopener noreferrer">
                            <FaServer className="text-light hover:text-secondary text-2xl" />
                        </a>
                    )}

                    {deployment && deploy && (
                        <a href={deploy} target="_blank" rel="noopener noreferrer">
                            <FaExternalLinkAlt className="text-light hover:text-secondary text-2xl" />
                        </a>
                    )}

                </div>
            </div>

            <div className="flex flex-col p-4">

                <div className="flex gap-2 flex-wrap mb-3">
                    {tecnologias.map((tech) => (
                        <span key={tech} className="text-xs px-3 py-1 rounded-full bg-secondary/10 text-secondary" >
                            {tech}
                        </span>
                    ))}
                </div>
                
                <h3 className="font-semibold text-lg text-light mb-2 group-hover:text-secondary transition-colors">{titulo}</h3>

                <p className="text-sm text-gray-400">{descripcion}</p>
            </div>
        </div>
    );
}
