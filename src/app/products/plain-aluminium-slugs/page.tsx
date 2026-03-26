import { Metadata } from "next";
import { Product2 } from "@/components/sections/Product2";

export const metadata: Metadata = {
  // SEO Hint: Target "Plain Aluminium Slugs (Without Center Hole) | Manufacturer India"
  title: "Plain Aluminium Slugs (Without Center Hole) | Manufacturer India",
  description: "High-quality plain aluminium slugs without center hole for monobloc aerosol cans and rigid bottles. Manufactured by WMIPL, India.",
  keywords: ["plain aluminium slugs", "slugs without center hole", "aerosol can slugs", "plain slug manufacturer India"],
};

export default function PlainAluminiumSlugsPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Plain Aluminium Slugs</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-3xl">
          Our plain aluminium slugs (without center hole) are precisely engineered for the 
          manufacture of monobloc aerosol cans, rigid aluminium bottles, and other impact 
          extrusion products. Made from 99.7% pure aluminium, ensuring optimal formability and strength.
        </p>
      </div>
      <Product2 />
    </div>
  );
}
