import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const siteBase = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000/");
const socialImage = new URL("og.png", siteBase).toString();

export const metadata: Metadata = {
  metadataBase: siteBase,
  title: { default: "Gregory General Contractors", template: "%s | Gregory General Contractors" },
  description: "A first-draft website for Gregory General Contractors, Inc., a Wilsonville-based residential general contractor. Oregon CCB #161158.",
  openGraph: {
    type: "website",
    title: "Gregory General Contractors",
    description: "Built right. Repaired with care. Wilsonville, Oregon · Oregon CCB #161158.",
    images: [{ url: socialImage, width: 1732, height: 909, alt: "Gregory General Contractors — Built right. Repaired with care." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gregory General Contractors",
    description: "Built right. Repaired with care. Wilsonville, Oregon · Oregon CCB #161158.",
    images: [socialImage],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: "Gregory General Contractors, Inc.",
    url: siteBase.toString(),
    telephone: "+1-503-490-8450",
    address: { "@type": "PostalAddress", addressLocality: "Wilsonville", addressRegion: "OR", addressCountry: "US" },
    identifier: { "@type": "PropertyValue", name: "Oregon CCB", value: "161158" },
  };
  return <html lang="en"><body className={geist.variable}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />{children}</body></html>;
}
