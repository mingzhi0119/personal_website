import type { Metadata } from 'next';
import './globals.css';
import { ErrorBoundary } from '@/components/ErrorBoundary';

export const metadata: Metadata = {
  title: 'Mingzhi Hu | AI in Business & Data Analytics',
  description: 'Personal website of Mingzhi Hu, Master of Science candidate in Artificial Intelligence in Business at the University of Rochester Simon Business School.',
  keywords: ['Mingzhi Hu', 'AI', 'Business', 'Data Analytics', 'Machine Learning', 'Tsinghua', 'Simon Business School'],
  openGraph: {
    title: 'Mingzhi Hu | Portfolio',
    description: 'Personal website of Mingzhi Hu, exploring Artificial Intelligence in Business.',
    type: 'website',
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
