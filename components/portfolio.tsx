'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';
import { ArrowDown, ArrowUpRight, AudioLines, BrainCircuit, ChartNoAxesCombined, ChevronRight, Code2, Github, Layers3, ShieldCheck, Sparkles } from 'lucide-react';
import { certifications } from '@/content/certifications';
import { journey } from '@/content/journey';
import { projects } from '@/content/projects';
import { education, links, skills } from '@/content/site';
import { Button, SectionTitle } from '@/components/ui';
import { Item, Reveal, Stagger } from '@/components/motion';

export function Hero() {
  const reduce = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 28]);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [3.5, -3.5]), { stiffness: 90, damping: 22, mass: 0.55 });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-5, 5]), { stiffness: 90, damping: 22, mass: 0.55 });
  const handlePortraitPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (reduce || event.pointerType !== 'mouse') return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };
  const resetPortraitPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };
  return <section ref={heroRef} className="hero" aria-labelledby="hero-title"><div className="hero-grid" aria-hidden="true"/><div className="hero-orb hero-orb-one" aria-hidden="true"/><div className="hero-orb hero-orb-two" aria-hidden="true"/><div className="hero-atmosphere" aria-hidden="true"/>
    <div className="hero-layout"><div className="hero-copy"><motion.p className="eyebrow" initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12, duration: 0.65 }}>AI · DATA · SECURITY · SOFTWARE</motion.p>
      <motion.h1 id="hero-title" initial={reduce ? false : 'hidden'} animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.14, delayChildren: 0.18 } } }}><motion.span className="hero-line" variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} transition={{ duration: reduce ? 0 : 0.85, ease: [0.22, 1, 0.36, 1] }}>Building <em>AI.</em></motion.span><motion.span className="hero-line" variants={{ hidden: { opacity: 0, y: reduce ? 0 : '72%' }, show: { opacity: 1, y: 0 } }} transition={{ duration: reduce ? 0 : 0.85, ease: [0.22, 1, 0.36, 1] }}>Securing what</motion.span><motion.span className="hero-line hero-line-muted" variants={{ hidden: { opacity: 0, y: reduce ? 0 : '72%' }, show: { opacity: 1, y: 0 } }} transition={{ duration: reduce ? 0 : 0.85, ease: [0.22, 1, 0.36, 1] }}>I build.</motion.span></motion.h1>
      <motion.p className="hero-description" initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduce ? 0 : 0.76, duration: 0.65 }}>I’m Devansh Shukla. I build at the intersection of intelligent systems, data and cybersecurity.</motion.p>
      <motion.div className="hero-actions" initial={reduce ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduce ? 0 : 0.94, duration: 0.55 }}><Button href="/projects">Explore my work</Button><Button href="/about" outline>More about me</Button></motion.div>
      <motion.div className="hero-index" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: reduce ? 0 : 1.15 }}>01 <span /> SELECTED WORK</motion.div>
    </div><motion.div className="portrait-wrap" style={{ y: portraitY }} initial={reduce ? false : { opacity: 0, scale: 0.96, x: 24 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ delay: 0.38, duration: 1.1, ease: [0.22, 1, 0.36, 1] }} onPointerMove={handlePortraitPointerMove} onPointerLeave={resetPortraitPointer}><motion.div className="portrait-depth" style={{ rotateX, rotateY, transformPerspective: 1200 }}><div className="portrait-aura" aria-hidden="true"/><div className="portrait-architecture" aria-hidden="true"/><div className="portrait-orbit" aria-hidden="true"/><div className="portrait-frame"><Image src="/images/devansh-portrait.png" alt="Devansh Shukla, software and AI student" fill priority sizes="(max-width: 640px) 86vw, (max-width: 900px) 42vw, 38vw" className="portrait-image"/><div className="portrait-caption"><span><small>BASED IN</small>India</span><span className="portrait-caption-right"><small>FOCUS</small>AI · Security</span></div></div><span className="portrait-coordinate" aria-hidden="true">DS — 01</span></motion.div></motion.div></div>
    <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></a>
  </section>;
}

export function ProjectCard({ project, index = 0 }: { project: (typeof projects)[number]; index?: number }) {
  const icon = index === 1 ? <AudioLines size={19}/> : index === 2 ? <ChartNoAxesCombined size={19}/> : index === 3 ? <Layers3 size={19}/> : <BrainCircuit size={19}/>;
  return <Link href={`/projects/${project.slug}`} className={`project-card project-card-${index}`}><div className="project-card-top"><span className="project-index">{String(index + 1).padStart(2, '0')} <span>/</span> {String(projects.length).padStart(2, '0')}</span><span className="project-icon" aria-hidden="true">{icon}</span></div><div className="project-copy"><p className="eyebrow">{project.category}</p><h3>{project.title}</h3><p className="project-description">{project.shortDescription}</p></div><div className="project-card-meta"><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><span className="project-open">Explore case study <ArrowUpRight size={15}/></span></div></Link>;
}

export function ProjectShowcase({ limit, exclude }: { limit?: number; exclude?: string }) {
  const available = projects.filter(({ slug }) => slug !== exclude);
  const shown = limit ? available.slice(0, limit) : available;
  return <Stagger className="project-grid">{shown.map((project, i) => <Item key={project.slug}><ProjectCard project={project} index={i}/></Item>)}</Stagger>;
}

