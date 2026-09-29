import './globals.css';
import './polish.css';
import type { Metadata, Viewport } from 'next';
import { Nav, Footer } from '@/components/ui';
import { RouteTransition } from '@/components/route-transition';

export const metadata: Metadata = {
  title: { default: 'Devansh Shukla — Building AI. Securing what I build.', template: '%s — Devansh Shukla' },
  description: 'Devansh Shukla explores AI, machine learning, data science, cybersecurity and software engineering.',
  openGraph: { type: 'website', siteName: 'Devansh Shukla', title: 'Devansh Shukla — Building AI. Securing what I build.', description: 'AI, data science, cybersecurity and software engineering.' },
  twitter: { card: 'summary_large_image', title: 'Devansh Shukla — Building AI. Securing what I build.', description: 'AI, data science, cybersecurity and software engineering.' },
};
export const viewport: Viewport = { themeColor: '#0b0e12', colorScheme: 'dark' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to content</a><Nav/><RouteTransition>{children}</RouteTransition><Footer/></body></html>;
}
