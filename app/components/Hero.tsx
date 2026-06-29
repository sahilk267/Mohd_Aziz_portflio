import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-background to-muted py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Mohd Aziz Shaikh
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
            IT Infrastructure & Network Operations Professional | AI Automation Specialist | AI-Assisted Solution Builder
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            Building enterprise-grade infrastructure, automating complex workflows, and leveraging AI to create scalable business solutions. 
            Trusted by organizations to deliver reliable, secure, and efficient technology operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-border text-base font-medium rounded-md text-foreground bg-background hover:bg-muted transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}