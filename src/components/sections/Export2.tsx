
import { useState } from "react";
import WorldMap from "@/components/ui/world-map";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const countriesData = [
    {
        name: "New Zealand",
        code: "nz",
        lat: -41.2866,    // Wellington (capital of NZ) :contentReference[oaicite:1]{index=1}
        lng: 174.7760,
    },
    {
        name: "South Africa",
        code: "za",
        lat: -25.7449,    // Pretoria (administrative capital) :contentReference[oaicite:2]{index=2}
        lng: 28.1878,
    },
    {
        name: "Bangladesh",
        code: "bd",
        lat: 23.7231,     // Dhaka (capital of BD) :contentReference[oaicite:3]{index=3}
        lng: 90.4086,
    },
    {
        name: "UAE",
        code: "ae",
        lat: 24.4539,     // Abu Dhabi (capital of UAE approx) :contentReference[oaicite:4]{index=4}
        lng: 54.3773,
    },
    {
        name: "Saudi Arabia",
        code: "sa",
        lat: 24.7743,     // Riyadh (capital of SA) :contentReference[oaicite:5]{index=5}
        lng: 46.7386,
    },
];


export const Export2 = () => {
    const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    const dots = countriesData.map((country) => {
        const isHovered = hoveredCountry === country.name;
        // Primary Blue: #00aeffff, Highlight Yellow: #EAB308
        const color = isHovered ? "#EAB308" : "#0ea5e9";

        return {
            start: { lat: 18.5204, lng: 73.8567, label: "Pune" },
            end: { lat: country.lat, lng: country.lng, label: country.name },
            lineColor: color
        };
    });

    return (
        <section
            id="export"
            className="min-h-screen w-full overflow-x-hidden flex flex-col items-center justify-center py-20 relative bg-white dark:bg-black"
        >
            <div className="section-container w-full max-w-[90rem] mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-10 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white"
                    >
                        Global Export Network
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-xl md:text-2xl text-gray-700 font-medium"
                    >
                        Connecting India to the World
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-[25%_75%] gap-8 items-center bg-gray-50/50 dark:bg-zinc-900/30 p-8 rounded-3xl border border-gray-100 dark:border-zinc-800">
                    {/* Left Side: List */}
                    <div className="space-y-4 order-2 lg:order-1">
                        {countriesData.map((country, index) => (
                            <motion.div
                                key={country.name}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.1 * index }}
                                viewport={{ once: true }}
                                className="p-4 rounded-xl border flex items-center gap-4 cursor-pointer group bg-white dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 hover:border-primary/50 hover:bg-gray-50 dark:hover:bg-zinc-800 hover:scale-105 transition-transform duration-200"
                                onMouseEnter={() => setHoveredCountry(country.name)}
                                onMouseLeave={() => setHoveredCountry(null)}
                            >
                                <div className="p-1 bg-white rounded flex-shrink-0 opacity-90 group-hover:opacity-100 transition-opacity">
                                    <img
                                        src={`https://flagcdn.com/w80/${country.code}.png`}
                                        alt={`${country.name} flag`}
                                        className="w-10 h-7 object-cover rounded shadow-sm"
                                    />
                                </div>
                                <span className="text-base font-bold text-gray-700 dark:text-gray-200 group-hover:text-primary transition-colors">
                                    {country.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Side: Map */}
                    <div className="w-full h-full relative flex items-center justify-center order-1 lg:order-2 min-h-[400px]">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="w-full aspect-[2/1] bg-white rounded-lg relative overflow-hidden ring-1 ring-gray-200 shadow-xl"
                        >
                            <WorldMap
                                dots={dots}
                                lineColor="#06acf9ff"
                                dotsColor="#173178ff"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>

            <button
                onClick={() => scrollToSection("clients")}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-primary animate-bounce bg-white/50 p-2 rounded-full backdrop-blur-sm hover:bg-white/80 transition-colors"
            >
                <ChevronDown size={32} />
            </button>
        </section>
    );
};
