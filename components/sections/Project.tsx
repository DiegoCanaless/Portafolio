import CardProject from "../ui/CardProject";

export default function Project() {
    return (
        <section id="Project" className="min-h-screen flex items-center justify-center px-4" >
            <div className="max-w-7xl w-full">

                <div className="mb-10 text-center">
                    <p className="text-secondary font-medium mb-2">Mi trabajo</p>

                    <h2 className="text-2xl md:text-3xl font-bold">Proyectos destacados</h2>

                    <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm md:text-base">Algunos de los proyectos en los que trabajé, enfocados en resolverproblemas reales con soluciones modernas y escalables.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <CardProject
                        imagen="/lacerobarber.webp"
                        titulo="LaCero Barber"
                        descripcion="Sistema completo para gestión de barberías: turnos, empleados y organización del negocio."
                        tecnologias={["React", "TypeScript", "Node.js"]}
                        github="https://github.com/DiegoCanaless/barberiacero"
                        githubBackend="https://github.com/DiegoCanaless/backendbarberiacero"
                        deployment={true}
                        deploy="https://barberiacero.vercel.app/"
                    />
                    <CardProject
                        imagen="/rjc.webp"
                        titulo="RJC Transportes"
                        descripcion="Landing profesional optimizada para una empresa de transporte, enfocada en conversión y contacto."
                        tecnologias={["Next.js", "Tailwind"]}
                        github="https://github.com/DiegoCanaless/RJC---Transportes-Seguros"
                        deploy="https://rjc-transportes.com/"
                        deployment={true}
                    />
                    <CardProject
                        imagen="/zarp.webp"
                        titulo="Zarp"
                        descripcion="Plataforma tipo marketplace para conectar propietarios e inquilinos de alojamientos temporales."
                        tecnologias={["React", "TypeScript", "Tailwind"]}
                        github="https://github.com/DiegoCanaless/Zarp"
                        deployment={true}
                        deploy="https://zarp-sepia.vercel.app/"
                    />
                    <CardProject
                        imagen="/bigbite.webp"
                        titulo="Big Bite"
                        descripcion="Ecommerce de comida rápida con interfaz dinámica y experiencia centrada en el usuario."
                        tecnologias={["React", "TypeScript", "Bootstrap"]}
                        github="https://github.com/diegoCardenas03/ElBuenSabor"
                        deployment={false}
                        deploy=""
                    />

                </div>
            </div>
        </section>
    );
}
