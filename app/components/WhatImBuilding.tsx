import Link from 'next/link';
import { ArrowRight, Lightbulb, Rocket, Zap } from 'lucide-react';

const projects = [
  {
    icon: Lightbulb,
    title: 'AI-Powered IT Operations Platform',
    description: 'Building an intelligent operations platform that uses machine learning to predict and prevent infrastructure issues before they impact business operations.',
    status: 'In Development',
    technologies: ['Python', 'TensorFlow', 'Kubernetes', 'Prometheus'],
  },
  {
    icon: Rocket,
    title: 'Business Automation Framework',
    description: 'Creating a comprehensive framework for automating repetitive business processes across multiple departments and systems.',
    status: 'Beta Testing',
    technologies: ['Node.js', 'Docker', 'PostgreSQL', 'Redis'],
  },
  {
    icon: Zap,
    title: 'Cloud Cost Optimization Tool',
    description: 'Developing a tool that analyzes cloud usage patterns and automatically optimizes resource allocation to reduce costs.',
    status: 'Planning',
    technologies: ['Go', 'AWS SDK', 'Terraform', 'React'],
  },
];

export default function WhatImBuilding() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">What I'm Building</h2>
            <p className="text-lg text-muted-foreground">
              Current projects and innovations in progress
            </p>
          </div>
          <Link
            href="/what-im-building"
            className="hidden sm:flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            View all projects
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-muted rounded-lg p-6 border border-border hover:shadow-lg transition-all"
            >
              <div className="flex items-center mb-4">
                <project.icon className="w-8 h-8 text-primary mr-3" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                  <span className="text-sm text-primary font-medium">{project.status}</span>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-background text-foreground text-sm rounded-full border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/what-im-building"
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