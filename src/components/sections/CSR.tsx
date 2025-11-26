import { HexagonIcon } from "@/components/HexagonIcon";
import { GraduationCap, Users, Sun, Leaf, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export const CSR = () => {
  const initiatives = [
    {
      icon: GraduationCap,
      title: "Education Support",
      description: "Supporting local schools with infrastructure and educational resources to empower the next generation",
    },
    {
      icon: Users,
      title: "Local Employment",
      description: "Creating sustainable employment opportunities for local communities and skill development programs",
    },
    {
      icon: Sun,
      title: "Solar Power",
      description: "1.32 MW combined solar capacity across both plants reducing carbon footprint significantly",
    },
    {
      icon: Leaf,
      title: "Carbon Credits",
      description: "2,235.85 carbon credits earned over 5 years demonstrating our commitment to sustainability",
    },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="csr" className="h-screen w-full overflow-hidden flex flex-col justify-center items-center py-4 relative bg-[url('/leaf.png')] bg-cover bg-center">
      {/* Overlay to ensure text readability against the green background */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px] z-0" />

      <div className="section-container relative z-10 w-full max-w-6xl px-4 h-full flex flex-col justify-center">
        <div className="text-center mb-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block bg-white/80 backdrop-blur-md px-6 py-2 rounded-2xl shadow-sm mb-2"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-1">
              CSR & Environment
            </h2>
            <p className="text-sm md:text-base text-green-800/80 max-w-3xl mx-auto">
              Committed to sustainable growth and community development
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-4"
        >
          {initiatives.map((initiative, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center group bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg hover:shadow-xl transition-all border border-green-100"
            >
              <div className="mb-2 flex justify-center">
                <HexagonIcon
                  icon={initiative.icon}
                  size={48}
                  className="group-hover:scale-110 transition-transform from-green-600 to-green-800"
                />
              </div>
              <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-1">{initiative.title}</h3>
              <p className="text-[10px] md:text-xs text-gray-600 leading-tight">{initiative.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/95 backdrop-blur-md border border-green-200 rounded-xl p-4 shadow-xl"
        >
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">Our Environmental Commitment</h3>
              <p className="text-xs text-gray-700 leading-relaxed mb-3">
                We believe in responsible manufacturing. Our solar power installations and sustainable practices
                demonstrate our dedication to reducing environmental impact while maintaining operational excellence.
              </p>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                  <p className="text-[10px] md:text-xs text-gray-600">ISO 14001:2015 Environmental Management certified</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                  <p className="text-[10px] md:text-xs text-gray-600">ISO 45001:2018 Occupational Health & Safety certified</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                  <p className="text-[10px] md:text-xs text-gray-600">Continuous investment in green technologies</p>
                </div>
              </div>
            </div>
            <div className="bg-green-50/50 rounded-xl p-3 border border-green-100">
              <h4 className="text-sm md:text-base font-semibold text-gray-900 mb-2 text-center">Environmental Impact</h4>
              <div className="space-y-2">
                <div className="text-center pb-2 border-b border-green-200">
                  <div className="text-xl md:text-2xl font-bold text-green-700 mb-0.5">2,235.85</div>
                  <p className="text-[10px] text-gray-600">Carbon Credits (5 years)</p>
                </div>
                <div className="text-center pb-2 border-b border-green-200">
                  <div className="text-xl md:text-2xl font-bold text-green-700 mb-0.5">1.32 MW</div>
                  <p className="text-[10px] text-gray-600">Solar Power Capacity</p>
                </div>
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-green-700 mb-0.5">100%</div>
                  <p className="text-[10px] text-gray-600">Commitment to Sustainability</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <button
        onClick={() => scrollToSection('contact')}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 text-green-700 drop-shadow-lg animate-bounce"
      >
        <ChevronDown size={28} strokeWidth={3} />
      </button>
    </section>
  );
};
