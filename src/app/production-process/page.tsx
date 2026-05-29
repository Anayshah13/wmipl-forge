import { ProductionProcess } from "@/components/sections/ProductionProcess";
import { ProductionProcess2 } from "@/components/sections/ProductionProcess2";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Aluminium Slug Production Process — Manufacturing Pune India",
  description:
    "How WMIPL manufactures aluminium slugs in Pune: casting, rolling, blanking, annealing and finishing for plain, perforated and domed impact extrusion slugs. ISO-certified process.",
  path: "/production-process",
  keywords: [
    "aluminium slug manufacturing process",
    "how aluminium slugs are made",
    "impact extrusion slug production India",
  ],
});

export default function ProductionProcessPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="hidden md:block">
        <ProductionProcess />
      </div>
      <div className="block md:hidden">
        <ProductionProcess2 />
      </div>
    </div>
  );
}
