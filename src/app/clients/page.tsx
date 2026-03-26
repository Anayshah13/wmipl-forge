import { ClientsPage2 } from "@/components/sections/ClientsPage2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Clients | Western Metal Industries",
  description: "See the global brands and leading companies that trust our aluminium slugs.",
};

export default function ClientsPage() {
  return (
    <div className="min-h-screen pt-20">
      <ClientsPage2 />
    </div>
  );
}
