import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Globe, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { motion } from "framer-motion";

const containerStyle = {
  width: '100%',
  height: '100%',
  minHeight: '500px',
  borderRadius: '0.75rem'
};

const center = {
  lat: 18.5105,
  lng: 73.9356
};

const bhandgaon = {
  lat: 18.4609,
  lng: 74.3085
};

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const offices = [
    {
      title: "Main Factory and Registered Office",
      address: (
        <>
          251/1 A, B Hadapsar Industrial Estate,<br />
          Hadapsar,<br />
          Pune - 411013<br />
          Maharashtra<br />
          India
        </>
      ),
      location: "Within Pune city limits",
    },
    {
      title: "Second Unit",
      address: (
        <>
          294 Khor Road, Bhandgaon,<br />
          Pune-Solapur Road<br />
          Taluka - Daund<br />
          Dist.Pune - 412214<br />
          Maharashtra<br />
          India
        </>
      ),
      location: "50 km from Pune via Pune-Solapur Highway",
    },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="contact" className="min-h-screen w-full overflow-x-hidden flex items-center py-20 bg-[url('/light_smoke.avif')] bg-cover bg-center relative">
      <div className="section-container max-w-[95rem]">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-secondary mb-6"
          >
            Get in Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-gray-700 font-medium max-w-4xl mx-auto"
          >
            Let's discuss how we can serve your aluminium slug requirements
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 px-4 md:px-0">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <Card className="p-6 md:p-10 h-full shadow-xl">
              <h3 className="text-3xl font-bold text-secondary mb-8">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="block text-lg font-bold text-secondary mb-3">Full Name</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="h-12 text-lg"
                  />
                </div>
                <div>
                  <label className="block text-lg font-bold text-secondary mb-3">Email</label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="h-12 text-lg"
                  />
                </div>
                <div>
                  <label className="block text-lg font-bold text-secondary mb-3">Phone</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 XXXXX XXXXX"
                    className="h-12 text-lg"
                  />
                </div>
                <div>
                  <label className="block text-lg font-bold text-secondary mb-3">Message</label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your requirements..."
                    rows={5}
                    className="text-lg resize-none"
                  />
                </div>
                <Button type="submit" className="w-full h-12 text-lg font-bold bg-primary hover:bg-primary-dark">
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8 h-full flex flex-col"
          >
            <Card className="p-8 flex-grow shadow-lg">
              <h3 className="text-2xl font-bold text-secondary mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-secondary">E-mail</p>
                    <p className="text-gray-700 text-lg font-medium">western@westernaluminium.com</p>
                    <p className="text-gray-700 text-lg font-medium">prashant@westernaluminium.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-secondary">Phone</p>
                    <p className="text-gray-700 text-lg font-medium">+91-20-26870164 / 26875054 / 29805054</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-secondary">Website</p>
                    <p className="text-gray-700 text-lg font-medium">www.westernaluminium.com</p>
                  </div>
                </div>
              </div>
            </Card>

            {offices.map((office, index) => (
              <Card key={index} className="p-8 flex-grow shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-secondary mb-2">{office.title}</h4>
                    <p className="text-gray-700 text-lg leading-relaxed font-medium">{office.address}</p>
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="h-full min-h-[300px] md:min-h-[500px] rounded-xl overflow-hidden shadow-lg border border-gray-200"
          >
            <LoadScript googleMapsApiKey="AIzaSyDRkLHkjclT6KD7oN1ZZPzjUcw7BRLDx1c">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
              >
                <Marker position={center} title="Main Factory (Hadapsar)" />
                <Marker position={bhandgaon} title="Second Unit (Bhandgaon)" />
              </GoogleMap>
            </LoadScript>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
