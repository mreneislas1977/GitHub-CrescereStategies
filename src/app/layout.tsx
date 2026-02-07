import type { Metadata } from "next";
import "./globals.css";
import { ModalProvider } from "./components/ModalContext";
import ModalUI from "./components/ModalUI";

export const metadata: Metadata = {
  title: "Crescere Strategies",
  description: "Executive Research & Leadership Consulting",
  icons: { apple: '/apple-touch-icon.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ModalProvider>
          {children}
          <ModalUI />
        </ModalProvider>
      </body>
    </html>
  );
}
// Force Build Sat Feb  7 03:01:50 AM UTC 2026
// Build Update Sat Feb  7 03:03:17 AM UTC 2026
