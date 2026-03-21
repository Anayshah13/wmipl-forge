"use client";

import { Card } from "@/components/ui/card";
import { User, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export const Management = () => {
  const team = [
    {
      name: "Anuj Gandhi",
      position: "MD & CEO",
      experience: "50 years of Experience",
      expertise: "Purchase, Finance and Strategic Management",
    },
    {
      name: "Prashant Shah",
      position: "Executive Director",
      experience: "30 years of Experience",
      expertise: "Production Administration, Exports and Domestic Sales",
    },
    {
      name: "Rakesh Shah",
      position: "Executive Director",
      experience: "40 years of Experience",
      expertise: "Production Administration and Domestic Sales",
    },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section
      id="management"
      className="min-h-screen w-full overflow-x-hidden flex items-center py-20 relative bg-cover bg-center"
      style={{ backgroundImage: "url('/metal.avif')" }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/50 z-0" />
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-secondary mb-6"
          >
            Management Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-gray-700 font-medium max-w-4xl mx-auto"
          >
            Led by industry veterans with decades of experience
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10 px-4 md:px-0"
        >
          {team.map((member, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                className="overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 h-full border-0 shadow-xl"
              >
                <div className="bg-gradient-to-br from-primary to-primary-dark p-6 md:p-10 flex items-center justify-center">
                  <div className="w-32 h-32 md:w-40 md:h-40 bg-white/20 rounded-full flex items-center justify-center">
                    <User className="text-white" size={64} />
                  </div>
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-3xl font-bold text-secondary mb-3">
                    {member.name}
                  </h3>
                  <p className="text-primary font-bold text-xl mb-4">
                    {member.position}
                  </p>
                  <p className="text-lg font-medium text-gray-600 mb-3">
                    {member.experience}
                  </p>
                  <p className="text-lg text-gray-600 font-medium leading-relaxed">
                    {member.expertise}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <button
        onClick={() => scrollToSection("export")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-primary animate-bounce bg-white/50 p-2 rounded-full backdrop-blur-sm hover:bg-white/80 transition-colors"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};
