const milestones = [
  { year: "2019", label: "Infraestructura", description: "Redes, servidores, soporte técnico" },
  { year: "2020", label: "Desarrollo", description: "Full-stack, APIs, sistemas de tickets" },
  { year: "2022", label: "DevOps", description: "CI/CD, automatización, IaC" },
  { year: "2024", label: "Cloud & IA", description: "AWS, Cloudflare, agentes inteligentes" },
  { year: "2026", label: "Carrera", description: "Certificaciones, SaaS, arquitectura cloud" },
];

export function Narrative() {
  return (
    <section className="py-24">
      <div className="container-page">
        <div className="section-divider" />

        <div className="flex items-center gap-2 mb-12">
          <span className="font-mono text-xs text-success">$</span>
          <h2 className="text-2xl font-bold">Trayectoria</h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-action-primary/40 via-border to-border -translate-x-1/2 hidden md:block" />

          <div className="space-y-12 relative">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className={`flex flex-col md:flex-row items-start gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <span className="font-mono text-xs text-action-primary">{m.year}</span>
                  <h3 className="text-lg font-semibold mt-1">{m.label}</h3>
                  <p className="text-sm text-text-secondary mt-1">{m.description}</p>
                </div>

                <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full border-2 border-action-primary/30 bg-bg-primary flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-action-primary animate-pulse" />
                </div>

                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>

        <div className="section-divider" />
      </div>
    </section>
  );
}
