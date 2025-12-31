import React, { useState, useEffect, useId, useRef } from "react";
import { Card } from "@/components/ui/card";
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
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
  icon: string;
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

  const [carouselIndex, setCarouselIndex] = useState(0);

  const rawProducts = [
    {
      name: "Without Center Hole",
      subname: "",
      image: "/wocenter.png",
      desc: "Our Without Center Hole slugs (Plain Slugs) are the foundation for rigid containers used in the food, pesticide, and electronics industries. Manufactured with high-purity aluminium, these slugs ensure excellent formability and surface finish, making them ideal for impact extrusion processes. They provide superior barrier properties, protecting contents from moisture, light, and oxygen.",
    },
    {
      name: "With Center Hole",
      subname: "",
      image: "/wchole.png",
      desc: "With Center Hole slugs (Perforated Slugs) are specifically designed for the production of collapsible tubes used in the pharmaceutical and cosmetic industries. The precision-engineered center hole allows for the attachment of nozzles and caps. These slugs are produced with tight tolerances to ensure seamless manufacturing of collapsible tubes that are hygienic, non-toxic, and tamper-evident.",
    },
    {
      name: "Domed / Taper",
      subname: "",
      image: "/domed.png",
      desc: "Our Domed / Taper slugs are specialized shapes engineered for the manufacturing of monobloc aerosol cans. Widely used for perfumes, deodorants, and sanitizers, these slugs facilitate the impact extrusion of high-pressure cans. They offer exceptional strength and integrity, ensuring safety and reliability for pressurized products.",
    }
  ];

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % rawProducts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [rawProducts.length]);

  const handleNext = () => setCarouselIndex((prev) => (prev + 1) % rawProducts.length);
  const handlePrev = () => setCarouselIndex((prev) => (prev === 0 ? rawProducts.length - 1 : prev - 1));

  const endProducts: ProductStat[] = [
    { name: "Cans", icon: "/cans.png" },
    { name: "Tubes", icon: "/tubes.png" },
    { name: "Bottles", icon: "/bottles.png" },
    { name: "Others", icon: "/others.png" },
  ];



  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="products" className="min-h-screen w-full overflow-x-hidden bg-[url('/products.avif')] bg-cover bg-center bg-no-repeat relative flex flex-col justify-center">
      <div className="absolute inset-0 bg-white/70 z-0" />
      <div className="relative z-10 w-full h-full">
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
                className="w-full max-w-[31.25rem] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden shadow-2xl"
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

        <div className="w-[95%] md:w-[87%] mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center py-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-gray-200 pb-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 uppercase tracking-tight mb-2">
                Product Portfolio
              </h2>
              <p className="text-xl text-gray-800 font-medium">
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
            </motion.div>
          </div>

          {/* Main Grid Layout replicating the Image Structure */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

            {/* COLUMN 1: Aluminium Slug Types (Span 8) - CAROUSEL INTEGRATION */}
            <div className="lg:col-span-8 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-5 w-1 bg-blue-800 rounded-full"></div>
                <h3 className="text-lg font-bold text-gray-900 uppercase">
                  OUR END PRODUCTS
                </h3>
              </div>

              {/* Carousel Area */}
              <div className="relative w-full py-1 flex items-center justify-center gap-6">

                {/* Prev Button - Left of Center */}
                <button onClick={handlePrev} className="absolute left-0 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full border border-gray-200 bg-white/70 shadow-md flex items-center justify-center text-gray-600 hover:text-blue-600 hover:scale-110 transition-all">
                  <ChevronLeft size={20} />
                </button>

                {/* Previous Item Preview (Left) */}
                <div className="hidden md:block w-1/5 opacity-40 scale-95 select-none grayscale transition-all duration-500">
                  <div className="bg-white rounded-xl border border-gray-200 h-56 flex flex-col shadow-sm overflow-hidden">
                    <div className="h-2/3 bg-gray-50 flex items-center justify-center p-4">
                      <img
                        src={rawProducts[(carouselIndex - 1 + rawProducts.length) % rawProducts.length].image}
                        alt="prev"
                        className="h-full w-full object-contain mix-blend-multiply opacity-50"
                      />
                    </div>
                    <div className="flex-1 p-3 flex flex-col gap-2 justify-center bg-white">
                      <div className="h-2 w-3/4 bg-gray-100 rounded-full"></div>
                      <div className="h-2 w-1/2 bg-gray-100 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Active Item (Center) */}
                <div className="w-full md:w-3/5 z-10 relative">
                  <motion.div
                    key={carouselIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden flex flex-col h-[450px]"
                  >
                    {/* Image Section - No Padding, Full Bleed */}
                    <div className="h-[50%] relative bg-gradient-to-b from-gray-50 to-white flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] opacity-50" />
                      <motion.img
                        initial={{ scale: 0.9, y: 10 }}
                        animate={{ scale: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        src={rawProducts[carouselIndex].image}
                        alt={rawProducts[carouselIndex].name}
                        className="h-full w-full object-contain relative z-10 drop-shadow-2xl"
                      />
                    </div>

                    {/* Content Section - Title Below Image */}
                    <div className="p-5 flex-grow flex flex-col justify-start bg-white relative">
                      <div className="">
                        <h3 className="text-xl font-bold text-gray-900 tracking-tight mb-1">{rawProducts[carouselIndex].name}</h3>
                        <p className="text-xs text-blue-600 font-semibold">{rawProducts[carouselIndex].subname}</p>
                      </div>
                      <div className="w-12 h-1 bg-gray-100 rounded mb-2"></div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {rawProducts[carouselIndex].desc}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Next Item Preview (Right) */}
                <div className="hidden md:block w-1/5 opacity-60 scale-95 select-none grayscale transition-all duration-500 hover:opacity-80">
                  <div className="bg-white rounded-xl border border-gray-200 h-56 flex flex-col shadow-sm overflow-hidden">
                    <div className="h-2/3 bg-gray-50 flex items-center justify-center p-4">
                      <img
                        src={rawProducts[(carouselIndex + 1) % rawProducts.length].image}
                        alt="next"
                        className="h-full w-full object-contain mix-blend-multiply opacity-50"
                      />
                    </div>
                    <div className="flex-1 p-3 flex flex-col gap-2 justify-center bg-white">
                      <div className="h-2 w-3/4 bg-gray-100 rounded-full"></div>
                      <div className="h-2 w-1/2 bg-gray-100 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Next Button - Right of Center */}
                <button onClick={handleNext} className="absolute right-0 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full border border-gray-200 bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-blue-600 hover:scale-110 transition-all">
                  <ChevronRight size={20} />
                </button>

              </div>

              {/* Indicators */}
              <div className="flex justify-center space-x-2 mt-4">
                {rawProducts.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCarouselIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${carouselIndex === idx ? 'w-6 bg-blue-600' : 'w-1.5 bg-gray-300 hover:bg-gray-400'}`}
                  />
                ))}
              </div>
            </div>



            {/* COLUMN 3: Data & Charts (Span 4) */}
            <div className="lg:col-span-4 flex flex-col gap-6">

              {/* Table Section */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/30 rounded-3xl shadow-lg border border-white/20 p-2 overflow-hidden"
              >
                <div className="flex items-center gap-3 p-3 pb-2">
                  <div className="h-5 w-1 bg-blue-800 rounded-full"></div>
                  <h3 className="text-lg font-bold text-gray-900 uppercase">
                    Technical Specifications
                  </h3>
                </div>
                <div className="overflow-x-auto p-2">
                  <table className="w-full text-sm text-center">
                    <thead className="bg-blue-900 text-white">
                      <tr>
                        <th className="p-2 text-left font-bold rounded-tl-lg">Range Type (mm)</th>
                        <th className="p-2 font-bold">Diameter Range</th>
                        <th className="p-2 font-bold">Thickness Range</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr className="hover:bg-blue-50 transition-colors">
                        <td className="p-2 text-left font-bold text-blue-900">Without Center Hole</td>
                        <td className="p-2 text-gray-700 font-medium">9.8 - 135.8</td>
                        <td className="p-2 text-gray-700 font-medium">2 - 15.4</td>
                      </tr>
                      <tr className="hover:bg-blue-50 transition-colors">
                        <td className="p-2 text-left font-bold text-blue-900">Domed / Taper</td>
                        <td className="p-2 text-gray-700 font-medium">9.8 - 135.8</td>
                        <td className="p-2 text-gray-700 font-medium">2 - 15.4</td>
                      </tr>
                      <tr className="hover:bg-blue-50 transition-colors">
                        <td className="p-2 text-left font-bold text-blue-900">With Center Hole</td>
                        <td className="p-2 text-gray-700 font-medium">12.5 - 135.8</td>
                        <td className="p-2 text-gray-700 font-medium">2 - 7</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </motion.div>

              {/* End Applications Section */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white/50 p-6 rounded-3xl border border-gray-100 shadow-xl flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-5 w-1 bg-blue-800 rounded-full"></div>
                  <h3 className="text-lg font-bold text-gray-900 uppercase">
                    Applications
                  </h3>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {endProducts.map((product, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-2 group cursor-default transition-all duration-300 text-center"
                      onMouseEnter={() => setActiveIndex(index)}
                      onMouseLeave={() => setActiveIndex(-1)}
                    >
                      <div className={`w-full aspect-square rounded-xl flex items-center justify-center transition-all duration-300 overflow-hidden ${activeIndex === index ? 'bg-blue-100 scale-110' : 'bg-gray-50 group-hover:bg-blue-50'}`}>
                        <img src={product.icon} alt={product.name} className="w-full h-full object-cover" />
                      </div>
                      <span className={`text-sm font-bold transition-colors ${activeIndex === index ? 'text-blue-800' : 'text-gray-700 group-hover:text-blue-700'}`}>
                        {product.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('production-process')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-primary animate-bounce bg-white/50 p-2 rounded-full backdrop-blur-sm hover:bg-white/80 transition-colors"
        >
          <ChevronDown size={32} />
        </button>
      </div>
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