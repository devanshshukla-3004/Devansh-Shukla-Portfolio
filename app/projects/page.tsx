import { createPageMetadata } from '@/lib/metadata';
import { ProjectShowcase } from '@/components/portfolio';
import { PageIntro } from '@/components/ui';

export const metadata = createPageMetadata('Projects', 'Explore Devansh Shukla’s projects across AI, audio analysis, data science and urban systems.');
export default function ProjectsPage() { return <main className="inner-page"><PageIntro index="02" title="Ideas made tangible." body="A growing collection of explorations across intelligent learning, audio analysis, workforce data and urban traffic."/><section className="inner-section"><ProjectShowcase/></section></main>; }
