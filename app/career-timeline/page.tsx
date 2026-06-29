import { Metadata } from 'next';
import { Briefcase, GraduationCap, Award, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Career Timeline',
  description: 'Professional journey and key milestones of Mohd Aziz Shaikh - from education to senior infrastructure roles.',
};

const timeline = [
  {
    year: '2024 - Present',
    title: 'Senior Infrastructure Engineer',
    company: 'Enterprise Technology Solutions',
    location: 'India',
    type: 'work',
    icon: Briefcase,
    description: 'Leading cloud migration initiatives and implementing AI-powered automation solutions across enterprise infrastructure.',
    achievements: [
      'Reduced operational costs by 40% through strategic automation initiatives',
      'Implemented zero-trust security architecture across all environments',
      'Led team of 5 engineers in large-scale infrastructure transformation',
      'Designed and deployed multi-cloud strategy using AWS and Azure',
      'Established DevOps practices reducing deployment time by 60%',
    ],
    technologies: ['AWS', 'Azure', 'Kubernetes', 'Terraform', 'Python', 'Go'],
  },
  {
    year: '2021 - 2024',
    title: 'Infrastructure & Network Operations Lead',
    company: 'Global Tech Services',
    location: 'India',
    type: 'work',
    icon: Briefcase,
    description: 'Managed enterprise infrastructure and network operations for Fortune 500 clients across multiple industries.',
    achievements: [
      'Achieved 99.99% uptime across all client environments',
      'Migrated 200+ servers from on-premise to cloud infrastructure',
      'Implemented comprehensive monitoring and alerting solutions',
      'Reduced incident response time by 60% through automation',
      'Managed $2M+ infrastructure budget across multiple clients',
    ],
    technologies: ['VMware', 'Cisco', 'AWS', 'Ansible', 'Prometheus', 'Grafana'],
  },
  {
    year: '2023',
    title: 'AWS Solutions Architect - Professional',
    company: 'Amazon Web Services',
    location: 'Certification',
    type: 'certification',
    icon: Award,
    description: 'Achieved AWS Solutions Architect Professional certification, validating advanced cloud architecture skills.',
    achievements: [
      'Scored in top 10% of candidates',
      'Validated expertise in complex cloud architectures',
      'Demonstrated cost optimization strategies',
    ],
    technologies: ['AWS', 'Cloud Architecture', 'Cost Optimization'],
  },
  {
    year: '2023',
    title: 'Certified Kubernetes Administrator',
    company: 'Cloud Native Computing Foundation',
    location: 'Certification',
    type: 'certification',
    icon: Award,
    description: 'Earned CKA certification, demonstrating proficiency in Kubernetes cluster administration.',
    achievements: [
      'Passed performance-based certification exam',
      'Demonstrated cluster troubleshooting skills',
      'Validated production Kubernetes experience',
    ],
    technologies: ['Kubernetes', 'Docker', 'Container Orchestration'],
  },
  {
    year: '2018 - 2021',
    title: 'Systems Administrator',
    company: 'DataCenter Solutions Inc.',
    location: 'India',
    type: 'work',
    icon: Briefcase,
    description: 'Administered Linux and Windows server environments, focusing on performance optimization and security.',
    achievements: [
      'Managed 500+ virtual machines across multiple data centers',
      'Implemented configuration management using Ansible',
      'Reduced security vulnerabilities by 80% through hardening initiatives',
      'Automated routine tasks saving 20+ hours per week',
      'Led disaster recovery planning and testing',
    ],
    technologies: ['Linux', 'Windows Server', 'VMware', 'Ansible', 'Bash', 'Python'],
  },
  {
    year: '2022',
    title: 'Cisco Certified Network Professional (CCNP)',
    company: 'Cisco Systems',
    location: 'Certification',
    type: 'certification',
    icon: Award,
    description: 'Achieved CCNP certification, validating advanced networking knowledge and skills.',
    achievements: [
      'Mastered enterprise networking concepts',
      'Demonstrated troubleshooting expertise',
      'Validated network design capabilities',
    ],
    technologies: ['Cisco', 'Routing', 'Switching', 'Network Security'],
  },
  {
    year: '2021',
    title: 'Red Hat Certified Engineer (RHCE)',
    company: 'Red Hat',
    location: 'Certification',
    type: 'certification',
    icon: Award,
    description: 'Earned RHCE certification, demonstrating advanced Linux system administration skills.',
    achievements: [
      'Passed hands-on practical exam',
      'Demonstrated automation with Ansible',
      'Validated enterprise Linux expertise',
    ],
    technologies: ['RHEL', 'Ansible', 'Linux Administration'],
  },
  {
    year: '2016 - 2018',
    title: 'Junior Systems Engineer',
    company: 'Tech Infrastructure Pvt. Ltd.',
    location: 'India',
    type: 'work',
    icon: Briefcase,
    description: 'Supported enterprise infrastructure and provided technical support for critical business systems.',
    achievements: [
      'Provided 24/7 support for mission-critical applications',
      'Assisted in data center migration projects',
      'Developed documentation and standard operating procedures',
      'Reduced ticket resolution time by 40% through knowledge base creation',
    ],
    technologies: ['Linux', 'Windows', 'Networking', 'Ticketing Systems'],
  },
  {
    year: '2020',
    title: 'ITIL v4 Foundation',
    company: 'AXELOS',
    location: 'Certification',
    type: 'certification',
    icon: Award,
    description: 'Achieved ITIL v4 Foundation certification, understanding IT service management best practices.',
    achievements: [
      'Learned IT service management framework',
      'Understood service lifecycle concepts',
      'Applied ITIL principles to improve service delivery',
    ],
    technologies: ['ITIL', 'ITSM', 'Service Delivery'],
  },
  {
    year: '2014 - 2016',
    title: 'IT Support Specialist',
    company: 'Network Solutions India',
    location: 'India',
    type: 'work',
    icon: Briefcase,
    description: 'Provided first-level technical support and maintained IT infrastructure for corporate clients.',
    achievements: [
      'Resolved 95% of tickets within SLA',
      'Implemented help desk ticketing system',
      'Trained junior team members on support procedures',
      'Achieved 98% customer satisfaction rating',
    ],
    technologies: ['Windows', 'Active Directory', 'Office 365', 'Networking'],
  },
  {
    year: '2010 - 2014',
    title: 'Bachelor of Technology in Computer Science',
    company: 'University of Technology',
    location: 'India',
    type: 'education',
    icon: GraduationCap,
    description: 'Focused on networking, systems administration, and software development.',
    achievements: [
      'Graduated with honors (GPA: 8.5/10)',
      'Specialized in network security and infrastructure',
      'Led university tech club and hackathon teams',
      'Published research paper on network optimization',
    ],
    technologies: ['Computer Science', 'Networking', 'Security', 'Programming'],
  },
];

