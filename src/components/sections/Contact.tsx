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
    borderRadius: '50px'
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
        <section id="contact" className="min-h-screen w-full overflow-x-hidden flex flex-col justify-center py-20 px-8 md:px-20 lg:px-32 bg-[url('/light_smoke.avif')] bg-cover bg-center text-secondary relative gap-12 mx-auto">

            <div className="flex flex-col lg:flex-row gap-12 w-full lg:h-[36vh] ">

                {/* Contact Info (Flex 3) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex-[3] h-full"
                >
                    <Card className="h-full p-10 shadow-xl bg-white text-secondary border-none flex flex-col justify-center">
                        <div className="space-y-6">
                            <div className="flex items-center gap-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                    <Mail className="text-primary w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-base text-gray-500 font-semibold uppercase tracking-wide">Email</p>
                                    <a
                                        href="https://mail.google.com/mail/?view=cm&fs=1&to=western@westernaluminium.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xl font-bold text-secondary hover:text-primary transition-colors cursor-pointer"
                                    >
                                        western@westernaluminium.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                    <Phone className="text-primary w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-base text-gray-500 font-semibold uppercase tracking-wide">Phone</p>
                                    <p className="text-xl font-bold text-secondary">+91-20-26870164</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                    <Globe className="text-primary w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-base text-gray-500 font-semibold uppercase tracking-wide">Website</p>
                                    <p className="text-xl font-bold text-secondary">www.westernaluminium.com</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </motion.div>

                {/* Locations (Flex 5) - Clean list with 1 icon */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex-[5] h-full"
                >
                    <Card className="p-10 h-full shadow-xl bg-white border-none flex items-center gap-10">
                        {/* Big Flat Icon */}
                        <div className="hidden lg:flex flex-col items-center justify-center h-full w-1/4 border-r border-gray-100 pr-10">
                            <div className="w-28 h-28 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                <MapPin className="w-12 h-12 text-primary" />
                            </div>
                        </div>

                        {/* Locations List */}
                        <div className="flex-1 grid md:grid-cols-2 gap-10 h-full items-center">
                            <div className="space-y-4">
                                <h4 className="text-2xl font-bold text-secondary flex items-center gap-3">
                                    <MapPin className="w-6 h-6 text-primary lg:hidden" />
                                    Head Office
                                </h4>
                                <p className="text-gray-600 leading-relaxed text-lg font-medium">
                                    251/1 A, B Hadapsar Industrial Estate,<br />
                                    Hadapsar, Pune - 411013<br />
                                    Maharashtra, India
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-2xl font-bold text-secondary flex items-center gap-3">
                                    <MapPin className="w-6 h-6 text-primary lg:hidden" />
                                    Manufacturing Unit
                                </h4>
                                <p className="text-gray-600 leading-relaxed text-lg font-medium">
                                    294 Khor Road, Bhandgaon,<br />
                                    Pune-Solapur Road, Pune - 412214<br />
                                    Maharashtra, India
                                </p>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            </div>
            {/* ROW 1: Message Form (3) : Map (2) - 90vh */}
            <div className="flex flex-col lg:flex-row gap-12 w-full lg:h-auto items-stretch">

                {/* Contact Form (Flex 3) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex-[3] w-full"
                >
                    <Card className="p-8 md:p-12 h-full shadow-2xl flex flex-col justify-center border-none bg-white/90 backdrop-blur-sm">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-secondary mb-8">Get in Touch</h2>

                        <form onSubmit={handleSubmit} className="space-y-6 flex-grow flex flex-col justify-center">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-lg font-bold text-secondary mb-2">Full Name</label>
                                    <Input
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="Name"
                                        className="h-14 bg-white/50 border-gray-300 focus:border-primary text-lg"
                                    />
                                </div>
                                <div>
                                    <label className="block text-lg font-bold text-secondary mb-2">Email Address</label>
                                    <Input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="name@example.com"
                                        className="h-14 bg-white/50 border-gray-300 focus:border-primary text-lg"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-lg font-bold text-secondary mb-2">Phone Number</label>
                                <Input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    placeholder="+91 XXXXX XXXXX"
                                    className="h-14 bg-white/50 border-gray-300 focus:border-primary text-lg"
                                />
                            </div>

                            <div>
                                <label className="block text-lg font-bold text-secondary mb-2">Message</label>
                                <Textarea
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    placeholder="your enquiry"
                                    className="h-[150px] bg-white/50 border-gray-300 focus:border-primary resize-none p-4 text-lg h-1"
                                />
                            </div>

                            <Button type="submit" className="w-full h-16 text-xl font-bold bg-primary hover:bg-primary-dark shadow-lg mt-4 rounded-xl">
                                Send Message
                            </Button>
                        </form>
                    </Card>
                </motion.div>

                {/* Google Map (Flex 2) - Square Aspect Ratio */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex-[2] w-full"
                >
                    <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/20">
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

            {/* ROW 2: Contact Info (3) : Locations (5) - 30vh */}
        </section>
    );
};