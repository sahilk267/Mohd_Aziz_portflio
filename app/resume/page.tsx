import { Metadata } from 'next';
import Link from 'next/link';
import { Download, Mail, MapPin, Phone, Briefcase, GraduationCap, Award, Wrench } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Professional resume of Mohd Aziz Shaikh - IT Infrastructure & Network Operations Professional with 10+ years of experience.',
};

const experience = [
  {
    title: 'Senior Infrastructure Engineer',
    company: 'Enterprise Technology Solutions',
    location: 'India',
    period: '2024 - Present',
    description: 'Leading cloud migration initiatives and implementing AI-powered automation solutions across enterprise infrastructure.',
    achievements: [
      'Reduced operational costs by 40% through strategic automation initiatives',
      'Implemented zero-trust security architecture across all environments',
      'Led team of 5 engineers in large-scale infrastructure transformation',
      'Designed and deployed multi-cloud strategy using AWS and Azure',
    ],
  },
  {
    title: 'Infrastructure & Network Operations Lead',
    company: 'Global Tech Services',
    location: 'India',
    period: '2021 - 2024',
    description: 'Managed enterprise infrastructure and network operations for Fortune 500 clients across multiple industries.',
    achievements: [
      'Achieved 99.99% uptime across all client environments',
      'Migrated 200+ servers from on-premise to cloud infrastructure',
      'Implemented comprehensive monitoring and alerting solutions',
      'Reduced incident response time by 60% through automation',
    ],
  },
  {
    title: 'Systems Administrator',
    company: 'DataCenter Solutions Inc.',
    location: 'India',
    period: '2018 - 2021',
    description: 'Administered Linux and Windows server environments, focusing on performance optimization and security.',
    achievements: [
      'Managed 500+ virtual machines across multiple data centers',
      'Implemented configuration management using Ansible',
      'Reduced security vulnerabilities by 80% through hardening initiatives',
      'Automated routine tasks saving 20+ hours per week',
    ],
  },
  {
    title: 'Junior Systems Engineer',
    company: 'Tech Infrastructure Pvt. Ltd.',
    location: 'India',
    period: '2016 - 2018',
    description: 'Supported enterprise infrastructure and provided technical support for critical business systems.',
    achievements: [
      'Provided 24/7 support for mission-critical applications',
      'Assisted in data center migration projects',
      'Developed documentation and standard operating procedures',
    ],
  },
  {
    title: 'IT Support Specialist',
    company: 'Network Solutions India',
    location: 'India',
    period: '2014 - 2016',
    description: 'Provided first-level technical support and maintained IT infrastructure for corporate clients.',
    achievements: [
      'Resolved 95% of tickets within SLA',
      'Implemented help desk ticketing system',
      'Trained junior team members on support procedures',
    ],
  },
];

const education = [
  {
    degree: 'Bachelor of Technology in Computer Science',
    school: 'University of Technology',
    location: 'India',
    period: '2010 - 2014',
    highlights: [
      'Graduated with honors',
      'Specialized in network security and infrastructure',
      'Led university tech club and hackathon teams',
    ],
  },
  {
    degree: 'Higher Secondary Certificate (XII)',
    school: 'State Board of Education',
    location: 'India',
    period: '2008 - 2010',
    highlights: [
      'Science stream with Computer Science',
      'Top 10% in district',
    ],
  },
];

const certifications = [
  {
    name: 'AWS Solutions Architect - Professional',
    issuer: 'Amazon Web Services',
    year: '2023',
  },
  {
    name: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'Cloud Native Computing Foundation',
    year: '2023',
  },
  {
    name: 'Cisco Certified Network Professional (CCNP)',
    issuer: 'Cisco Systems',
    year: '2022',
  },
  {
    name: 'Red Hat Certified Engineer (RHCE)',
    issuer: 'Red Hat',
    year: '2021',
  },
  {
    name: 'Microsoft Certified: Azure Administrator Associate',
    issuer: 'Microsoft',
    year: '2021',
  },
  {
    name: 'ITIL v4 Foundation',
    issuer: 'AXELOS',
    year: '2020',
  },
];

