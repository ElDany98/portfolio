export interface Project {
  name: string;
  description: string;
  stack: string[];
  status: "production" | "development" | "designed" | "idea";
  url?: string;
  repo?: string;
}

export const projects: Project[] = [
  {
    name: "ISHO — Status Hogareño",
    description:
      "Indicador de disponibilidad familiar en tiempo real. Cruza presencia de Microsoft Teams + calendario Outlook vía Cloudflare Workers.",
    stack: ["Cloudflare Workers", "TypeScript", "MS Graph API", "Telegram Bot", "PWA"],
    status: "production",
  },
  {
    name: "PassForGrowth",
    description:
      "Gestor de contraseñas zero-knowledge para adultos mayores. Cifrado E2E, WebAuthn (Passkeys), Telegram 2FA.",
    stack: ["React", "Hono.js", "Neon PostgreSQL", "Drizzle ORM", "Cloudflare Pages", "WebAuthn"],
    status: "production",
  },
  {
    name: "vault-agent",
    description:
      "Agente de conocimiento personal vía Telegram. Consulta el vault de Obsidian con IA, captura ideas y genera proyectos.",
    stack: ["Cloudflare Workers", "OpenAI API", "GitHub API", "Telegram Bot", "TypeScript"],
    status: "development",
  },
  {
    name: "Dashboard NOC",
    description:
      "Panel de control unificado para infraestructura TI. Monitoreo centralizado con Meraki, Zabbix y Check Point.",
    stack: ["React", "TypeScript", "Meraki API", "Zabbix API", "Cloudflare Workers", "D1"],
    status: "designed",
  },
  {
    name: "WMS con IA",
    description:
      "Sistema de gestión de almacén con inteligencia artificial para predicción y optimización de inventario.",
    stack: ["AWS Lambda", "Bedrock", "React", "DynamoDB", "API Gateway"],
    status: "development",
  },
  {
    name: "PWA de Empleo",
    description:
      "Aplicación PWA para búsqueda de empleo con filtros inteligentes, desplegada en Cloudflare Pages.",
    stack: ["React", "Vite", "TypeScript", "Cloudflare Pages", "PWA"],
    status: "production",
    url: "https://pwa-de-empleo-con-worker-de.pages.dev",
  },
];
