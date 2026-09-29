import { createPageMetadata } from '@/lib/metadata';
import { PageIntro } from '@/components/ui';
import { links } from '@/content/site';
export const metadata = createPageMetadata('Contact', 'Get in touch with Devansh Shukla.');
export default function ContactPage() { return <main className="inner-page"><PageIntro index="07" title="Start a conversation." body="Open to thoughtful conversations about AI, security, data, software and interesting problems worth solving."/><section className="inner-section"><div className="contact-direct"><p className="eyebrow">ELSEWHERE</p><a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={links.github} target="_blank" rel="noreferrer">GitHub ↗</a></div></section></main>; }
