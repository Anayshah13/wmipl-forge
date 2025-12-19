import React, { useEffect, useState, useMemo } from 'react';
import { motion } from "framer-motion";

const timelineData = [
    { id: '01', name: "Melting", description: "High-quality aluminium melting", color: 'bg-[#2A2A2A]', dotColor: '#27272a' },
    { id: '02', name: "Casting", description: "Precision casting process", color: 'bg-[#003B95]', dotColor: '#003B95' },
    { id: '03', name: "Hot & Cold Rolling", description: "Rolling to specifications", color: 'bg-[#2A2A2A]', dotColor: '#27272a' },
    { id: '04', name: "Coiling", description: "Material coiling", color: 'bg-[#003B95]', dotColor: '#003B95' },
    { id: '05', name: "Decoiling and Punching", description: "Slug formation", color: 'bg-[#2A2A2A]', dotColor: '#27272a' },
    { id: '06', name: "Annealing", color: 'bg-[#003B95]', dotColor: '#003B95' },
    { id: '07', name: "Vibratory Processing", color: 'bg-[#2A2A2A]', dotColor: '#27272a' },
    { id: '08', name: "Packaging and Dispatch", color: 'bg-[#003B95]', dotColor: '#003B95' },
];

const TimelineNode = ({ item, index, width, centerY, radius }) => {
    const isUp = (index + 1) % 2 !== 0;
    const centerX = (index * width) + (width / 2);
    const nodeY = centerY;

    // ADJUSTED: Stem length slightly increased for bigger nodes
    const stemLength = radius + 20;
    const stemEndY = isUp ? centerY - stemLength : centerY + stemLength;

    // INCREASED: Card dimensions to fit w-48 images better
    const cardWidth = 190;
    const cardHeight = 250;
    const cardY = isUp ? stemEndY - cardHeight - 10 : stemEndY + 30;

    return (
        <g className="group">
            {/* 1. Vertical Stretched Node (Stem) */}
            <line
                x1={centerX}
                y1={nodeY}
                x2={centerX}
                y2={stemEndY}
                className="stroke-zinc-300 stroke-[4px] transition-all duration-300 group-hover:stroke-zinc-800 group-hover:stroke-[6px]"
            />

            {/* 2. Tiny Dot at the tip */}
            <circle
                cx={centerX}
                cy={stemEndY}
                r="8"
                fill={item.dotColor}
                style={{ transformOrigin: `${centerX}px ${stemEndY}px` }}
                className="transition-transform duration-300 group-hover:scale-[1.5] group-hover:brightness-110 group-hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]"
            />

            {/* 3. Main Circle Housing the Number - Normal Size */}
            <foreignObject
                x={centerX - 40}
                y={nodeY - 40}
                width="80"
                height="80"
                className="overflow-visible"
            >
                <div
                    className={`
            w-20 h-20 rounded-full flex items-center justify-center
            text-white font-bold text-3xl transition-all duration-300
            group-hover:scale-110 cursor-pointer
            ${item.color}
            border-[3px] border-white shadow-xl
          `}
                >
                    {item.id}
                </div>
            </foreignObject>

            {/* 4. Content Card */}
            <foreignObject
                x={centerX - (cardWidth / 2)}
                y={cardY}
                width={cardWidth}
                height={cardHeight}
                className="overflow-visible"
            >
                <div className="flex flex-col items-center justify-center text-center h-full transition-all duration-300 hover:scale-105">
                    <h3 className="font-bold text-2xl text-gray-900 mb-3 leading-tight drop-shadow-sm">
                        {item.name}
                    </h3>
                    <div className="w-48 h-48 overflow-hidden rounded-full border-[8px] border-white shadow-2xl mx-auto flex-shrink-0">
                        <img
                            src={`/steps/${index + 1}.png`}
                            alt={item.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </foreignObject>
        </g>
    );
};

export const ProductionProcess = () => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const totalSteps = timelineData.length;
    const containerWidth = dimensions.width;
    const nodeWidth = containerWidth / totalSteps;

    const centerY = dimensions.height * 0.55;
    const radius = nodeWidth / 2;

    const pathData = useMemo(() => {
        if (dimensions.width === 0) return "";
        let d = `M 0 ${centerY}`;
        timelineData.forEach((_, i) => {
            const isUp = (i + 1) % 2 !== 0;
            const x = (i + 1) * nodeWidth;
            const sweep = isUp ? 0 : 1;
            d += ` A ${radius} ${radius} 0 0 ${sweep} ${x} ${centerY}`;
        });
        return d;
    }, [containerWidth, nodeWidth, centerY, radius, dimensions.width]);

    if (dimensions.width === 0) return null;

    return (
        <section id="production-process" className="min-h-screen w-full relative bg-cover bg-center flex flex-col items-center justify-center overflow-hidden">
            {/* Title Section */}
            <div className="absolute top-0 pt-6 left-0 w-full text-center z-10 px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-2">Production Process</h2>
                    <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">State-of-the-art manufacturing process ensuring consistent quality</p>
                </motion.div>
            </div>

            <div style={{ width: containerWidth }} className="relative h-[80vh] flex items-center mt-10 mr-5">
                <svg
                    width={containerWidth}
                    height={dimensions.height}
                    viewBox={`0 0 ${containerWidth} ${dimensions.height}`}
                    className="w-full h-full overflow-visible"
                >
                    {/* The Continuous Semicircle Path - Thicker */}
                    <path
                        d={pathData}
                        fill="none"
                        stroke="#f2f2f2ff"
                        strokeWidth="32"
                        strokeLinecap="butt"
                    />

                    {/* Nodes */}
                    {timelineData.map((item, index) => (
                        <TimelineNode
                            key={item.id}
                            item={item}
                            index={index}
                            width={nodeWidth}
                            centerY={centerY}
                            radius={radius}
                        />
                    ))}
                </svg>
            </div>
        </section>
    );
};