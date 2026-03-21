"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const sectionHeader =
    "text-lg font-semibold text-white px-4 py-2 rounded-t-lg text-center";

export const ClientsPage = () => {
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    // Generate arrays for images
    // Generate arrays for images
    const topCustomers = Array.from({ length: 13 }, (_, i) => `/clients/z${i + 1}.png`);
    const endUseClients = Array.from({ length: 9 }, (_, i) => `/clients/y${i + 1}.png`);
    const marqueeSuppliers = Array.from({ length: 4 }, (_, i) => `/clients/x${i + 1}.png`);

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
        <div className="flex flex-col gap-y-3.5">
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.25, zIndex: 10 }}
                    className="flex items-center justify-center h-16 cursor-default bg-white/50 rounded-lg p-1.5 shadow-lg hover:shadow-xl transition-shadow duration-100"
                >
                    <Image width={120} height={60} src={item} alt="Client Logo" className="max-h-full max-w-full object-contain" />
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

            <div className="w-[92%] md:w-[85%] flex flex-col gap-6 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl lg:text-6xl font-bold text-center mb-4 text-black drop-shadow-sm"
                >
                    Our Clients and Partners
                </motion.h2>

                {/* Main Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
                >
                    {/* ---------------------- TOP CUSTOMERS ---------------------- */}
                    <div className="h-full flex flex-col">
                        <motion.div variants={itemVariants} className={`${sectionHeader} text-xl font-bold py-2.5 bg-black`}>Top Customers</motion.div>
                        <div className="bg-white/40 backdrop-blur-md p-3.5 rounded-b-xl flex-1 border border-white/30">
                            <div className="grid grid-cols-2 gap-2.5">
                                {renderColumn(topCustCol1)}
                                {renderColumn(topCustCol2)}
                            </div>
                        </div>
                    </div>

                    {/* ---------------------- END USE CLIENTS ---------------------- */}
                    <div className="h-full flex flex-col">
                        <motion.div variants={itemVariants} className={`${sectionHeader} text-xl font-bold py-2.5 bg-blue-700`}>End Use Clients</motion.div>
                        <div className="bg-white/40 backdrop-blur-md p-3.5 rounded-b-xl flex-1 border border-white/30">
                            <div className="grid grid-cols-2 gap-2.5">
                                {renderColumn(endUseCol1)}
                                {renderColumn(endUseCol2)}
                            </div>
                        </div>
                    </div>

                    {/* ---------------------- MARQUEE SUPPLIERS ---------------------- */}
                    <div className="h-full flex flex-col">
                        <motion.div variants={itemVariants} className={`${sectionHeader} text-xl font-bold py-2.5 bg-gray-500`}>
                            Marquee Suppliers
                        </motion.div>
                        <div className="bg-white/40 backdrop-blur-md p-3.5 rounded-b-xl flex-1 border border-white/30">
                            <div className="grid grid-cols-2 gap-3.5">
                                {renderColumn(marqueeCol1)}
                                {renderColumn(marqueeCol2)}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <button
                onClick={() => scrollToSection("csr-section")}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-blue-900 animate-bounce bg-white/50 p-2 rounded-full backdrop-blur-sm hover:bg-white/80 transition-colors"
            >
                <ChevronDown size={32} />
            </button>
        </div>
    );
};
