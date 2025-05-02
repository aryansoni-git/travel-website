// src/app/layout.tsx
import "./globals.css";
import { Inter, Roboto_Flex } from 'next/font/google';
import type { Metadata } from "next";
import { defaultSEO } from "@/config/seo";

import { Providers } from "./providers";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import FloatingActions from "@/components/ui/FloatingActions";
import SEOJsonLD from "@/components/SEOJsonLD";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',    // ensures text is visible during load
  preload: true,      // preloads key font files
});

const roboto = Roboto_Flex({
  subsets: ['latin'],
  variable: '--font-roboto',  // CSS variable for Tailwind
  display: 'swap',
  preload: true,
});


export const metadata: Metadata = {
  metadataBase: new URL(defaultSEO.url),
  title: {
    default: defaultSEO.title,
    template: `%s | ${defaultSEO.siteName}`,
  },
  description: defaultSEO.description,
  keywords: defaultSEO.keywords,
  openGraph: {
    title: defaultSEO.title,
    description: defaultSEO.description,
    url: defaultSEO.url,
    siteName: defaultSEO.siteName,
    locale: defaultSEO.locale,
    type: "website",
    images: [
      {
        url: `${defaultSEO.url}/og-home.jpg`,
        width: 1200,
        height: 630,
        alt: "Expert Holidays and Tours",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultSEO.title,
    description: defaultSEO.description,
    site: defaultSEO.twitterHandle,
    images: [`${defaultSEO.url}/og-home.jpg`],
  },
  icons: {
    icon: "/images/symbol.png",
    apple: "/images/symbol.png",
  },
  robots: "index, follow",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className={`${inter.className} ${roboto.variable} light scroll-smooth antialiased`}>
      <body>
        <SEOJsonLD />
        <Providers>
          <Header />
          {children}
          <FloatingActions />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
