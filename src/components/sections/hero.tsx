"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const LINES = [
  { type: "prompt" as const, content: "whoami" },
  { type: "output" as const, content: "Cloud Architect | Platform Engineer | AI Engineering" },
  { type: "prompt" as const, content: "cat mission.txt" },
  { type: "output" as const, content: "De infraestructura a IA. Construyo sistemas que" },
  { type: "output" as const, content: "transforman incertidumbre en control." },
];

function useTypewriter() {
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;
    if (lineIdx >= LINES.length) { setDone(true); return; }

    const line = LINES[lineIdx];
    const full = line.type === "prompt" ? `$ ${line.content}` : line.content;
    const speed = line.type === "prompt" ? 42 : 16;

    if (charIdx < full.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), speed);
      return () => clearTimeout(t);
    } else {
      const pause = line.type === "prompt" ? 160 : 60;
      const t = setTimeout(() => { setLineIdx((l) => l + 1); setCharIdx(0); }, pause);
      return () => clearTimeout(t);
    }
  }, [lineIdx, charIdx, done]);

  return { lineIdx, charIdx, done };
}

export function Hero() {
  const { lineIdx, charIdx, done } = useTypewriter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <div className="container-page w-full">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center">
          <div className="space-y-6">

            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border border-success/25 bg-success/5 text-xs font-mono text-success transition-all duration-500 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
            >
              <span className="relative w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-success animate-pulse" />
                <span className="absolute inset-0 rounded-full bg-success" />
              </span>
              Sistema activo — disponible
            </div>

            {/* Heading */}
            <h1
              className={`text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none animate-glitch transition-all duration-600 ease-out ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
              style={{ transitionDelay: "150ms" }}
            >
              Daniel Meza
            </h1>

            {/* Terminal typewriter */}
            <div
              className={`space-y-1 font-mono text-sm md:text-base transition-all duration-500 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              {LINES.map((line, i) => {
                const full = line.type === "prompt" ? `$ ${line.content}` : line.content;
                const text = i < lineIdx ? full : i === lineIdx ? full.slice(0, charIdx) : "";
                if (!text) return null;

                return (
                  <p
                    key={i}
                    className={line.type === "prompt" ? "text-text-secondary" : "text-text-primary pl-4"}
                  >
                    {line.type === "prompt" ? (
                      <>
                        <span className="text-success">$</span>{" "}
                        <span className="text-text-primary">{text.slice(2)}</span>
                      </>
                    ) : (
                      text
                    )}
                  </p>
                );
              })}
              {done && (
                <p className="text-text-secondary">
                  <span className="text-success">$</span>{" "}
                  <span className="animate-blink text-text-primary">_</span>
                </p>
              )}
            </div>

            {/* CTAs */}
            <div
              className={`flex gap-4 pt-4 transition-all duration-500 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
              style={{ transitionDelay: "450ms" }}
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-action-primary text-white text-sm font-medium hover:bg-action-hover transition-colors duration-250 ease-out"
              >
                <span className="font-mono text-xs opacity-70">&gt;</span>
                Ver proyectos
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border text-text-secondary text-sm font-medium hover:border-text-tertiary hover:text-text-primary transition-[border-color,color] duration-250 ease-out"
              >
                <span className="font-mono text-xs opacity-70">$</span>
                Contactar
              </a>
            </div>
          </div>

          {/* Neofetch panel */}
          <div
            className={`hidden md:block w-72 transition-all duration-600 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "250ms" }}
          >
            <div className="rounded-lg border border-border overflow-hidden bg-bg-secondary/50">
              <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border bg-bg-tertiary/50">
                <span className="w-2.5 h-2.5 rounded-full bg-danger/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-warning/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-success/70" />
                <span className="text-xs font-mono text-text-tertiary ml-2">~/system — bash</span>
              </div>
              <div className="p-4 font-mono text-xs space-y-1.5">
                <p className="text-text-secondary">
                  <span className="text-success">$</span>{" "}
                  <span className="text-cyan">neofetch</span>
                </p>
                <p>
                  <span className="text-text-tertiary">user</span>{" "}
                  <span className="text-text-tertiary">@</span>{" "}
                  <span className="text-action-primary">danielmeza</span>
                </p>
                <p><span className="text-text-tertiary">os</span>{" "}<span className="text-text-secondary">Arch</span></p>
                <p><span className="text-text-tertiary">shell</span>{" "}<span className="text-text-secondary">zsh 5.9</span></p>
                <p><span className="text-text-tertiary">uptime</span>{" "}<span className="text-text-secondary">7 years</span></p>
                <p><span className="text-text-tertiary">packages</span>{" "}<span className="text-text-secondary">42 (npm)</span></p>
                <p className="text-text-secondary">
                  <span className="text-success">$</span>{" "}
                  <span className="animate-blink">_</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#skills"
        aria-label="Scroll to skills"
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 text-text-tertiary hover:text-text-secondary transition-all duration-500 animate-bounce ${
          done ? "opacity-100" : "opacity-0"
        }`}
      >
        <ChevronDown size={22} />
      </a>
    </section>
  );
}
