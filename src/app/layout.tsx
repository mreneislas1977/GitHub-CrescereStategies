import React from 'react';
import '../global.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Inter, Playfair_Display } from 'next/font/google';

// Load the fonts
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata = {
  title: 'Crescere Strategies',
  description: 'Organizational transformation for non-profits and start-ups.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={}>
      <body className="font-sans text-crescere-green bg-crescere-cream antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
