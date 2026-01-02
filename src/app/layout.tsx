import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/Sidebar";
import { DynamicBackground } from "@/components/ui/DynamicBackground";
import { SystemFooter } from "@/components/ui/SystemFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "USER_PORTFOLIO [Browser-Use]",
  description: "Automation Tasks and Engineering Log",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-zinc-200 min-h-screen flex text-sm`}
      >
        <DynamicBackground />

        <Sidebar />

        <main className="flex-1 md:ml-64 relative z-10 min-h-screen flex flex-col pb-16">
          {children}
        </main>

        <SystemFooter />
      </body>
    </html>
  );
}
