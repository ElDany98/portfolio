"use client";

import { GitBranch, Mail, Send, Shield } from "lucide-react";
import { useState, type FormEvent } from "react";

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
    </svg>
  );
}

function Spinner() {
  return (
    <svg className="animate-spin w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  );
}

const socialLinks = [
  { label: "GitHub", Icon: GitBranch, href: "https://github.com/ElDany98" },
  { label: "LinkedIn", Icon: LinkedInIcon, href: "https://linkedin.com/in/danielmeza" },
  { label: "Email", Icon: Mail, href: "mailto:daniel@eldanymind.dev" },
  { label: "Telegram", Icon: Send, href: "https://t.me/eldany98" },
];

const inputClass =
  "w-full px-3 py-2 rounded-md border border-border bg-bg-secondary text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-action-primary focus:ring-1 focus:ring-action-primary/20 transition-[border-color,box-shadow] text-sm";

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
    <section id="contact" className="section-padding border-t border-border">
      <div className="container-page">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="font-mono text-xs text-success">$</span>
              <h2 className="text-2xl font-bold tracking-tight">Contacto</h2>
            </div>
            <p className="text-text-secondary">
              Estoy abierto a oportunidades, colaboraciones y consultoría.
            </p>
          </div>

          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            {socialLinks.map(({ label, Icon, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-md border border-border text-text-secondary hover:text-text-primary hover:border-text-tertiary transition-[border-color,color] duration-250 ease-out text-sm"
                aria-label={label}
              >
                <Icon size={16} />
                {label}
              </a>
            ))}
          </div>

          {status === "sent" ? (
            <div className="border border-success/30 bg-success/5 rounded-md p-8 text-center">
              <Shield size={32} className="mx-auto mb-3 text-success" />
              <p className="text-success font-medium">Mensaje enviado correctamente</p>
              <p className="text-text-secondary text-sm mt-1">Te responderé a la brevedad</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-mono text-text-secondary mb-1">
                    <span className="text-success">$</span> nombre
                  </label>
                  <input id="name" name="name" type="text" required minLength={2} className={inputClass} placeholder="Tu nombre" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-mono text-text-secondary mb-1">
                    <span className="text-success">$</span> email
                  </label>
                  <input id="email" name="email" type="email" required className={inputClass} placeholder="tu@email.com" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-mono text-text-secondary mb-1">
                  <span className="text-success">$</span> asunto
                </label>
                <input id="subject" name="subject" type="text" className={inputClass} placeholder="Opcional" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-mono text-text-secondary mb-1">
                  <span className="text-success">$</span> mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  minLength={10}
                  rows={4}
                  className={`${inputClass} resize-none`}
                  placeholder="Tu mensaje (mín 10 caracteres)"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="group w-full px-4 py-3 rounded-md bg-action-primary text-white font-medium hover:bg-action-hover disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-250 ease-out text-sm flex items-center justify-center"
              >
                {status === "sending" ? (
                  <>
                    <Spinner />
                    Enviando...
                  </>
                ) : (
                  <>
                    <span className="font-mono text-xs opacity-70 group-hover:opacity-100 mr-2">&gt;</span>
                    Enviar mensaje
                  </>
                )}
              </button>
              {status === "error" && (
                <p className="text-sm text-center font-mono text-danger">
                  <span className="mr-1">!</span>{errorMsg}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
