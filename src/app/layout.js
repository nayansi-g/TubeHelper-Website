import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactPopup from "@/components/ContactPopup";
import { siteConfig } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "TubeHelper | Performance Marketing and Ecommerce Growth",
    template: "%s | TubeHelper",
  },
  description:
    "TubeHelper helps ecommerce and D2C brands scale profitably through performance marketing, SEO, analytics, automation, and full-funnel optimization.",
  keywords: [
    "TubeHelper",
    "performance marketing agency",
    "ecommerce growth agency",
    "shopify growth",
    "digital marketing services",
  ],
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: "TubeHelper",
    title: "TubeHelper | Performance Marketing and Ecommerce Growth",
    description:
      "Scale profitably with data-driven digital growth systems across paid media, SEO, analytics, and conversion optimization.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "TubeHelper" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TubeHelper | Performance Marketing and Ecommerce Growth",
    description:
      "Data-driven digital growth systems for ecommerce and D2C brands.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TubeHelper",
    url: siteConfig.url,
    email: "info@tubehelper.in",
    telephone: "+91 9897165137",
    sameAs: [],
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        <ContactPopup />
        {children}
        <Footer />
      </body>
    </html>
  );
}
