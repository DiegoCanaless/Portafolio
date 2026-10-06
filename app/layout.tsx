import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans } from 'next/font/google';
import { MotionConfig } from "motion/react";



const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});


export const metadata: Metadata = {
  title: "Diego Canales · Desarrollador Fullstack",
  description: "Diego Canales, desarrollador fullstack con enfoque a frontend en Mendoza, Argentina. Proyectos en producción con Next.js, React y TypeScript.",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="es">
      <body className={`antialiased ${plusJakarta.className}`} >
        <MotionConfig reducedMotion="user">
          {children}
        </MotionConfig>
      </body>
    </html>
  );
}
