import type { Metadata } from "next";
import "./globals.css";
// 1. Import ONLY the Provider
import { ModalProvider } from "./ModalContext"; 

// 2. DELETE this line if it exists: 
// import ModalUI from "./ModalUI"; 

export const metadata: Metadata = {
  title: "Crescere Strategies",
  description: "Elite executive research and leadership consulting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* 3. Wrap everything in the Provider */}
        <ModalProvider>
          {children}
          {/* 4. DELETE <ModalUI /> if it is here. The provider handles it now. */}
        </ModalProvider>
      </body>
    </html>
  );
}
