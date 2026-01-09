import CardProject from "../ui/CardProject";


export default function Project() {
    return (
        <>
            <section id="Project" className=" flex justify-center flex-col px-5 py-5 lg:min-h-screen">
                <h2 className="text-xl font-semibold mb-5">Proyectos</h2>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <CardProject
                        imagen="/rjc.webp"
                        titulo="RJC - Transportes"
                        descripcion="Landing Page para empresa de Transportes de personas discapcitadas"
                        tecnologias={["NextJS", "Tailwind"]}
                        github="https://github.com/DiegoCanaless/RJC---Transportes-Seguros"
                        deploy="https://rjc-transportes.com/"
                        deployment= {true}
                    />
                    <CardProject
                        imagen="/zarp.webp"
                        titulo="Zarp"
                        descripcion="Plataforma que conecta dueños e inquilinos para alojamientos temporales"
                        tecnologias={["ReactJS", "Typescript", "Tailwind"]}
                        github="https://github.com/DiegoCanaless/Zarp"
                        deployment= {true}
                        deploy="https://zarp-sepia.vercel.app/"
                    />
                    <CardProject
                        imagen="/bigbite.webp"
                        titulo="Big Bite"
                        descripcion="Eccomerce de comida rapida"
                        tecnologias={["ReactJS", "Typescript", "Boostrap"]}
                        github="https://github.com/diegoCardenas03/ElBuenSabor"
                        deployment= {false}
                        deploy=""
                    />
                    
                </div>

            </section>
        </>
    )
}