import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Velo — Your Wellness, Your Way',
  description: 'Velo — practical, personalized wellness for real life.',
  openGraph: {
    title: 'Velo — Your Wellness, Your Way',
    description: 'Velo — practical, personalized wellness for real life.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Velo — Your Wellness, Your Way',
    description: 'Velo — practical, personalized wellness for real life.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#f36b3f" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
