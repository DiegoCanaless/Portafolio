import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import About from "@/components/sections/About";
import Form from "@/components/sections/Form";
import Hero from "@/components/sections/Hero";
import Project from "@/components/sections/Project";
import { FaWhatsapp } from "react-icons/fa6";


export default function Home() {
  return (
    <>
      <a href="https://wa.link/5uctx1" aria-label="Ir al whattsapp de RJC para consultas" rel="noopener noreferrer" target="_blank" className="fixed bottom-8 right-8 bg-[#25D366] p-2 rounded-full z-40 hover:cursor-pointer duration-150 hover:scale-110">
        <FaWhatsapp size={30} aria-hidden="true" color="white" />
      </a>
      <Navbar />
      <main className="h-auto bg-primary text-light px-4 ">
        <Hero />
        <About />
        <Project />
        <Form />
      </main>
      <Footer />


    </>
  );
}
