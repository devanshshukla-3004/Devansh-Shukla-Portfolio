'use client';

import Link from 'next/link';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { links } from '@/content/site';

const items = [['About', '/about'], ['Projects', '/projects'], ['Skills', '/skills'], ['Journey', '/journey'], ['Contact', '/contact']];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 28);
    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [open]);
  return <header className={`site-nav ${scrolled ? 'is-scrolled' : ''} ${open ? 'menu-open' : ''}`}><div className="nav-inner">
    <Link href="/" className="brand" aria-label="Devansh Shukla home" onClick={() => setOpen(false)}><span className="monogram">DS</span><span className="brand-name">DEVANSH SHUKLA</span></Link>
    <nav className="desktop-nav" aria-label="Main navigation">{items.map(([label, href]) => <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined}>{label}</Link>)}<a className="nav-github" href={links.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a></nav>
    <button ref={menuButton} className="menu-button" type="button" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-navigation">{open ? <X size={20} /> : <Menu size={20} />}</button>
  </div><AnimatePresence initial={false}>{open && <motion.nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" initial={reduce ? false : { opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={reduce ? undefined : { opacity: 0, height: 0 }} transition={{ duration: reduce ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}>{items.map(([label, href], index) => <motion.div key={href} initial={reduce ? false : { opacity: 0, x: -9 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: reduce ? 0 : index * 0.035 }}><Link href={href} aria-current={pathname === href ? 'page' : undefined} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={14}/></Link></motion.div>)}<motion.div initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: reduce ? 0 : items.length * 0.035 }}><a href={links.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a></motion.div></motion.nav>}</AnimatePresence></header>;
}

export function Button({ href, children, outline = false, external = false }: { href: string; children: React.ReactNode; outline?: boolean; external?: boolean }) {
  const className = `button ${outline ? 'button-outline' : 'button-primary'}`;
  const content = <>{children}<ArrowUpRight size={15} aria-hidden="true" /></>;
  if (external || href.startsWith('mailto:')) return <a href={href} className={className} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>{content}</a>;
  return <Link href={href} className={className}>{content}</Link>;
}

export function PageIntro({ index, title, body }: { index: string; title: string; body: string }) {
  return <div id="main-content" className="page-intro"><p className="eyebrow">{index} <span>—</span> DEVANSH SHUKLA</p><h1>{title}</h1><p className="intro-copy">{body}</p></div>;
}

export function SectionTitle({ index, title, body }: { index: string; title: React.ReactNode; body?: string }) {
  return <div className="section-title"><p className="eyebrow">{index}</p><h2>{title}</h2>{body && <p>{body}</p>}</div>;
}

export function Footer() {
  return <footer className="site-footer"><Link href="/" className="footer-mark">DS</Link><p>© {new Date().getFullYear()} Devansh Shukla</p><p className="footer-tagline">BUILDING AI. SECURING WHAT I BUILD.</p><a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} /></a></footer>;
}
