import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

const projects = {
  'enterprise-automation': {
    title: 'Enterprise Automation Platform',
    description: 'Built a comprehensive automation platform that reduced manual IT operations by 70% across multiple departments.',
    longDescription: `
      This project involved designing and implementing a comprehensive enterprise automation platform 
      that transformed how IT operations were conducted across multiple departments. The platform 
      integrated with existing systems and provided a unified interface for managing automated workflows.
      
      Key achievements include the development of custom automation scripts, implementation of 
      configuration management systems, and creation of self-service portals that empowered 
      non-technical users to execute complex operations safely.
      
      The solution was built using modern DevOps practices and incorporated monitoring, logging, 
      and alerting to ensure reliability and traceability of all automated operations.
    `,
    tags: ['Python', 'Ansible', 'Docker', 'CI/CD', 'Terraform'],
    impact: '70% reduction in manual operations',
    duration: '6 months',
    role: 'Lead Infrastructure Engineer',
    challenges: [
      'Integrating with legacy systems that lacked modern APIs',
      'Ensuring security and compliance across all automated workflows',
      'Training team members on new automation tools and practices',
    ],
    solutions: [
      'Developed custom API wrappers and adapters for legacy integration',
      'Implemented role-based access control and audit logging',
      'Created comprehensive documentation and training materials',
    ],
    technologies: [
      { name: 'Python', purpose: 'Core automation scripting and API development' },
      { name: 'Ansible', purpose: 'Configuration management and orchestration' },
      { name: 'Docker', purpose: 'Containerization of automation services' },
      { name: 'Terraform', purpose: 'Infrastructure as Code for platform deployment' },
      { name: 'Jenkins', purpose: 'CI/CD pipeline automation' },
    ],
    results: [
      { metric: '70%', label: 'Reduction in manual operations' },
      { metric: '45%', label: 'Faster deployment times' },
      { metric: '99.9%', label: 'Automation success rate' },
    ],
  },
  'cloud-migration': {
    title: 'Cloud Infrastructure Migration',
    description: 'Led the migration of on-premise infrastructure to AWS, improving scalability and reducing costs.',
    longDescription: `
      This comprehensive cloud migration project involved moving critical business applications 
      and infrastructure from on-premise data centers to AWS cloud. The migration was planned 
      and executed in phases to minimize downtime and business disruption.
      
      The project encompassed re-architecting applications for cloud-native deployment, 
      implementing robust security controls, and establishing operational excellence practices 
      for cloud environments.
      
      Special attention was paid to cost optimization, resulting in significant savings while 
      improving performance and reliability.
    `,
    tags: ['AWS', 'Terraform', 'Kubernetes', 'Monitoring', 'Security'],
    impact: '40% cost reduction, 99.9% uptime',
    duration: '12 months',
    role: 'Cloud Architect',
    challenges: [
      'Complex legacy applications with tight coupling',
      'Data migration with zero tolerance for data loss',
      'Maintaining business continuity during migration',
    ],
    solutions: [
      'Implemented strangler fig pattern for gradual migration',
      'Used AWS DMS and custom scripts for data migration',
      'Established parallel running periods with automated failover',
    ],
    technologies: [
      { name: 'AWS', purpose: 'Primary cloud platform (EC2, RDS, S3, Lambda)' },
      { name: 'Terraform', purpose: 'Infrastructure as Code for all resources' },
      { name: 'Kubernetes', purpose: 'Container orchestration for microservices' },
      { name: 'CloudWatch', purpose: 'Monitoring and alerting' },
      { name: 'AWS IAM', purpose: 'Identity and access management' },
    ],
    results: [
      { metric: '40%', label: 'Infrastructure cost reduction' },
      { metric: '99.9%', label: 'Application uptime' },
      { metric: '3x', label: 'Improvement in scalability' },
    ],
  },
  'ai-monitoring': {
    title: 'AI-Powered Monitoring System',
    description: 'Developed an intelligent monitoring system using machine learning for predictive maintenance.',
    longDescription: `
      This innovative project combined traditional infrastructure monitoring with machine 
      learning capabilities to create a predictive maintenance system. The platform analyzes 
      historical data patterns to predict potential issues before they impact operations.
      
      The system integrates with existing monitoring tools and adds an intelligence layer 
      that continuously learns from infrastructure behavior, improving its predictions over time.
      
      Key features include anomaly detection, capacity planning predictions, and automated 
      remediation suggestions.
    `,
    tags: ['Python', 'ML', 'Grafana', 'Prometheus', 'TensorFlow'],
    impact: '60% faster incident detection',
    duration: '4 months',
    role: 'Senior Engineer',
    challenges: [
      'Collecting and cleaning historical monitoring data',
      'Training accurate ML models with limited failure examples',
      'Integrating ML predictions with existing alerting systems',
    ],
    solutions: [
      'Implemented data pipeline for automated data collection and preprocessing',
      'Used anomaly detection algorithms suitable for imbalanced datasets',
      'Built custom Grafana plugin for ML prediction visualization',
    ],
    technologies: [
      { name: 'Python', purpose: 'ML model development and data processing' },
      { name: 'TensorFlow', purpose: 'Machine learning framework' },
      { name: 'Prometheus', purpose: 'Metrics collection and storage' },
      { name: 'Grafana', purpose: 'Visualization and dashboards' },
      { name: 'Kafka', purpose: 'Real-time data streaming' },
    ],
    results: [
      { metric: '60%', label: 'Faster incident detection' },
      { metric: '35%', label: 'Reduction in false positives' },
      { metric: '80%', label: 'Prediction accuracy' },
    ],
  },
};

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects[params.slug as keyof typeof projects];
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects[params.slug as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return (
    <div className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/projects"
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">{project.title}</h1>
          <p className="text-lg text-muted-foreground mb-6">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-muted text-foreground text-sm rounded-full border border-border"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 p-6 bg-muted rounded-lg border border-border">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Impact</p>
            <p className="text-lg font-semibold text-primary">{project.impact}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Duration</p>
            <p className="text-lg font-semibold text-foreground">{project.duration}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Role</p>
            <p className="text-lg font-semibold text-foreground">{project.role}</p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Project Overview</h2>
          <div className="text-muted-foreground whitespace-pre-line">
            {project.longDescription}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Challenges</h3>
            <ul className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Solutions</h3>
            <ul className="space-y-3">
              {project.solutions.map((solution, index) => (
                <li key={index} className="flex items-start text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                  {solution}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Technologies Used</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.technologies.map((tech, index) => (
              <div
                key={index}
                className="p-4 bg-muted rounded-lg border border-border"
              >
                <h4 className="font-semibold text-foreground mb-1">{tech.name}</h4>
                <p className="text-sm text-muted-foreground">{tech.purpose}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">Results & Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {project.results.map((result, index) => (
              <div
                key={index}
                className="text-center p-6 bg-muted rounded-lg border border-border"
              >
                <div className="text-3xl font-bold text-primary mb-2">{result.metric}</div>
                <div className="text-sm text-muted-foreground">{result.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}