"use client";

import { MapPin, Square, Home, Sun, ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

export const Infrastructure = () => {
  const plants = [
    {
      name: "Hadapsar Plant",
      since: "Since 1978",
      plotArea: "13,200 sq.m",
      builtUpArea: "5,260 sq.m",
      solarCapacity: "320 KW",
      location: "Within Pune city limits",
      image: "/hadapsar.jpg",
    },
    {
      name: "Bhandgaon Plant",
      since: "Since 2012",
      plotArea: "30,100 sq.m",
      builtUpArea: "8,846 sq.m",
      solarCapacity: "1 MW",
      location: "50 km from Head Office via Pune-Solapur highway",
      image: "/bhandgaon.jpg",
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="infrastructure" className="min-h-screen w-full overflow-x-hidden flex items-center py-4 relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white/10 z-0"></div>
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/western_background.png')"
          }}
        />
      </div>

      <div className="section-container relative z-20 max-w-5xl">
        <div className="text-center mb-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-secondary mb-4"
          >
            Infrastructure & Capabilities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-gray-700 font-medium max-w-4xl mx-auto"
          >
            Two world-class manufacturing facilities equipped with cutting-edge technology
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-5 mb-6 px-4 md:px-0"
        >
          {plants.map((plant, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="overflow-hidden hover:shadow-2xl transition-shadow h-full border-0 shadow-lg">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={plant.image}
                    alt={plant.name === "Hadapsar Plant" ? "Hadapsar plant Western Metal Industries — manufacturing facility since 1978 Pune" : "Bhandgaon plant WMIPL — aluminium slug unit Pune Solapur highway"}
                    width={800}
                    height={500}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-1">{plant.name}</h3>
                      <p className="text-primary font-bold text-lg">{plant.since}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <Square className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-600">Total Plot Area</p>
                        <p className="text-base font-bold text-secondary">{plant.plotArea}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <Home className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-600">Built-up Area</p>
                        <p className="text-base font-bold text-secondary">{plant.builtUpArea}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <Sun className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-600">Solar Capacity</p>
                        <p className="text-base font-bold text-secondary">{plant.solarCapacity}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <MapPin className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-600">Location</p>
                        <p className="text-base font-bold text-secondary">{plant.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <button
        onClick={() => scrollToSection('management')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-primary animate-bounce"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
};