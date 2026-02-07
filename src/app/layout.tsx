import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Crescere Strategies",
  description: "Executive Research & Leadership Consulting",
  icons: {
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
