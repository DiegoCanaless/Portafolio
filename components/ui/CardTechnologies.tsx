import { ReactNode } from "react";

interface CardTechnologiesProps {
    icon: ReactNode;
    title: string;
    technologies: string[];
}

export default function CardTechnologies({
    icon,
    title,
    technologies,
}: CardTechnologiesProps) {
    return (
        <div className="bg-gray-900 border border-slate-700 rounded-xl p-6 flex flex-col gap-4 transition-all hover:border-secondary hover:scale-[1.02]">
            
            <div className="w-fit p-2 rounded-lg bg-secondary/10">
                {icon}
            </div>

            <h5 className="text-sm font-semibold text-light">
                {title}
            </h5>

            <ul className="list-disc list-inside text-slate-400 text-xs space-y-1">
                {technologies.map((tech) => (
                    <li key={tech}>
                        {tech}
                    </li>
                ))}
            </ul>

        </div>
    );
}
