const milestones = [
  { year: "2015", label: "Infraestructura", description: "Soporte TI, redes LAN/WAN, mantenimiento" },
  { year: "2019", label: "Redes", description: "CCNA, switching, routing, certificación Cisco" },
  { year: "2023", label: "SysAdmin & Seguridad", description: "Infraestructura crítica, hardening, monitoreo Zabbix" },
  { year: "2025", label: "Cloud & DevOps", description: "AWS, automatización, CI/CD, arquitectura cloud" },
  { year: "2026", label: "Arquitectura", description: "Well-Architected, seguridad, IA aplicada" },
];

export function Narrative() {
  const last = milestones.length - 1;

  return (
    <section className="section-padding border-t border-border">
      <div className="container-page">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-mono text-xs text-success">$</span>
          <h2 className="text-2xl font-bold tracking-tight">Trayectoria</h2>
        </div>
        <p className="text-text-secondary mb-12 max-w-lg ml-4">
          De infraestructura a IA — el camino en 7 años.
        </p>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-action-primary/30 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="space-y-12 relative">
            {milestones.map((m, i) => {
              const isCurrent = i === last;
              return (
                <div
                  key={m.year}
                  className={`flex flex-col md:flex-row items-start gap-6 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <span className={`font-mono text-xs ${isCurrent ? "text-action-primary" : "text-action-primary/60"}`}>
                      {m.year}
                    </span>
                    <h3 className={`text-lg font-semibold mt-1 ${isCurrent ? "text-text-primary" : "text-text-primary/80"}`}>
                      {m.label}
                    </h3>
                    <p className="text-sm text-text-secondary mt-1">{m.description}</p>
                    {isCurrent && (
                      <span className="inline-block mt-1 font-mono text-xs text-success">● ahora</span>
                    )}
                  </div>

                  <div
                    className={`relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      isCurrent
                        ? "border-2 border-action-primary bg-action-primary/10"
                        : "border-2 border-action-primary/30 bg-bg-primary"
                    }`}
                  >
                    {isCurrent ? (
                      <span className="w-2 h-2 rounded-full bg-action-primary animate-pulse" />
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-action-primary/40" />
                    )}
                  </div>

                  <div className="flex-1 hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
