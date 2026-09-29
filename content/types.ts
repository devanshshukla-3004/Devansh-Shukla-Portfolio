/** Shared, local-first content types. Keep optional facts absent until verified. */
export type ExternalUrl = `https://${string}`;

export type ProjectMedia = {
  src: `/media/projects/${string}`;
  kind: 'image' | 'gif' | 'video';
  alt: string;
  caption?: string;
  poster?: `/media/projects/${string}`;
};

export type ProjectCaseStudy = {
  problem?: string;
  solution?: string;
  features?: readonly string[];
  technologies?: readonly string[];
  architecture?: string;
  implementation?: string;
  outcomes?: string;
  notes?: string;
  media: readonly ProjectMedia[];
};

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  category: string;
  tags: readonly string[];
  caseStudy: ProjectCaseStudy;
  githubUrl?: ExternalUrl;
  liveUrl?: ExternalUrl;
};

export type CertificateMedia = {
  src: `/media/certificates/${string}`;
  kind: 'image' | 'document';
  alt: string;
  caption?: string;
};

export type Certification = {
  title: string;
  issuer?: string;
  description?: string;
  media: readonly CertificateMedia[];
  credentialUrl?: ExternalUrl;
  date?: string;
  credentialId?: string;
};

export type JourneyMilestone = {
  id: string;
  label: string;
  title: string;
  description?: string;
  date?: string;
};
