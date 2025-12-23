import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export const About = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="min-h-screen w-full flex items-center justify-center py-16 bg-gradient-subtle relative overflow-hidden font-sans">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-secondary mb-4"
          >
            About Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-gray-600 font-medium"
          >
            India's Largest Manufacturer of Aluminium Slugs
          </motion.p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">

          {/* Text and Statistics Column */}
          <div className="flex-1 space-y-10">

            {/* Our Journey */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-secondary mb-4">Our Journey</h3>
              <p className="text-lg text-gray-800 leading-relaxed font-medium">
                <span className="text-primary font-bold">Western Metal Industries was established in 1978</span> producing
                Aluminium Sheets. We started production of Aluminium Slugs in <span className="text-primary font-bold">1985</span>,
                responding to the growing demand of this product in India's manufacturing sector.
              </p>
            </motion.div>

            {/* Today's Leadership */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-secondary mb-4">Today's Leadership</h3>
              <p className="text-lg text-gray-800 leading-relaxed font-medium">
                Today, we stand as <span className="text-primary font-bold">India's largest producer</span> of
                aluminium slugs, commanding a remarkable 70% market share with ou 99.7% pure aluminium products. Our work area spreads over
                <span className="text-primary font-bold"> 300,000 square feet</span> with a dedicated workforce of
                <span className="text-primary font-bold"> over 400 skilled employees.</span>
              </p>
            </motion.div>

            {/* Statistics Boxes */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Melting Capacity", value: "70,000 MT", delay: 0.2 },
                { label: "Annual Sales", value: "30,000 MT", delay: 0.3 },
                { label: "Turnover", value: "₹750 Cr", delay: 0.4 }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: item.delay }}
                  viewport={{ once: true }}
                  className="bg-primary/15 hover:bg-primary/30 rounded-2xl p-2 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg min-h-[160px] cursor-default border border-primary/10"
                >
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2 font-sans">
                    {item.label}
                  </h4>
                  <p className="text-2xl lg:text-3xl font-extrabold text-primary font-sans">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image Column */}
          <motion.div
            className="flex-1 w-full h-[500px]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src="/factory-melting.png"
              alt="Factory Melting"
              className="w-full h-full object-cover rounded-2xl shadow-xl border border-primary/20"
            />
          </motion.div>

        </div>
      </div>

      <button
        onClick={() => scrollToSection('why-wmipl')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-primary animate-bounce bg-white/50 p-2 rounded-full backdrop-blur-sm hover:bg-white/80 transition-colors"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};