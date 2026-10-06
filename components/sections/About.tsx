import { FaCode, FaDatabase, FaTerminal, FaMicrochip, FaBorderAll } from "react-icons/fa6";
import CardTechnologies from "../ui/CardTechnologies";
import Reveal from "../ui/Reveal";

export default function About() {
    const softSkills = [
        "Trabajo en Equipo",
        "Aprendizaje rápido",
        "Comunicación clara",
        "Curiosidad técnica",
    ];

    return (
        <section id="About" className="min-h-screen flex items-center justify-center px-4" >
            <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12">

                <Reveal direction="right" className="flex flex-col">
                    <p className="text-secondary font-medium mb-2">Sobre mí</p>

                    <h2 className="text-2xl md:text-3xl font-bold mb-6">Mi camino hasta acá</h2>

                    <div className="text-slate-400 space-y-4 max-w-xl">
                        <p>Soy{" "}
                            <span className="text-secondary">
                                Técnico Universitario en Programación
                            </span>, egresado de la UTN (FRM).
                        </p>

                        <p>Empecé con un curso básico de desarrollo web y me interesó tanto cómo funcionaba todo que pasé a la tecnicatura, donde aprobé todas las materias.</p>

                        <p>Fundé{" "}
                            <a href="https://equidaty.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                                Equidaty
                            </a>, una agencia web para pymes, y desde ahí arrancó EquidaTy Shop, tiendas online que nacen de una planilla.</p>

                        <p>Trabajo con Next.js, React, TypeScript y Node.js. Llevo los proyectos a producción con tests en Playwright y despliegue en Vercel.</p>

                        <p>Ahora busco un equipo donde demostrar lo que puedo aportar y seguir formándome.</p>
                    </div>

                    {/* Soft Skills */}
                    <div className="mt-8 border border-secondary rounded-xl px-5 py-5 bg-gray-900">
                        <div className="flex gap-3 items-center mb-4">
                            <div className="p-2 bg-secondary/10 rounded-lg">
                                <FaMicrochip size={20} className="text-secondary" />
                            </div>
                            <h4 className="font-semibold text-light">Soft Skills</h4>
                        </div>

                        <div className="flex gap-3 flex-wrap">
                            {softSkills.map((e) => (
                                <span key={e} className="text-xs py-1 px-3 rounded-lg border border-slate-700 bg-gray-900 text-light" >
                                    {e}
                                </span>
                            ))}
                        </div>
                    </div>
                </Reveal>

                {/* Columna derecha */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                    <Reveal delay={0} className="h-full">
                        <CardTechnologies
                            icon={<FaCode className="text-secondary" />}
                            title="Lenguajes"
                            technologies={["HTML & CSS", "JavaScript", "TypeScript"]}
                        />
                    </Reveal>

                    <Reveal delay={0.1} className="h-full">
                        <CardTechnologies
                            icon={<FaBorderAll className="text-sky-400" />}
                            title="Frameworks & Libs"
                            technologies={["Next.js", "React", "Tailwind"]}
                        />
                    </Reveal>

                    <Reveal delay={0.2} className="h-full">
                        <CardTechnologies
                            icon={<FaDatabase className="text-violet-400" />}
                            title="Backend & DB"
                            technologies={["Node.js", "MySQL", "Prisma", "PostgreSQL"]}
                        />
                    </Reveal>

                    <Reveal delay={0.3} className="h-full">
                        <CardTechnologies
                            icon={<FaTerminal className="text-orange-400" />}
                            title="Herramientas"
                            technologies={["Git & GitHub", "GitHub Actions", "Figma", "Postman", "Vercel", "OpenCode", "Playwright", "Vitest"]}
                        />
                    </Reveal>

                </div>
            </div>
        </section>
    );
}
