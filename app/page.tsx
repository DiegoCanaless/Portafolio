import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import About from "@/components/sections/About";
import Form from "@/components/sections/Form";
import Hero from "@/components/sections/Hero";
import Project from "@/components/sections/Project";


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="h-auto bg-primary text-light px-4 ">
        <Hero/>
        <Project/>
        <About/>
        <Form/>
      </main>
      <Footer/>
      

    </>
  );
}
