import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CaseStudy } from '@/components/case-study';
import { projects } from '@/content/projects';
import { createPageMetadata } from '@/lib/metadata';

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(({ slug: projectSlug }) => projectSlug === slug);
  return createPageMetadata(project?.title ?? 'Project not found', project?.shortDescription ?? 'The requested project could not be found.');
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find(({ slug: projectSlug }) => projectSlug === slug);
  if (!project) notFound();
  return <CaseStudy project={project}/>;
}
