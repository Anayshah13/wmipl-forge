import { Metadata } from "next";
import { Product2 } from "@/components/sections/Product2";

export const metadata: Metadata = {
  // SEO Hint: Target "Aluminium Slugs for Pharmaceutical Tubes | WMIPL India"
  title: "Perforated Aluminium Slugs (With Center Hole) | Manufacturer India",
  description: "Premium perforated aluminium slugs with center hole for collapsible tubes in pharmaceuticals and cosmetics. ISO certified manufacturer.",
  keywords: ["perforated aluminium slugs", "slugs with center hole", "collapsible tube slugs", "pharmaceutical tube slugs India"],
};

export default function PerforatedAluminiumSlugsPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Perforated Aluminium Slugs</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-3xl">
          Perforated aluminium slugs featuring a precise center hole are designed specifically 
          for manufacturing collapsible aluminium tubes used extensively in the pharmaceutical 
          and cosmetic industries.
        </p>
      </div>
      <Product2 />
    </div>
  );
}
