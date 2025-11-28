import { HexagonIcon } from "@/components/HexagonIcon";
import { Trophy, Package, Building2, Users, Award, CheckCircle2, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export const WhyWMIPL = () => {
  const features = [
    {
      icon: Trophy,
      title: "Leadership Position",
      description: "70% market share in aluminium slugs industry in India with 3+ decades of legacy",
    },
    {
      icon: Package,
      title: "Robust Product Portfolio",
      description: "Capability to manufacture varied types of slugs – with center hole, without center hole, or domed up to 135.8mm diameter",
    },
    {
      icon: Building2,
      title: "Strong Infrastructure",
      description: "35,000 MT installed capacity with state-of-the-art machinery and equipment",
    },
    {
      icon: Users,
      title: "Experienced Workforce",
      description: "400+ strong workforce with average 30+ years of experience with the company",
    },
    {
      icon: Award,
      title: "Certifications",
      description: "ISO 9001:2015, ISO 14001:2015, ISO 45001:2018 certified with export house registration",
    },
    {
      icon: CheckCircle2,
      title: "Quality Assurance",
      description: "Stringent quality control processes ensuring consistent product excellence",
    },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="why-wmipl" className="min-h-screen w-full overflow-x-hidden flex flex-col justify-center pt-10 pb-32 bg-[url('/grey_bg.avif')] bg-cover bg-center text-secondary relative overflow-hidden">
      <div className="w-[95%] md:w-[87%] mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 text-secondary"
          >
            Why Choose WMIPL?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-gray-700 font-medium max-w-4xl mx-auto"
          >
            Decades of expertise, cutting-edge infrastructure, and unwavering commitment to quality
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-20 items-center">
          {/* Left Column */}
          <div className="space-y-6 md:space-y-8">
            {features.slice(0, 3).map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white border border-gray-300 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-2xl transition-all hover:scale-105 hover:border-primary/50"
                >
                  <div className="flex items-start gap-6">
                    <div className="shrink-0">
                      <HexagonIcon
                        icon={Icon}
                        size={64}
                        className="group-hover:scale-110 transition-transform text-primary"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2 text-secondary group-hover:text-primary transition-colors">{feature.title}</h3>
                      <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Center Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center items-center py-8 lg:py-0 order-first lg:order-none"
          >
            <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px]">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
              <img
                src="/hexagon.png"
                alt="WMIPL Icon"
                className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.6)]"
              />
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="space-y-6 md:space-y-8">
            {features.slice(3, 6).map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index + 3}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white border border-gray-300 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-2xl transition-all hover:scale-105 hover:border-primary/50"
                >
                  <div className="flex items-start gap-6 lg:flex-row-reverse lg:text-right">
                    <div className="shrink-0">
                      <HexagonIcon
                        icon={Icon}
                        size={64}
                        className="group-hover:scale-110 transition-transform text-primary"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2 text-secondary group-hover:text-primary transition-colors">{feature.title}</h3>
                      <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('products')}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 text-primary animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};
