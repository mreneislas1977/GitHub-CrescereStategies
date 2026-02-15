import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { ModalProvider } from './ModalContext'; // <--- Import Logic
import ModalUI from './ModalUI';                // <--- Import Visuals

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Crescere Strategies',
  description: 'Organizational Behavioral Architecture',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        {/* Wrap the app in the Provider */}
        <ModalProvider>
          {children}
          <ModalUI /> {/* The Popup lives here, floating above everything */}
        </ModalProvider>
      </body>
    </html>
  );
}
