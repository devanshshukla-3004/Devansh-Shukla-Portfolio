import { createPageMetadata } from '@/lib/metadata';
import { Certifications } from '@/components/portfolio';
import { PageIntro } from '@/components/ui';
export const metadata = createPageMetadata('Certifications & education', 'Devansh Shukla’s education and listed certificates.');
export default function CertificationsPage() { return <main className="inner-page"><PageIntro index="04" title="A record of learning." body="Education and certificates across computer science, programming, data science and cybersecurity."/><section className="inner-section"><Certifications/></section></main>; }
