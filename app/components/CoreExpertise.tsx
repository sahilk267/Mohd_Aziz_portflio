import { Server, Network, Cloud, Shield, Cpu, Wrench } from 'lucide-react';

const expertise = [
  {
    icon: Server,
    title: 'IT Infrastructure',
    description: 'Enterprise infrastructure design, deployment, and management. Linux and Windows server administration, virtualization, and containerization.',
  },
  {
    icon: Network,
    title: 'Network Operations',
    description: 'Network architecture, configuration, and troubleshooting. Routing, switching, firewalls, VPNs, and network security.',
  },
  {
    icon: Cloud,
    title: 'Cloud Platforms',
    description: 'AWS, Azure, and GCP cloud services. Cloud migration, hybrid cloud solutions, and cloud-native architectures.',
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'IT security best practices, compliance frameworks, vulnerability management, and incident response.',
  },
  {
    icon: Cpu,
    title: 'Automation & DevOps',
    description: 'Infrastructure as Code, CI/CD pipelines, configuration management, and workflow automation using modern tools.',
  },
  {
    icon: Wrench,
    title: 'AI-Assisted Solutions',
    description: 'Leveraging AI tools for code generation, process automation, data analysis, and building intelligent business platforms.',
  },
];

export default function CoreExpertise() {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Core Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical skills spanning infrastructure, operations, and emerging technologies
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-6 border border-border hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <item.icon className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
              </div>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}