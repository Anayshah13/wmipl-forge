import React from 'react';
import { motion } from "framer-motion";

export const Test = () => {
    const steps = [
        { name: "Melting", description: "High-quality aluminium melting" },
        { name: "Casting", description: "Precision casting process" },
        { name: "Hot & Cold Rolling", description: "Rolling to specifications" },
        { name: "Coiling", description: "Material coiling" },
        { name: "Punching", description: "Slug formation" },
        { name: "Annealing", description: "Heat treatment" },
        { name: "Vibratory Processing", description: "Surface finishing" },
        { name: "Dispatch", description: "Quality packaging" },
    ];

    // --- COORDINATE CONFIGURATION ---
    const vbWidth = 1600;
    const vbHeight = 350;
    const centerY = vbHeight / 2;
    const amplitude = 100;
    const curveSmoothing = 100; // Plateau effect from your sketch

    // 1. Calculate Positions
    const nodePositions = steps.map((step, index) => {
        const isTop = index % 2 === 0;
        const x = (vbWidth / (steps.length + 1)) * (index + 1);
        const y = isTop ? centerY - amplitude : centerY + amplitude;
        return { x, y, step, isTop, index };
    });

    // 2. Build the Organic Path
    let pathD = `M 0 ${centerY}`;
    let prevX = 0;
    let prevY = centerY;

    nodePositions.forEach((pos) => {
        const cp1x = prevX + curveSmoothing;
        const cp1y = prevY;
        const cp2x = pos.x - curveSmoothing;
        const cp2y = pos.y;
        pathD += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${pos.x} ${pos.y}`;
        prevX = pos.x;
        prevY = pos.y;
    });
    pathD += ` C ${prevX + curveSmoothing} ${prevY}, ${vbWidth - curveSmoothing} ${centerY}, ${vbWidth} ${centerY}`;

    return (
        <section className="min-h-screen w-full relative flex flex-col items-center justify-start pt-[5vh] bg-[url('/wavy.jpg')] bg-cover bg-center bg-no-repeat overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/70 to-white/95 backdrop-blur-[1px]" />
            {/* 3. ENHANCED TITLE SECTION */}
            <div className="relative z-10 w-full max-w-7xl text-center mb-40 px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold text-gray-800 tracking-tighter mb-2"
                >
                    Production Process
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-500 font-medium max-w-4xl mx-auto"
                >
                    State-of-the-art manufacturing process ensuring consistent quality
                </motion.p>
            </div>

            {/* 4. THE HARMONIC TIMELINE */}
            <div className="relative w-full max-w-[95%] mx-auto">
                <svg
                    viewBox={`0 0 ${vbWidth} ${vbHeight}`}
                    className="w-full h-auto overflow-visible"
                    fill="none"
                    preserveAspectRatio="xMidYMid meet"
                >
                    {/* Subtle Path Line */}
                    <path
                        d={pathD}
                        stroke="#bfc0c3ff"
                        strokeWidth="4"
                        strokeLinecap="round"
                    />

                    {nodePositions.map((pos, idx) => {
                        const dotColor = "rgb(0, 103, 194)";

                        return (
                            <g key={idx}>
                                {/* Connecting Stem */}
                                <line
                                    x1={pos.x} y1={pos.y}
                                    x2={pos.x} y2={pos.isTop ? pos.y - 45 : pos.y + 45}
                                    stroke={dotColor} strokeWidth="2" strokeDasharray="6 4" className="opacity-20"
                                />

                                {/* Content Card (ForeignObject) */}
                                <foreignObject
                                    x={pos.x - 125}
                                    y={pos.isTop ? pos.y - 125 : pos.y + 45}
                                    width="250"
                                    height="80"
                                    className="overflow-visible"
                                >
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md p-0 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 w-full h-full flex flex-col justify-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                                    >
                                        <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-0 leading-tight">
                                            {pos.step.name}
                                        </h3>
                                        <p className="text-base font-medium text-gray-600 dark:text-gray-300 leading-snug">
                                            {pos.step.description}
                                        </p>
                                    </motion.div>
                                </foreignObject>

                                {/* 5. ALTERNATING DOTS (Black & Dark Blue) */}
                                <circle
                                    cx={pos.x}
                                    cy={pos.y}
                                    r="28"
                                    fill={dotColor}
                                    stroke="white"
                                    strokeWidth="4"
                                    className="drop-shadow-lg"
                                />

                                {/* Step Number */}
                                <text
                                    x={pos.x}
                                    y={pos.y}
                                    textAnchor="middle"
                                    dy=".35em"
                                    fill="white"
                                    fontSize="24"
                                    fontWeight="bold"
                                    className="pointer-events-none"
                                >
                                    {idx + 1}
                                </text>
                            </g>
                        );
                    })}
                </svg>
            </div>
        </section>
    );
}