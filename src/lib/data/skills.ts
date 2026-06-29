export interface Skill {
  name: string;
  icon: string;
  technologies: string[];
  level: number;
}

export const skillCategories: Skill[] = [
  {
    name: "Cloud",
    icon: "☁️",
    level: 5,
    technologies: ["AWS", "Cloudflare Workers", "Lambda", "API Gateway", "S3", "DynamoDB", "RDS", "Bedrock"],
  },
  {
    name: "Frontend",
    icon: "⚛️",
    level: 4,
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "PWA", "shadcn/ui"],
  },
  {
    name: "Backend",
    icon: "⚙️",
    level: 4,
    technologies: ["Node.js", "Python", ".NET / C#", "Java", "PHP", "Hono.js", "FastAPI"],
  },
  {
    name: "Redes & Seguridad",
    icon: "🌐",
    level: 4,
    technologies: ["Cisco CCNA", "Meraki", "Check Point", "Hardening", "Zero Trust", "Zabbix"],
  },
  {
    name: "IA",
    icon: "🤖",
    level: 3,
    technologies: ["AWS Bedrock", "Claude API", "RAG", "Agentes IA", "Workers AI", "Vectorize"],
  },
  {
    name: "DevOps",
    icon: "🔧",
    level: 4,
    technologies: ["CI/CD", "GitHub Actions", "Drizzle ORM", "Neon DB", "Cloudflare Pages", "Wrangler"],
  },
];