export function AboutSection({ compact = false }: { compact?: boolean }) {
  const values = [
    { icon: <Sparkles size={20}/>, title: 'Intelligent systems', detail: 'AI experiences designed to make complex work more useful and personal.' },
    { icon: <ShieldCheck size={20}/>, title: 'Security by design', detail: 'Thinking about how systems behave and fail as part of how they are built.' },
    { icon: <Code2 size={20}/>, title: 'Thoughtful engineering', detail: 'Turning open-ended questions into clear, considered digital experiences.' },
  ];
  return <section className="section-wrap about-section" id="about"><SectionTitle index="01 / ABOUT" title={<>Curious by default.<br/><span>Serious about building.</span></>} body="My interests connect AI, data, cybersecurity and software engineering. I enjoy exploring problems from the first question through to a working idea."/><div className="value-grid">{values.map((item, i) => <Reveal key={item.title} delay={i * 0.08}><article className="value-card"><span className="value-icon">{item.icon}</span><h3>{item.title}</h3><p>{item.detail}</p></article></Reveal>)}</div>{compact && <div className="section-link"><Link href="/about">A little more about me <ArrowUpRight size={15}/></Link></div>}</section>;
}

export function ProjectSection({ compact = false, exclude }: { compact?: boolean; exclude?: string }) {
  return <section className="section-wrap work-section" id="work"><SectionTitle index="02 / SELECTED WORK" title={<>Ideas made<br/><em>tangible.</em></>} body="A selection of explorations across learning, audio analysis, workforce data and urban systems."/><ProjectShowcase limit={compact ? 4 : undefined} exclude={exclude}/><div className="section-link"><Link href="/projects">Browse all projects <ArrowUpRight size={15}/></Link></div></section>;
}

export function SkillsEcosystem() {
  const [selected, setSelected] = useState(0);
  const current = skills[selected];
  return <section className="section-wrap ecosystem-section" id="skills"><SectionTitle index="03 / AREAS OF FOCUS" title={<>A broad lens.<br/><span>A considered craft.</span></>} body="Four connected domains shape the questions I ask and the systems I explore."/><div className="ecosystem-grid" aria-label="Choose an area of focus">{skills.map((skill, i) => <Reveal key={skill.name} delay={i * 0.07}><button type="button" aria-pressed={selected === i} className={`ecosystem-item ecosystem-item-${i} ${selected === i ? 'is-active' : ''}`} onClick={() => setSelected(i)}><span className="ecosystem-number">0{i + 1}</span><span className="ecosystem-item-name">{skill.name}</span><span className="ecosystem-rule"/></button></Reveal>)}</div><div className="ecosystem-detail" aria-live="polite" aria-atomic="true"><span className="eyebrow">CURRENT LENS · 0{selected + 1}</span><p>{current.detail}</p></div></section>;
}

export function Certifications() {
  return <section className="section-wrap credentials-section" id="certifications"><SectionTitle index="04 / LEARNING" title="Credentials & curiosity." body="A record of learning across programming, data science and cybersecurity."/><div className="credentials-layout"><div className="education-card"><p className="eyebrow">EDUCATION</p><h3>{education.degree}</h3><p>{education.institution}</p><span className="education-seal">DS</span></div><div className="cert-list">{certifications.map((certificate, i) => <Reveal key={certificate.title} delay={i * 0.035}><div className="cert-row"><span className="cert-number">{String(i + 1).padStart(2, '0')}</span><span>{certificate.title}</span><ChevronRight size={15}/></div>{certificate.media.map((media) => <figure className="certificate-media" key={media.src}>{media.kind === 'image' ? <Image src={media.src} alt={media.alt} width={1200} height={850} sizes="(max-width: 800px) 90vw, 600px"/> : <a href={media.src} target="_blank" rel="noreferrer">{media.caption ?? media.alt} <ArrowUpRight size={14}/></a>}{media.caption && media.kind === 'image' && <figcaption>{media.caption}</figcaption>}</figure>)}</Reveal>)}</div></div></section>;
}

export function ContactSection() {
  return <section className="contact-section" id="contact"><div className="contact-glow"/><span className="contact-index-mark" aria-hidden="true">DS</span><Reveal><p className="eyebrow">05 / CONTACT</p><h2>Let’s build<br/><em>something useful.</em></h2><p className="contact-copy">Open to thoughtful conversations about AI, security, data, software and the problems in between.</p><div className="contact-actions"><Button href={links.linkedin} external>Connect on LinkedIn</Button><Button href={links.github} outline external>GitHub</Button></div></Reveal></section>;
}

export function JourneyTimeline() {
  return <div className="timeline">{journey.map((milestone, i) => <Reveal key={milestone.id} delay={i * 0.1}><article className="timeline-item"><span className="timeline-dot"/><p className="eyebrow">{milestone.label}</p><h2>{milestone.title}</h2>{milestone.description && <p>{milestone.description}</p>}</article></Reveal>)}</div>;
}

export function GitHubShowcase() {
  return <div className="github-panel"><div className="github-mark"><Github size={23}/></div><div><p className="eyebrow">OPEN SOURCE · BUILDS · EXPLORATIONS</p><h2>Find me on GitHub.</h2><p>Browse my public work and follow along as I keep building.</p></div><a href={links.github} target="_blank" rel="noreferrer" className="github-link" aria-label="Visit Devansh Shukla on GitHub"><ArrowUpRight size={20}/></a></div>;
}
