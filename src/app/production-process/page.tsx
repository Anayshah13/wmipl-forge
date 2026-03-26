import { ProductionProcess } from "@/components/sections/ProductionProcess";
import { ProductionProcess2 } from "@/components/sections/ProductionProcess2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Production Process | Western Metal Industries",
  description: "Explore our state-of-the-art production process for manufacturing high-quality aluminium slugs.",
};

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
