import { Export2 } from "@/components/sections/Export2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Export Network | Western Metal Industries",
  description: "Discover our global export operations spanning numerous countries worldwide.",
};

export default function ExportPage() {
  return (
    <div className="min-h-screen pt-20">
      <Export2 />
    </div>
  );
}
