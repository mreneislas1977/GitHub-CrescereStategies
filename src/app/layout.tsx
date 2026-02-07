import type { Metadata } from "next";
import "./globals.css";
import { ModalProvider } from "@/context/ModalContext";
import ModalUI from "@/components/ModalUI";

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
