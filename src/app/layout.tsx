import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { playfair, sourceSans, sourceSerif } from "@/lib/fonts";
import {
  ROOT_METADATA,
  ORGANIZATION_JSONLD,
  WEBSITE_JSONLD,
  HOME_PRODUCT_JSONLD,
  faqJsonLd,
  HOME_FAQS,
} from "@/lib/seo";

export const metadata: Metadata = ROOT_METADATA;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const rootSchemas = [
    ORGANIZATION_JSONLD,
    WEBSITE_JSONLD,
    HOME_PRODUCT_JSONLD,
    faqJsonLd(HOME_FAQS),
  ];

  return (
    <html
      lang="en-IN"
      className={`${playfair.variable} ${sourceSans.variable} ${sourceSerif.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Pune" />
        <meta name="geo.position" content="18.5018;73.9252" />
        <meta name="ICBM" content="18.5018, 73.9252" />
        {rootSchemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body>
        <Providers>
          <main aria-label="Main content">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
