import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './components/ThemeProvider';
import Header from './components/Header';
import Footer from './components/Footer';
import StructuredData from './components/StructuredData';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://sahilk267.github.io/Mohd_Aziz_portflio'),
  title: {
    default: 'Mohd Aziz Shaikh | IT Infrastructure & Network Operations Professional',
    template: '%s | Mohd Aziz Shaikh Portfolio',
  },
  description: 'Experienced IT Infrastructure & Network Operations Professional with expertise in enterprise infrastructure, network operations, Linux systems, Windows administration, automation workflows, AI-assisted solution development and business platform architecture.',
  keywords: ['IT Infrastructure', 'Network Operations', 'Linux', 'Windows', 'Automation', 'AI', 'DevOps', 'Cloud', 'Enterprise Architecture'],
  authors: [{ name: 'Mohd Aziz Shaikh' }],
  creator: 'Mohd Aziz Shaikh',
  publisher: 'Mohd Aziz Shaikh',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sahilk267.github.io/Mohd_Aziz_portflio',
    siteName: 'Mohd Aziz Shaikh Portfolio',
    title: 'Mohd Aziz Shaikh | IT Infrastructure & Network Operations Professional',
    description: 'Experienced IT Infrastructure & Network Operations Professional with expertise in enterprise infrastructure, network operations, Linux systems, Windows administration, automation workflows, AI-assisted solution development and business platform architecture.',
    images: [
      {
        url: '/Mohd_Aziz_portflio/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mohd Aziz Shaikh Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohd Aziz Shaikh | IT Infrastructure & Network Operations Professional',
    description: 'Experienced IT Infrastructure & Network Operations Professional with expertise in enterprise infrastructure, network operations, Linux systems, Windows administration, automation workflows, AI-assisted solution development and business platform architecture.',
    images: ['/Mohd_Aziz_portflio/og-image.png'],
    creator: '@mohdazizshaikh',
  },
  verification: {
    google: 'google-site-verification-code',
  },
  icons: {
    icon: '/Mohd_Aziz_portflio/favicon.ico',
    apple: '/Mohd_Aziz_portflio/apple-touch-icon.png',
  },
  manifest: '/Mohd_Aziz_portflio/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}