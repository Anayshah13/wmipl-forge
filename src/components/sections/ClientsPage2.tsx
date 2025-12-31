import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export const ClientsPage2 = () => {
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    const endUseClients = Array.from({ length: 9 }, (_, i) => `/clients/y${i + 1}.png`);
    const marqueeSuppliers = Array.from({ length: 4 }, (_, i) => `/clients/x${i + 1}.png`);

    return (
        <div id="clients" className="relative h-screen w-full overflow-hidden bg-gray-200 flex flex-col items-center justify-center">
            {/* Enhanced Background Elements - Grayer and more apparent */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* Stronger Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808025_1px,transparent_1px),linear-gradient(to_bottom,#80808025_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_at_center,black_80%,transparent_100%)]"></div>

                {/* Abstract Darker Shapes */}
                <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-blue-600/20 rounded-full blur-[120px]" />
                <div className="absolute top-[40%] left-[60%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[90px]" />
            </div>

            <div className="relative z-10 w-full max-w-[1400px] px-6 flex flex-col xl:flex-row gap-8 items-start justify-center h-auto xl:h-full max-h-[90vh]">

                {/* End Use Clients Section - 9 items (3x3 Grid) */}
                <div className="flex-1 flex flex-col items-center justify-start h-full">
                    <div className="mb-6 self-start w-full">
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-4xl md:text-6xl font-bold text-gray-800 tracking-tighter flex items-center gap-4 relative whitespace-nowrap"
                        >
                            <span className="w-12 h-1 bg-blue-600"></span>
                            End Use Clients
                        </motion.h3>
                    </div>

                    <div className="grid grid-cols-3 gap-8 w-full h-auto aspect-[4/3] max-h-[70vh]">
                        {endUseClients.map((client, index) => (
                            <motion.div
                                key={`enduse-${index}`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.05, zIndex: 10 }}
                                transition={{ duration: 0.2 }}
                                className="bg-white/30 backdrop-blur-md rounded-lg shadow-md hover:shadow-xl border border-white/40 overflow-hidden relative group"
                            >
                                <img
                                    src={client}
                                    alt={`Client ${index + 1}`}
                                    className="w-full h-full object-contain p-6"
                                />
                                {/* Shine effect */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="hidden xl:block h-[90%] w-1 bg-gray-400/20 self-center mx-4"></div>

                {/* Marquee Suppliers Section - 4 items (2x2 Grid) */}
                <div className="w-full xl:w-[500px] flex flex-col items-center xl:items-start justify-start h-full">
                    <div className="mb-6 self-start w-full">
                        <motion.h3
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-4xl md:text-6xl font-bold text-gray-800 tracking-tighter flex items-center gap-4 xl:justify-start whitespace-nowrap"
                        >
                            <span className="w-16 h-1 bg-blue-600 shrink-0"></span>
                            Marquee Suppliers
                        </motion.h3>
                    </div>

                    <div className="grid grid-cols-2 gap-8 w-full max-w-[400px] aspect-square max-h-[40vh] xl:max-h-none mx-auto xl:mx-0">
                        {marqueeSuppliers.map((supplier, index) => (
                            <motion.div
                                key={`marquee-${index}`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.05, zIndex: 10 }}
                                className="bg-white/30 backdrop-blur-md rounded-lg shadow-md hover:shadow-xl border border-white/40 overflow-hidden relative group flex items-center justify-center"
                            >
                                <img src={supplier} alt={`Supplier ${index + 1}`} className="w-full h-full object-contain p-6" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>

            <button
                onClick={() => scrollToSection("csr-section")}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 text-gray-500 hover:text-blue-600 animate-bounce transition-colors p-2"
            >
                <ChevronDown size={28} />
            </button>
        </div>
    );
};
