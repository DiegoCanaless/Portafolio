import { FaCode, FaDatabase, FaTerminal, FaMicrochip, FaBorderAll } from "react-icons/fa6";
import CardTechnologies from "../ui/CardTechnologies";

export default function About() {

    const softSkills = ["Trabajo en Equipo", "Autodidacta", "Resolución de problemas", "Pensamiento crítico"]

    return (
        <div id="About" className="min-h-screen flex flex-col items-center justify-center lg:flex-row lg:gap-4 lg:justify-around lg:px-4">
            <section className="flex flex-col px-5 py-4">
                <h2 className="text-xl font-semibold mb-5">Sobre Mi</h2>

                {/* Texto */}
                <div className="text-center md:text-start text-slate-400 space-y-4 mb-8">
                    <p>
                        Soy <span className="text-secondary">Técnico Universitario en Programación</span>,
                        egresado de la UTN (FRM).
                    </p>

                    <p> Me enfoco en el desarrollo web, priorizando soluciones claras, bien estructuradas y fáciles de mantener.
                        <span className="text-white"> Valoro el código limpio, las buenas prácticas y la mejora continua en cada proyecto.</span>
                        <br /> Disfruto enfrentar desafíos técnicos que me impulsen a aprender, salir de mi zona de confort y crecer profesionalmente.
                    </p>
                </div>

                {/* Soft Skills */}
                <div className="w-full  flex flex-col  justify-start border-2 border-secondary rounded-xl px-4 py-4 bg-gray-900">
                    <div className="flex gap-4 items-center mb-4">
                        <div className="p-2 bg-secondary/10 rounded-lg">
                            <FaMicrochip size={20} className="text-secondary" />
                        </div>
                        <h4 className="font-semibold text-light text-base">Soft Skills</h4>
                    </div>
                    <div className="flex gap-3 flex-wrap justify-center md:justify-start">
                        {softSkills.map((e) => (
                            <div key={e} className="text-[10px] py-1 px-3 rounded-lg border border-slate-700 bg-gray-900 text-light" >
                                {e}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className=" w-full grid grid-cols-1 md:grid-cols-2 gap-5 px-5 py-4">
                <CardTechnologies icon={<FaCode className="text-secondary" />} title="Lenguajes" technologies={["HTML & CSS", "Javascript", "Typescript"]} />
                <CardTechnologies icon={<FaBorderAll color="skyblue" />} title="Frameworks & Libs" technologies={["NextJS", "React Vite", "Tailwind", "Boostrap"]} />
                <CardTechnologies icon={<FaDatabase color="violet" />} title="Backend & DB" technologies={["MySQL"]} />
                <CardTechnologies icon={<FaTerminal color="orange" />} title="Herramientas & Otros" technologies={["Git & Github", "Figma", "Postman", "Vercel"]} />
            </section>
        </div>

    )
}