import Link from 'next/link';
import { ArrowRight, Briefcase, GraduationCap } from 'lucide-react';

const timeline = [
  {
    year: '2024 - Present',
    title: 'Senior Infrastructure Engineer',
    company: 'Enterprise Technology Solutions',
    type: 'work',
    description: 'Leading cloud migration initiatives and implementing AI-powered automation solutions across enterprise infrastructure.',
    achievements: [
      'Reduced operational costs by 40% through automation',
      'Implemented zero-trust security architecture',
      'Led team of 5 engineers in infrastructure transformation',
    ],
  },
  {
    year: '2021 - 2024',
    title: 'Infrastructure & Network Operations Lead',
    company: 'Global Tech Services',
    type: 'work',
    description: 'Managed enterprise infrastructure and network operations for Fortune 500 clients.',
    achievements: [
      'Achieved 99.99% uptime across all client environments',
      'Migrated 200+ servers to cloud infrastructure',
      'Implemented comprehensive monitoring and alerting',
    ],
  },
  {
    year: '2018 - 2021',
    title: 'Systems Administrator',
    company: 'DataCenter Solutions Inc.',
    type: 'work',
    description: 'Administered Linux and Windows server environments, focusing on performance optimization and security.',
    achievements: [
      'Managed 500+ virtual machines across multiple data centers',
      'Reduced incident response time by 60%',
      'Implemented configuration management with Ansible',
    ],
  },
  {
    year: '2014 - 2018',
    title: 'Bachelor of Technology in Computer Science',
    company: 'University of Technology',
    type: 'education',
    description: 'Focused on networking, systems administration, and software development.',
    achievements: [
      'Graduated with honors',
      'Specialized in network security and infrastructure',
      'Led university tech club and hackathon teams',
    ],
  },
];

export default function CareerTimeline() {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Career Timeline</h2>
            <p className="text-lg text-muted-foreground">
              Professional journey and key milestones
            </p>
          </div>
          <Link
            href="/career-timeline"
            className="hidden sm:flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            View full timeline
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2" />
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1 md:w-1/2" />
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-background border-4 border-primary flex items-center justify-center z-10">
                  {item.type === 'work' ? (
                    <Briefcase className="w-4 h-4 text-primary" />
                  ) : (
                    <GraduationCap className="w-4 h-4 text-primary" />
                  )}
                </div>
                <div className={`flex-1 md:w-1/2 pl-12 md:pl-0 ${
                  index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'
                }`}>
                  <div className="bg-background rounded-lg p-6 border border-border">
                    <div className="text-sm text-primary font-medium mb-2">{item.year}</div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">{item.company}</p>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start text-sm text-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/career-timeline"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            View full timeline
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}