import { useState } from "react";
import { World } from "@/components/ui/globe";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const globeConfig = {
    pointSize: 2,
    globeColor: "hsla(221, 78%, 24%, 1.00)",
    showAtmosphere: true,
    atmosphereColor: "rgba(255, 255, 255, 0.4)",
    atmosphereAltitude: 0.25,
    emissive: "#062056",
    emissiveIntensity: 0.3,
    shininess: 1.5,
    polygonColor: "rgba(255, 255, 255, 1)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1800,
    arcLength: 0.7,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 18.5204, lng: 73.8567 },
    autoRotate: true,
    autoRotateSpeed: -0.5,
};

const colors = ["#06b6d4"];

const countriesData = [
    {
        name: "New Zealand",
        code: "nz",
        lat: -40.9006,
        lng: 174.8860,
    },
    {
        name: "South Africa",
        code: "za",
        lat: -30.5595,
        lng: 22.9375,
    },
    {
        name: "Bangladesh",
        code: "bd",
        lat: 23.6850,
        lng: 90.3563,
    },
    {
        name: "UAE",
        code: "ae",
        lat: 23.4241,
        lng: 53.8478,
    },
    {
        name: "Saudi Arabia",
        code: "sa",
        lat: 23.8859,
        lng: 45.0792,
    },
];

export const Export = () => {
    const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    const data = countriesData.map((country, index) => {
        const isHovered = hoveredCountry === country.name;
        return {
            order: index + 1,
            startLat: 18.52,
            startLng: 73.88,
            endLat: country.lat,
            endLng: country.lng,
            arcAlt: 0.3,
            color: isHovered ? "#c2c234" : colors[index % colors.length],
            size: isHovered ? 3 : 2,
        };
    });

    return (
        <section
            id="export"
            className="min-h-screen w-full overflow-x-hidden flex flex-col items-center justify-center py-20 relative bg-white dark:bg-black"
        >
            <div className="section-container w-full max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Side: List */}
                <div className="space-y-8">
                    <div className="text-left">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4"
                        >
                            Global Export Network
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-xl text-muted-foreground"
                        >
                            Connecting India to the World
                        </motion.p>
                    </div>

                    <div className="grid gap-4">
                        {countriesData.map((country, index) => (
                            <motion.div
                                key={country.name}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.1 * index }}
                                viewport={{ once: true }}
                                className={`p-4 rounded-xl border flex items-center gap-4 cursor-pointer transition-all duration-300 ${hoveredCountry === country.name
                                    ? "bg-primary/10 border-primary scale-105"
                                    : "bg-white dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 hover:border-primary/50"
                                    }`}
                                onMouseEnter={() => setHoveredCountry(country.name)}
                                onMouseLeave={() => setHoveredCountry(null)}
                                whileHover={{ x: 10 }}
                            >
                                <img
                                    src={`https://flagcdn.com/w80/${country.code}.png`}
                                    alt={`${country.name} flag`}
                                    className="w-12 h-8 object-cover rounded shadow-sm"
                                />
                                <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                    {country.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Globe */}
                <div className="w-full h-[600px] relative flex items-center justify-center">
                    <World globeConfig={globeConfig} data={data} />
                </div>
            </div>

            <button
                onClick={() => scrollToSection("clients")}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-primary animate-bounce"
            >
                <ChevronDown size={32} />
            </button>
        </section>
    );
};
