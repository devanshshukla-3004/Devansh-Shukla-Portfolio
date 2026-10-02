import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { ProjectSection } from '@/components/portfolio';
import { Button, SectionTitle } from '@/components/ui';
import { Reveal } from '@/components/motion';
import { links } from '@/content/site';
import type { Project } from '@/content/types';

export function CaseStudy({ project }: { project: Project }) {
  const study = project.caseStudy;
  return <main id="main-content" className="inner-page case-study"><div className="case-topline"><Link href="/projects" className="back-link"><ArrowLeft size={15}/> All projects</Link><span className="eyebrow">{project.category}</span></div>
    <Reveal><p className="eyebrow case-eyebrow">PROJECT / {project.slug.toUpperCase()}</p><h1 className={project.title.length > 36 ? 'case-title-long' : undefined}>{project.title}</h1><p className="case-description">{project.shortDescription}</p></Reveal>
    <div className="case-layout"><div className="case-main">
      {study.problem && <Reveal><section className="case-block"><p className="eyebrow">01 / PROBLEM</p><p className="case-body">{study.problem}</p></section></Reveal>}
      {study.solution && <Reveal><section className="case-block"><p className="eyebrow">02 / APPROACH</p><p className="case-body">{study.solution}</p></section></Reveal>}
      {study.features && <Reveal><section className="case-block"><p className="eyebrow">03 / KEY FEATURES</p><ul className="feature-list">{study.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></section></Reveal>}
      {study.technologies && <Reveal><section className="case-block"><p className="eyebrow">TECHNOLOGY</p><div className="tag-list">{study.technologies.map((item) => <span key={item}>{item}</span>)}</div></section></Reveal>}
      {study.architecture && <Reveal><section className="case-block"><p className="eyebrow">ARCHITECTURE</p><p className="case-body">{study.architecture}</p></section></Reveal>}
      {study.implementation && <Reveal><section className="case-block"><p className="eyebrow">IMPLEMENTATION</p><p className="case-body">{study.implementation}</p></section></Reveal>}
      {study.media.map((media) => <figure className="case-visual" key={media.src}>{media.kind === 'video' ? <video src={media.src} poster={media.poster} controls playsInline aria-label={media.alt}/> : <Image src={media.src} alt={media.alt} width={1600} height={900} unoptimized={media.kind === 'gif' || media.src.startsWith('https://')} sizes="(max-width: 800px) 90vw, 760px"/>}{media.caption && <figcaption>{media.caption}</figcaption>}</figure>)}
      {(study.outcomes || study.notes) && <Reveal><section className="case-block"><p className="eyebrow">OUTCOMES & NOTES</p>{study.outcomes && <p className="case-body">{study.outcomes}</p>}{study.notes && <p className="case-body">{study.notes}</p>}</section></Reveal>}
      {!study.problem && !study.solution && !study.implementation && !study.architecture && study.media.length === 0 && !study.outcomes && !study.notes && <Reveal><section className="case-block case-note"><p className="eyebrow">PROJECT NOTES</p><p>Additional implementation details, architecture, visuals, demos and outcomes will be added as verified project information becomes available.</p></section></Reveal>}
    </div><aside className="case-aside"><p className="eyebrow">AREAS</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="case-aside-links"><p className="eyebrow">PROJECT LINKS</p>{project.githubUrl ? <a href={project.githubUrl} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14}/></a> : <p className="case-placeholder">Repository link not provided.</p>}{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={14}/></a>}{project.videoUrl && <a href={project.videoUrl} target="_blank" rel="noreferrer">Video walkthrough <ArrowUpRight size={14}/></a>}</div><div className="case-aside-links"><p className="eyebrow">ELSEWHERE</p><a href={links.github} target="_blank" rel="noreferrer">GitHub profile <ArrowUpRight size={14}/></a></div></aside></div>
    <div className="case-next"><SectionTitle index="NEXT / SELECTED WORK" title="Keep exploring."/><ProjectSection compact exclude={project.slug}/></div><div className="case-cta"><Button href="/contact">Discuss this project</Button></div>
  </main>;
}
