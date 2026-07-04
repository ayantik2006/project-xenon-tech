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

export const metadata = {
  metadataBase: new URL("https://tech.hoardspace.in"),
  title: {
    default: "HoardSpace Technologies - A technology initiative by HoardSpace.",
    template: "%s | HoardSpace Technologies",
  },
  description:
    "Engineering insights, product updates, architecture, and technical articles from the team building HoardSpace, India's outdoor advertising platform.",
  keywords: [
    "HoardSpace",
    "Engineering",
    "Technology",
    "Next.js",
    "System Design",
    "Software Engineering",
    "Web Development",
    "Outdoor Advertising",
    "OOH",
    "DOOH",
    "Tech Blog",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased selection:bg-white selection:text-black`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
