import type { Metadata } from 'next';
import './globals.css';
import { ErrorBoundary } from '@/components/ErrorBoundary';

export const metadata: Metadata = {
  title: 'Mingzhi Hu | AI in Business & Data Analytics',
  description: 'Personal website of Mingzhi Hu, Master of Science candidate in Artificial Intelligence in Business at the University of Rochester Simon Business School.',
  keywords: ['Mingzhi Hu', 'AI', 'Business', 'Data Analytics', 'Machine Learning', 'Tsinghua', 'Simon Business School'],
  metadataBase: new URL('https://mingzhi0119.github.io/personal_website'),
  openGraph: {
    title: 'Mingzhi Hu | Portfolio',
    description: 'Personal website of Mingzhi Hu, exploring Artificial Intelligence in Business.',
    url: 'https://mingzhi0119.github.io/personal_website',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Mingzhi Hu – Portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mingzhi Hu | Portfolio',
    description: 'Personal website of Mingzhi Hu, exploring Artificial Intelligence in Business.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen">
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
