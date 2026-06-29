import { skillCategories } from "@/lib/data/skills";

export function SkillsGrid() {
  return (
    <section id="skills" className="py-24">
      <div className="container-page">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-mono text-xs text-success">$</span>
          <h2 className="text-2xl font-bold">Skills</h2>
        </div>
        <p className="text-text-secondary mb-12 max-w-lg ml-4">
          Stack tecnológico que domino, desde infraestructura hasta IA aplicada.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((skill) => (
            <div
              key={skill.name}
              className="p-5 rounded-md border border-border bg-bg-secondary card-hover"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xl">{skill.icon}</span>
                <h3 className="font-semibold text-sm">{skill.name}</h3>
              </div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }, (_, i) => (
                  <div
                    key={i}
                    className={`h-1 flex-1 rounded-full transition-colors duration-250 ${
                      i < skill.level ? "bg-action-primary" : "bg-bg-tertiary"
                    }`}
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
          ))}
        </div>
      </div>
    </section>
  );
}
