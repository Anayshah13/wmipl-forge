import { Infrastructure } from "@/components/sections/Infrastructure";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Infrastructure | Western Metal Industries",
  description: "Look into our modern infrastructure equipped with the latest technology for aluminium manufacturing.",
};

export default function InfrastructurePage() {
  return (
    <div className="min-h-screen pt-20">
      <Infrastructure />
    </div>
  );
}
