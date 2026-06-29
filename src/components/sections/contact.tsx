import { GitBranch, Globe, Mail, Send } from "lucide-react";

const socialLinks = [
  { label: "GitHub", icon: GitBranch, href: "https://github.com/ElDany98" },
  { label: "LinkedIn", icon: Globe, href: "https://linkedin.com/in/danielmeza" },
  { label: "Email", icon: Mail, href: "mailto:daniel@eldanymind.dev" },
  { label: "Telegram", icon: Send, href: "https://t.me/eldany98" },
];

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container-page">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2">Contacto</h2>
          <p className="text-text-secondary mb-12">
            Estoy abierto a oportunidades, colaboraciones y consultoría.
          </p>

          <div className="flex justify-center gap-6 mb-12">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-md border border-border text-text-secondary hover:text-text-primary hover:border-text-tertiary transition-colors text-sm"
                aria-label={link.label}
              >
                <link.icon size={18} />
                {link.label}
              </a>
            ))}
          </div>

          <div className="section-divider" />
        </div>
      </div>
    </section>
  );
}
