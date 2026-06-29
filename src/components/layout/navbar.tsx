"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Proyectos", href: "#projects" },
  { label: "Certificaciones", href: "#certifications" },
  { label: "Contacto", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-250 ease-out ${
        scrolled ? "glass-nav" : "bg-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between h-16">
        <a
          href="#"
          className="font-mono text-lg font-semibold text-text-primary hover:text-success transition-colors"
        >
          <span className="text-success">&gt;</span> DM
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              <span className="font-mono text-xs text-success opacity-0 group-hover:opacity-100 transition-opacity mr-1">
                $
              </span>
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-success/50 group-hover:w-full transition-all duration-250 ease-out" />
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-text-primary"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-bg-secondary/95 backdrop-blur-md px-4 py-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                onClick={() => setOpen(false)}
              >
                <span className="font-mono text-xs text-success mr-2">$</span>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
