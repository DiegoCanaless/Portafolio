import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portafolio Diego Canales",
  description: "Explora los proyectos de Diego Canales: desarrollo frontend y backend, optimización SEO y soluciones digitales innovadoras.",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`antialiased`} >
        {children}
      </body>
    </html>
  );
}
