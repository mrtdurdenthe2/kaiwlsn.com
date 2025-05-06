import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "kai wilson",
  description: "Kai Wilson's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black flex flex-col items-center min-h-screen`}
      >
        <div className="w-full flex-1 flex flex-col items-center justify-center pb-16">
          {children}
        </div>
        <div className="fixed bottom-4 left-0 w-full flex justify-center px-4">
          <NavBar />
        </div>
      </body>
    </html>
  );
}
