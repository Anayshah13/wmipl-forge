import { CertificatesSection } from "@/components/sections/certificatesect";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Certificates — ISO Aluminium Slug Manufacturer India",
  description:
    "WMIPL certificates: ISO 9001:2015, ISO 14001:2015, ISO 45001:2018 and export recognition. Quality certifications for aluminium slug manufacturing in Pune, India.",
  path: "/certificates",
  keywords: ["ISO aluminium slug manufacturer", "certified aluminium slugs India"],
});

export default function CertificatesPage() {
  return (
    <div className="min-h-screen pt-20">
      <CertificatesSection />
    </div>
  );
}
