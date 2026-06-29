import { TrendingUp, Users, Clock, Award } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: '45%',
    label: 'Average Cost Reduction',
    description: 'Through infrastructure optimization and automation',
  },
  {
    icon: Users,
    value: '500+',
    label: 'End Users Supported',
    description: 'Across enterprise environments',
  },
  {
    icon: Clock,
    value: '99.9%',
    label: 'Uptime Achieved',
    description: 'For critical business systems',
  },
  {
    icon: Award,
    value: '10+',
    label: 'Years Experience',
    description: 'In IT infrastructure and operations',
  },
];

export default function ProfessionalImpact() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Professional Impact</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering measurable results across enterprise environments
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-muted border border-border"
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="w-10 h-10 text-primary" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}