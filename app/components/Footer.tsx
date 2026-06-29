'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold text-foreground mb-4">Mohd Aziz Shaikh</h3>
            <p className="text-muted-foreground mb-4">
              IT Infrastructure & Network Operations Professional | AI Automation Specialist | AI-Assisted Solution Builder
            </p>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Mohd Aziz Shaikh. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/resume" className="text-muted-foreground hover:text-foreground transition-colors">
                  Resume
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:aziz.shaikh@aaditechs.in" className="text-muted-foreground hover:text-foreground transition-colors">
                  aziz.shaikh@aaditechs.in
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/mohdazizshaikh" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/mohdazizshaikh" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}