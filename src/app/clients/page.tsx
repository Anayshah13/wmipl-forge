import { ClientsPage2 } from "@/components/sections/ClientsPage2";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Clients — Aluminium Slug Customers in India & Worldwide",
  description:
    "WMIPL aluminium slug clients include leading pharma, FMCG and aerosol brands in India, Mumbai, Pune and export markets. Trusted aluminium slug supplier since 1978.",
  path: "/clients",
  keywords: ["aluminium slug customers India", "pharma aerosol slug clients"],
});

export default function ClientsPage() {
  return (
    <div className="min-h-screen pt-20">
      <ClientsPage2 />
    </div>
  );
}
