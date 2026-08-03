import CardProject from "../ui/CardProject";
import Reveal from "../ui/Reveal";

export default function Project() {
    return (
        <section id="Project" className="min-h-screen flex items-center justify-center px-4 scroll-mt-22" >
            <div className="max-w-7xl w-full">

                <Reveal className="mb-10 text-center">
                    <p className="text-secondary font-medium mb-2">Mi trabajo</p>

                    <h2 className="text-2xl md:text-3xl font-bold">Lo que construí</h2>

                    <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm md:text-base">Proyectos reales que diseñé, desarrollé y desplegué.</p>
                </Reveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Reveal delay={0} className="h-full">
                        <CardProject
                            imagen="/DentalCare.webp"
                            titulo="Dental Care"
                            descripcion="Gestión dental: turnos, pacientes y profesionales."
                            tecnologias={["OpenCode","NextJS", "TypeScript", "PostgreSQL"]}
                            github="https://github.com/DiegoCanaless/DentalCareFront"
                            githubBackend="https://github.com/DiegoCanaless/DentalCareBack"
                            deployment={true}
                            deploy="https://dental-care-front.vercel.app/"
                        />
                    </Reveal>
                    <Reveal delay={0.1} className="h-full">
                        <CardProject
                            imagen="/lacerobarber.webp"
                            titulo="LaCero Barber"
                            descripcion="Gestión de barberías: turnos, empleados y negocio."
                            tecnologias={["React", "TypeScript", "Node.js"]}
                            github="https://github.com/DiegoCanaless/barberiacero"
                            githubBackend="https://github.com/DiegoCanaless/backendbarberiacero"
                            deployment={true}
                            deploy="https://barberiacero.vercel.app/"
                        />
                    </Reveal>
                    <Reveal delay={0.3} className="h-full">
                        <CardProject
                            imagen="/zarp.webp"
                            titulo="Zarp"
                            descripcion="Marketplace de alojamientos temporales."
                            tecnologias={["React", "TypeScript", "Tailwind"]}
                            github="https://github.com/DiegoCanaless/Zarp"
                            deployment={true}
                            deploy="https://zarp-sepia.vercel.app/"
                        />
                    </Reveal>
                    <Reveal delay={0.4} className="h-full">
                        <CardProject
                            imagen="/bigbite.webp"
                            titulo="Big Bite"
                            descripcion="Ecommerce de comida rápida con compra simple."
                            tecnologias={["React", "TypeScript", "Bootstrap"]}
                            github="https://github.com/diegoCardenas03/ElBuenSabor"
                            deployment={false}
                            deploy=""
                        />
                    </Reveal>

                </div>
            </div>
        </section>
    );
}
