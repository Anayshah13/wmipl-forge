"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export const Hero = () => {
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    setVideoSrc("/video1.mp4");
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative w-full h-screen min-h-[700px] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-transparent z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          {videoSrc && <source src={videoSrc} type="video/mp4" />}
        </video>
      </div>

      {/* Hero Content */}
      <main className="relative z-20 flex items-center justify-start w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full md:ml-8 lg:ml-16">
        <div className="w-full md:w-3/4 lg:w-2/3 flex flex-col items-center text-center">
          <div className="flex flex-col gap-6 items-center">
            <div className="flex flex-col gap-8 items-center w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full max-w-2xl px-10 py-4"
              >
                <Image
                  src="/logo2.png"
                  alt="Western Metal Industries Pvt. Ltd. — aluminium slug manufacturer Pune India"
                  width={600}
                  height={200}
                  priority
                  className="w-full h-auto drop-shadow-2xl"
                />
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-white/80 text-l md:text-2xl leading-relaxed max-w-3xl drop-shadow-lg"
              >
                India's largest manufacturer of aluminium slugs with 75% market share. 45+ years of excellence.
              </motion.p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-6 w-full px-4 sm:px-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  onClick={() => scrollToSection('products')}
                  className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white text-lg md:text-xl font-bold px-6 py-6 md:px-8 md:py-7 rounded-2xl shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105"
                >
                  Discover Our Capabilities
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() => scrollToSection('contact')}
                  className="w-full sm:w-auto bg-white text-secondary hover:bg-white/90 text-lg md:text-xl font-bold px-6 py-6 md:px-8 md:py-7 rounded-2xl shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105"
                >
                  Get in Touch
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white animate-bounce"
      >
        <ChevronDown className="w-12 h-12" />
      </motion.button>
    </div>
  );
};
