import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface CardProjectProp {
    imagen: string;
    titulo: string;
    descripcion: string;
    tecnologias: string[];
    github: string;
    deploy: string;
    deployment: boolean;
}

export default function CardProject({
    imagen,
    titulo,
    descripcion,
    tecnologias,
    github,
    deploy,
    deployment 
}: CardProjectProp) {
    return (
        <div className="flex flex-col items-center rounded-xl bg-gray-900">
            <div className="relative w-full group">
                <img src={imagen} alt={titulo} className="rounded-t-lg w-full h-48 object-cover" />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={github} target="_blank" rel="noopener noreferrer" className="text-light hover:text-secondary text-2xl" >
                        <FaGithub />
                    </a>
                    {deployment && (
                        <a href={deploy} target="_blank" rel="noopener noreferrer" className="text-light hover:text-secondary text-2xl" >
                        <FaExternalLinkAlt />
                    </a>
                    )}

                </div>
            </div>

            {/* Texto */}
            <div className="flex flex-col px-2 py-4">
                <div className="flex gap-2 flex-wrap px-2 mb-2 justify-start">
                    {tecnologias.map((e) => (
                        <span key={e} className="text-xs px-3 py-1 rounded-full bg-secondary/10 text-secondary font-medium" >
                            {e}
                        </span>
                    ))}
                </div>

                <h3 className="font-semibold text-lg  px-2 mb-2 text-light lg:text-xl">{titulo}</h3>
                <p className="text-xs lg:text-sm  px-2 text-gray-400">{descripcion}</p>
            </div>
        </div>
    );
}