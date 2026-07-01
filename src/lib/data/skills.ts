export interface Skill {
  name: string;
  icon: string;
  technologies: string[];
  level: number;
}

export const skillCategories: Skill[] = [
  {
    name: "Cloud Architecture · AWS",
    icon: "☁️",
    level: 4,
    technologies: ["EC2", "S3", "VPC", "IAM", "RDS", "Route 53", "CloudWatch", "ELB", "Lambda", "Bedrock"],
  },
  {
    name: "Network Engineering",
    icon: "🌐",
    level: 5,
    technologies: ["Cisco CCNA", "Meraki", "Ruijie", "VLANs", "BGP", "OSPF", "LAN/WAN", "Wireless", "Segmentación"],
  },
  {
    name: "Ciberseguridad · Blue Team",
    icon: "🔒",
    level: 4,
    technologies: ["Hardening", "Seguridad Perimetral", "Control de Acceso", "ISO 27001", "PCI DSS", "Zero Trust", "Check Point"],
  },
  {
    name: "Systems Administration",
    icon: "⚙️",
    level: 4,
    technologies: ["Linux", "Windows Server", "VMware", "Docker", "Alta Disponibilidad", "Infraestructura Crítica"],
  },
  {
    name: "Monitoreo & Observabilidad",
    icon: "📡",
    level: 4,
    technologies: ["Zabbix", "CloudWatch", "Alertamiento", "Métricas", "Dashboards", "Disponibilidad"],
  },
  {
    name: "Automatización Operativa",
    icon: "🤖",
    level: 3,
    technologies: ["IaC", "CI/CD", "DevOps", "AWS", "Cloudflare Workers", "GitHub Actions"],
  },
];
