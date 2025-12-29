import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans } from 'next/font/google';



const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});


export const metadata: Metadata = {
  title: "Portafolio Diego Canales",
  description: "Explora los proyectos de Diego Canales: desarrollo frontend y backend, optimización SEO y soluciones digitales innovadoras.",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="es">
      <body className={`antialiased ${plusJakarta.className}`} >
        {children}
      </body>
    </html>
  );
}
