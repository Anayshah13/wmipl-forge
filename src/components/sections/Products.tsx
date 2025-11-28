import React, { useState, useEffect, useId, useRef } from "react";
import { Card } from "@/components/ui/card";
import { ArrowRight, ChevronDown } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Sector } from "recharts";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface SlugType {
  name: string;
  application: string;
  desc: string;
  image: string;
  content: React.ReactNode | (() => React.ReactNode);
}

interface ProductStat {
  name: string;
  percentage: number;
  color: string;
  icon: string;
  metricTons: number;
}

export const Products = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [active, setActive] = useState<SlugType | boolean | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const slugTypes: SlugType[] = [
    {
      name: "Without Center Hole",
      application: "Containers for Food, Pesticide, Electronics Industry",
      desc: "Plain Slugs",
      image: "/wocenter.png",
      content: () => (
        <p>
          Our <strong>Without Center Hole</strong> slugs (Plain Slugs) are the foundation for rigid containers used in the food, pesticide, and electronics industries.
          <br /><br />
          Manufactured with high-purity aluminium, these slugs ensure excellent formability and surface finish, making them ideal for impact extrusion processes.
          They provide superior barrier properties, protecting contents from moisture, light, and oxygen.
        </p>
      ),
    },
    {
      name: "With Center Hole",
      application: "Tubes for Pharmaceutical & Cosmetic Industry",
      desc: "Perforated Slugs",
      image: "/wchole.png",
      content: () => (
        <p>
          <strong>With Center Hole</strong> slugs (Perforated Slugs) are specifically designed for the production of collapsible tubes used in the pharmaceutical and cosmetic industries.
          <br /><br />
          The precision-engineered center hole allows for the attachment of nozzles and caps. These slugs are produced with tight tolerances to ensure seamless manufacturing of collapsible tubes that are hygienic, non-toxic, and tamper-evident.
        </p>
      ),
    },
    {
      name: "Domed / Taper",
      application: "Aerosol Cans for Perfume, Deodorants, Sanitizers",
      desc: "Specialty Shapes",
      image: "/domed.png",
      content: () => (
        <p>
          Our <strong>Domed / Taper</strong> slugs are specialized shapes engineered for the manufacturing of monobloc aerosol cans.
          <br /><br />
          Widely used for perfumes, deodorants, and sanitizers, these slugs facilitate the impact extrusion of high-pressure cans. They offer exceptional strength and integrity, ensuring safety and reliability for pressurized products.
        </p>
      ),
    },
  ];

  const endProducts: ProductStat[] = [
    { name: "Cans", percentage: 43, color: "#4a4e55ff", icon: "/cans.png", metricTons: 14000 }, // gray-700
    { name: "Tubes", percentage: 34, color: "#0f35b3ff", icon: "/tubes.png", metricTons: 9000 }, // blue-800 (primary)
    { name: "Bottles", percentage: 16, color: "#9ca3af", icon: "/bottles.png", metricTons: 6000 }, // gray-400
    { name: "Others", percentage: 7, color: "#000000ff", icon: "/others.png", metricTons: 1000 }, // gray-200
  ];

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(-1);
  };

  const renderActiveShape = (props: any) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;
    return (
      <g className="border border-black border-25">
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius - 2}
          outerRadius={outerRadius + 2}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
          stroke="white"
          strokeWidth={2}
        />
      </g>
    );
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="products" className="min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-white to-gray-50 relative flex flex-col justify-center">
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-50"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.name}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.name}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden shadow-2xl"
            >
              <motion.div layoutId={`image-${active.name}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.image}
                  alt={active.name}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.name}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200 text-xl"
                    >
                      {active.name}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.desc}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.desc}
                    </motion.p>
                  </div>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <div className="w-full max-w-[87%] mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-gray-200 pb-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 uppercase tracking-tight mb-4">
              Product Portfolio
            </h2>
            <p className="text-2xl text-gray-700 font-medium">
              Precision-engineered aluminium solutions for global industries.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <img src="/blue_bold_logo.png" alt="WMIPL Logo" className="h-24 w-auto object-contain" />
          </motion.div>
        </div>

        {/* Main Grid Layout replicating the Image Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

          {/* COLUMN 1: Aluminium Slug Types (Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-2"
            >
              <div className="h-8 w-1.5 bg-blue-800 rounded-full"></div>
              <h3 className="text-2xl font-bold text-gray-900 uppercase">
                Aluminium Slug Types
              </h3>
            </motion.div>

            <div className="space-y-4">
              {slugTypes.map((type, index) => (
                <motion.div
                  layoutId={`card-${type.name}-${id}`}
                  key={type.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setActive(type)}
                  className="group flex flex-row overflow-hidden h-40 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white ring-1 ring-gray-100 rounded-2xl cursor-pointer"
                >
                  <motion.div layoutId={`image-${type.name}-${id}`} className="w-1/3 relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors z-10" />
                    <img
                      src={type.image}
                      alt={type.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </motion.div>
                  <div className="w-2/3 p-5 flex flex-col justify-center relative">
                    <motion.h3
                      layoutId={`title-${type.name}-${id}`}
                      className="font-bold text-gray-900 text-xl leading-tight mb-2 group-hover:text-blue-800 transition-colors"
                    >
                      {type.name}
                    </motion.h3>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Application</span>
                      <motion.p
                        layoutId={`description-${type.desc}-${id}`}
                        className="text-base text-gray-600 leading-snug font-medium"
                      >
                        {type.application}
                      </motion.p>
                    </div>
                    <ArrowRight className="absolute bottom-4 right-4 w-5 h-5 text-gray-300 group-hover:text-blue-800 group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* COLUMN 2: End Products (Span 3) - The "Blue" Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-3 flex flex-col h-full shadow-2xl rounded-3xl overflow-hidden ring-1 ring-gray-100 bg-white"
          >
            <div className="bg-blue-900 text-white p-6">
              <h3 className="font-bold uppercase text-xl tracking-wide">End-Products</h3>
              <p className="text-blue-200 text-sm mt-1 font-medium">Key applications</p>
            </div>
            <div className="flex-grow flex flex-col bg-white">
              {endProducts.map((product, index) => (
                <div
                  key={index}
                  className="flex-1 flex items-center border-b border-gray-100 last:border-0 p-6 hover:bg-blue-50 transition-all duration-300 group cursor-default"
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(-1)}
                >
                  <div className="w-20 h-16 rounded-xl mr-5 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-300">
                    <img src={product.icon} alt={product.name} className="w-full h-full rounded object-contain" />
                  </div>
                  <div className="flex flex-col">
                    <span className={`text-xl font-bold text-gray-700 group-hover:text-blue-800 transition-all duration-300 ${activeIndex === index ? 'scale-110 origin-left text-blue-800 font-bold' : ''}`}>
                      {product.name}
                    </span>
                    <span className="text-base text-gray-500 font-medium group-hover:text-blue-600 transition-colors">
                      {product.metricTons} Metric Tons
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* COLUMN 3: Data & Charts (Span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* Table Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-lg border border-gray-100 p-2 overflow-hidden"
            >
              <div className="flex items-center gap-4 p-4 pb-2">
                <div className="h-6 w-1.5 bg-blue-800 rounded-full"></div>
                <h3 className="text-xl font-bold text-gray-900 uppercase">
                  Technical Specifications
                </h3>
              </div>
              <div className="overflow-x-auto p-2">
                <table className="w-full text-base text-center">
                  <thead className="bg-blue-900 text-white">
                    <tr>
                      <th className="p-3 text-left font-bold rounded-tl-lg">Range Type</th>
                      <th className="p-3 font-bold">Min Dia.</th>
                      <th className="p-3 font-bold">Max Dia.</th>
                      <th className="p-3 font-bold">Min Thick.</th>
                      <th className="p-3 font-bold rounded-tr-lg">Max Thick.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="p-3 text-left font-bold text-blue-900">Without Center Hole</td>
                      <td className="p-3 text-gray-700 font-medium">9.8</td>
                      <td className="p-3 text-gray-700 font-medium">135.8</td>
                      <td className="p-3 text-gray-700 font-medium">2</td>
                      <td className="p-3 text-gray-700 font-medium">15.4</td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="p-3 text-left font-bold text-blue-900">Domed / Taper</td>
                      <td className="p-3 text-gray-700 font-medium">9.8</td>
                      <td className="p-3 text-gray-700 font-medium">135.8</td>
                      <td className="p-3 text-gray-700 font-medium">2</td>
                      <td className="p-3 text-gray-700 font-medium">15.4</td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="p-3 text-left font-bold text-blue-900">With Center Hole</td>
                      <td className="p-3 text-gray-700 font-medium">12.5</td>
                      <td className="p-3 text-gray-700 font-medium">56.7</td>
                      <td className="p-3 text-gray-700 font-medium">2</td>
                      <td className="p-3 text-gray-700 font-medium">7</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Chart Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xl relative overflow-hidden flex-grow flex flex-col justify-center"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16 opacity-50"></div>
              <h3 className="text-base font-bold text-gray-500 uppercase mb-6 text-center tracking-widest">
                Sales Utilisation by Product
              </h3>

              <div className="flex flex-col md:flex-row items-center justify-center gap-10 h-auto md:h-48">
                {/* Recharts Pie Chart */}
                <div className="w-48 h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        activeIndex={activeIndex}
                        activeShape={renderActiveShape}
                        data={endProducts}
                        cx="50%"
                        cy="50%"
                        innerRadius={55}
                        outerRadius={80}
                        dataKey="percentage"
                        onMouseEnter={onPieEnter}
                        onMouseLeave={onPieLeave}
                        stroke="white"
                        strokeWidth={2}
                      >
                        {endProducts.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                {/* Legend */}
                <div className="grid grid-cols-1 gap-3">
                  {endProducts.map((product, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 cursor-pointer transition-all duration-300"
                      onMouseEnter={() => setActiveIndex(idx)}
                      onMouseLeave={() => setActiveIndex(-1)}
                    >
                      <div
                        className={`w-4 h-4 rounded-full shadow-sm ring-1 ring-black/5 transition-all duration-300 ${activeIndex === idx ? 'scale-125 ring-2 ring-offset-1' : ''}`}
                        style={{ backgroundColor: product.color }}
                      />
                      <span className={`text-gray-700 font-medium text-base transition-all duration-300 ${activeIndex === idx ? 'scale-110 origin-left text-blue-800 font-bold' : ''}`}>
                        {product.name} <span className="text-gray-400 text-sm ml-1">({product.percentage}%)</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('production-process')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-blue-800 animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};