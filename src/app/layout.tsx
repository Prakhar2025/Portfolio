// Root layout with dark theme, smooth scroll, and custom cursor
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header, Footer } from '@/components/layout';
import { CustomCursor } from '@/components/ui';
import { SmoothScroll } from '@/components/providers';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Portfolio | Software Engineer · AI/ML Engineer · SaaS Builder',
  description: 'Building exceptional digital experiences with modern technologies. Full-stack developer specializing in AI/ML and scalable SaaS products.',
  keywords: ['Software Engineer', 'AI Engineer', 'ML Engineer', 'SaaS', 'Full Stack Developer'],
  authors: [{ name: 'Prakhar Shukla' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.com',
    title: 'Portfolio | Software Engineer · AI/ML Engineer · SaaS Builder',
    description: 'Building exceptional digital experiences with modern technologies.',
    siteName: 'Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Software Engineer · AI/ML Engineer · SaaS Builder',
    description: 'Building exceptional digital experiences with modern technologies.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans bg-[#0a0a0a] text-white antialiased`}>
        <SmoothScroll>
          <CustomCursor />
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
