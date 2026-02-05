import React from 'react';
import '../global.css'; // Import global styles
import Header from './components/Header';
import Footer from './components/Footer';

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
    <html lang="en">
      <body className="font-sans text-crescere-green bg-crescere-cream antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
