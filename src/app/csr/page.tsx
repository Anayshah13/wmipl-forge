import { CSR } from "@/components/sections/CSR";
import { CSR2 } from "@/components/sections/CSR2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Social Responsibility | Western Metal Industries",
  description: "Learn about our commitment to society and sustainable practices.",
};

export default function CSRPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="block md:hidden">
        <CSR />
      </div>
      <div className="hidden md:block">
        <CSR2 />
      </div>
    </div>
  );
}
