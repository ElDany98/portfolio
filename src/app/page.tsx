import { Hero } from "@/components/sections/hero";
import { SkillsGrid } from "@/components/sections/skills-grid";
import { Narrative } from "@/components/sections/narrative";
import { Certifications } from "@/components/sections/certifications";
import { ProjectsSection } from "@/components/sections/projects-section";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <SkillsGrid />
      <Narrative />
      <Certifications />
      <ProjectsSection />
      <Experience />
      <Contact />
    </>
  );
}
