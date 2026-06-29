export interface Experience {
  period: string;
  title: string;
  company: string;
  description: string;
  type: "work" | "education" | "milestone";
}

export const experiences: Experience[] = [
  {
    period: "2019 — Presente",
    title: "Cloud Architect / Ingeniero TI",
    company: "Advek S.A. de C.V.",
    description:
      "Arquitectura cloud, desarrollo full-stack, automatización, consultoría ERP (Odoo, SAP BO), infraestructura y ciberseguridad.",
    type: "work",
  },
  {
    period: "2022 — 2024",
    title: "DevOps & Automatización",
    company: "Advek S.A. de C.V.",
    description:
      "Implementación de CI/CD, pipelines de despliegue, automatización de infraestructura y migración a cloud.",
    type: "work",
  },
  {
    period: "2019 — 2022",
    title: "Desarrollador Full-Stack",
    company: "Advek S.A. de C.V.",
    description:
      "Sistemas de tickets, dashboards operativos, web apps internas, integración de APIs y bases de datos.",
    type: "work",
  },
  {
    period: "2019",
    title: "CCNA — Cisco Certified",
    company: "Cisco Networking Academy",
    description:
      "Certificación CCNA en rutas, switches, redes empresariales y resolución de problemas de red.",
    type: "education",
  },
  {
    period: "2014 — 2018",
    title: "Ingeniería en TI",
    company: "Instituto Tecnológico de Toluca",
    description:
      "Formación en tecnologías de la información, redes, programación y administración de sistemas.",
    type: "education",
  },
];
