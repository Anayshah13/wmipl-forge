import { Product2 } from "@/components/sections/Product2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Western Metal Industries",
  description: "Explore our range of aluminium slugs including plain, perforated, and domed types.",
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-20">
      <Product2 />
    </div>
  );
}
