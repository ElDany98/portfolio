import { experiences } from "@/lib/data/experience";

const typeLabels = {
  work: "●",
  education: "○",
  milestone: "◉",
} as const;

export function Experience() {
  return (
    <section className="section-padding border-t border-border">
      <div className="container-page">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-mono text-xs text-success">$</span>
          <h2 className="text-2xl font-bold tracking-tight">Experiencia</h2>
        </div>
        <p className="text-text-secondary mb-12 max-w-lg ml-4">
          Trayectoria profesional en tecnología.
        </p>

        <div className="space-y-4">
          {experiences.map((exp) => {
            const isCurrent = exp.period.includes("Presente");
            return (
              <div
                key={`${exp.period}-${exp.title}`}
                className={`p-5 rounded-md bg-bg-secondary card-hover border border-l-2 ${
                  isCurrent
                    ? "border-action-primary/20 border-l-action-primary/70"
                    : "border-border border-l-border"
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-start gap-3">
                    <span className={`font-mono text-xs mt-0.5 ${exp.type === "work" ? "text-action-primary" : "text-text-tertiary"}`}>
                      {typeLabels[exp.type]}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-sm">{exp.title}</h3>
                        {isCurrent && (
                          <span className="font-mono text-xs text-success bg-success/8 px-1.5 py-0.5 rounded-sm">
                            ● actual
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-text-secondary">{exp.company}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-text-tertiary whitespace-nowrap ml-4">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed ml-7">{exp.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
