import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Certifications — ISO Aluminium Slug Manufacturer Pune",
  description:
    "ISO 9001:2015, ISO 14001:2015, ISO 45001:2018 and One-Star Export House certifications at Western Metal Industries — India's leading aluminium slug manufacturer in Pune.",
  path: "/certifications",
  keywords: ["ISO 9001 aluminium slug", "certified aluminium slug manufacturer Pune"],
});

export default function CertificationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
