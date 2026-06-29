export interface Skill {
  name: string;
  icon: string;
  technologies: string[];
}

export const skillCategories: Skill[] = [
  {
    name: "Cloud",
    icon: "☁️",
    technologies: ["AWS", "Cloudflare Workers", "Lambda", "API Gateway", "S3", "DynamoDB", "RDS", "Bedrock"],
  },
  {
    name: "Frontend",
    icon: "⚛️",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "PWA", "shadcn/ui"],
  },
  {
    name: "Backend",
    icon: "⚙️",
    technologies: ["Node.js", "Python", ".NET / C#", "Java", "PHP", "Hono.js", "FastAPI"],
  },
  {
    name: "Redes & Seguridad",
    icon: "🌐",
    technologies: ["Cisco CCNA", "Meraki", "Check Point", "Hardening", "Zero Trust", "Zabbix"],
  },
  {
    name: "IA",
    icon: "🤖",
    technologies: ["AWS Bedrock", "Claude API", "RAG", "Agentes IA", "Workers AI", "Vectorize"],
  },
  {
    name: "DevOps",
    icon: "🔧",
    technologies: ["CI/CD", "GitHub Actions", "Drizzle ORM", "Neon DB", "Cloudflare Pages", "Wrangler"],
  },
];
