// Root layout with dark theme, smooth scroll, custom cursor, and UI enhancements
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header, Footer } from '@/components/layout';
import { CustomCursor, ScrollProgress, BackToTop } from '@/components/ui';
import { SmoothScroll, ThemeProvider, PageLoader } from '@/components/providers';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Prakhar Shukla | Software Engineer · AI/ML Engineer',
  description: 'Building exceptional digital experiences with modern technologies. Full-stack developer specializing in AI/ML and scalable SaaS products.',
  keywords: ['Software Engineer', 'AI Engineer', 'ML Engineer', 'SaaS', 'Full Stack Developer', 'Prakhar Shukla'],
  authors: [{ name: 'Prakhar Shukla' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.com',
    title: 'Prakhar Shukla | Software Engineer · AI/ML Engineer',
    description: 'Building exceptional digital experiences with modern technologies.',
    siteName: 'Prakhar Shukla Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prakhar Shukla | Software Engineer · AI/ML Engineer',
    description: 'Building exceptional digital experiences with modern technologies.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <PageLoader />
          <ScrollProgress />
          <SmoothScroll>
            <CustomCursor />
            <Header />
            <main>{children}</main>
            <Footer />
            <BackToTop />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
