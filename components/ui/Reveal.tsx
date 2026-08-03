"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

// Componente de reveal reutilizable (client) para envolver contenido
// de server components sin convertirlos a client. Solo anima
// opacity/transform para no afectar el layout.

export type RevealDirection = "up" | "down" | "left" | "right";

interface RevealProps {
  children: ReactNode;
  /** Retraso en segundos antes de iniciar la animación */
  delay?: number;
  /** Dirección desde donde entra el contenido */
  direction?: RevealDirection;
  /** Duración de la animación en segundos */
  duration?: number;
  className?: string;
  /** Si la animación ocurre solo una vez (default: true) */
  once?: boolean;
}

const offsets: Record<RevealDirection, { x: number; y: number }> = {
  up: { x: 0, y: 40 },
  down: { x: 0, y: -40 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
};

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  duration = 0.6,
  className,
  once = true,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const offset = shouldReduceMotion ? { x: 0, y: 0 } : offsets[direction];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-100px" }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
