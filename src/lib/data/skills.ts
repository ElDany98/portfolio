export interface Skill {
  name: string;
  icon: string;
  technologies: string[];
  level: number;
}

export const skillCategories: Skill[] = [
  {
    name: "Cybersecurity · Blue Team",
    icon: "🔒",
    level: 4,
    technologies: ["CIA Triad", "Hardening", "Network Security", "Access Control", "Segmentation", "Firewalls", "Threat Detection", "Incident Response", "Check Point"],
  },
  {
    name: "Automation · DevNet",
    icon: "🤖",
    level: 4,
    technologies: ["REST APIs", "JSON", "Python", "Git", "CI/CD", "Infrastructure APIs", "Meraki API", "GitHub Actions", "Cloudflare Workers"],
  },
  {
    name: "Cloud & AI Foundations",
    icon: "☁️",
    level: 3,
    technologies: ["AWS", "VPC", "IAM", "Lambda", "CloudWatch", "Edge Serverless", "AI Fundamentals", "IBM SkillsBuild", "Responsible AI"],
  },
  {
    name: "Observability · NOC",
    icon: "📡",
    level: 4,
    technologies: ["Zabbix", "CloudWatch", "Metrics", "Logs", "Alerting", "Dashboards", "Availability", "Capacity Signals", "Operational Evidence"],
  },
  {
    name: "Network Engineering · Cisco",
    icon: "🌐",
    level: 5,
    technologies: ["CCNA SRWE", "Switching", "Routing", "VLANs", "Trunks", "Inter-VLAN", "Wireless LAN", "STP/RSTP", "LAN/WAN"],
  },
  {
    name: "Network Operations · Support",
    icon: "🛠️",
    level: 5,
    technologies: ["Troubleshooting L2/L3", "Cisco IOS", "IP Addressing", "DNS/DHCP", "Meraki", "Ruijie", "Documentation", "Escalation", "Incident Closure"],
  },
  {
    name: "Systems Administration · Linux",
    icon: "⚙️",
    level: 4,
    technologies: ["Linux Essentials", "Shell", "Users & Permissions", "File Systems", "Services", "Windows Server", "Active Directory", "Hyper-V", "VMware"],
  },
];
