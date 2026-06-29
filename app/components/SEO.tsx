'use client';

interface SEOProps {
  title?: string;
  description?: string;
}

export default function SEO({
  title = 'Mohd Aziz Shaikh | IT Infrastructure & Network Operations Professional',
  description = 'Experienced IT Infrastructure & Network Operations Professional with expertise in enterprise infrastructure, network operations, Linux systems, Windows administration, automation workflows, AI-assisted solution development and business platform architecture.',
}: SEOProps) {
  // SEO metadata is handled by Next.js built-in metadata API in layout.tsx
  // This component is kept for potential future use or client-side SEO needs
  return null;
}