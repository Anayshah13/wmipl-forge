import { useState } from "react";
import { World } from "@/components/ui/globe";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const globeConfig = {
    pointSize: 2,
    globeColor: "#0a2050",
    showAtmosphere: true,
    atmosphereColor: "rgba(114, 114, 114, 0.7)",
    atmosphereAltitude: 0.2,
    emissive: "#062056",
    emissiveIntensity: 0.5,
    shininess: 1,
    polygonColor: "rgba(255, 255, 255, 0.9)",
    ambientLight: "#a0dbf5",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1800,
    arcLength: 0.7,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 18.52, lng: 73.88 },
    autoRotate: true,
    autoRotateSpeed: 0.1,
};

const colors = ["#06b6d4"];

const countriesData = [
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
        name: "New Zealand",
        code: "nz",
        lat: -40.9006,
        lng: 174.8860,
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
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                            Global Export Network
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Connecting India to the World
                        </p>
                    </div>

                    <div className="grid gap-4">
                        {countriesData.map((country) => (
                            <motion.div
                                key={country.name}
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
                onClick={() => scrollToSection("csr")}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-primary animate-bounce"
            >
                <ChevronDown size={32} />
            </button>
        </section>
    );
};
