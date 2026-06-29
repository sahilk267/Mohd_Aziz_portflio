import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    id: 'infrastructure-optimization',
    title: 'Infrastructure Optimization for Financial Services',
    description: 'Reduced infrastructure costs by 45% while improving performance and reliability for a major financial services company.',
    metrics: ['45% cost reduction', '99.99% uptime', '60% faster deployments'],
  },
  {
    id: 'disaster-recovery',
    title: 'Disaster Recovery Implementation',
    description: 'Designed and implemented a comprehensive disaster recovery solution reducing RTO from 24 hours to 30 minutes.',
    metrics: ['95% faster recovery', 'Zero data loss', 'Automated failover'],
  },
  {
    id: 'security-compliance',
    title: 'Security & Compliance Overhaul',
    description: 'Led security transformation achieving SOC 2 Type II compliance and implementing zero-trust architecture.',
    metrics: ['SOC 2 compliant', 'Zero breaches', '100% audit pass'],
  },
];

export default function CaseStudies() {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Case Studies</h2>
            <p className="text-lg text-muted-foreground">
              Real-world solutions delivering measurable business outcomes
            </p>
          </div>
          <Link
            href="/case-studies"
            className="hidden sm:flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            View all case studies
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <Link
              key={study.id}
              href={`/case-studies/${study.id}`}
              className="group bg-background rounded-lg p-6 border border-border hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {study.title}
              </h3>
              <p className="text-muted-foreground mb-6">{study.description}</p>
              <div className="space-y-2">
                {study.metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="flex items-center text-sm text-foreground"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    {metric}
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/case-studies"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            View all case studies
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}