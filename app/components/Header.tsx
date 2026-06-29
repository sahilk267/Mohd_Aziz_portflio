'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SunIcon, MoonIcon } from 'lucide-react';

export default function Header() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm border-bordersm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold text-foreground">
              Mohd Aziz Shaikh
            </Link>
          </div>
          
          <nav className="hidden md:flex md:space-x-8">
            <ul className="flex flex-col md:flex-row md:space-x-8">
              <li>
                <Link href="/" className="text-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/resume" className="text-foreground hover:text-primary transition-colors">
                  Resume
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-foreground hover:text-primary transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/career-timeline" className="text-foreground hover:text-primary transition-colors">
                  Timeline
                </Link>
              </li>
              <li>
                <Link href="/what-im-building" className="text-foreground hover:text-primary transition-colors">
                  What I'm Building
                </Link>
              </li>
            </ul>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="text-foreground hover:text-primary transition-colors">
              <SunIcon className="w-5 h-5" />
            </button>
            <button onClick={toggleTheme} className="text-foreground hover:text-primary transition-colors flex items-center space-x-1">
              {isDark ? (
                <MoonIcon className="w-5 h-5" />
              ) : (
                <SunIcon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}