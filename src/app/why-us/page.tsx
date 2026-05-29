import { WhyWMIPL } from "@/components/sections/WhyWMIPL";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Why Choose WMIPL — India's Leading Aluminium Slug Manufacturer",
  description:
    "Why buyers choose Western Metal Industries: 75% India market share, 99.7% pure aluminium slugs, ISO 9001/14001/45001 certified Pune plant, trusted by Cipla, L'Oréal, GSK and 50+ brands.",
  path: "/why-us",
  keywords: ["best aluminium slug manufacturer India", "why WMIPL", "aluminium slug quality India"],
});

export default function WhyUsPage() {
  return (
    <div className="min-h-screen pt-20">
      <WhyWMIPL />
    </div>
  );
}
