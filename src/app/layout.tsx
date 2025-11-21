import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MobileNav from "@/components/MobileNav";
import Chatbot from "@/components/Chatbot";
import Watermark from "@/components/Watermark";
import LogoHeader from "@/components/LogoHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Join Quran Mobile",
  description: "Learn Quran Online - Mobile App",
  manifest: "/manifest.json",
  themeColor: "#047857",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground pb-16 pt-14`}
      >
        <Watermark />
        <LogoHeader />
        <main className="min-h-screen flex flex-col relative z-10">
          {children}
        </main>
        <Chatbot />
        <MobileNav />
      </body>
    </html>
  );
}
