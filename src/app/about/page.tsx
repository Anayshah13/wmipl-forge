import { About } from "@/components/sections/About";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "About Us — Aluminium Slug Manufacturer India Since 1978",
  description:
    "About Western Metal Industries (WMIPL): India's largest aluminium slug manufacturer in Pune with 75% market share, 99.7% pure aluminium, ISO certified since 1978. Serving Mumbai & global buyers.",
  path: "/about",
  keywords: ["aluminium slug manufacturer history", "WMIPL Pune", "aluminium India manufacturer"],
});

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <About />
    </div>
  );
}
