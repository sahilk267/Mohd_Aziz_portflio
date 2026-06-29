import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, TrendingUp, Clock, Shield, Zap, Users, Calendar } from 'lucide-react';

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

const caseStudies = {
  'infrastructure-optimization': {
    title: 'Infrastructure Optimization for Financial Services',
    client: 'Major Financial Services Company',
    industry: 'Financial Services',
    duration: '8 months',
    teamSize: '6 engineers',
    description: 'Comprehensive infrastructure optimization initiative that reduced costs by 45% while improving performance and reliability.',
    longDescription: `
      This project involved a comprehensive infrastructure optimization initiative for a major financial 
      services company operating across multiple regions. The organization was facing escalating costs, 
      performance issues, and increasing complexity in managing their hybrid cloud environment.
      
      The initiative was executed in multiple phases, starting with a thorough assessment of the existing 
      infrastructure, followed by strategic planning, implementation, and continuous optimization. Special 
      attention was paid to maintaining regulatory compliance and ensuring zero disruption to critical 
      financial services.
      
      The project team worked closely with stakeholders across the organization to understand business 
      requirements and align infrastructure improvements with strategic objectives.
    `,
    challenge: 'The client was facing escalating infrastructure costs, frequent performance issues, and increasing complexity in managing their hybrid cloud environment. Legacy systems were becoming difficult to maintain and posed security risks. The organization needed to modernize while maintaining strict regulatory compliance.',
    solution: 'Implemented a multi-phase optimization strategy including workload right-sizing, automation of routine processes, migration of suitable workloads to cloud, and establishment of comprehensive monitoring and governance frameworks. Established FinOps practices for ongoing cost management.',
    results: [
      { metric: '45%', label: 'Infrastructure cost reduction', icon: TrendingUp },
      { metric: '99.99%', label: 'System uptime achieved', icon: Shield },
      { metric: '60%', label: 'Faster deployments', icon: Clock },
      { metric: '80%', label: 'Reduction in manual tasks', icon: Zap },
    ],
    technologies: [
      { name: 'AWS', purpose: 'Primary cloud platform for workload migration' },
      { name: 'Azure', purpose: 'Secondary cloud for specific workloads' },
      { name: 'Terraform', purpose: 'Infrastructure as Code' },
      { name: 'Ansible', purpose: 'Configuration management' },
      { name: 'Kubernetes', purpose: 'Container orchestration' },
      { name: 'Prometheus', purpose: 'Metrics collection' },
      { name: 'Grafana', purpose: 'Visualization and dashboards' },
    ],
    keyAchievements: [
      'Migrated 150+ workloads to cloud with zero downtime',
      'Implemented automated cost optimization saving $500K annually',
      'Established governance framework adopted organization-wide',
      'Reduced security vulnerabilities by 70%',
    ],
    lessons: [
      'Early stakeholder engagement is critical for success',
      'Incremental migration reduces risk and builds confidence',
      'Automation should be prioritized from the start',
      'Continuous optimization is more effective than one-time fixes',
    ],
  },
  'disaster-recovery': {
    title: 'Disaster Recovery Implementation',
    client: 'E-Commerce Platform',
    industry: 'E-Commerce',
    duration: '6 months',
    teamSize: '4 engineers',
    description: 'Designed and implemented a comprehensive disaster recovery solution reducing RTO from 24 hours to 30 minutes.',
    longDescription: `
      This project involved designing and implementing a comprehensive disaster recovery solution for a 
      high-traffic e-commerce platform. The organization had no formal disaster recovery plan, putting 
      them at significant risk of extended downtime and data loss.
      
      The solution was designed to meet strict Recovery Time Objectives (RTO) and Recovery Point Objectives 
      (RPO) while balancing cost considerations. The implementation included infrastructure changes, 
      data replication strategies, and automated failover mechanisms.
      
      Extensive testing was conducted to ensure the solution worked as expected under various failure 
      scenarios, and comprehensive documentation was created for ongoing operations.
    `,
    challenge: 'The e-commerce platform had no formal disaster recovery plan. A single data center outage could result in 24+ hours of downtime, potentially costing millions in lost revenue and customer trust. The platform processed thousands of transactions per minute during peak hours.',
    solution: 'Implemented a multi-region active-passive architecture with automated failover capabilities, real-time data replication, and comprehensive testing procedures. Established runbooks and conducted regular DR drills to ensure team readiness.',
    results: [
      { metric: '95%', label: 'Faster recovery (RTO)', icon: Clock },
      { metric: 'Zero', label: 'Data loss (RPO)', icon: Shield },
      { metric: '100%', label: 'Automated failover', icon: Zap },
      { metric: '4x', label: 'Yearly DR tests', icon: TrendingUp },
    ],
    technologies: [
      { name: 'AWS', purpose: 'Multi-region infrastructure' },
      { name: 'Route 53', purpose: 'DNS failover' },
      { name: 'RDS', purpose: 'Database replication' },
      { name: 'S3', purpose: 'Cross-region backup' },
      { name: 'CloudFormation', purpose: 'Infrastructure as Code' },
      { name: 'Lambda', purpose: 'Automation scripts' },
    ],
    keyAchievements: [
      'Reduced RTO from 24 hours to 30 minutes',
      'Achieved zero data loss capability',
      'Automated failover requiring no manual intervention',
      'Successfully tested with multiple failure scenarios',
    ],
    lessons: [
      'Regular testing is essential for DR effectiveness',
      'Automation reduces human error during incidents',
      'Documentation must be kept current',
      'DR planning should involve all stakeholders',
    ],
  },
  'security-compliance': {
    title: 'Security & Compliance Overhaul',
    client: 'Healthcare Technology Provider',
    industry: 'Healthcare',
    duration: '10 months',
    teamSize: '8 engineers',
    description: 'Led security transformation achieving SOC 2 Type II compliance and implementing zero-trust architecture.',
    longDescription: `
      This comprehensive security transformation project was undertaken for a healthcare technology provider 
      handling sensitive patient data. The organization needed to achieve SOC 2 Type II compliance to 
      win enterprise clients and expand their business.
      
      The project involved a complete overhaul of security practices, from identity and access management 
      to network security, logging, and monitoring. A zero-trust architecture was implemented to ensure 
      that no user or system was inherently trusted.
      
      The team worked closely with compliance auditors throughout the process to ensure all requirements 
      were met and documentation was properly maintained.
    `,
    challenge: 'The organization needed to achieve SOC 2 Type II compliance to win enterprise clients. Existing security practices were outdated, and the infrastructure lacked proper access controls and monitoring. The healthcare industry has strict data protection requirements.',
    solution: 'Implemented zero-trust security architecture, deployed SIEM solution, established comprehensive logging and monitoring, conducted security awareness training, and developed incident response procedures. Created extensive documentation for audit purposes.',
    results: [
      { metric: 'SOC 2', label: 'Type II Compliant', icon: Shield },
      { metric: 'Zero', label: 'Security breaches', icon: Shield },
      { metric: '100%', label: 'Audit pass rate', icon: TrendingUp },
      { metric: '90%', label: 'Reduction in vulnerabilities', icon: Zap },
    ],
    technologies: [
      { name: 'Okta', purpose: 'Identity and access management' },
      { name: 'CrowdStrike', purpose: 'Endpoint protection' },
      { name: 'Splunk', purpose: 'SIEM and log management' },
      { name: 'Terraform', purpose: 'Security infrastructure as Code' },
      { name: 'AWS', purpose: 'Cloud security services' },
      { name: 'Azure AD', purpose: 'Directory services' },
    ],
    keyAchievements: [
      'Achieved SOC 2 Type II compliance on first audit',
      'Implemented zero-trust architecture across all systems',
      'Reduced security vulnerabilities by 90%',
      'Established 24/7 security monitoring',
    ],
    lessons: [
      'Compliance should be built into processes, not bolted on',
      'Zero-trust requires cultural change, not just technology',
      'Regular training is essential for security awareness',
      'Documentation is critical for audit success',
    ],
  },
};

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const study = caseStudies[params.slug as keyof typeof caseStudies];
  
  if (!study) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: study.title,
    description: study.description,
  };
}

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({
    slug,
  }));
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const study = caseStudies[params.slug as keyof typeof caseStudies];

  if (!study) {
    notFound();
  }

  return (
    <div className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/case-studies"
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Case Studies
        </Link>

        <div className="mb-8">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            {study.industry}
          </span>
          <h1 className="text-4xl font-bold text-foreground mb-4">{study.title}</h1>
          <p className="text-lg text-muted-foreground">{study.description}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 p-6 bg-muted rounded-lg border border-border">
          <div className="text-center">
            <Calendar className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Duration</p>
            <p className="font-semibold text-foreground">{study.duration}</p>
          </div>
          <div className="text-center">
            <Users className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Team Size</p>
            <p className="font-semibold text-foreground">{study.teamSize}</p>
          </div>
          <div className="text-center">
            <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Industry</p>
            <p className="font-semibold text-foreground">{study.industry}</p>
          </div>
          <div className="text-center">
            <TrendingUp className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Client</p>
            <p className="font-semibold text-foreground">{study.client}</p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Project Overview</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground whitespace-pre-line">
            {study.longDescription}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
            <h3 className="text-xl font-bold text-foreground mb-4">The Challenge</h3>
            <p className="text-muted-foreground">{study.challenge}</p>
          </div>
          <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <h3 className="text-xl font-bold text-foreground mb-4">The Solution</h3>
            <p className="text-muted-foreground">{study.solution}</p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Key Results</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {study.results.map((result, index) => (
              <div
                key={index}
                className="text-center p-6 bg-muted rounded-lg border border-border"
              >
                <result.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">{result.metric}</div>
                <div className="text-sm text-muted-foreground">{result.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Technologies Used</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {study.technologies.map((tech, index) => (
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Key Achievements</h3>
            <ul className="space-y-3">
              {study.keyAchievements.map((achievement, index) => (
                <li key={index} className="flex items-start text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Lessons Learned</h3>
            <ul className="space-y-3">
              {study.lessons.map((lesson, index) => (
                <li key={index} className="flex items-start text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                  {lesson}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center p-8 bg-muted rounded-lg border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-4">Have a Similar Challenge?</h2>
          <p className="text-muted-foreground mb-6">
            Let's discuss how I can help your organization achieve similar results.
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