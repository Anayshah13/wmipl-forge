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
    <section id="csr" className="min-h-screen w-full overflow-hidden flex flex-col justify-center items-center py-12 md:py-2 relative bg-[url('/leaf.png')] bg-cover bg-center">
      {/* Overlay to ensure text readability against the green background */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px] z-0" />

      <div className="section-container relative z-10 w-full max-w-7xl px-4 h-full flex flex-col justify-center">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block bg-white/90 backdrop-blur-md px-8 py-3 rounded-3xl shadow-lg mb-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-2">
              CSR & Environment
            </h2>
            <p className="text-lg md:text-xl text-green-900 font-bold max-w-4xl mx-auto">
              Committed to sustainable growth and community development
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {initiatives.map((initiative, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center group bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-green-100 hover:-translate-y-2"
            >
              <div className="mb-4 flex justify-center">
                <HexagonIcon
                  icon={initiative.icon}
                  size={56}
                  className="group-hover:scale-110 transition-transform from-green-600 to-green-800"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{initiative.title}</h3>
              <p className="text-base text-gray-800 leading-relaxed font-medium">{initiative.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/95 backdrop-blur-md border border-green-200 rounded-3xl p-6 shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Environmental Commitment</h3>
              <p className="text-lg text-gray-800 leading-relaxed mb-6 font-medium">
                We believe in responsible manufacturing. Our solar power installations and sustainable practices
                demonstrate our dedication to reducing environmental impact while maintaining operational excellence.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <p className="text-base md:text-lg text-gray-900 font-bold">ISO 14001:2015 Environmental Management certified</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <p className="text-base md:text-lg text-gray-900 font-bold">ISO 45001:2018 Occupational Health & Safety certified</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <p className="text-base md:text-lg text-gray-900 font-bold">Continuous investment in green technologies</p>
                </div>
              </div>
            </div>
            <div className="bg-green-50/80 rounded-3xl p-8 border border-green-200">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">Environmental Impact</h4>
              <div className="space-y-6">
                <div className="text-center pb-6 border-b border-green-300">
                  <div className="text-4xl md:text-5xl font-bold text-green-800 mb-2">2,235.85</div>
                  <p className="text-lg text-gray-700 font-bold">Carbon Credits (5 years)</p>
                </div>
                <div className="text-center pb-6 border-b border-green-300">
                  <div className="text-4xl md:text-5xl font-bold text-green-800 mb-2">1.32 MW</div>
                  <p className="text-lg text-gray-700 font-bold">Solar Power Capacity</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-green-800 mb-2">100%</div>
                  <p className="text-lg text-gray-700 font-bold">Commitment to Sustainability</p>
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
