'use client';

export default function StructuredData() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mohd Aziz Shaikh',
    jobTitle: 'IT Infrastructure & Network Operations Professional',
    description: 'Experienced IT Infrastructure & Network Operations Professional with expertise in enterprise infrastructure, network operations, Linux systems, Windows administration, automation workflows, AI-assisted solution development and business platform architecture.',
    url: 'https://mohdazizshaikh.github.io',
    email: 'mailto:aziz.shaikh@example.com',
    sameAs: [
      'https://linkedin.com/in/mohdazizshaikh',
      'https://github.com/mohdazizshaikh',
    ],
    knowsAbout: [
      'IT Infrastructure',
      'Network Operations',
      'Linux Administration',
      'Windows Server',
      'Cloud Computing',
      'AWS',
      'Azure',
      'Google Cloud',
      'Automation',
      'DevOps',
      'Kubernetes',
      'Docker',
      'Terraform',
      'Ansible',
      'Python',
      'AI-Assisted Development',
      'Machine Learning',
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Senior Infrastructure Engineer',
      occupationCategory: '15-1244.00', // Network and Computer Systems Administrators
      skills: 'IT Infrastructure, Cloud Computing, Automation, DevOps',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Mohd Aziz Shaikh Portfolio',
    url: 'https://mohdazizshaikh.github.io',
    description: 'Professional portfolio of Mohd Aziz Shaikh - IT Infrastructure & Network Operations Professional',
    author: {
      '@type': 'Person',
      name: 'Mohd Aziz Shaikh',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}