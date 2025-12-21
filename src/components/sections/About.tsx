import { Factory, TrendingUp, Users, Award, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";


export const About = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="min-h-screen w-full overflow-x-hidden flex items-center py-12 md:py-16 bg-gradient-subtle relative">
      <div className="w-[95%] md:w-[80%] mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-secondary mb-4"
          >
            About Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl md:text-3xl text-gray-700 font-medium"
          >
            India's Largest Manufacturer of Aluminium Slugs
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Our Journey</h3>
              <p className="text-gray-800 text-base md:text-lg leading-relaxed">
                <span className="font-bold text-primary">Western Metal Industries was established in 1978</span> producing
                Aluminium Sheets. We started production of Aluminium Slugs in <span className="font-bold text-primary">1985</span>,
                responding to the growing demand of this product in India's manufacturing sector.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Today's Leadership</h3>
              <p className="text-gray-800 text-base md:text-lg leading-relaxed">
                Today, we stand as <span className="font-bold text-primary">India's largest producer</span> of
                aluminium slugs, commanding a remarkable 70% market share. Our work area spreads over
                <span className="font-bold text-primary"> 300,000 square feet</span> with a dedicated workforce of
                <span className="font-bold text-primary"> over 400 skilled employees.</span>
              </p>
            </motion.div>

            <div className="flex flex-row gap-4 h-40">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-primary/5 border border-primary/20 rounded-xl p-6 md:p-8 hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg"
              >
                <h4 className="text-lg md:text-xl font-bold text-secondary mb-4">Annual Melting Capacity</h4>
                <ul className="space-y-3 text-gray-800 text-sm md:text-base lg:text-lg">
                  <li><span className="font-bold text-primary">70,000 MT</span></li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-primary/5 border border-primary/20 rounded-xl p-6 md:p-8 hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg"
              >
                <h4 className="text-lg md:text-xl font-bold text-secondary mb-4">Annual Sales</h4>
                <ul className="space-y-3 text-gray-800 text-sm md:text-base lg:text-lg">
                  <li><span className="font-bold text-primary">30,000 MT</span></li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-primary/5 border border-primary/20 rounded-xl p-6 md:p-8 hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg"
              >
                <h4 className="text-lg md:text-xl font-bold text-secondary mb-4">Turnover</h4>
                <span className="font-bold text-primary">INR 7,500 Million</span>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative w-full h-[300px] md:h-[500px]"
          >
            <img
              src="/factory-melting.png"
              alt="Modern aluminium manufacturing facility melting metal"
              className="w-full h-full object-cover rounded-xl shadow-lg border border-primary/20"
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