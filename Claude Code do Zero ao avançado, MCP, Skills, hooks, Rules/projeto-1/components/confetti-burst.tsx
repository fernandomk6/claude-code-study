"use client";

import { useMemo } from "react";

const PARTICLE_COLORS = ["bg-brand", "bg-accent", "bg-foreground"];

type Particle = {
  id: number;
  left: number;
  delay: number;
  duration: number;
  rotation: number;
  color: string;
};

function createParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, id) => ({
    id,
    left: Math.random() * 100,
    delay: Math.random() * 0.3,
    duration: 0.9 + Math.random() * 0.6,
    rotation: Math.random() * 360,
    color: PARTICLE_COLORS[id % PARTICLE_COLORS.length],
  }));
}

export function ConfettiBurst({
  count = 24,
  className,
}: {
  count?: number;
  className?: string;
}) {
  const particles = useMemo(() => createParticles(count), [count]);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none overflow-hidden motion-reduce:hidden ${className ?? ""}`}
    >
      {particles.map((particle) => (
        <span
          key={particle.id}
          className={`absolute top-0 h-2 w-1 rounded-sm ${particle.color}`}
          style={{
            left: `${particle.left}%`,
            transform: `rotate(${particle.rotation}deg)`,
            animation: `confetti-fall ${particle.duration}s ease-in ${particle.delay}s forwards`,
          }}
        />
      ))}
    </div>
  );
}
