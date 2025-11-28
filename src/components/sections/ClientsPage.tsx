import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const sectionHeader =
    "text-lg font-semibold text-white px-4 py-2 rounded-t-lg text-center";

export const ClientsPage = () => {
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    // Generate arrays for images
    const topCustomers = Array.from({ length: 13 }, (_, i) => `/z${i + 1}.png`);
    const endUseClients = Array.from({ length: 9 }, (_, i) => `/y${i + 1}.png`);
    const marqueeSuppliers = Array.from({ length: 4 }, (_, i) => `/x${i + 1}.png`);

    // Helper to split array into two columns
    const splitData = (data: string[], splitIndex?: number) => {
        const mid = splitIndex ?? Math.ceil(data.length / 2);
        return [data.slice(0, mid), data.slice(mid)];
    };

    const [topCustCol1, topCustCol2] = splitData(topCustomers, 7);
    const [endUseCol1, endUseCol2] = splitData(endUseClients);
    const [marqueeCol1, marqueeCol2] = splitData(marqueeSuppliers);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const renderColumn = (items: string[]) => (
        <div className="flex flex-col gap-2">
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.25, zIndex: 10 }}
                    className="flex items-center justify-center h-20 cursor-default bg-white/50 rounded-lg p-1.5 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                    <img src={item} alt="Client Logo" className="max-h-full max-w-full object-contain" />
                </motion.div>
            ))}
        </div>
    );

    return (
        <div
            id="clients"
            className="min-h-screen bg-[url('/wavy.jpg')] bg-cover bg-center px-3 py-10 relative flex flex-col items-center justify-center"
        >
            {/* White overlay for reduced contrast */}
            <div className="absolute inset-0 bg-white/85 z-0" />

            <div className="w-full max-w-[87%] flex flex-col gap-10 relative z-10">
                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-6xl font-bold text-blue-900 text-left pl-2"
                >
                    CLIENTS & MARQUEE SUPPLIERS
                </motion.h1>

                {/* Main Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
                >
                    {/* ---------------------- TOP CUSTOMERS ---------------------- */}
                    <div className="h-full flex flex-col">
                        <motion.div variants={itemVariants} className={`${sectionHeader} text-xl font-bold py-3 bg-black`}>Top Customers</motion.div>
                        <div className="bg-white/40 backdrop-blur-md p-4 rounded-b-xl flex-1 border border-white/30">
                            <div className="grid grid-cols-2 gap-3">
                                {renderColumn(topCustCol1)}
                                {renderColumn(topCustCol2)}
                            </div>
                        </div>
                    </div>

                    {/* ---------------------- END USE CLIENTS ---------------------- */}
                    <div className="h-full flex flex-col">
                        <motion.div variants={itemVariants} className={`${sectionHeader} text-xl font-bold py-3 bg-blue-700`}>End Use Clients</motion.div>
                        <div className="bg-white/40 backdrop-blur-md p-4 rounded-b-xl flex-1 border border-white/30">
                            <div className="grid grid-cols-2 gap-3">
                                {renderColumn(endUseCol1)}
                                {renderColumn(endUseCol2)}
                            </div>
                        </div>
                    </div>

                    {/* ---------------------- MARQUEE SUPPLIERS ---------------------- */}
                    <div className="h-full flex flex-col">
                        <motion.div variants={itemVariants} className={`${sectionHeader} text-xl font-bold py-3 bg-gray-500`}>
                            Marquee Suppliers
                        </motion.div>
                        <div className="bg-white/40 backdrop-blur-md p-4 rounded-b-xl flex-1 border border-white/30">
                            <div className="grid grid-cols-2 gap-3">
                                {renderColumn(marqueeCol1)}
                                {renderColumn(marqueeCol2)}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <button
                onClick={() => scrollToSection("csr")}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-blue-900 animate-bounce"
            >
                <ChevronDown size={28} />
            </button>
        </div>
    );
};
