import { Product2 } from "@/components/sections/Product2";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Aluminium Slugs Products — Plain, Perforated & Domed | India",
  description:
    "WMIPL aluminium slug range: plain slugs without center hole, perforated slugs with center hole, and domed/taper slugs for aerosol cans. Manufactured in Pune, India. ISO certified.",
  path: "/products",
  keywords: [
    "aluminium slug types",
    "plain perforated domed aluminium slugs",
    "aluminium slugs catalogue India",
  ],
});

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-20">
      <Product2 />
    </div>
  );
}
