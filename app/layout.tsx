import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tech.hoardspace.in"),

  title: {
    default: "HoardSpace Technologies",
    template: "%s | HoardSpace Technologies",
  },

  description:
    "HoardSpace Technologies is the technology and product division of HoardSpace, building software products, developer tools, AI applications, and industry-focused platforms.",

  applicationName: "HoardSpace Technologies",

  keywords: [
    "HoardSpace",
    "HoardSpace Technologies",
    "Business Software",
    "Developer Tools",
    "Developer APIs",
    "AI",
    "Artificial Intelligence",
    "Workflow Automation",
    "SaaS",
    "Technology",
    "Software",
    "Products",
    "India",
  ],

  authors: [
    {
      name: "HoardSpace Technologies",
      url: "https://tech.hoardspace.in",
    },
  ],

  creator: "HoardSpace Technologies",
  publisher: "HoardSpace Technologies",

  category: "Technology",

  alternates: {
    canonical: "https://tech.hoardspace.in",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://tech.hoardspace.in",
    siteName: "HoardSpace Technologies",
    title: "HoardSpace Technologies",
    description:
      "Building software that powers modern businesses. A technology initiative by HoardSpace.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HoardSpace Technologies",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "HoardSpace Technologies",
    description: "Building software that powers modern businesses.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased selection:bg-white selection:text-black ${geistMono.className}`}
    >
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','G-7QY7QSC85H');
          `}
        </Script>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-7QY7QSC85H`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7QY7QSC85H');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Toaster
          position="top-center"
          theme="dark"
          toastOptions={{
            style: {
              background: "#09090b",
              color: "#fafafa",
              border: "1px solid #27272a",
            },
          }}
        />
      </body>
    </html>
  );
}
