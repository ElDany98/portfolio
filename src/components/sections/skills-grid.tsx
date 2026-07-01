"use client";

import { useRef, useEffect, useState } from "react";
import { Cloud, Network, Shield, Server, Radio, GitMerge, Wrench, type LucideIcon } from "lucide-react";
import { skillCategories } from "@/lib/data/skills";

const iconMap: Record<string, LucideIcon> = {
  "Cybersecurity · Blue Team": Shield,
  "Automation · DevNet": GitMerge,
  "Cloud & AI Foundations": Cloud,
  "Observability · NOC": Radio,
  "Network Engineering · Cisco": Network,
  "Network Operations · Support": Wrench,
  "Systems Administration · Linux": Server,
};

export function SkillsGrid() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section-padding border-t border-border">
      <div className="container-page">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-mono text-xs text-success">$</span>
          <h2 className="text-2xl font-bold tracking-tight">Skills</h2>
        </div>
        <p className="text-text-secondary mb-12 max-w-lg ml-4">
          Stack tecnológico que domino, desde infraestructura hasta IA aplicada.
        </p>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((skill, catIdx) => {
            const Icon = iconMap[skill.name] ?? Cloud;
            return (
              <div
                key={skill.name}
                className="p-5 rounded-md border border-border bg-bg-secondary card-hover"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon size={16} className="text-action-primary/60 shrink-0" />
                  <h3 className="font-semibold text-sm">{skill.name}</h3>
                </div>

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }, (_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 flex-1 rounded-full origin-left ${
                        i < skill.level ? "bg-action-primary" : "bg-bg-tertiary"
                      }`}
                      style={{
                        transform: visible && i < skill.level ? "scaleX(1)" : i < skill.level ? "scaleX(0)" : "scaleX(1)",
                        transition: visible
                          ? `transform 450ms cubic-bezier(0.16, 1, 0.3, 1) ${(catIdx * 5 + i) * 55}ms`
                          : "none",
                      }}
                    />
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-sm bg-bg-tertiary text-text-secondary text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