export default function CareerTimelinePage() {
  return (
    <div className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Career Timeline</h1>
          <p className="text-lg text-muted-foreground">
            My professional journey from education to senior infrastructure roles, highlighting key 
            milestones, certifications, and achievements along the way.
          </p>
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

                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-background border-4 border-primary flex items-center justify-center z-10">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>

                <div className={`flex-1 md:w-1/2 pl-16 md:pl-0 ${
                  index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'
                }`}>
                  <div className="bg-muted rounded-lg p-6 border border-border hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm text-primary font-medium">{item.year}</span>
                      {item.type === 'certification' && (
                        <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded">
                          Certification
                        </span>
                      )}
                      {item.type === 'education' && (
                        <span className="px-2 py-0.5 bg-green-500/10 text-green-600 text-xs font-medium rounded">
                          Education
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-primary font-medium mb-1">{item.company}</p>
                    <p className="text-sm text-muted-foreground mb-4">{item.location}</p>

                    <p className="text-muted-foreground mb-4">{item.description}</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2">Key Achievements</h4>
                      <ul className="space-y-1">
                        {item.achievements.slice(0, 3).map((achievement, i) => (
                          <li key={i} className="flex items-start text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {item.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-background text-foreground text-xs rounded border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 p-8 bg-muted rounded-lg border border-border">
          <div className="flex items-center justify-center mb-6">
            <TrendingUp className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-2xl font-bold text-foreground">Career Progression</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">10+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">6+</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime Achieved</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}