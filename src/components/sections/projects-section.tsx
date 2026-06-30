import { ExternalLink } from "lucide-react";
import { projects } from "@/lib/data/projects";

const statusConfig = {
  production: {
    color: "text-success",
    prefix: "●",
    label: "Producción",
    border: "border-l-success/50",
  },
  development: {
    color: "text-warning",
    prefix: "◉",
    label: "Desarrollo",
    border: "border-l-warning/30",
  },
  designed: {
    color: "text-text-tertiary",
    prefix: "○",
    label: "Diseñado",
    border: "border-l-border",
  },
  idea: {
    color: "text-text-tertiary",
    prefix: "○",
    label: "Idea",
    border: "border-l-border",
  },
} as const;

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding border-t border-border">
      <div className="container-page">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-mono text-xs text-success">$</span>
          <h2 className="text-2xl font-bold tracking-tight">Proyectos</h2>
        </div>
        <p className="text-text-secondary mb-12 max-w-lg ml-4">
          Sistemas reales que he diseñado, desarrollado y desplegado.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => {
            const cfg = statusConfig[project.status];
            const inner = (
              <>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-sm pr-2">{project.name}</h3>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className={`font-mono text-xs ${cfg.color}`}>
                      {cfg.prefix} {cfg.label}
                    </span>
                    {project.url && (
                      <ExternalLink size={12} className="text-text-tertiary group-hover:text-text-secondary transition-colors" />
                    )}
                  </div>
                </div>

                <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-sm bg-bg-tertiary text-text-secondary text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </>
            );

            const baseClass = `group p-5 rounded-md border border-border border-l-2 ${cfg.border} bg-bg-secondary card-hover flex flex-col`;

            return project.url ? (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={baseClass}
              >
                {inner}
              </a>
            ) : (
              <div key={project.name} className={baseClass}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
