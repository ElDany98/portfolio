const certifications = [
  { name: "AWS Certified Cloud Practitioner", issuer: "AWS", year: "2026", url: "https://www.credly.com/badges/..." },
  { name: "CCNA — Cisco Certified", issuer: "Cisco", year: "2019", url: "https://www.credly.com/badges/..." },
  { name: "ISC2 Candidate", issuer: "ISC2", year: "2026", url: "https://www.credly.com/badges/..." },
  { name: "AWS Developer Associate", issuer: "AWS", year: "En curso", url: "#" },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24">
      <div className="container-page">
        <h2 className="text-2xl font-bold mb-2">Certificaciones</h2>
        <p className="text-text-secondary mb-12 max-w-lg">
          Credenciales verificables que respaldan mi experiencia técnica.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert) => (
            <a
              key={cert.name}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-md border border-border bg-bg-secondary hover:border-text-tertiary transition-colors group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-bg-tertiary flex items-center justify-center text-xs font-mono text-action-primary group-hover:text-action-hover transition-colors">
                  {cert.issuer.slice(0, 2)}
                </div>
                <span className="text-xs font-mono text-text-tertiary">{cert.issuer}</span>
              </div>
              <h3 className="text-sm font-semibold mb-1">{cert.name}</h3>
              <span className={`text-xs font-mono ${cert.year === "En curso" ? "text-warning" : "text-text-tertiary"}`}>
                {cert.year}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
