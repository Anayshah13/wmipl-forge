import { HexagonIcon } from "@/components/HexagonIcon";
import { GraduationCap, Users, Sun, Leaf, Check, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export const CSR2 = () => {
    const initiatives = [
        {
            icon: GraduationCap,
            title: "Education Support",
            description: "Supporting local schools with infrastructure and educational resources to empower the next generation",
        },
        {
            icon: Users,
            title: "Local Employment",
            description: "Creating sustainable employment opportunities for local communities and skill development programs",
        },
        {
            icon: Sun,
            title: "Solar Power",
            description: "1.32 MW combined solar capacity across both plants reducing carbon footprint significantly",
        },
        {
            icon: Leaf,
            title: "Carbon Credits",
            description: "2,235.85 carbon credits earned over 5 years demonstrating our commitment to sustainability",
        },
    ];

    const commitments = [
        "We believe in responsible manufacturing. Our solar power installations and sustainable practices demonstrate our dedication to reducing environmental impact while maintaining operational excellence.", "Continuous investment in green technologies"
    ];

    return (
        <section className="min-h-screen lg:h-screen w-full relative flex flex-col items-center justify-center overflow-y-auto lg:overflow-hidden bg-[url('/csr1.jpg')] bg-cover bg-center">
            {/* Original Background Overlay */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-sm z-0" />

            <div className="flex flex-col lg:flex-row w-full h-full relative z-10 min-h-screen lg:min-h-0">

                {/* Left Panel: Text Content - Elevated z-index */}
                <div className="w-full lg:w-[40%] bg-[rgb(21,116,57)] h-auto lg:h-full flex flex-col justify-center p-8 lg:p-12 text-white relative overflow-hidden shadow-2xl z-20 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-white uppercase">
                            CSR and Environment
                        </h2>

                        <h3 className="text-2xl font-semibold mb-4 text-white">Our Commitment</h3>
                        <div className="space-y-6 mb-12">
                            {commitments.map((point, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="p-1 bg-white/20 rounded-full mt-1 shrink-0">
                                        <Check size={16} className="text-white" />
                                    </div>
                                    <p className="text-lg text-white leading-relaxed font-medium">
                                        {point}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Stat Box */}
                        <div className="bg-white/10 rounded-xl border border-white/20 p-6">
                            <div className="space-y-4">
                                <div className="text-center pb-3 border-b-4 border-white/40">
                                    <div className="text-3xl font-bold text-white mb-1">2,235.85</div>
                                    <p className="text-sm text-white/90 uppercase tracking-wider font-semibold">Carbon Credits (5 years)</p>
                                </div>
                                <div className="text-center pb-3 border-b-4 border-white/40">
                                    <div className="text-3xl font-bold text-white mb-1">1.32 MW</div>
                                    <p className="text-sm text-white/90 uppercase tracking-wider font-semibold">Solar Power Capacity</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-white mb-1">100%</div>
                                    <p className="text-sm text-white/90 uppercase tracking-wider font-semibold">Commitment to Sustainability</p>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </div>

                {/* Right Panel: Hexagon Grid - Transparent to show background */}
                <div className="w-full lg:w-[60%] h-full p-6 lg:p-10 flex flex-col justify-center relative z-10">
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 h-auto lg:h-full lg:max-h-[80vh] content-center p-4 lg:p-8 py-10 lg:py-0">
                        {initiatives.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex flex-col items-center text-center group bg-white/20 p-6 rounded-2xl shadow-lg border border-white/20 hover:bg-white/30 transition-all duration-300"
                            >
                                <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
                                    <HexagonIcon
                                        icon={item.icon}
                                        size={100}
                                        className="from-[rgb(21,116,57)] to-[rgb(21,116,57)] text-white"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold text-[rgb(21,116,57)] mb-2">{item.title}</h3>
                                <p className="text-zinc-700 font-bold text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <button
                onClick={() => document.getElementById('certificates')?.scrollIntoView({ behavior: 'smooth' })}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 text-white animate-bounce bg-white/10 p-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
                aria-label="Scroll to certificates"
            >
                <ChevronDown size={32} />
            </button>
        </section >
    );
};
