import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Clock, Shield, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Detailed case studies showcasing real-world infrastructure solutions and their business impact.',
};

const caseStudies = [
  {
    id: 'infrastructure-optimization',
    title: 'Infrastructure Optimization for Financial Services',
    client: 'Major Financial Services Company',
    industry: 'Financial Services',
    duration: '8 months',
    teamSize: '6 engineers',
    description: 'Comprehensive infrastructure optimization initiative that reduced costs by 45% while improving performance and reliability for a major financial services company operating across multiple regions.',
    challenge: 'The client was facing escalating infrastructure costs, frequent performance issues, and increasing complexity in managing their hybrid cloud environment. Legacy systems were becoming difficult to maintain and posed security risks.',
    solution: 'Implemented a multi-phase optimization strategy including workload right-sizing, automation of routine processes, migration of suitable workloads to cloud, and establishment of comprehensive monitoring and governance frameworks.',
    results: [
      { metric: '45%', label: 'Infrastructure cost reduction', icon: TrendingUp },
      { metric: '99.99%', label: 'System uptime achieved', icon: Shield },
      { metric: '60%', label: 'Faster deployments', icon: Clock },
      { metric: '80%', label: 'Reduction in manual tasks', icon: Zap },
    ],
    technologies: ['AWS', 'Azure', 'Terraform', 'Ansible', 'Kubernetes', 'Prometheus', 'Grafana'],
    tags: ['Cost Optimization', 'Cloud Migration', 'Automation', 'Financial Services'],
  },
  {
    id: 'disaster-recovery',
    title: 'Disaster Recovery Implementation',
    client: 'E-Commerce Platform',
    industry: 'E-Commerce',
    duration: '6 months',
    teamSize: '4 engineers',
    description: 'Designed and implemented a comprehensive disaster recovery solution reducing Recovery Time Objective (RTO) from 24 hours to 30 minutes for a high-traffic e-commerce platform.',
    challenge: 'The e-commerce platform had no formal disaster recovery plan. A single data center outage could result in 24+ hours of downtime, potentially costing millions in lost revenue and customer trust.',
    solution: 'Implemented a multi-region active-passive architecture with automated failover capabilities, real-time data replication, and comprehensive testing procedures. Established runbooks and conducted regular DR drills.',
    results: [
      { metric: '95%', label: 'Faster recovery (RTO)', icon: Clock },
      { metric: 'Zero', label: 'Data loss (RPO)', icon: Shield },
      { metric: '100%', label: 'Automated failover', icon: Zap },
      { metric: '4x', label: 'Yearly DR tests', icon: TrendingUp },
    ],
    technologies: ['AWS', 'Route 53', 'RDS', 'S3', 'CloudFormation', 'Lambda'],
    tags: ['Disaster Recovery', 'High Availability', 'E-Commerce', 'AWS'],
  },
  {
    id: 'security-compliance',
    title: 'Security & Compliance Overhaul',
    client: 'Healthcare Technology Provider',
    industry: 'Healthcare',
    duration: '10 months',
    teamSize: '8 engineers',
    description: 'Led security transformation achieving SOC 2 Type II compliance and implementing zero-trust architecture for a healthcare technology provider handling sensitive patient data.',
    challenge: 'The organization needed to achieve SOC 2 Type II compliance to win enterprise clients. Existing security practices were outdated, and the infrastructure lacked proper access controls and monitoring.',
    solution: 'Implemented zero-trust security architecture, deployed SIEM solution, established comprehensive logging and monitoring, conducted security awareness training, and developed incident response procedures.',
    results: [
      { metric: 'SOC 2', label: 'Type II Compliant', icon: Shield },
      { metric: 'Zero', label: 'Security breaches', icon: Shield },
      { metric: '100%', label: 'Audit pass rate', icon: TrendingUp },
      { metric: '90%', label: 'Reduction in vulnerabilities', icon: Zap },
    ],
    technologies: ['Okta', 'CrowdStrike', 'Splunk', 'Terraform', 'AWS', 'Azure AD'],
    tags: ['Security', 'Compliance', 'Zero Trust', 'Healthcare'],
  },
  {
    id: 'cloud-transformation',
    title: 'Cloud-First Digital Transformation',
    client: 'Manufacturing Enterprise',
    industry: 'Manufacturing',
    duration: '14 months',
    teamSize: '10 engineers',
    description: 'Complete digital transformation migrating legacy manufacturing systems to cloud-native architecture, enabling IoT integration and real-time analytics.',
    challenge: 'The manufacturing company relied on legacy on-premise systems that couldn\'t scale to meet growing demand. Lack of real-time visibility into operations was causing inefficiencies and delays.',
    solution: 'Designed and executed a phased cloud migration strategy, implemented IoT data pipelines, built real-time analytics dashboards, and established DevOps practices for continuous improvement.',
    results: [
      { metric: '50%', label: 'Operational efficiency gain', icon: TrendingUp },
      { metric: '3x', label: 'Faster time-to-market', icon: Clock },
      { metric: '40%', label: 'IT cost reduction', icon: TrendingUp },
      { metric: '24/7', label: 'Real-time monitoring', icon: Shield },
    ],
    technologies: ['AWS IoT', 'Kafka', 'Spark', 'Kubernetes', 'Python', 'React'],
    tags: ['Digital Transformation', 'IoT', 'Manufacturing', 'Cloud'],
  },
  {
    id: 'automation-initiative',
    title: 'Enterprise Automation Initiative',
    client: 'Global Logistics Company',
    industry: 'Logistics',
    duration: '12 months',
    teamSize: '7 engineers',
    description: 'Comprehensive automation initiative that transformed manual IT operations, reducing deployment times by 70% and eliminating repetitive tasks across the organization.',
    challenge: 'The logistics company had highly manual IT processes leading to slow deployments, inconsistent configurations, and frequent human errors. The IT team was overwhelmed with routine tasks.',
    solution: 'Implemented Infrastructure as Code practices, built CI/CD pipelines, automated configuration management, and created self-service portals for common IT requests.',
    results: [
      { metric: '70%', label: 'Faster deployments', icon: Clock },
      { metric: '90%', label: 'Reduction in errors', icon: Shield },
      { metric: '20+', label: 'Hours saved weekly', icon: TrendingUp },
      { metric: '100%', label: 'Infrastructure as Code', icon: Zap },
    ],
    technologies: ['Terraform', 'Ansible', 'Jenkins', 'Docker', 'Kubernetes', 'Python'],
    tags: ['Automation', 'DevOps', 'Logistics', 'IaC'],
  },
  {
    id: 'monitoring-observability',
    title: 'Monitoring & Observability Platform',
    client: 'SaaS Startup',
    industry: 'Technology',
    duration: '5 months',
    teamSize: '3 engineers',
    description: 'Built a comprehensive monitoring and observability platform providing real-time insights into application performance and infrastructure health for a rapidly growing SaaS startup.',
    challenge: 'The startup was experiencing rapid growth but lacked visibility into their production systems. Incidents were detected late, and troubleshooting was time-consuming due to fragmented monitoring tools.',
    solution: 'Implemented a unified monitoring stack with centralized logging, distributed tracing, and intelligent alerting. Created custom dashboards for different stakeholders and established SLOs/SLIs.',
    results: [
      { metric: '85%', label: 'Faster incident detection', icon: Clock },
      { metric: '60%', label: 'Reduction in MTTR', icon: TrendingUp },
      { metric: '99.9%', label: 'Platform uptime', icon: Shield },
      { metric: '360°', label: 'System visibility', icon: Zap },
    ],
    technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'Jaeger', 'PagerDuty'],
    tags: ['Monitoring', 'Observability', 'SaaS', 'DevOps'],
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Case Studies</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Detailed analysis of real-world infrastructure solutions, showcasing the challenges faced, 
            solutions implemented, and measurable business outcomes achieved.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <Link
              key={study.id}
              href={`/case-studies/${study.id}`}
              className="group bg-muted rounded-lg p-8 border border-border hover:shadow-lg transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                    {study.industry}
                  </span>
                  <h2 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {study.title}
                  </h2>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
              </div>

              <p className="text-muted-foreground mb-6">{study.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {study.results.slice(0, 4).map((result, index) => (
                  <div key={index} className="flex items-center">
                    <result.icon className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                    <div>
                      <div className="text-lg font-bold text-foreground">{result.metric}</div>
                      <div className="text-xs text-muted-foreground">{result.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-background text-foreground text-xs rounded border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-border flex justify-between text-sm text-muted-foreground">
                <span>Duration: {study.duration}</span>
                <span>Team: {study.teamSize}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}