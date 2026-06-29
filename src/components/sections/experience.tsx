import { experiences } from "@/lib/data/experience";

const typeLabels = {
  work: "●",
  education: "○",
  milestone: "◉",
} as const;

export function Experience() {
  return (
    <section className="py-24">
      <div className="container-page">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-mono text-xs text-success">$</span>
          <h2 className="text-2xl font-bold">Experiencia</h2>
        </div>
        <p className="text-text-secondary mb-12 max-w-lg ml-4">
          Trayectoria profesional en tecnología.
        </p>

        <div className="space-y-4">
          {experiences.map((exp) => (
            <div
              key={`${exp.period}-${exp.title}`}
              className="p-5 rounded-md border border-border bg-bg-secondary card-hover"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-start gap-3">
                  <span className={`font-mono text-xs mt-0.5 ${exp.type === "work" ? "text-action-primary" : "text-text-tertiary"}`}>
                    {typeLabels[exp.type]}
                  </span>
                  <div>
                    <h3 className="font-semibold text-sm">{exp.title}</h3>
                    <p className="text-sm text-text-secondary">{exp.company}</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-text-tertiary whitespace-nowrap ml-4">
                  {exp.period}
                </span>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed ml-7">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
