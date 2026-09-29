import type { Metadata } from 'next';

export function createPageMetadata(title: string, description: string): Metadata {
  const socialTitle = `${title} — Devansh Shukla`;
  return {
    title,
    description,
    openGraph: { type: 'website', siteName: 'Devansh Shukla', title: socialTitle, description },
    twitter: { card: 'summary_large_image', title: socialTitle, description },
  };
}
