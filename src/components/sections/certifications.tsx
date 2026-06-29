"use client";

import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { useState } from "react";
import { certifications } from "@/lib/data/certifications";

export function Certifications() {
  const [showAll, setShowAll] = useState(false);

  const featured = certifications.filter((c) => c.featured);
  const rest = certifications.filter((c) => !c.featured);

  return (
    <section id="certifications" className="py-24">
      <div className="container-page">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-mono text-xs text-success">$</span>
          <h2 className="text-2xl font-bold">Certificaciones</h2>
        </div>
        <p className="text-text-secondary mb-12 max-w-lg ml-4">
          Credenciales verificables que respaldan mi experiencia técnica.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((cert) => (
            <a
              key={cert.name}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-5 rounded-md border border-border bg-bg-secondary card-hover"
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-20 h-20 rounded-md bg-bg-tertiary flex items-center justify-center p-2 overflow-hidden">
                  <img
                    src={cert.imageUrl}
                    alt={cert.name}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div>
                  <span className="text-xs font-mono text-text-tertiary block">{cert.issuer}</span>
                  <h3 className="text-sm font-semibold mt-1">{cert.name}</h3>
                  <span className="text-xs font-mono text-text-tertiary">● {cert.year}</span>
                </div>
              </div>
              <ExternalLink
                size={14}
                className="absolute top-3 right-3 text-text-tertiary opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </a>
          ))}
        </div>

        {rest.length > 0 && (
          <div className="relative mt-6">
            <div
              className={`transition-all duration-500 overflow-hidden ${
                showAll ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
                {rest.map((cert) => (
                  <a
                    key={cert.name}
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-5 rounded-md border border-border bg-bg-secondary card-hover"
                  >
                    <div className="flex flex-col items-center text-center gap-3">
                      <div className="w-20 h-20 rounded-md bg-bg-tertiary flex items-center justify-center p-2 overflow-hidden">
                        <img
                          src={cert.imageUrl}
                          alt={cert.name}
                          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-text-tertiary block">{cert.issuer}</span>
                        <h3 className="text-sm font-semibold mt-1">{cert.name}</h3>
                        <span className="text-xs font-mono text-text-tertiary">● {cert.year}</span>
                      </div>
                    </div>
                    <ExternalLink
                      size={14}
                      className="absolute top-3 right-3 text-text-tertiary opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </a>
                ))}
              </div>
            </div>

            {!showAll && (
              <div className="absolute inset-x-0 bottom-full h-24 bg-gradient-to-t from-bg-primary to-transparent pointer-events-none" />
            )}

            <div className="flex justify-center pt-6">
              <button
                onClick={() => setShowAll(!showAll)}
                className="flex items-center gap-2 px-6 py-3 rounded-md border border-border bg-bg-secondary text-text-secondary hover:text-text-primary hover:border-text-tertiary transition-all duration-250 ease-out text-sm font-mono"
              >
                {showAll ? (
                  <>
                    <ChevronUp size={16} />
                    Mostrar menos
                  </>
                ) : (
                  <>
                    <ChevronDown size={16} />
                    Ver todas ({rest.length} más)
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
