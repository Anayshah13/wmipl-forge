import { About } from "@/components/sections/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Western Metal Industries",
  description: "Learn more about Western Metal Industries, India's largest aluminium slug manufacturer.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <About />
    </div>
  );
}
