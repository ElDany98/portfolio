export interface Certification {
  name: string;
  issuer: string;
  year: string;
  imageUrl: string;
  url: string;
  featured: boolean;
}

export const certifications: Certification[] = [
  {
    name: "Ethical Hacker",
    issuer: "Cisco",
    year: "2026",
    imageUrl: "https://images.credly.com/images/242902b5-f527-42ad-865e-977c9e1b5b58/image.png",
    url: "https://www.credly.com/badges/57488470-e0df-4351-96eb-a2f2553b4958/public_url",
    featured: true,
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "AWS",
    year: "2025",
    imageUrl: "https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
    url: "https://www.credly.com/badges/0d4e8228-1d82-4e8a-a3c8-d37ea0092a49/public_url",
    featured: true,
  },
  {
    name: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco",
    year: "2021",
    imageUrl: "https://images.credly.com/images/f4ccdba9-dd65-4349-baad-8f05df116443/CCNASRWE__1_.png",
    url: "https://www.credly.com/badges/35a0922d-aedd-4cad-9ef8-fdeb42f94368/public_url",
    featured: true,
  },
  {
    name: "DevNet Associate",
    issuer: "Cisco",
    year: "2022",
    imageUrl: "https://images.credly.com/images/35985f2b-38d6-4b6f-8e63-42b17d3b5c69/DEVASC_Learning_Badge.png",
    url: "https://www.credly.com/badges/f4ddeff4-a98d-4952-b484-1b5a27cf0f6f/public_url",
    featured: true,
  },
  {
    name: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    year: "2026",
    imageUrl: "https://images.credly.com/images/82b908e1-fdcd-4785-9d32-97f11ccbcf08/image.png",
    url: "https://www.credly.com/badges/2ad854af-f130-42d7-9f61-e90a05e3ffac/public_url",
    featured: true,
  },
  {
    name: "Cybersecurity Defense Analyst Career Path",
    issuer: "Cisco",
    year: "2026",
    imageUrl: "https://images.credly.com/images/a8d6cb9c-e0e3-4705-aab0-160cc9d10a11/blob",
    url: "https://www.credly.com/badges/513b87c3-d080-4ee2-8a7b-e6cfa74a5665/public_url",
    featured: true,
  },
  {
    name: "AI Fundamentals with IBM SkillsBuild",
    issuer: "Cisco",
    year: "2026",
    imageUrl: "https://images.credly.com/images/26c21273-c0ab-485b-98a7-f1212dcb82b8/image.png",
    url: "https://www.credly.com/badges/3cc2959f-bbd5-48b0-9978-c7da7e0bf7f3/public_url",
    featured: false,
  },
  {
    name: "Cyber Threat Management",
    issuer: "Cisco",
    year: "2026",
    imageUrl: "https://images.credly.com/images/5d5ac32b-d239-42b8-9665-8a921dc3ab47/image.png",
    url: "https://www.credly.com/badges/9108567a-2c35-467d-aa8b-e79c25efd9a7/public_url",
    featured: false,
  },
  {
    name: "ISC2 Candidate",
    issuer: "ISC2",
    year: "2025",
    imageUrl: "https://images.credly.com/images/9180921d-4a13-429e-9357-6f9706a554f0/image.png",
    url: "https://www.credly.com/badges/2654b050-1a9c-4abf-ad25-9b57fb8a08b0/public_url",
    featured: false,
  },
  {
    name: "Networking Basics",
    issuer: "Cisco",
    year: "2024",
    imageUrl: "https://images.credly.com/images/5bdd6a39-3e03-4444-9510-ecff80c9ce79/image.png",
    url: "https://www.credly.com/badges/47ee4164-bdc5-4c19-a884-f6ef0d015b82/public_url",
    featured: false,
  },
  {
    name: "Network Technician Career Path",
    issuer: "Cisco",
    year: "2024",
    imageUrl: "https://images.credly.com/images/978f88dc-c247-4093-9d39-6efac3651297/image.png",
    url: "https://www.credly.com/badges/7db0fe8a-ab73-4377-872f-151f74c54471/public_url",
    featured: false,
  },
  {
    name: "Network Support and Security",
    issuer: "Cisco",
    year: "2024",
    imageUrl: "https://images.credly.com/images/a4dd891f-7bf5-4938-8241-50dc81e8cc00/image.png",
    url: "https://www.credly.com/badges/cc550c70-7541-4dec-943f-b40aef0679b3/public_url",
    featured: false,
  },
  {
    name: "Network Addressing and Basic Troubleshooting",
    issuer: "Cisco",
    year: "2024",
    imageUrl: "https://images.credly.com/images/49c099bd-8542-4f48-8c03-f21799dcaf51/image.png",
    url: "https://www.credly.com/badges/977c80bc-2b2c-4e6d-845e-061c33fc9d36/public_url",
    featured: false,
  },
  {
    name: "Networking Devices and Initial Configuration",
    issuer: "Cisco",
    year: "2024",
    imageUrl: "https://images.credly.com/images/88316fe8-5651-4e61-a6be-5be1558f049e/image.png",
    url: "https://www.credly.com/badges/cca5b873-03d6-4b45-83f8-ea07b59144a2/public_url",
    featured: false,
  },
  {
    name: "Cybersecurity Essentials",
    issuer: "Cisco",
    year: "2022",
    imageUrl: "https://images.credly.com/images/054913b2-e271-49a2-a1a4-9bf1c1f9a404/CyberEssentials.png",
    url: "https://www.credly.com/badges/388c67d7-eba4-4996-9981-2e0af909d9c3/public_url",
    featured: false,
  },
  {
    name: "Networking Academy Learn-A-Thon 2023",
    issuer: "Cisco",
    year: "2023",
    imageUrl: "https://images.credly.com/images/b1395248-483c-48cd-b40d-7fe93837c37d/image.png",
    url: "https://www.credly.com/badges/06397685-f32a-47bf-ac3f-747523fc90e3/public_url",
    featured: false,
  },
];
