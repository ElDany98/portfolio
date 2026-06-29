import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold font-mono text-action-primary">404</h1>
        <p className="text-text-secondary">Página no encontrada.</p>
        <Link
          href="/"
          className="inline-flex items-center px-4 py-2 rounded-md border border-border text-sm text-text-secondary hover:text-text-primary transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
