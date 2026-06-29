export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container-page">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="font-mono text-sm text-text-tertiary">
            &ldquo;Transformar incertidumbre en conocimiento, conocimiento en control y control en evolución.&rdquo;
          </p>
          <p className="text-xs text-text-tertiary">
            &copy; {new Date().getFullYear()} Daniel Meza. Construido con Next.js &middot; Cloudflare Pages &middot; Neon DB
          </p>
        </div>
      </div>
    </footer>
  );
}
