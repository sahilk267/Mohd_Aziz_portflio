import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 'enterprise-automation',
    title: 'Enterprise Automation Platform',
    description: 'Built a comprehensive automation platform that reduced manual IT operations by 70% across multiple departments.',
    tags: ['Python', 'Ansible', 'Docker', 'CI/CD'],
    impact: '70% reduction in manual operations',
  },
  {
    id: 'cloud-migration',
    title: 'Cloud Infrastructure Migration',
    description: 'Led the migration of on-premise infrastructure to AWS, improving scalability and reducing costs.',
    tags: ['AWS', 'Terraform', 'Kubernetes', 'Monitoring'],
    impact: '40% cost reduction, 99.9% uptime',
  },
  {
    id: 'ai-monitoring',
    title: 'AI-Powered Monitoring System',
    description: 'Developed an intelligent monitoring system using machine learning for predictive maintenance.',
    tags: ['Python', 'ML', 'Grafana', 'Prometheus'],
    impact: '60% faster incident detection',
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground">
              Selected projects demonstrating technical expertise and business impact
            </p>
          </div>
          <Link
            href="/projects"
            className="hidden sm:flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            View all projects
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group bg-muted rounded-lg p-6 border border-border hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-background text-foreground text-sm rounded-full border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="pt-4 border-t border-border">
                <p className="text-sm font-medium text-primary">{project.impact}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/projects"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            View all projects
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}