import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sindicom",
  description: "Carlos by delopements",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={
          `${geistSans.variable} 
          ]${geistMono.variable} antialiased
          flex flex-col w-screen bg-black h-screen text-white
      `}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
