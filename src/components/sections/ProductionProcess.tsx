import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export const ProductionProcess = () => {
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

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="production-process" className="h-screen w-full overflow-hidden flex flex-col justify-center relative bg-[url('/wavy.jpg')] bg-cover bg-center bg-no-repeat">
      {/* Overlay for better text readability if needed */}
      <div className="absolute inset-0 bg-white/80 dark:bg-black/40 backdrop-blur-[2px]" />

      <div className="relative z-10 w-full max-w-[95%] mx-auto flex flex-col h-full justify-center">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Production Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl text-gray-700 font-medium max-w-4xl mx-auto dark:text-gray-300"
          >
            State-of-the-art manufacturing process ensuring consistent quality
          </motion.p>
        </div>

        {/* Horizontal Timeline Container */}
        <div className="relative w-full pb-16">
          <div className="w-full px-4 relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-[2.5rem] left-0 w-full h-1.5 bg-gray-300 dark:bg-gray-600 z-0" />

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 md:gap-4 relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center group"
                >
                  {/* Step Number Circle */}
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-xl border-4 border-white dark:border-gray-800 transition-transform duration-300 group-hover:scale-110 mb-6 relative z-10">
                    {index + 1}
                  </div>

                  {/* Content Card */}
                  <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 w-full min-h-[160px] flex flex-col justify-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2 leading-tight">
                      {step.name}
                    </h3>
                    <p className="text-base font-medium text-gray-600 dark:text-gray-300 leading-snug">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('infrastructure')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-primary animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};
