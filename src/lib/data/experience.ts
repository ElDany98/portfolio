export interface Experience {
  period: string;
  title: string;
  company: string;
  description: string;
  type: "work" | "education" | "milestone";
}

export const experiences: Experience[] = [
  {
    period: "Sep 2025 — Presente",
    title: "AWS Cloud Engineer / DevOps",
    company: "Advek S.A. de C.V.",
    description:
      "Arquitectura cloud en AWS, automatización de infraestructura, CI/CD, monitoreo y optimización de recursos. Diseño de soluciones resilientes y escalables alineadas al Well-Architected Framework.",
    type: "work",
  },
  {
    period: "Jun 2023 — Oct 2025",
    title: "Ejecutivo de Administración de Sistemas",
    company: "Nutriwell S.A. de C.V.",
    description:
      "Administración de infraestructura TI, redes corporativas, ciberseguridad, monitoreo con Zabbix, hardening de sistemas y gestión de disponibilidad (99.9%).",
    type: "work",
  },
  {
    period: "Sep 2015 — Nov 2017",
    title: "Auxiliar de TI",
    company: "Dicex S.A. de C.V.",
    description:
      "Soporte técnico, mantenimiento de infraestructura, redes LAN/WAN y atención a usuarios.",
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
