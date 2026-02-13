"use client";

import { useState, useEffect } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  emoji: string;
}

export default function KissParticleSystem() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleClick = (e: MouseEvent) => {
      // Only trigger particles if clicking on the background (not on buttons or interactive elements)
    //   const target = e.target as HTMLElement;
    //   if (
    //     target.tagName === "BUTTON" ||
    //     target.closest("button") ||
    //     target.tagName === "A" ||
    //     target.closest("a") ||
    //     target.closest("[data-interactive='true']")
    //   ) {
    //     return; // Don't create particles when clicking interactive elements
    //   }

      const emojis = ["💋", "💕", "💖", "❤️", "✨", "🌹"];
      const newParticles: Particle[] = [];
      
      for (let i = 0; i < 12; i++) {
        newParticles.push({
          id: Date.now() + i,
          x: e.clientX,
          y: e.clientY,
          vx: (Math.random() - 0.5) * 6,
          vy: (Math.random() - 0.5) * 6 - 2,
          life: 1,
          emoji: emojis[Math.floor(Math.random() * emojis.length)],
        });
      }
      
      setParticles((prev) => [...prev, ...newParticles]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vy: p.vy + 0.15, // gravity
            life: p.life - 0.02,
          }))
          .filter((p) => p.life > 0)
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Cursor trail */}
      <div
        className="fixed pointer-events-none z-50"
        style={{
          left: mousePos.x - 10,
          top: mousePos.y - 10,
        }}
      >
        <div className="text-2xl animate-kiss-pulse opacity-60">💋</div>
      </div>

      {/* Particles */}
      <div className="fixed inset-0 pointer-events-none z-40">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute text-2xl transition-opacity duration-300"
            style={{
              left: particle.x,
              top: particle.y,
              opacity: particle.life,
              transform: `scale(${particle.life})`,
            }}
          >
            {particle.emoji}
          </div>
        ))}
      </div>
    </>
  );
}
