import { createPageMetadata } from '@/lib/metadata';
import { JourneyTimeline } from '@/components/portfolio';
import { PageIntro } from '@/components/ui';
import { journeyIntro } from '@/content/journey';
export const metadata = createPageMetadata('Journey', 'Devansh Shukla’s learning journey in computer science.');
export default function JourneyPage() { return <main className="inner-page"><PageIntro index="05" title={journeyIntro.title} body={journeyIntro.description}/><section className="inner-section"><JourneyTimeline/></section></main>; }
