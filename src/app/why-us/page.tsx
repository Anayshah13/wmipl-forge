import { WhyWMIPL } from "@/components/sections/WhyWMIPL";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Choose Us | Western Metal Industries",
  description: "Discover why Western Metal Industries is the preferred choice for aluminium slugs.",
};

export default function WhyUsPage() {
  return (
    <div className="min-h-screen pt-20">
      <WhyWMIPL />
    </div>
  );
}
