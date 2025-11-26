import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
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
          <source src="/video1.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Hero Content */}
      <main className="relative z-20 flex items-center justify-left w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full ml-10">
        <div className="w-full md:w-3/4 lg:w-2/3 flex flex-col items-center text-center">
          <div className="flex flex-col gap-6 items-center">
            <div className="flex flex-col gap-4 items-center w-full">
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                src="/logo2.png"
                alt="Western Metal Industries Pvt. Ltd."
                className="w-full max-w-2xl h-auto drop-shadow-2xl"
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-white/80 text-lg md:text-xl leading-relaxed font-light max-w-2xl"
              >
                India's largest manufacturer of aluminium slugs with 70% market share. 45+ years of excellence.
              </motion.p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button
                  size="lg"
                  onClick={() => scrollToSection('about')}
                  className="bg-primary hover:bg-primary-dark text-white text-base px-6 py-5 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
                >
                  Discover Our Capabilities
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() => scrollToSection('contact')}
                  className="bg-white text-secondary hover:bg-white/90 text-base px-6 py-5 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
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
        <ChevronDown size={32} />
      </motion.button>
    </div>
  );
};
