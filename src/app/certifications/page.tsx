"use client";

import React, { useState } from 'react';
import Image from "next/image";
import { ChevronDown, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { motion, AnimatePresence } from 'framer-motion';

// --- Internal Carousel Component (Simulating Aceternity UI) ---
interface SlideData {
  title: string;
  src: string;
  desc?: string;
}

interface CarouselProps {
  slides: SlideData[];
  onImageClick: (src: string) => void;
}

const Carousel = ({ slides, onImageClick }: CarouselProps) => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1 === slides.length ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 < 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gray-50 dark:bg-gray-900 py-20">
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />

      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[#0A4DAA] mb-12 text-center uppercase tracking-tight">
          Our Certifications
        </h2>

        <div className="relative flex items-center justify-center w-full perspective-1000 min-h-[500px]">
          <AnimatePresence mode='wait'>
            {slides.map((slide, index) => {
              const isActive = index === current;
              if (!isActive) return null;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="relative w-full md:w-[700px] aspect-[3/4] md:aspect-[16/9] bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700 flex flex-col md:flex-row"
                >
                  {/* Image Section - Clickable with Overlay */}
                  <div
                    className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden group cursor-pointer"
                    onClick={() => onImageClick(slide.src)}
                  >
                    <Image
                      width={600}
                      height={400}
                      src={slide.src}
                      alt={slide.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[#0A4DAA]/10 group-hover:bg-[#0A4DAA]/0 transition-colors duration-300" />

                    {/* Overlay hint */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 bg-black/70 text-white px-3 py-1 rounded-full text-sm transition-opacity pointer-events-none">
                        Click to expand
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="w-full md:w-1/2 h-1/2 md:h-full p-8 flex flex-col justify-center bg-white dark:bg-gray-800">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {slide.title}
                    </h3>
                    {slide.desc && (
                      <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm leading-relaxed">
                        {slide.desc}
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white shadow-lg hover:bg-gray-50 text-[#0A4DAA] transition-all z-20 hover:scale-110"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white shadow-lg hover:bg-gray-50 text-[#0A4DAA] transition-all z-20 hover:scale-110"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex gap-2 mt-8">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${current === idx ? "w-8 bg-[#0A4DAA]" : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};


// --- Main Component ---
export default function CertificationsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const qualityPoints = [
    "Products manufactured are safe, cost effective and adhering to international standards",
    "Continuous improvement of product quality is implemented",
    "We are an ISO 9001-2015 certified company with ISO 45001:2018 & ISO 14001:2015 certifications for our Bhandgaon Plant",
    "We intend to modernize our production lines, to achieve even better product quality",
  ];

  const slideData = [
    {
      title: "ISO 9001:2015",
      desc: "Management System Certificate for Western Metal Industries Private Limited.",
      src: "/iso9001_1.png",
    },
    {
      title: "Appendix to Certificate",
      desc: "Detailed scope and sites covered under the DNV Management System.",
      src: "/appendix_to_certificate.png",
    },
    {
      title: "ISO 45001:2018",
      desc: "Occupational Health and Safety Management System (TÜV SÜD).",
      src: "/iso45001.png",
    },
    {
      title: "ISO 14001:2015",
      desc: "Environmental Management System Certification (TÜV SÜD).",
      src: "/iso14001.png",
    },
  ];

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('certifications-carousel');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans text-gray-900">

      {/* SECTION 1: Quality Assurance Main */}
      <section className="bg-white dark:bg-gray-900 min-h-screen relative flex flex-col">
        {/* Added blur effect when modal is open */}
        <div className={`container mx-auto px-4 sm:px-6 lg:px-8 pt-4 lg:pt-12 pb-12 lg:pb-24 flex-grow transition-all duration-300 ${selectedImage ? 'blur-sm' : ''}`}>

          {/* Header - Center Aligned */}
          <header className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#0A4DAA]">
              QUALITY ASSURANCE
            </h1>
          </header>

          {/* Main Content Grid */}
          <main className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 h-full">

            {/* Left Column: Image & Caption */}
            <div className="flex flex-col items-center lg:justify-end z-10 relative group h-full">
              <div
                className="bg-white p-4 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer transform transition-transform duration-300 group-hover:scale-105 max-w-sm w-full relative"
                onClick={() => setSelectedImage('/export_house.png')}
              >
                <Image
                  width={600}
                  height={400}
                  alt="Export House Recognition Certificate"
                  className="w-full max-w-sm mx-auto object-cover"
                  src="/export_house.png"
                />

                {/* Overlay hint */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors rounded-lg flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 bg-black/70 text-white px-3 py-1 rounded-full text-sm transition-opacity pointer-events-none">
                    Click to expand
                  </span>
                </div>
              </div>

              <div className="bg-[#0A4DAA] text-white text-center py-4 px-6 mt-6 rounded-md w-full max-w-sm shadow-md">
                <p className="font-medium text-lg">Export House Recognition</p>
              </div>
            </div>

            {/* Right Column: Blue Text Box */}
            <div className="bg-[#0A4DAA] p-8 lg:p-12 rounded-2xl flex flex-col justify-center lg:-ml-12 lg:w-[90%] lg:mr-auto shadow-xl relative min-h-[400px]">
              <h2 className="text-white text-3xl font-bold mb-8">QUALITY</h2>
              <ul className="space-y-6">
                {qualityPoints.map((point, index) => (
                  <li key={index} className="text-white text-lg leading-relaxed flex items-start gap-3">
                    <span className="mt-2.5 block w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

          </main>
        </div>

        {/* Bouncing Chevron */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center pb-4">
          <button
            onClick={scrollToNextSection}
            className="animate-bounce p-2 bg-white/80 rounded-full shadow-md hover:bg-white transition-colors cursor-pointer text-[#0A4DAA]"
            aria-label="Scroll down"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* SECTION 2: Carousel of Certifications - Full Viewport Height */}
      <section
        id="certifications-carousel"
        className="relative w-full min-h-screen"
      >
        <Carousel
          slides={slideData}
          onImageClick={setSelectedImage}
        />
      </section>

      {/* Global Modal / Lightbox with Zoom */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-xl p-4 transition-opacity duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full overflow-hidden" onClick={(e) => e.stopPropagation()}>

            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-[60]"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>

            {/* Zoomable Image Wrapper */}

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

    </div>
  );
}
