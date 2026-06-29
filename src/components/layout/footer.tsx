export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container-page">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="font-mono text-sm text-text-tertiary max-w-lg">
            <span className="text-success text-xs">&gt;</span> Transformar incertidumbre en conocimiento,
            conocimiento en control y control en evolución.
          </p>
          <div className="flex items-center gap-4 text-xs text-text-tertiary font-mono">
            <span>&copy; {new Date().getFullYear()} Daniel Meza</span>
            <span className="text-border">|</span>
            <span>Next.js</span>
            <span className="text-border">|</span>
            <span>Cloudflare Pages</span>
            <span className="text-border">|</span>
            <span>Neon DB</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
