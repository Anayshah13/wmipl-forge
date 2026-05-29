import { CSR2 } from "@/components/sections/CSR2";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "CSR — Corporate Social Responsibility | WMIPL Pune",
  description:
    "Western Metal Industries corporate social responsibility initiatives in Pune and Maharashtra communities alongside India's leading aluminium slug manufacturing operations.",
  path: "/csr",
});

export default function CSRPage() {
  return (
    <div className="min-h-screen pt-20">
      <CSR2 />
    </div>
  );
}
