import React from "react";
import { Card } from "@/components/ui/card";
import { Cylinder, Pipette, FlaskConical, Package, ArrowRight, ChevronDown } from "lucide-react";

interface SlugType {
  name: string;
  application: string;
  desc: string;
  image: string;
}

interface ProductStat {
  name: string;
  percentage: number;
  color: string;
  icon: string;
}

export const Products = () => {
  const slugTypes: SlugType[] = [
    {
      name: "Without Center Hole",
      application: "Containers for Food, Pesticide, Electronics Industry",
      desc: "Plain Slugs",
      image: "/wocenter.png",
    },
    {
      name: "With Center Hole",
      application: "Tubes for Pharmaceutical & Cosmetic Industry",
      desc: "Perforated Slugs",
      image: "/wchole.png",
    },
    {
      name: "Domed / Taper",
      application: "Aerosol Cans for Perfume, Deodorants, Sanitizers",
      desc: "Specialty Shapes",
      image: "/domed.png",
    },
  ];

  const endProducts: ProductStat[] = [
    { name: "Cans", percentage: 43, color: "#4a4e55ff", icon: "/cans.png" }, // gray-700
    { name: "Tubes", percentage: 34, color: "#0f35b3ff", icon: "/tubes.png" }, // blue-800 (primary)
    { name: "Bottles", percentage: 16, color: "#9ca3af", icon: "/bottles.png" }, // gray-400
    { name: "Others", percentage: 7, color: "#000000ff", icon: "/others.png" }, // gray-200
  ];

  // Helper to generate Conic Gradient for the donut chart
  const getConicGradient = () => {
    let currentDeg = 0;
    const gradientParts = endProducts.map((product) => {
      const deg = (product.percentage / 100) * 360;
      const segment = `${product.color} ${currentDeg}deg ${currentDeg + deg}deg`;
      currentDeg += deg;
      return segment;
    });
    return `conic-gradient(${gradientParts.join(", ")})`;
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="products" className="min-h-screen w-full overflow-x-hidden py-24 bg-gradient-to-b from-white to-gray-50 relative">
      <div className="section-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-200 pb-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 uppercase tracking-tight mb-4">
              Product Portfolio
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Precision-engineered aluminium solutions for global industries.
            </p>
          </div>
          <div className="hidden md:block">
            <img src="/icon.jpg" alt="WMIPL Logo" className="h-24 w-auto object-contain" />
          </div>
        </div>

        {/* Main Grid Layout replicating the Image Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* COLUMN 1: Aluminium Slug Types (Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-8 w-1 bg-blue-800 rounded-full"></div>
              <h3 className="text-2xl font-bold text-gray-900 uppercase">
                Aluminium Slug Types
              </h3>
            </div>

            <div className="space-y-6">
              {slugTypes.map((type, index) => (
                <Card key={index} className="group flex flex-row overflow-hidden h-36 border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white ring-1 ring-gray-100">
                  <div className="w-1/3 relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors z-10" />
                    <img
                      src={type.image}
                      alt={type.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="w-2/3 p-5 flex flex-col justify-center relative">
                    <h4 className="font-bold text-gray-900 text-lg leading-tight mb-2 group-hover:text-blue-800 transition-colors">
                      {type.name}
                    </h4>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Application</span>
                      <p className="text-sm text-gray-600 leading-snug">
                        {type.application}
                      </p>
                    </div>
                    <ArrowRight className="absolute bottom-4 right-4 w-4 h-4 text-gray-300 group-hover:text-blue-800 group-hover:translate-x-1 transition-all" />
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* COLUMN 2: End Products (Span 3) - The "Blue" Column */}
          <div className="lg:col-span-3 flex flex-col h-full shadow-2xl rounded-2xl overflow-hidden ring-1 ring-black/5">
            <div className="bg-blue-900 text-white p-6">
              <h3 className="font-bold uppercase text-xl tracking-wide">End-Products</h3>
              <p className="text-blue-200 text-sm mt-1">Key applications</p>
            </div>
            <div className="flex-grow flex flex-col bg-slate-900">
              {endProducts.map((product, index) => (
                <div
                  key={index}
                  className="flex-1 flex items-center border-b border-white/5 last:border-0 p-6 hover:bg-white/5 transition-all duration-300 group cursor-default"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-lg mr-5 flex items-center justify-center text-blue-200 group-hover:text-white group-hover:scale-110 transition-all shadow-inner overflow-hidden p-2">
                    <img src={product.icon} alt={product.name} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-medium text-gray-100 group-hover:text-white transition-colors">
                      {product.name}
                    </span>
                    <span className="text-sm text-gray-500 group-hover:text-blue-300 transition-colors">
                      {product.percentage}% Market Share
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* COLUMN 3: Data & Charts (Span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-8">

            {/* Table Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-1 overflow-hidden">
              <div className="flex items-center gap-3 p-4 pb-2">
                <div className="h-6 w-1 bg-blue-800 rounded-full"></div>
                <h3 className="text-lg font-bold text-gray-900 uppercase">
                  Technical Specifications
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-center">
                  <thead className="bg-gray-50 text-gray-700">
                    <tr>
                      <th className="p-3 text-left font-semibold">Range Type</th>
                      <th className="p-3 font-semibold">Min Dia.</th>
                      <th className="p-3 font-semibold">Max Dia.</th>
                      <th className="p-3 font-semibold">Min Thick.</th>
                      <th className="p-3 font-semibold">Max Thick.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-blue-50/50 transition-colors">
                      <td className="p-3 text-left font-medium text-gray-900">Without Center Hole</td>
                      <td className="p-3 text-gray-600">9.8</td>
                      <td className="p-3 text-gray-600">135.8</td>
                      <td className="p-3 text-gray-600">2</td>
                      <td className="p-3 text-gray-600">15.4</td>
                    </tr>
                    <tr className="hover:bg-blue-50/50 transition-colors">
                      <td className="p-3 text-left font-medium text-gray-900">Domed / Taper</td>
                      <td className="p-3 text-gray-600">9.8</td>
                      <td className="p-3 text-gray-600">135.8</td>
                      <td className="p-3 text-gray-600">2</td>
                      <td className="p-3 text-gray-600">15.4</td>
                    </tr>
                    <tr className="hover:bg-blue-50/50 transition-colors">
                      <td className="p-3 text-left font-medium text-gray-900">With Center Hole</td>
                      <td className="p-3 text-gray-600">12.5</td>
                      <td className="p-3 text-gray-600">56.7</td>
                      <td className="p-3 text-gray-600">2</td>
                      <td className="p-3 text-gray-600">7</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Chart Section */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16 opacity-50"></div>
              <h3 className="text-sm font-bold text-gray-500 uppercase mb-8 text-center tracking-widest">
                Sales Utilisation by Product
              </h3>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
                {/* CSS-Only Donut Chart */}
                <div
                  className="relative w-48 h-48 rounded-full shadow-2xl ring-4 ring-white"
                  style={{ background: getConicGradient() }}
                >
                  <div className="absolute inset-0 m-auto w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-inner">
                    {/* Text removed as requested */}
                  </div>
                </div>

                {/* Legend */}
                <div className="grid grid-cols-1 gap-4">
                  {endProducts.map((product, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div
                        className="w-4 h-4 rounded-full shadow-sm ring-1 ring-black/5"
                        style={{ backgroundColor: product.color }}
                      />
                      <span className="text-gray-700 font-medium">
                        {product.name} <span className="text-gray-400 text-sm ml-1">({product.percentage}%)</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('production-process')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-blue-800 animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};