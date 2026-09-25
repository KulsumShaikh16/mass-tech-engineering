import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import ScrollToTop from "@/components/ui/ScrollToTop";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mastechpak.com"),
  title: { default: "Mas Tech Engineering — Solar, CCTV & Security Systems", template: "%s | Mas Tech Engineering" },
  description: "Mas Tech Engineering delivers turnkey solar power arrays, AI CCTV surveillance, automatic barrier gates, electric fencing, walk-through metal detectors, elevators and electrical engineering across Islamabad & Rawalpindi.",
  keywords: [
    "solar systems Islamabad",
    "CCTV installation Islamabad",
    "electric fencing Rawalpindi",
    "barrier gate systems Pakistan",
    "walk through gates Islamabad",
    "elevator installation Pakistan",
    "Mas Tech Engineering"
  ],
  authors: [{ name: "Mas Tech Engineering" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/mastech-logo-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Mas Tech Engineering",
    title: "Mas Tech Engineering — Smart Solutions, Strong Security, Bright Future",
    description: "Complete turnkey engineering and security solutions: solar arrays, CCTV, access gates, perimeter fencing, elevators and industrial electrical works.",
    images: [
      {
        url: "/mastech-brand-board.jpg",
        width: 1200,
        height: 630,
        alt: "Mas Tech Engineering Brand Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mas Tech Engineering",
    description: "Solar power, AI CCTV, walk-through gates, barrier gates, electric fencing & elevators in Islamabad.",
    images: ["/mastech-brand-board.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Mas Tech Engineering",
  "image": "https://www.mastechpak.com/mastech-logo-official.jpeg",
  "@id": "https://www.mastechpak.com",
  "url": "https://www.mastechpak.com",
  "telephone": ["+923212103576", "+923369222274"],
  "email": "mastechengineering@outlook.com",
  "priceRange": "$$",
  "address": [
    {
      "@type": "PostalAddress",
      "name": "Head Office — Karachi",
      "streetAddress": "Suit No. # 7-8, Mina Avenue, Shahrah-e-Faisal",
      "addressLocality": "Karachi",
      "addressRegion": "Sindh",
      "postalCode": "75350",
      "addressCountry": "PK"
    },
    {
      "@type": "PostalAddress",
      "name": "Branch Office — Islamabad",
      "streetAddress": "Suit No. # 203., J1 Tower, B-Block, Faisal Town",
      "addressLocality": "Islamabad",
      "addressRegion": "ICT",
      "postalCode": "44000",
      "addressCountry": "PK"
    }
  ],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 24.8607,
    "longitude": 67.0011
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Saturday",
      "Sunday"
    ],
    "opens": "09:00",
    "closes": "19:00"
  },
  "sameAs": [
    "https://wa.me/923212103576",
    "https://wa.me/923369222274"
  ],
  "areaServed": [
    "Karachi",
    "Islamabad",
    "Rawalpindi",
    "Sindh",
    "Punjab",
    "Pakistan"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Engineering & Security Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CCTV Camera Systems & AI Surveillance" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial & Residential Solar Power Systems" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Walk Through Metal Detector Gates" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Automatic Boom Barrier Gate Systems" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "High-Voltage Electric Perimeter Fencing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Passenger & Freight Elevator Systems" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Escalators" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Industrial Electrical Works & Panel Boards" } }
    ]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main id="main" className="min-h-screen pt-[74px] sm:pt-[80px] lg:pt-[108px]">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
        <ScrollToTop />
      </body>
    </html>
  );
}

