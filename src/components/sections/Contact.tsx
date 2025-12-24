import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { motion } from "framer-motion";

const containerStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '16px'
};

const center = {
    lat: 18.49,
    lng: 74.13
};

const hadapsar = {
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

    return (
        <section id="contact" className="min-h-screen w-full overflow-hidden flex flex-col justify-center py-10 px-4 md:px-8 lg:px-16 bg-[url('/light_smoke.avif')] bg-cover bg-center text-secondary relative">

            <div className="max-w-[95%] mx-auto w-full flex flex-col h-full lg:h-[85vh]">
                <div className="text-center mb-6 lg:mb-8 flex-none">
                    <h2 className="text-4xl lg:text-6xl font-bold text-black">Contact Us</h2>
                    <p className="mt-3 text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto font-medium">
                        Get in touch with us for any inquiries or assistance.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 flex-grow lg:overflow-hidden">
                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col gap-4 h-full"
                    >
                        {/* Contact Details Row */}
                        <Card className="p-5 shadow-lg bg-white/90 backdrop-blur-sm border-none h-[116px] flex items-center">
                            <div className="grid grid-cols-1 md:grid-cols-[2fr_1.5fr_1.5fr] gap-4 w-[98%] mx-auto">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex flex-shrink-0 items-center justify-center">
                                        <Mail className="w-5 h-5 text-primary" />
                                    </div>
                                    <div className="overflow-hidden">
                                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Email</p>
                                        <a href="mailto:western@westernaluminium.com" className="text-sm font-bold text-secondary hover:text-primary truncate block transition-colors">
                                            western@westernaluminium.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex flex-shrink-0 items-center justify-center">
                                        <Phone className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Phone</p>
                                        <p className="text-sm font-bold text-secondary text-nowrap">+91-20-26870164</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex flex-shrink-0 items-center justify-center">
                                        <Globe className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Website</p>
                                        <p className="text-sm font-bold text-secondary truncate">www.westernaluminium.com</p>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Contact Form */}
                        <Card className="p-6 md:p-8 shadow-xl bg-white/90 backdrop-blur-sm border-none flex-grow flex flex-col">
                            <h2 className="text-sm font-bold text-secondary mb-5 uppercase tracking-wider border-b border-gray-100 pb-3">
                                Send us a Message
                            </h2>
                            <form onSubmit={handleSubmit} className="flex-grow flex flex-col gap-5">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1, duration: 0.4 }}
                                        className="space-y-1.5"
                                    >
                                        <label className="text-xs font-semibold text-gray-600">Full Name</label>
                                        <Input
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="John Doe"
                                            className="bg-white/50 border-gray-200 focus:border-primary h-10 transition-all hover:bg-white/80"
                                        />
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2, duration: 0.4 }}
                                        className="space-y-1.5"
                                    >
                                        <label className="text-xs font-semibold text-gray-600">Email</label>
                                        <Input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="name@ex.com"
                                            className="bg-white/50 border-gray-200 focus:border-primary h-10 transition-all hover:bg-white/80"
                                        />
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3, duration: 0.4 }}
                                        className="space-y-1.5"
                                    >
                                        <label className="text-xs font-semibold text-gray-600">Phone</label>
                                        <Input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            placeholder="+91..."
                                            className="bg-white/50 border-gray-200 focus:border-primary h-10 transition-all hover:bg-white/80"
                                        />
                                    </motion.div>
                                </div>
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.4 }}
                                    className="space-y-1.5 flex-grow flex flex-col"
                                >
                                    <label className="text-xs font-semibold text-gray-600">Message</label>
                                    <Textarea
                                        required
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        placeholder="Your Enquiry"
                                        className="bg-white/50 border-gray-200 focus:border-primary resize-none flex-grow min-h-[100px] transition-all hover:bg-white/80"
                                    />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.4 }}
                                >
                                    <Button type="submit" className="w-full bg-primary hover:bg-primary-dark font-bold shadow-md rounded-lg h-11 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
                                        Send Message
                                    </Button>
                                </motion.div>
                            </form>
                        </Card>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col gap-4 h-full"
                    >
                        {/* Address Details */}
                        {/* Address Details */}
                        <Card className="p-5 shadow-lg bg-white/90 backdrop-blur-sm border-none min-h-[116px] flex items-center justify-center">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                                <div className="flex items-center justify-center gap-3">
                                    <div className="h-12 w-12 rounded-full bg-primary/10 flex flex-shrink-0 items-center justify-center">
                                        <MapPin className="text-primary w-6 h-6" />
                                    </div>
                                    <div className="text-left">
                                        <h3 className="text-lg font-bold text-secondary mb-1">Head Office</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed font-medium">
                                            251/1 A, B Hadapsar Ind. Estate,<br />Hadapsar, Pune - 411013
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center gap-3">
                                    <div className="h-12 w-12 rounded-full bg-primary/10 flex flex-shrink-0 items-center justify-center">
                                        <MapPin className="text-primary w-6 h-6" />
                                    </div>
                                    <div className="text-left">
                                        <h3 className="text-lg font-bold text-secondary mb-1">Mfg. Unit</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed font-medium">
                                            254 Khor Road, Bhandgaon,<br />Pune - 412214
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Map */}
                        <div className="flex-grow rounded-xl overflow-hidden shadow-xl border border-white/20 min-h-[250px] relative bg-gray-100">
                            <LoadScript googleMapsApiKey="AIzaSyDRkLHkjclT6KD7oN1ZZPzjUcw7BRLDx1c">
                                <GoogleMap
                                    mapContainerStyle={containerStyle}
                                    center={center}
                                    zoom={10}
                                    options={{
                                        disableDefaultUI: false,
                                        styles: [
                                            {
                                                featureType: "all",
                                                elementType: "labels.text.fill",
                                                stylers: [{ color: "#7c93a3" }, { lightness: "-10" }],
                                            },
                                        ],
                                    }}
                                >
                                    <Marker position={hadapsar} title="Main Factory" />
                                    <Marker position={bhandgaon} title="Second Unit" />
                                </GoogleMap>
                            </LoadScript>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};