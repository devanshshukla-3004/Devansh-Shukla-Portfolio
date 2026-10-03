import { ArrowUpRight, Github, BookOpen } from 'lucide-react';
import { createPageMetadata } from '@/lib/metadata';
import { GitHubShowcase } from '@/components/portfolio';
import { PageIntro } from '@/components/ui';

export const metadata = createPageMetadata('GitHub', 'Explore Devansh Shukla’s GitHub profile, profile README and public repositories.');

export default function GitHubPage() {
  return (
    <main className="inner-page">
      <PageIntro
        index="06"
        title="Code, in the open."
        body="Explore my projects across AI, data science, software and cybersecurity—and follow along as I keep building."
      />
      <section className="inner-section">
        <GitHubShowcase />
        <div className="github-profile-links" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1.5rem' }}>
          <a
            href="https://github.com/devanshshukla-3004"
            target="_blank"
            rel="noreferrer"
            className="github-link"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '.6rem' }}
          >
            <Github size={17} /> View GitHub profile <ArrowUpRight size={16} />
          </a>
          <a
            href="https://github.com/devanshshukla-3004/devanshshukla-3004"
            target="_blank"
            rel="noreferrer"
            className="github-link"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '.6rem' }}
          >
            <BookOpen size={17} /> Read my profile README <ArrowUpRight size={16} />
          </a>
        </div>
        <p style={{ marginTop: '1rem', maxWidth: '44rem', opacity: 0.78, lineHeight: 1.7 }}>
          My GitHub profile contains the contribution graph and current activity. I keep this portfolio focused on selected projects and verified work rather than embedding third-party stats cards.
        </p>
      </section>
    </main>
  );
}
