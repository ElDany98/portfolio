"use client";

import { GitBranch, Globe, Mail, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

const socialLinks = [
  { label: "GitHub", icon: GitBranch, href: "https://github.com/ElDany98" },
  { label: "LinkedIn", icon: Globe, href: "https://linkedin.com/in/danielmeza" },
  { label: "Email", icon: Mail, href: "mailto:daniel@eldanymind.dev" },
  { label: "Telegram", icon: Send, href: "https://t.me/eldany98" },
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const API_URL = "https://portfolio-contact-api.danielmeza127.workers.dev/api/contact";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name") as string,
      email: form.get("email") as string,
      subject: form.get("subject") as string,
      message: form.get("message") as string,
    };

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Error al enviar");
      }

      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Error al enviar mensaje");
    }
  }

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

          {status === "sent" ? (
            <div className="border border-success/30 bg-success/5 rounded-md p-6 text-center">
              <p className="text-success font-medium">Mensaje enviado correctamente</p>
              <p className="text-text-secondary text-sm mt-1">Te responderé a la brevedad</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-1">
                    Nombre
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    minLength={2}
                    className="w-full px-3 py-2 rounded-md border border-border bg-surface text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-action-primary transition-colors text-sm"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-3 py-2 rounded-md border border-border bg-surface text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-action-primary transition-colors text-sm"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-text-secondary mb-1">
                  Asunto
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="w-full px-3 py-2 rounded-md border border-border bg-surface text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-action-primary transition-colors text-sm"
                  placeholder="Opcional"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-1">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  minLength={10}
                  rows={4}
                  className="w-full px-3 py-2 rounded-md border border-border bg-surface text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-action-primary transition-colors text-sm resize-none"
                  placeholder="Tu mensaje (mín 10 caracteres)"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full px-4 py-2 rounded-md bg-action-primary text-white font-medium hover:bg-action-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"
              >
                {status === "sending" ? "Enviando..." : "Enviar mensaje"}
              </button>
              {status === "error" && (
                <p className="text-red-400 text-sm text-center">{errorMsg}</p>
              )}
            </form>
          )}

          <div className="section-divider" />
        </div>
      </div>
    </section>
  );
}
