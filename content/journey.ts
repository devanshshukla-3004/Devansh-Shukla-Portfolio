import { education } from './site';
import type { JourneyMilestone } from './types';

export const journeyIntro = {
  title: 'Learning across connected fields.',
  description: 'A computer science education alongside projects in personalized learning, audio analysis, workforce analytics and urban traffic.',
} as const;

export const journey = [
  {
    id: 'education',
    label: 'EDUCATION',
    title: education.degree,
    description: education.institution,
  },
  {
    id: 'portfolio',
    label: 'PORTFOLIO',
    title: 'Projects across connected fields',
    description: 'Personalized learning, synthetic-voice analysis, workforce analytics and AI/ML for urban traffic.',
  },
] as const satisfies readonly JourneyMilestone[];
