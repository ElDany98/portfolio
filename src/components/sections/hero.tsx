export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="container-page w-full">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-xs font-mono text-success">
              <span className="w-2 h-2 rounded-full bg-success" />
              Disponible para oportunidades
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none">
              Daniel Meza
            </h1>

            <p className="text-xl md:text-2xl text-text-secondary">
              Cloud Architect &middot; Platform Engineer &middot; AI Engineering
            </p>

            <p className="text-base text-text-secondary max-w-xl leading-relaxed">
              De infraestructura a IA. Construyo sistemas que transforman incertidumbre en control.
            </p>

            <div className="flex gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 rounded-md bg-action-primary text-white text-sm font-medium hover:bg-action-hover transition-colors"
              >
                Ver proyectos
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-md border border-border text-text-secondary text-sm font-medium hover:border-text-tertiary hover:text-text-primary transition-colors"
              >
                Contactar
              </a>
            </div>
          </div>

          <div className="hidden md:block w-64 h-64 relative">
            <div className="absolute inset-0 border border-border rounded-lg" />
            <div className="absolute top-4 left-4 right-4 bottom-4 border border-border/50 rounded-lg" />
            <div className="absolute top-8 left-8 right-8 bottom-8 bg-gradient-to-br from-action-primary/10 to-transparent rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
