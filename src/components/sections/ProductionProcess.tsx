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
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Production Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            State-of-the-art manufacturing process ensuring consistent quality
          </motion.p>
        </div>

        {/* Horizontal Timeline Container */}
        <div className="relative w-full pb-12">
          <div className="w-full px-4 relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-[2rem] left-0 w-full h-1 bg-gray-300 dark:bg-gray-600 z-0" />

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-2 relative z-10">
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
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg border-4 border-white dark:border-gray-800 transition-transform duration-300 group-hover:scale-110 mb-4 relative z-10">
                    {index + 1}
                  </div>

                  {/* Content Card */}
                  <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-3 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 w-full min-h-[120px] flex flex-col justify-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    <h3 className="font-bold text-sm text-gray-900 dark:text-white mb-1 leading-tight">
                      {step.name}
                    </h3>
                    <p className="text-[10px] text-gray-600 dark:text-gray-300 leading-tight">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="inline-block bg-primary/10 border border-primary/30 rounded-lg px-8 py-4 backdrop-blur-md"
          >
            <p className="text-gray-800 dark:text-gray-200 font-medium">
              <span className="font-bold text-primary">Quality Control</span> at every stage ensures world-class products
            </p>
          </motion.div>
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
