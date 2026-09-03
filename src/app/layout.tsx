import type { Metadata } from "next";
import "./globals.css";
import { portfolio } from "@/data/portfolio";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Deshraj Verma | Full Stack Developer",
    template: "%s | Deshraj Verma"
  },
  description: portfolio.profile.intro,
  applicationName: "Deshraj Verma Portfolio",
  authors: [{ name: "Deshraj Verma", url: siteUrl }],
  creator: "Deshraj Verma",
  publisher: "Deshraj Verma",
  category: "technology",
  keywords: [
    "Deshraj Verma",
    "Full Stack Developer",
    "Software Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Java Developer",
    "TypeScript Developer",
    "Supabase Developer",
    "AI Full Stack Developer"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Deshraj Verma | Full Stack Developer",
    description: portfolio.profile.intro,
    url: "/",
    siteName: "Deshraj Verma Portfolio",
    type: "website",
    locale: "en_IN"
  },
  twitter: {
    card: "summary_large_image",
    title: "Deshraj Verma | Full Stack Developer",
    description: portfolio.profile.intro,
    creator: "@deshrajv_dev"
  },
  icons: {
    icon: "/icon.svg"
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
