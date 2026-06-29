export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <div className="container-page w-full">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-xs font-mono text-success">
              <span className="relative w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-success animate-pulse" />
                <span className="absolute inset-0 rounded-full bg-success" />
              </span>
              Sistema activo — disponible
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none animate-glitch">
              Daniel Meza
            </h1>

            <div className="space-y-1 font-mono text-sm md:text-base">
              <p className="text-text-secondary">
                <span className="text-success">$</span>{" "}
                <span className="text-text-primary">whoami</span>
              </p>
              <p className="text-text-primary pl-4">
                Cloud Architect <span className="text-text-tertiary">|</span> Platform Engineer{" "}
                <span className="text-text-tertiary">|</span> AI Engineering
              </p>
              <p className="text-text-secondary">
                <span className="text-success">$</span>{" "}
                <span className="text-text-primary">cat mission.txt</span>
              </p>
              <p className="text-text-primary pl-4">
                De infraestructura a IA. Construyo sistemas que
              </p>
              <p className="text-text-primary pl-4">
                transforman incertidumbre en control.
              </p>
              <p className="text-text-secondary">
                <span className="text-success">$</span>{" "}
                <span className="animate-pulse text-text-primary">_</span>
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-action-primary text-white text-sm font-medium hover:bg-action-hover transition-all duration-250 ease-out"
              >
                <span className="font-mono text-xs opacity-70">&gt;</span>
                Ver proyectos
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border text-text-secondary text-sm font-medium hover:border-text-tertiary hover:text-text-primary transition-all duration-250 ease-out"
              >
                <span className="font-mono text-xs opacity-70">$</span>
                Contactar
              </a>
            </div>
          </div>

          <div className="hidden md:block w-72">
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
                <p>
                  <span className="text-text-tertiary">os</span>{" "}
                  <span className="text-text-secondary">Arch</span>
                </p>
                <p>
                  <span className="text-text-tertiary">shell</span>{" "}
                  <span className="text-text-secondary">zsh 5.9</span>
                </p>
                <p>
                  <span className="text-text-tertiary">uptime</span>{" "}
                  <span className="text-text-secondary">7 years</span>
                </p>
                <p>
                  <span className="text-text-tertiary">packages</span>{" "}
                  <span className="text-text-secondary">42 (npm)</span>
                </p>
                <p className="text-text-secondary">
                  <span className="text-success">$</span>{" "}
                  <span className="animate-pulse">_</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
