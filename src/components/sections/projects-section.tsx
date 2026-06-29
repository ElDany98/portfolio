import { projects } from "@/lib/data/projects";

const statusColors = {
  production: "text-success",
  development: "text-warning",
  designed: "text-text-tertiary",
  idea: "text-text-tertiary",
} as const;

const statusLabels = {
  production: "Producción",
  development: "Desarrollo",
  designed: "Diseñado",
  idea: "Idea",
} as const;

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <div className="container-page">
        <h2 className="text-2xl font-bold mb-2">Proyectos</h2>
        <p className="text-text-secondary mb-12 max-w-lg">
          Sistemas reales que he diseñado, desarrollado y desplegado.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div
              key={project.name}
              className="p-5 rounded-md border border-border bg-bg-secondary flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-sm">{project.name}</h3>
                <span className={`text-xs font-mono ${statusColors[project.status]}`}>
                  {statusLabels[project.status]}
                </span>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
