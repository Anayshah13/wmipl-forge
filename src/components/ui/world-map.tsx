"use client";

import { useRef, useMemo } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import DottedMap from "dotted-map";

import { useTheme } from "next-themes";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
    lineColor?: string;
  }>;
  lineColor?: string;
  dotsColor?: string; // Added prop
}

export default function WorldMap({
  dots = [],
  lineColor = "#18a8ea",
  dotsColor, // Destructure new prop
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const { theme } = useTheme();

  const { map, svgMap } = useMemo(() => {
    const mapInstance = new DottedMap({ height: 100, grid: "diagonal" });
    const svg = mapInstance.getSVG({
      radius: 0.30,
      color: dotsColor || (theme === "dark" ? "#FFFFFF40" : "#00000040"),
      shape: "circle",
      backgroundColor: theme === "dark" ? "black" : "white",
    });
    return { map: mapInstance, svgMap: svg };
  }, [theme, dotsColor]);

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    // Adjusted Y projection: The map image has an aspect ratio of ~2.13 (1056/495), 
    // implying it covers approx 169 degrees of latitude (cutting off Antarctica).
    // Original linear 180-degree projection (factor 2.22) places points too high.
    // Factor 2.38 correction pushes points down to match the visual map.
    const y = (90 - lat) * 2.6;
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 80;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div className="w-full aspect-[2/1] dark:bg-black bg-white rounded-lg  relative font-sans">
      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
        alt="world map"
        height={495}
        width={1056}
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          const pathColor = dot.lineColor || lineColor; // Use specific color or fallback
          const gradientId = `path-gradient-${i}`; // Unique ID per path

          return (
            <g key={`path-group-${i}`}>
              <defs>
                <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="white" stopOpacity="0" />
                  <stop offset="5%" stopColor={pathColor} stopOpacity="1" />
                  <stop offset="95%" stopColor={pathColor} stopOpacity="1" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke={`url(#${gradientId})`}
                strokeWidth="1.1"
                initial={{
                  pathLength: 0,
                }}
                animate={{
                  pathLength: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 0.5 * i,
                  ease: "easeOut",
                }}
                key={`start-upper-${i}`}
              ></motion.path>
            </g>
          );
        })}

        {dots.map((dot, i) => {
          const pathColor = dot.lineColor || lineColor;
          return (
            <g key={`points-group-${i}`}>
              <g key={`start-${i}`}>
                <circle
                  cx={projectPoint(dot.start.lat, dot.start.lng).x}
                  cy={projectPoint(dot.start.lat, dot.start.lng).y}
                  r="2"
                  fill={pathColor}
                />
                <circle
                  cx={projectPoint(dot.start.lat, dot.start.lng).x}
                  cy={projectPoint(dot.start.lat, dot.start.lng).y}
                  r="2"
                  fill={pathColor}
                  opacity="0.5"
                >
                  <animate
                    attributeName="r"
                    from="2"
                    to="8"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.5"
                    to="0"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
              <g key={`end-${i}`}>
                <circle
                  cx={projectPoint(dot.end.lat, dot.end.lng).x}
                  cy={projectPoint(dot.end.lat, dot.end.lng).y}
                  r="2"
                  fill={pathColor}
                />
                <circle
                  cx={projectPoint(dot.end.lat, dot.end.lng).x}
                  cy={projectPoint(dot.end.lat, dot.end.lng).y}
                  r="2"
                  fill={pathColor}
                  opacity="0.5"
                >
                  <animate
                    attributeName="r"
                    from="2"
                    to="8"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.5"
                    to="0"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            </g>
          )
        })}
      </svg>
    </div>
  );
}
