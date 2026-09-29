import { AboutSection, Certifications, ContactSection, Hero, ProjectSection, SkillsEcosystem } from '@/components/portfolio';

export default function Home() {
  return <main id="main-content"><Hero/><AboutSection compact/><ProjectSection compact/><SkillsEcosystem/><Certifications/><ContactSection/></main>;
}
