import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore my portfolio of IT infrastructure, automation, and AI-assisted projects.',
};

const projects = [
  {
    id: 'enterprise-automation',
    title: 'Enterprise Automation Platform',
    description: 'Built a comprehensive automation platform that reduced manual IT operations by 70% across multiple departments. Implemented workflow automation, configuration management, and self-service portals.',
    tags: ['Python', 'Ansible', 'Docker', 'CI/CD', 'Terraform'],
    impact: '70% reduction in manual operations',
    duration: '6 months',
    role: 'Lead Infrastructure Engineer',
  },
  {
    id: 'cloud-migration',
    title: 'Cloud Infrastructure Migration',
    description: 'Led the migration of on-premise infrastructure to AWS, improving scalability and reducing costs. Designed and implemented cloud-native architecture with high availability.',
    tags: ['AWS', 'Terraform', 'Kubernetes', 'Monitoring', 'Security'],
    impact: '40% cost reduction, 99.9% uptime',
    duration: '12 months',
    role: 'Cloud Architect',
  },
  {
    id: 'ai-monitoring',
    title: 'AI-Powered Monitoring System',
    description: 'Developed an intelligent monitoring system using machine learning for predictive maintenance and anomaly detection. Reduced incident response time significantly.',
    tags: ['Python', 'ML', 'Grafana', 'Prometheus', 'TensorFlow'],
    impact: '60% faster incident detection',
    duration: '4 months',
    role: 'Senior Engineer',
  },
  {
    id: 'security-compliance',
    title: 'Security & Compliance Framework',
    description: 'Implemented comprehensive security framework achieving SOC 2 Type II compliance. Deployed zero-trust architecture and automated security scanning.',
    tags: ['Security', 'Compliance', 'Zero Trust', 'SIEM', 'Automation'],
    impact: 'SOC 2 compliant, Zero breaches',
    duration: '8 months',
    role: 'Security Lead',
  },
  {
    id: 'disaster-recovery',
    title: 'Disaster Recovery Solution',
    description: 'Designed and implemented enterprise disaster recovery solution with automated failover capabilities. Reduced RTO from 24 hours to 30 minutes.',
    tags: ['DR', 'Automation', 'Cloud', 'Backup', 'Testing'],
    impact: '95% faster recovery',
    duration: '5 months',
    role: 'Infrastructure Lead',
  },
  {
    id: 'cost-optimization',
    title: 'Cloud Cost Optimization',
    description: 'Developed tools and processes for optimizing cloud resource usage. Implemented auto-scaling, right-sizing, and reserved instance management.',
    tags: ['AWS', 'Cost Management', 'Automation', 'Analytics'],
    impact: '35% cloud cost reduction',
    duration: '3 months',
    role: 'Cloud Engineer',
  },
];

export default function ProjectsPage() {
  return (
    <div className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Projects</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            A comprehensive collection of projects demonstrating expertise in IT infrastructure, 
            cloud operations, automation, and AI-assisted solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group bg-muted rounded-lg p-8 border border-border hover:shadow-lg transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h2>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-muted-foreground mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-background text-foreground text-sm rounded-full border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                <div>
                  <p className="text-sm text-muted-foreground">Impact</p>
                  <p className="text-sm font-medium text-primary">{project.impact}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="text-sm font-medium text-foreground">{project.duration}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Role</p>
                  <p className="text-sm font-medium text-foreground">{project.role}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}