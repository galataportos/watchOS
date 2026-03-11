import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WatchOS | The Operating System for the Luxury Watch World",
  description: "Digital identity and data infrastructure platform for luxury watches.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground antialiased min-h-screen selection:bg-primary/30 selection:text-primary`}>
        {children}
      </body>
    </html>
  );
}
