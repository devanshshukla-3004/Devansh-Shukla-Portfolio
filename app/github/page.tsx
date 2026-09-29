import { createPageMetadata } from '@/lib/metadata';
import { GitHubShowcase } from '@/components/portfolio';
import { PageIntro } from '@/components/ui';
export const metadata = createPageMetadata('GitHub', 'Find Devansh Shukla’s public repositories on GitHub.');
export default function GitHubPage() { return <main className="inner-page"><PageIntro index="06" title="Code, in the open." body="Visit my GitHub profile to see my public work and follow along with what I build next."/><section className="inner-section"><GitHubShowcase/></section></main>; }
