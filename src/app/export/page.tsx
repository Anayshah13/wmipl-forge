import { Export2 } from "@/components/sections/Export2";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Aluminium Slug Export from India — Global Supply",
  description:
    "WMIPL exports aluminium slugs from Pune, India to UAE, Saudi Arabia, Bangladesh, South Africa, New Zealand and 50+ markets. One-Star Export House. ISO certified manufacturer.",
  path: "/export",
  keywords: [
    "aluminium slug exporter India",
    "export aluminium slugs Pune",
    "aluminium slug supplier international",
  ],
});

export default function ExportPage() {
  return (
    <div className="min-h-screen pt-20">
      <Export2 />
    </div>
  );
}
