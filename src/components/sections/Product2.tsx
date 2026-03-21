"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProductStat {
    name: string;
    icon: string;
}

export const Product2 = () => {
    const [activeIndex, setActiveIndex] = useState(-1);

    const rawProducts = [
        {
            name: "Without Center Hole",
            subname: "",
            image: "/wocenter.png",
            desc: "Our Without Center Hole slugs (Plain Slugs) are the foundation for rigid containers used in the food, pesticide, and electronics industries. Manufactured with high-purity aluminium, these slugs ensure excellent formability and surface finish, making them ideal for impact extrusion processes. They provide superior barrier properties, protecting contents from moisture, light, and oxygen.",
        },
        {
            name: "With Center Hole",
            subname: "",
            image: "/wchole.png",
            desc: "Our Center Hole slugs (Perforated Slugs) are specifically designed for the production of collapsible tubes used in the pharmaceutical and cosmetic industries. The precision-engineered center hole allows for the attachment of nozzles and caps. These slugs are produced with tight tolerances to ensure seamless manufacturing of collapsible tubes that are hygienic, non-toxic, and tamper-evident.",
        },
        {
            name: "Domed / Taper",
            subname: "",
            image: "/domed.png",
            desc: "Our Domed / Taper slugs are specialized shapes engineered for the manufacturing of monobloc aerosol cans. Widely used for perfumes, deodorants, and sanitizers, these slugs facilitate the impact extrusion of high-pressure cans. They offer exceptional strength and integrity, ensuring safety and reliability for pressurized products.",
        }
    ];

    const endProducts: ProductStat[] = [
        { name: "Cans", icon: "/cans.png" },
        { name: "Tubes", icon: "/tubes.png" },
        { name: "Bottles", icon: "/bottles.png" },
        { name: "Others", icon: "/others.png" },
    ];

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="products2" className="min-h-screen w-full overflow-x-hidden bg-[url('/products.png')] bg-cover bg-center bg-no-repeat relative flex flex-col justify-center">
            <div className="absolute inset-0 bg-white/40 z-0" />
            <div className="relative z-10 w-full h-full py-10 flex flex-col justify-center">

                <div className="w-[95%] md:w-[87%] mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
                    {/* Header */}
                    <div className="flex flex-col items-center text-center mb-10">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="max-w-3xl"
                        >
                            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-2">
                                Product Portfolio
                            </h2>
                            <p className="text-2xl text-gray-800 font-medium">
                                Precision-engineered aluminium solutions for global industries.
                            </p>
                        </motion.div>
                    </div>

                    {/* Top Section: Raw Products (3 Columns) - Condensed */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        {rawProducts.map((product, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300"
                            >
                                {/* Image Section - Full Width & Height */}
                                <div className="h-48 relative bg-gradient-to-b from-gray-50 to-white flex items-center justify-center overflow-hidden">
                                    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] opacity-50" />
                                    <Image
                                        src={product.image}
                                        alt={`${product.name} — Western Metal Industries aluminium slug product`}
                                        width={400}
                                        height={400}
                                        className="w-full h-full object-cover relative z-10 drop-shadow-lg"
                                    />
                                </div>

                                {/* Content Section - Compact */}
                                <div className="p-4 flex-grow flex flex-col justify-start bg-white relative">
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-0.5">{product.name}</h3>
                                        {product.subname && <p className="text-[10px] text-blue-600 font-semibold">{product.subname}</p>}
                                    </div>
                                    <div className="w-10 h-1 bg-gray-100 rounded mb-2 mt-2"></div>
                                    <p className="text-gray-600 text-xs leading-relaxed line-clamp-4">
                                        {product.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom Section: 2 Columns */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Column 1: Technical Specifications Table - Expanded Columns */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="bg-white/30 rounded-2xl shadow-lg border border-white/20 p-2 overflow-hidden flex flex-col justify-center"
                        >
                            <div className="flex items-center gap-2 p-2 pb-1">
                                <div className="h-4 w-1 bg-blue-800 rounded-full"></div>
                                <h3 className="text-base font-bold text-gray-900 uppercase">
                                    Technical Specifications
                                </h3>
                            </div>
                            <div className="overflow-x-auto p-1">
                                <table className="w-full text-xs text-center border-collapse">
                                    <thead className="bg-blue-900 text-white">
                                        <tr>
                                            <th className="p-1.5 text-left font-bold rounded-tl-lg" rowSpan={2}>Type</th>
                                            <th className="p-1.5 font-bold border-b border-blue-700" colSpan={2}>Diameter (mm)</th>
                                            <th className="p-1.5 font-bold border-b border-blue-700 rounded-tr-lg" colSpan={2}>Thickness (mm)</th>
                                        </tr>
                                        <tr>
                                            <th className="p-1.5 font-semibold bg-blue-800">Min</th>
                                            <th className="p-1.5 font-semibold bg-blue-800">Max</th>
                                            <th className="p-1.5 font-semibold bg-blue-800">Min</th>
                                            <th className="p-1.5 font-semibold bg-blue-800">Max</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        <tr className="hover:bg-blue-50 transition-colors">
                                            <td className="p-1.5 text-left font-bold text-blue-900">Without Center Hole</td>
                                            <td className="p-1.5 text-gray-700">9.8</td>
                                            <td className="p-1.5 text-gray-700">135.8</td>
                                            <td className="p-1.5 text-gray-700">2</td>
                                            <td className="p-1.5 text-gray-700">15.4</td>
                                        </tr>
                                        <tr className="hover:bg-blue-50 transition-colors">
                                            <td className="p-1.5 text-left font-bold text-blue-900">Domed / Taper</td>
                                            <td className="p-1.5 text-gray-700">9.8</td>
                                            <td className="p-1.5 text-gray-700">135.8</td>
                                            <td className="p-1.5 text-gray-700">2</td>
                                            <td className="p-1.5 text-gray-700">15.4</td>
                                        </tr>
                                        <tr className="hover:bg-blue-50 transition-colors">
                                            <td className="p-1.5 text-left font-bold text-blue-900">With Center Hole</td>
                                            <td className="p-1.5 text-gray-700">12.5</td>
                                            <td className="p-1.5 text-gray-700">135.8</td>
                                            <td className="p-1.5 text-gray-700">2</td>
                                            <td className="p-1.5 text-gray-700">7</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>

                        {/* Column 2: Applications (1x4 Layout) - Reduced Height */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="bg-white/50 p-4 rounded-2xl border border-gray-100 shadow-xl flex flex-col justify-center"
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <div className="h-4 w-1 bg-blue-800 rounded-full"></div>
                                <h3 className="text-base font-bold text-gray-900 uppercase">
                                    Applications
                                </h3>
                            </div>
                            <div className="grid grid-cols-4 gap-3 h-full items-center">
                                {endProducts.map((product, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center gap-1.5 group cursor-default transition-all duration-300 text-center"
                                        onMouseEnter={() => setActiveIndex(index)}
                                        onMouseLeave={() => setActiveIndex(-1)}
                                    >
                                        {/* Reduced Image Container Aspect Ratio or size */}
                                        <div className={`w-[80%] rounded-lg flex items-center justify-center transition-all duration-300 overflow-hidden ${activeIndex === index ? 'bg-blue-100 scale-105' : 'bg-gray-50 group-hover:bg-blue-50'}`}>
                                            <Image src={product.icon} alt={`${product.name} — aluminium slug application`} width={80} height={80} className="w-full h-full object-cover text-center" />
                                        </div>
                                        <span className={`text-s font-bold transition-colors ${activeIndex === index ? 'text-blue-800' : 'text-gray-700 group-hover:text-blue-700'}`}>
                                            {product.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                <button
                    onClick={() => scrollToSection('production-process')}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-primary animate-bounce bg-white/50 p-2 rounded-full backdrop-blur-sm hover:bg-white/80 transition-colors"
                >
                    <ChevronDown size={32} />
                </button>
            </div>
        </section>
    );
};
