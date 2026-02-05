// src/app/layout.tsx updates:
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <body className="font-body bg-crescere-cream text-crescere-brown antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
