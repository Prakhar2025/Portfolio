// Root layout with SEO, Analytics, and UI enhancements
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header, Footer } from '@/components/layout';
import { CustomCursor, ScrollProgress, BackToTop } from '@/components/ui';
import { SmoothScroll, ThemeProvider, PageLoader, GoogleAnalytics } from '@/components/providers';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

// Site URL - your Vercel deployment URL
const siteUrl = 'https://prakhar-dev-portfolio.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Prakhar Shukla | Software Engineer · AI/ML Engineer',
    template: '%s | Prakhar Shukla',
  },
  description: 'Software Engineer specializing in AI/ML, full-stack development, and SaaS products. Building exceptional digital experiences with modern technologies.',
  keywords: [
    'Prakhar Shukla',
    'Software Engineer',
    'AI Engineer',
    'ML Engineer',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'Python Developer',
    'SaaS Builder',
    'Deepfake Detection',
    'Portfolio',
  ],
  authors: [{ name: 'Prakhar Shukla', url: siteUrl }],
  creator: 'Prakhar Shukla',
  publisher: 'Prakhar Shukla',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Prakhar Shukla Portfolio',
    title: 'Prakhar Shukla | Software Engineer · AI/ML Engineer',
    description: 'Software Engineer specializing in AI/ML, full-stack development, and SaaS products. Building exceptional digital experiences with modern technologies.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Prakhar Shukla - Software Engineer & AI/ML Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prakhar Shukla | Software Engineer · AI/ML Engineer',
    description: 'Software Engineer specializing in AI/ML, full-stack development, and SaaS products.',
    images: ['/images/og-image.png'],
    creator: '@prakharshukla',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href={siteUrl} />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <GoogleAnalytics />
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
