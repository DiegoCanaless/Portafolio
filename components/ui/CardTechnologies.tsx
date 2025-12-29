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
        <div className=" bg-gray-900 border border-slate-700 rounded-xl p-5 flex flex-col gap-3 group transition-colors hover:border-secondary">
            <div className="w-fit p-2 rounded-lg bg-secondary/10">
                {icon}
            </div>

            <h5 className="text-sm font-semibold text-light group-hover:text-secondary">
                {title}
            </h5>

            <ul className="list-disc list-inside text-slate-400 text-xs space-y-1">
                {technologies.map((tech) => (
                    <li key={tech} className="group-hover:marker:text-secondary">
                        {tech}
                    </li>
                ))}
            </ul>

        </div>
    );
}