const skills = {
  'Cloud Platforms': ['AWS', 'Microsoft Azure', 'Google Cloud Platform', 'Hybrid Cloud'],
  'Infrastructure': ['Linux (RHEL, Ubuntu, CentOS)', 'Windows Server', 'VMware vSphere', 'Hyper-V', 'Proxmox'],
  'Containerization': ['Docker', 'Kubernetes', 'ECS', 'EKS', 'AKS'],
  'Networking': ['Cisco (Routing & Switching)', 'Firewalls (Palo Alto, Fortinet)', 'VPN', 'Load Balancers', 'DNS/DHCP'],
  'Automation': ['Ansible', 'Terraform', 'Python', 'Bash', 'PowerShell'],
  'CI/CD': ['Jenkins', 'GitLab CI', 'GitHub Actions', 'ArgoCD'],
  'Monitoring': ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog', 'CloudWatch'],
  'Security': ['Zero Trust Architecture', 'SIEM', 'Vulnerability Management', 'Compliance (SOC 2, ISO 27001)'],
  'AI & ML': ['Machine Learning Basics', 'AI-Assisted Development', 'Process Automation', 'Data Analysis'],
};

export default function ResumePage() {
  return (
    <div className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Resume</h1>
            <p className="text-lg text-muted-foreground">
              IT Infrastructure & Network Operations Professional
            </p>
          </div>
          <button className="mt-4 sm:mt-0 inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors">
            <Download className="w-5 h-5 mr-2" />
            Download PDF
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="p-6 bg-muted rounded-lg border border-border mb-6">
              <h2 className="text-xl font-bold text-foreground mb-4">Professional Summary</h2>
              <p className="text-muted-foreground">
                Results-driven IT Infrastructure and Network Operations professional with 10+ years of experience 
                designing, implementing, and managing enterprise-grade technology solutions. Proven track record 
                of reducing operational costs by 40%+ through strategic automation and cloud migration initiatives. 
                Expertise in Linux/Windows systems, cloud platforms (AWS, Azure, GCP), network infrastructure, 
                and AI-assisted solution development. Strong leadership skills with experience managing teams of 
                5+ engineers across complex, multi-stakeholder projects.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-6 bg-muted rounded-lg border border-border">
              <h2 className="text-lg font-bold text-foreground mb-4">Contact</h2>
              <ul className="space-y-3">
                <li className="flex items-center text-muted-foreground">
                  <Mail className="w-5 h-5 mr-3 text-primary" />
                  <a href="mailto:aziz.shaikh@aaditechs.in" className="hover:text-primary transition-colors">
                    aziz.shaikh@aaditechs.in
                  </a>
                </li>
                <li className="flex items-center text-muted-foreground">
                  <Phone className="w-5 h-5 mr-3 text-primary" />
                  <a href="tel:+919773693440" className="hover:text-primary transition-colors">
                    +91 97736 93440
                  </a>
                </li>
                <li className="flex items-center text-muted-foreground">
                  <MapPin className="w-5 h-5 mr-3 text-primary" />
                  India (Open to Remote)
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Briefcase className="w-6 h-6 text-primary mr-3" />
            <h2 className="text-2xl font-bold text-foreground">Professional Experience</h2>
          </div>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-border">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
                <div className="mb-2">
                  <h3 className="text-xl font-semibold text-foreground">{job.title}</h3>
                  <p className="text-primary font-medium">{job.company}</p>
                  <p className="text-sm text-muted-foreground">{job.location} | {job.period}</p>
                </div>
                <p className="text-muted-foreground mb-4">{job.description}</p>
                <ul className="space-y-2">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <div className="flex items-center mb-6">
            <GraduationCap className="w-6 h-6 text-primary mr-3" />
            <h2 className="text-2xl font-bold text-foreground">Education</h2>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="p-6 bg-muted rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                <p className="text-primary font-medium">{edu.school}</p>
                <p className="text-sm text-muted-foreground mb-4">{edu.location} | {edu.period}</p>
                <ul className="space-y-2">
                  {edu.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Award className="w-6 h-6 text-primary mr-3" />
            <h2 className="text-2xl font-bold text-foreground">Certifications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="p-4 bg-muted rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-1">{cert.name}</h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                <p className="text-sm text-primary">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center mb-6">
            <Wrench className="w-6 h-6 text-primary mr-3" />
            <h2 className="text-2xl font-bold text-foreground">Technical Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="p-6 bg-muted rounded-lg border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-background text-foreground text-sm rounded-full border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Interested in working together? Let's discuss how I can help your organization.
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
  );
}
