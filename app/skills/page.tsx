import { createPageMetadata } from '@/lib/metadata';
import { SkillsEcosystem } from '@/components/portfolio';
import { PageIntro } from '@/components/ui';
export const metadata = createPageMetadata('Areas of focus', 'AI, machine learning, data science, cybersecurity and software engineering.');
export default function SkillsPage() { return <main className="inner-page"><PageIntro index="03" title="Connected disciplines. A growing practice." body="My work and learning sit across four connected domains. Each offers a different way to understand a problem and build toward a useful answer."/><section className="inner-section"><SkillsEcosystem/></section></main>; }
