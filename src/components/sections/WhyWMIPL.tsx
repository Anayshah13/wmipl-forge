import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const WhyWMIPL = () => {
    const features = [
        {
            image: "/why/leadership.png",
            title: "Leadership Position",
            description: "70% market share in aluminium slugs industry in India with 3+ decades of legacy",
        },
        {
            image: "/why/portfolio.png",
            title: "Robust Product Portfolio",
            description: "Capability to manufacture varied types of slugs - with center hole, without center hole, or domed up to 135.8mm diameter",
        },
        {
            image: "/why/infrastructure.png",
            title: "Strong Infrastructure",
            description: "35,000 MT installed capacity with state-of-the-art machinery and equipment",
        },
        {
            image: "/why/workforce.png",
            title: "Experienced Workforce",
            description: "400+ strong workforce with average 30+ years of experience with the company",
        },
        {
            image: "/why/certified.png",
            title: "Certifications",
            description: "ISO 9001:2015, ISO 14001:2015, ISO 45001:2018 certified with export house registration",
        },
        {
            image: "/why/quality.png",
            title: "Quality Assurance",
            description: "Stringent quality control processes ensuring consistent product excellence",
        },
    ];

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const getHexagonColor = (index: number) => {
        // Indices for Black: 0, 2, 4
        // Indices for Dark Blue: 1, 3, 5
        const blackIndices = [1, 3, 5];
        return blackIndices.includes(index) ? "bg-[#262626]" : "bg-[#003498]";
    };

    return (
        <section id="why-wmipl" className="min-h-screen w-full overflow-x-hidden flex flex-col justify-center pt-6 pb-20 bg-[url('/grey_bg.avif')] bg-cover bg-center text-secondary relative overflow-hidden">
            <div className="w-[95%] md:w-[87%] mx-auto relative z-10">
                <div className="text-center mb-0 md:mb-5">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-4xl lg:text-6xl font-bold mb-3 text-secondary"
                    >
                        Why Choose WMIPL?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg md:text-xl text-gray-700 font-medium max-w-4xl mx-auto"
                    >
                        Decades of expertise, cutting-edge infrastructure, and unwavering commitment to quality
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 items-center mt-10">
                    {/* Left Column */}
                    <div className="space-y-6 md:space-y-8">
                        {features.slice(0, 3).map((feature, index) => {
                            // Indices 0, 1, 2
                            const globalIndex = index;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group bg-white border border-gray-300 rounded-2xl p-4 md:p-6 shadow-md hover:shadow-2xl transition-all hover:scale-105 hover:border-primary/50"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="shrink-0">
                                            <div
                                                className={`${getHexagonColor(globalIndex)} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}
                                                style={{
                                                    width: 64,
                                                    height: 64,
                                                    clipPath: "polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)"
                                                }}
                                            >
                                                <img
                                                    src={feature.image}
                                                    alt={feature.title}
                                                    className="w-full h-full object-contain p-3 invert brightness-0 filter"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-lg md:text-xl font-bold mb-1 text-secondary group-hover:text-primary transition-colors">{feature.title}</h3>
                                            <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">{feature.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Center Column */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex justify-center items-center py-4 lg:py-0 order-first lg:order-none"
                    >
                        <div className="relative w-full h-full">

                            <img
                                src="/hexagon.png"
                                alt="WMIPL Icon"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </motion.div>

                    {/* Right Column */}
                    <div className="space-y-6 md:space-y-8">
                        {features.slice(3, 6).map((feature, index) => {
                            // Indices 3, 4, 5
                            const globalIndex = index + 3;
                            return (
                                <motion.div
                                    key={index + 3}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group bg-white border border-gray-300 rounded-2xl p-4 md:p-6 shadow-md hover:shadow-2xl transition-all hover:scale-105 hover:border-primary/50"
                                >
                                    <div className="flex items-start gap-4 lg:flex-row-reverse lg:text-right">
                                        <div className="shrink-0">
                                            <div
                                                className={`${getHexagonColor(globalIndex)} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}
                                                style={{
                                                    width: 60,
                                                    height: 60,
                                                    clipPath: "polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)"
                                                }}
                                            >
                                                <img
                                                    src={feature.image}
                                                    alt={feature.title}
                                                    className="w-full h-full object-contain p-3 invert brightness-0 filter"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-lg md:text-xl font-bold text-secondary group-hover:text-primary transition-colors">{feature.title}</h3>
                                            <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">{feature.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <button
                onClick={() => scrollToSection('products')}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-primary animate-bounce bg-white/50 p-2 rounded-full backdrop-blur-sm hover:bg-white/80 transition-colors"
            >
                <ChevronDown size={32} />
            </button>
        </section>
    );
};
