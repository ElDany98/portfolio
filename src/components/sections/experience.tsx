import { experiences } from "@/lib/data/experience";

export function Experience() {
  return (
    <section className="py-24">
      <div className="container-page">
        <h2 className="text-2xl font-bold mb-2">Experiencia</h2>
        <p className="text-text-secondary mb-12 max-w-lg">
          Trayectoria profesional en tecnología.
        </p>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={`${exp.period}-${exp.title}`}
              className="p-5 rounded-md border border-border bg-bg-secondary"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-semibold text-sm">{exp.title}</h3>
                  <p className="text-sm text-text-secondary">{exp.company}</p>
                </div>
                <span className="text-xs font-mono text-text-tertiary whitespace-nowrap ml-4">
                  {exp.period}
                </span>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
