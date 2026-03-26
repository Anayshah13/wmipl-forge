import { CertificatesSection } from "@/components/sections/certificatesect";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certifications | Western Metal Industries",
  description: "View our ISO certifications and quality credentials underscoring our commitment to excellence.",
};

export default function CertificatesPage() {
  return (
    <div className="min-h-screen pt-20">
      <CertificatesSection />
    </div>
  );
}
