import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CryptoApp - Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de-DE">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased p-8`}
      >
      <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
      <main className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">{children}</main>
      </body>
    </html>
  );
}
