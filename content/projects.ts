import type { Project } from './types';

/** Add projects here; case-study sections and galleries are optional verified content. */
export const projects: readonly Project[] = [
  {
    slug: 'mitra-ai',
    title: 'MITRA AI',
    category: 'AI · Learning',
    shortDescription: 'An AI-powered student learning platform centered on personalized study, exam preparation, practice, analytics, tutoring and planning.',
    tags: ['Personalized learning', 'AI tutoring', 'Study planning'],
    caseStudy: {
      features: ['Personalized learning', 'Exam preparation and practice', 'Analytics', 'AI tutoring', 'Study planning'],
      media: [],
    },
  },
  {
    slug: 'swarsense',
    title: 'SwarSense',
    category: 'Audio · Analysis',
    shortDescription: 'A voice and audio analysis project focused on detecting fake or synthetic voices.',
    tags: ['Voice analysis', 'Audio', 'Synthetic voice detection'],
    caseStudy: { media: [] },
  },
  {
    slug: 'hr-attrition',
    title: 'HR Employee Attrition and Workforce Analytics Dashboard',
    category: 'Data · Analytics',
    shortDescription: 'An employee attrition and workforce analytics dashboard built around exploring workforce data.',
    tags: ['Employee attrition', 'Workforce analytics', 'Dashboard'],
    caseStudy: { media: [] },
  },
  {
    slug: 'smart-traffic',
    title: 'AI-driven Smart Urban Traffic Management System',
    category: 'AI · Urban systems',
    shortDescription: 'An AI/ML concept for traffic management with a focus on reducing congestion and environmental pollution.',
    tags: ['AI / ML', 'Traffic management', 'Urban systems'],
    caseStudy: { media: [] },
  },
] satisfies readonly Project[];

export type ProjectSlug = (typeof projects)[number]['slug'];
