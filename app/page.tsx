import Navbar from "@/components/layouts/Navbar";
import Hero from "@/components/sections/Hero";


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-primary text-light px-10 pt-20">
        <Hero/>
      </main>
      

    </>
  );
}
