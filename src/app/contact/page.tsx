import { Contact } from "@/components/sections/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Western Metal Industries",
  description: "Get in touch with Western Metal Industries for all your aluminium slug requirements.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      <Contact />
    </div>
  );
}
