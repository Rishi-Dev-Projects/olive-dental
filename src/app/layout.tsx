import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileBookButton } from "@/components/layout/StickyMobileBookButton";
import { LocalSeoJsonLd } from "@/components/seo/LocalSeoJsonLd";
import { CLINIC_INFO } from "@/data/clinic";

const serifFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1C2713",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://olivedentalcarebardoli.com"),
  title: {
    default: "Olive Dental Care Bardoli | Dentist & Dental Clinic in Bardoli",
    template: "%s | Olive Dental Care Bardoli",
  },
  description:
    "Looking for dental care in Bardoli? Visit Olive Dental Care for personalized dental consultations, gentle root canal treatment, full mouth rehabilitation, and professional oral healthcare. Rated 5.0 stars on Google.",
  keywords: [
    "Dentist in Bardoli",
    "Dental Clinic in Bardoli",
    "Best Dentist in Bardoli",
    "Olive Dental Care Bardoli",
    "Dental Care in Bardoli",
    "Dental Treatment in Bardoli",
    "Dr Himanshu Shah Bardoli",
    "Full Mouth Rehabilitation Bardoli",
    "Root Canal Treatment Bardoli",
    "Teeth Cleaning Bardoli",
  ],
  authors: [{ name: "Olive Dental Care" }],
  creator: "Olive Dental Care",
  publisher: "Olive Dental Care",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://olivedentalcarebardoli.com",
    siteName: "Olive Dental Care Bardoli",
    title: "Olive Dental Care Bardoli | Dentist & Dental Clinic in Bardoli",
    description:
      "Personalized dental care focused on comfort, precision, and confident smiles for every stage of life. Located at Platinum Plaza, Sardar Patel Marg, Bardoli.",
    images: [
      {
        url: "/logo.svg",
        width: 800,
        height: 800,
        alt: "Olive Dental Care Bardoli Logo & Clinical Identity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Olive Dental Care Bardoli | Dentist & Dental Clinic in Bardoli",
    description:
      "Modern, gentle dental care in Bardoli. 5.0 Google rating. Consultations at Platinum Plaza, Sardar Patel Marg.",
    images: ["/logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://olivedentalcarebardoli.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serifFont.variable} ${sansFont.variable} ${monoFont.variable}`}>
      <head>
        <LocalSeoJsonLd />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-ivory-50 text-charcoal-900 antialiased selection:bg-olive-800 selection:text-ivory-50">
        <Navbar />
        <main className="flex-1">{children}</main>
        <StickyMobileBookButton />
        <Footer />
      </body>
    </html>
  );
}
