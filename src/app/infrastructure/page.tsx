import { Infrastructure } from "@/components/sections/Infrastructure";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Manufacturing Infrastructure — Aluminium Slugs Pune Plant",
  description:
    "Tour WMIPL's Hadapsar, Pune aluminium slug manufacturing infrastructure: rolling mills, slug presses, annealing and quality labs for high-volume plain, perforated and domed slug production.",
  path: "/infrastructure",
  keywords: ["aluminium slug factory Pune", "aluminium manufacturing plant India"],
});

export default function InfrastructurePage() {
  return (
    <div className="min-h-screen pt-20">
      <Infrastructure />
    </div>
  );
}
