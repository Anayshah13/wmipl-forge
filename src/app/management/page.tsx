import { Management } from "@/components/sections/Management";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Management | Western Metal Industries",
  description: "Meet the experienced management team that drives Western Metal Industries forward.",
};

export default function ManagementPage() {
  return (
    <div className="min-h-screen pt-20">
      <Management />
    </div>
  );
}
