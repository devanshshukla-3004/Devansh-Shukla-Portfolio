import type { Certification } from './types';

/** Add only verified issuer, date, credential and media details. */
export const certifications: readonly Certification[] = [
  { title: 'Ethical Learner’s Python certificate', media: [] },
  { title: 'Cisco certificate', media: [] },
  { title: 'Cybersecurity internship completion certificate', media: [] },
  { title: 'IIT Madras Data Science certificate', media: [] },
  { title: 'IIT Roorkee Cybersecurity workshop certificate', media: [] },
] satisfies readonly Certification[];
