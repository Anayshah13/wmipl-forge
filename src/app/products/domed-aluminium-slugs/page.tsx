import { Metadata } from "next";
import { Product2 } from "@/components/sections/Product2";

export const metadata: Metadata = {
  // SEO Hint: Target "Domed & Taper Aluminium Slugs for Impact Extrusion"
  title: "Domed & Taper Aluminium Slugs | Manufacturer India",
  description: "Specialized domed and taper aluminium slugs tailored for complex impact extrusion applications and aerosol containers.",
  keywords: ["domed aluminium slugs", "taper aluminium slugs", "impact extrusion slugs", "aerosol container blanks India"],
};

export default function DomedAluminiumSlugsPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Domed & Taper Aluminium Slugs</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-3xl">
          Our domed and taper aluminium slugs provide the ideal starting shape for deeper, 
          more complex impact extrusion processes, enabling perfect material flow and 
          wall thickness distribution for premium aerosol containers.
        </p>
      </div>
      <Product2 />
    </div>
  );
}
