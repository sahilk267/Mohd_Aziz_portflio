import { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Linkedin, Github, MapPin, Briefcase, GraduationCap, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Mohd Aziz Shaikh - IT Infrastructure & Network Operations Professional with expertise in automation and AI-assisted solutions.',
};

const skills = {
  infrastructure: [
    'Linux Administration (RHEL, Ubuntu, CentOS)',
    'Windows Server (2016, 2019, 2022)',
    'VMware vSphere & Hyper-V',
    'Docker & Kubernetes',
    'Terraform & CloudFormation',
  ],
  networking: [
    'Cisco Routing & Switching',
    'Firewall Configuration (Palo Alto, Fortinet)',
    'VPN & Remote Access Solutions',
    'Network Monitoring & Analysis',
    'DNS, DHCP, Active Directory',
  ],
  cloud: [
    'AWS (EC2, RDS, S3, Lambda, ECS)',
    'Microsoft Azure',
    'Google Cloud Platform',
    'Cloud Migration & Optimization',
    'Hybrid Cloud Architectures',
  ],
  automation: [
    'Python & Bash Scripting',
    'Ansible & Puppet',
    'Jenkins & GitLab CI',
    'GitHub Actions',
    'Infrastructure as Code',
  ],
  ai: [
    'AI-Assisted Development',
    'Machine Learning Fundamentals',
    'Process Automation',
    'Data Analysis & Visualization',
    'LLM Integration',
  ],
};

const certifications = [
  {
    name: 'AWS Solutions Architect - Professional',
    issuer: 'Amazon Web Services',
    year: '2023',
  },
  {
    name: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'CNCF',
    year: '2023',
  },
  {
    name: 'Cisco Certified Network Professional (CCNP)',
    issuer: 'Cisco',
    year: '2022',
  },
  {
    name: 'Red Hat Certified Engineer (RHCE)',
    issuer: 'Red Hat',
    year: '2021',
  },
  {
    name: 'ITIL v4 Foundation',
    issuer: 'AXELOS',
    year: '2020',
  },
];

export default function AboutPage() {
  return (
    <div className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">About Me</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-6">
                  I am an IT Infrastructure and Network Operations professional with over 10 years of experience 
                  in designing, implementing, and managing enterprise-grade technology solutions. My expertise 
                  spans across Linux and Windows systems, network infrastructure, cloud platforms, and automation 
                  workflows.
                </p>
                <p className="mb-6">
                  Throughout my career, I have successfully led infrastructure transformations, cloud migrations, 
                  and automation initiatives for organizations across various industries. I have a proven track 
                  record of reducing operational costs while improving system reliability and performance.
                </p>
                <p className="mb-6">
                  With the rapid evolution of AI and machine learning, I have embraced these technologies to 
                  enhance my work in IT operations. I leverage AI-assisted development tools and techniques to 
                  build scalable business platforms, streamline operations, and deliver solutions that drive 
                  measurable business value.
                </p>
                <p>
                  My approach combines deep technical expertise with strategic thinking, enabling me to bridge 
                  the gap between complex infrastructure requirements and business objectives. I am passionate 
                  about creating robust, secure, and efficient technology environments that empower organizations 
                  to achieve their goals.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-muted rounded-lg border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">Quick Info</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-muted-foreground">
                    <MapPin className="w-5 h-5 mr-3 text-primary" />
                    India
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <Briefcase className="w-5 h-5 mr-3 text-primary" />
                    10+ Years Experience
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <GraduationCap className="w-5 h-5 mr-3 text-primary" />
                    B.Tech Computer Science
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-muted rounded-lg border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">Connect</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="mailto:aziz.shaikh@example.com"
                      className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="w-5 h-5 mr-3" />
                      aziz.shaikh@example.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com/in/mohdazizshaikh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="w-5 h-5 mr-3" />
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/mohdazizshaikh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-5 h-5 mr-3" />
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="bg-muted rounded-lg p-6 border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-4 capitalize">
                    {category === 'ai' ? 'AI & Automation' : category}
                  </h3>
                  <ul className="space-y-2">
                    {items.map((skill, index) => (
                      <li key={index} className="flex items-center text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-start p-6 bg-muted rounded-lg border border-border"
                >
                  <Award className="w-8 h-8 text-primary mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{cert.name}</h3>
                    <p className="text-muted-foreground">{cert.issuer}</p>
                    <p className="text-sm text-primary">{cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Let's Work Together</h2>
            <p className="text-muted-foreground mb-8">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}