import { Metadata } from 'next';
import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Mohd Aziz Shaikh for collaboration, consulting, or employment opportunities.',
};

export default function ContactPage() {
  return (
    <div className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4">Get in Touch</h1>
          <p className="text-lg text-muted-foreground mb-12">
            I'm always interested in hearing about new opportunities, collaborations, and interesting projects. 
            Whether you have a question or just want to say hi, feel free to reach out.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-muted rounded-lg flex items-center justify-center border border-border">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-foreground mb-1">Email</h3>
                    <a
                      href="mailto:aziz.shaikh@example.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      aziz.shaikh@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-muted rounded-lg flex items-center justify-center border border-border">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-foreground mb-1">Phone</h3>
                    <a
                      href="tel:+919876543210"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-muted rounded-lg flex items-center justify-center border border-border">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">India (Open to Remote)</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-2xl font-bold text-foreground mb-6">Connect Online</h2>
                <div className="space-y-4">
                  <a
                    href="https://linkedin.com/in/mohdazizshaikh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-muted rounded-lg border border-border hover:shadow-md transition-all"
                  >
                    <Linkedin className="w-6 h-6 text-primary mr-4" />
                    <div>
                      <h3 className="font-semibold text-foreground">LinkedIn</h3>
                      <p className="text-sm text-muted-foreground">Professional network and recommendations</p>
                    </div>
                  </a>

                  <a
                    href="https://github.com/mohdazizshaikh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-muted rounded-lg border border-border hover:shadow-md transition-all"
                  >
                    <Github className="w-6 h-6 text-primary mr-4" />
                    <div>
                      <h3 className="font-semibold text-foreground">GitHub</h3>
                      <p className="text-sm text-muted-foreground">Code repositories and contributions</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Send a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                  >
                    <option value="">Select a subject</option>
                    <option value="job-opportunity">Job Opportunity</option>
                    <option value="consulting">Consulting Inquiry</option>
                    <option value="collaboration">Project Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>

              <p className="mt-4 text-sm text-muted-foreground">
                Note: This form is for demonstration purposes. Please use the email or LinkedIn links 
                to get in touch.
              </p>
            </div>
          </div>

          <div className="mt-16 p-8 bg-muted rounded-lg border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">What I Can Help With</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Infrastructure & Operations</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Cloud architecture and migration</li>
                  <li>• Infrastructure automation</li>
                  <li>• Performance optimization</li>
                  <li>• Disaster recovery planning</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">AI & Automation</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• AI-assisted solution development</li>
                  <li>• Process automation</li>
                  <li>• Monitoring and observability</li>
                  <li>• DevOps transformation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}