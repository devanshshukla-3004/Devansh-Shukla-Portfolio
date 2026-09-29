import { createPageMetadata } from '@/lib/metadata';
import { AboutSection, JourneyTimeline } from '@/components/portfolio';
import { PageIntro, SectionTitle } from '@/components/ui';
import { Reveal } from '@/components/motion';

export const metadata = createPageMetadata('About', 'About Devansh Shukla and his interests across AI, data, cybersecurity and software engineering.');
export default function AboutPage() { return <main className="inner-page"><PageIntro index="01" title="A curious mind, building with intention." body="I’m Devansh Shukla, a BTech CSE student at Lovely Professional University. My interests span AI, data science, cybersecurity and software engineering."/><section className="inner-section"><AboutSection/><Reveal><div className="editorial-note"><p className="eyebrow">HOW I THINK</p><p>Build with curiosity. Stay thoughtful about the systems behind the experience.</p></div></Reveal><SectionTitle index="02 / THE JOURNEY" title="Learning as I go."/><JourneyTimeline/></section></main>; }
