import { Metadata } from 'next';
import { Lightbulb, Rocket, Zap, Brain, Cloud, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: "What I'm Building",
  description: 'Current projects and innovations in progress - AI-powered tools, automation frameworks, and cloud solutions.',
};

const projects = [
  {
    icon: Brain,
    title: 'AI-Powered IT Operations Platform',
    status: 'In Development',
    statusColor: 'bg-yellow-500',
    description: 'Building an intelligent operations platform that uses machine learning to predict and prevent infrastructure issues before they impact business operations.',
    longDescription: `
      This project aims to revolutionize IT operations by leveraging artificial intelligence and machine 
      learning to create a predictive operations platform. The system analyzes historical data patterns, 
      metrics, and logs to identify potential issues before they cause outages or performance degradation.
      
      Key features include anomaly detection, predictive capacity planning, automated root cause analysis, 
      and intelligent alerting that reduces noise while ensuring critical issues are never missed.
      
      The platform integrates with existing monitoring tools and adds an intelligence layer that continuously 
      learns from infrastructure behavior, improving its predictions over time.
    `,
    technologies: ['Python', 'TensorFlow', 'Kubernetes', 'Prometheus', 'Grafana', 'Kafka'],
    features: [
      'Predictive anomaly detection',
      'Automated root cause analysis',
      'Intelligent alert correlation',
      'Capacity planning predictions',
      'Self-healing capabilities',
    ],
    timeline: 'Expected completion: Q2 2025',
  },
  {
    icon: Rocket,
    title: 'Business Automation Framework',
    status: 'Beta Testing',
    statusColor: 'bg-blue-500',
    description: 'Creating a comprehensive framework for automating repetitive business processes across multiple departments and systems.',
    longDescription: `
      The Business Automation Framework is designed to streamline and automate repetitive business processes 
      across various departments including HR, Finance, IT, and Operations. The framework provides a 
      unified platform for creating, managing, and monitoring automated workflows.
      
      Built with extensibility in mind, the framework supports integration with common enterprise systems 
      and provides a user-friendly interface for non-technical users to create and manage their own automations.
      
      The project is currently in beta testing with select organizations, gathering feedback to refine 
      features and improve user experience.
    `,
    technologies: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'React'],
    features: [
      'Visual workflow builder',
      'Pre-built automation templates',
      'Integration marketplace',
      'Role-based access control',
      'Comprehensive audit logging',
    ],
    timeline: 'Public launch: Q3 2025',
  },
  {
    icon: Cloud,
    title: 'Cloud Cost Optimization Tool',
    status: 'Planning',
    statusColor: 'bg-purple-500',
    description: 'Developing a tool that analyzes cloud usage patterns and automatically optimizes resource allocation to reduce costs.',
    longDescription: `
      This project addresses the growing challenge of cloud cost management. As organizations scale their 
      cloud usage, costs can quickly spiral out of control without proper oversight and optimization.
      
      The tool will analyze cloud usage patterns across AWS, Azure, and GCP, identify waste and optimization 
      opportunities, and automatically implement cost-saving measures where appropriate.
      
      Features include rightsizing recommendations, reserved instance management, idle resource detection, 
      and automated scheduling of non-production resources.
    `,
    technologies: ['Go', 'AWS SDK', 'Azure SDK', 'GCP SDK', 'Terraform', 'React'],
    features: [
      'Multi-cloud cost analysis',
      'Automated rightsizing',
      'Reserved instance management',
      'Idle resource detection',
      'Cost allocation and chargeback',
    ],
    timeline: 'Development start: Q1 2025',
  },
  {
    icon: Shield,
    title: 'Security Compliance Automation',
    status: 'Research',
    statusColor: 'bg-gray-500',
    description: 'Researching automated compliance checking and remediation for cloud infrastructure across multiple frameworks.',
    longDescription: `
      With the increasing complexity of compliance requirements (SOC 2, ISO 27001, HIPAA, GDPR), 
      organizations struggle to maintain continuous compliance. This project explores ways to automate 
      compliance checking and remediation.
      
      The tool would continuously monitor cloud infrastructure against compliance frameworks, 
      automatically remediate common issues, and generate audit-ready reports.
      
      Currently in the research phase, exploring the feasibility and potential approaches.
    `,
    technologies: ['Python', 'AWS Config', 'Azure Policy', 'Open Policy Agent', 'Terraform'],
    features: [
      'Continuous compliance monitoring',
      'Automated remediation',
      'Multi-framework support',
      'Audit report generation',
      'Drift detection',
    ],
    timeline: 'Research phase ongoing',
  },
  {
    icon: Zap,
    title: 'Infrastructure Testing Framework',
    status: 'Early Development',
    statusColor: 'bg-orange-500',
    description: 'Building a framework for automated testing of infrastructure code and configurations.',
    longDescription: `
      Infrastructure as Code (IaC) has become standard practice, but testing infrastructure code remains 
      challenging. This project aims to create a comprehensive testing framework for Terraform, 
      CloudFormation, and other IaC tools.
      
      The framework will support unit testing, integration testing, and compliance testing of 
      infrastructure code, helping teams catch issues before they reach production.
    `,
    technologies: ['Go', 'Terraform', 'AWS', 'Docker', 'Pytest'],
    features: [
      'Unit testing for IaC',
      'Integration testing',
      'Compliance validation',
      'Cost estimation',
      'Security scanning',
    ],
    timeline: 'MVP expected: Q4 2025',
  },
];

export default function WhatImBuildingPage() {
  return (
    <div className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">What I'm Building</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Current projects and innovations in progress. These projects represent my commitment to 
            continuous learning and solving real-world problems through technology.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-muted rounded-lg p-8 border border-border"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-background rounded-lg flex items-center justify-center border border-border">
                    <project.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <h2 className="text-2xl font-bold text-foreground">{project.title}</h2>
                    <span className={`px-3 py-1 ${project.statusColor} text-white text-sm font-medium rounded-full`}>
                      {project.status}
                    </span>
                  </div>

                  <p className="text-lg text-muted-foreground mb-6">{project.description}</p>

                  <div className="prose prose-lg max-w-none text-muted-foreground mb-6 whitespace-pre-line">
                    {project.longDescription}
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">Key Features</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-background text-foreground text-sm rounded-full border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-primary font-medium">{project.timeline}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-muted rounded-lg border border-border text-center">
          <Lightbulb className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-4">Have an Idea?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm always interested in hearing about new challenges and opportunities. If you have a project 
            idea or need help with infrastructure challenges, let's talk.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}