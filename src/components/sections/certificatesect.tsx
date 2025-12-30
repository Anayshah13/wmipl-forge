import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ChevronDown } from 'lucide-react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

const certificatesData = [
    {
        title: "One-Star Export House",
        desc: "Government of India–recognized One-Star Export House status under the Foreign Trade Policy, acknowledging consistent export performance and compliance.",
        src: "/export_house.png",
    },
    {
        title: "ISO 45001:2018",
        desc: "Certified Occupational Health and Safety Management System ensuring structured workplace safety, risk control, and regulatory compliance.",
        src: "iso45001.png",
    },
    {
        title: "ISO 14001:2015",
        desc: "Certified Environmental Management System demonstrating systematic environmental responsibility and compliance with applicable regulations.",
        src: "iso14001.png",
    },
    {
        title: "ISO 9001:2015",
        desc: "Certified Quality Management System ensuring consistent product quality, process control, and customer satisfaction.",
        src: "iso9001_1.png",
    },
]

const qualityPoints = [
    "Products manufactured are safe, cost effective and adhering to international standards",
    "Continuous improvement of product quality is implemented",
    "We are an ISO 9001-2015 certified company with ISO 45001:2018 & ISO 14001:2015 certifications",
    "We intend to modernize our production lines, to achieve even better product quality",
];

const ScrollLock = () => {
    React.useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);
    return null;
};

export const CertificatesSection = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section id="certificates" className="min-h-screen lg:h-screen w-full relative flex flex-col items-center justify-center overflow-y-auto lg:overflow-hidden bg-[url('/dblue.jpg')] bg-cover bg-center">
            {/* Background Overlay */}
            <div className="absolute inset-0 z-0" />

            <div className="flex flex-col lg:flex-row w-full h-full relative z-10 min-h-screen lg:min-h-0">

                {/* Left Panel: Certificates Grid - Transparent to show background */}
                <div className="w-full lg:w-[60%] h-full p-6 lg:p-10 flex flex-col justify-center relative order-2 lg:order-1">
                    {/* Background Grid Pattern */}
                    <div className="absolute inset-0 bg-white/50 pointer-events-none" />

                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 h-auto lg:h-full lg:max-h-[90vh] auto-rows-fr py-8 lg:py-0">
                        {certificatesData.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white/80 rounded-xl shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden group h-full backdrop-blur-sm"
                            >
                                <div
                                    className="relative flex-grow p-4 cursor-pointer overflow-hidden flex items-center justify-center bg-white/50"
                                    onClick={() => setSelectedImage(cert.src)}
                                >
                                    <img
                                        src={cert.src}
                                        alt={cert.title}
                                        className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-[#0A4DAA]/10 transition-colors duration-300 flex items-center justify-center">
                                        <span className="opacity-0 group-hover:opacity-100 bg-[#0A4DAA] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all">
                                            View
                                        </span>
                                    </div>
                                </div>

                                <div className="p-4 bg-white/60 border-t border-white/50">
                                    <h3 className="font-bold text-[#0A4DAA] truncate">{cert.title}</h3>
                                    <p className="text-xs text-gray-600 line-clamp-2 mt-1">{cert.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Panel: Quality Assurance Text - Solid/Opaque to sit "ahead" */}
                <div className="w-full lg:w-[40%] bg-[#0A4DAA] h-auto lg:h-full flex flex-col justify-center p-8 lg:p-12 text-white relative z-20 shadow-2xl order-1 lg:order-2">
                    {/* Decorative background element */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                            QUALITY ASSURANCE
                        </h2>

                        <div className="space-y-6">
                            {qualityPoints.map((point, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="p-1 bg-white/20 rounded-full mt-1 shrink-0">
                                        <Check size={14} className="text-white" />
                                    </div>
                                    <p className="text-lg text-blue-50 leading-relaxed font-light">
                                        {point}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <div
                        className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-xl p-4 transition-opacity duration-300"
                        onClick={() => setSelectedImage(null)}
                    >
                        {/* Body Scroll Lock Effect */}
                        <ScrollLock />

                        <div className="relative w-full h-full overflow-hidden" onClick={(e) => e.stopPropagation()}>
                            <button
                                className="absolute top-4 right-4 text-gray-800 dark:text-white hover:text-gray-600 transition-colors z-[60] bg-white/20 p-2 rounded-full backdrop-blur-md"
                                onClick={() => setSelectedImage(null)}
                            >
                                <X size={32} />
                            </button>
                            <TransformWrapper
                                initialScale={1.1}
                                minScale={0.5}
                                maxScale={4}
                                centerOnInit={true}
                                centerZoomedOut={true}
                                wheel={{ step: 0.1 }}
                            >
                                <TransformComponent
                                    wrapperStyle={{ width: "100%", height: "100%" }}
                                    contentStyle={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}
                                >
                                    <img
                                        alt="Expanded Certificate"
                                        className="object-contain rounded-lg shadow-2xl"
                                        style={{ maxHeight: '85vh', maxWidth: '85vw' }}
                                        src={selectedImage}
                                    />
                                </TransformComponent>
                            </TransformWrapper>
                        </div>
                    </div>
                )}
            </AnimatePresence>

            <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="absolute bottom-2 left-1/2 -translate-x-1/2 z-30 text-white animate-bounce bg-white/10 p-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
                aria-label="Scroll to contact"
            >
                <ChevronDown size={32} />
            </button>
        </section>
    );
};
