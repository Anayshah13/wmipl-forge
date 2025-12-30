import React from 'react';
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const timelineData = [
    { id: '01', name: "Melting", color: 'bg-[#2A2A2A]', dotColor: '#27272a' },
    { id: '02', name: "Casting", color: 'bg-[#003B95]', dotColor: '#003B95' },
    { id: '03', name: "Hot & Cold Rolling", color: 'bg-[#2A2A2A]', dotColor: '#27272a' },
    { id: '04', name: "Punching", color: 'bg-[#003B95]', dotColor: '#003B95' },
    { id: '05', name: "Annealing", color: 'bg-[#2A2A2A]', dotColor: '#27272a' },
    { id: '06', name: "Vibratory Processing", color: 'bg-[#003B95]', dotColor: '#003B95' },
    { id: '07', name: "Packaging", color: 'bg-[#2A2A2A]', dotColor: '#27272a' },
    { id: '08', name: "Dispatch", color: 'bg-[#003B95]', dotColor: '#003B95' },
];

export const ProductionProcess2 = () => {
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="min-h-screen w-full relative bg-gray-50 flex flex-col items-center py-12 px-4">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-10"
            >
                <h2 className="text-xl font-bold text-gray-900 mb-2">Production Process</h2>
                <p className="text-xl text-gray-500 font-medium max-w-md mx-auto">
                    State-of-the-art manufacturing process ensuring consistent quality
                </p>
            </motion.div>

            <div className="w-full max-w-md flex flex-col gap-6">
                {timelineData.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col items-center p-4 relative"
                    >
                        {/* Number Badge */}
                        <div
                            className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${item.color}`}
                        >
                            {item.id}
                        </div>

                        {/* Image */}
                        <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-gray-100 shadow-inner mb-4">
                            <img
                                src={`/steps/${index + 1}.png`}
                                alt={item.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-bold text-gray-800 text-center">
                            {item.name}
                        </h3>
                    </motion.div>
                ))}
            </div>

            <button
                onClick={() => scrollToSection('infrastructure')}
                className="mt-12 text-primary animate-bounce bg-white/50 p-2 rounded-full backdrop-blur-sm hover:bg-white/80 transition-colors shadow-sm"
            >
                <ChevronDown size={32} />
            </button>
        </section>
    );
};
