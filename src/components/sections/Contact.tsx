import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Globe, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

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
      title: "Head Office & Hadapsar Plant",
      address: "Pune, Maharashtra",
      location: "Within Pune city limits",
    },
    {
      title: "Bhandgaon Plant",
      address: "Bhandgaon, Maharashtra",
      location: "50 km from Pune via Pune-Solapur Highway",
    },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="contact" className="min-h-screen w-full overflow-x-hidden flex items-center py-20 bg-gradient-subtle relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss how we can serve your aluminium slug requirements
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8">
            <h3 className="text-2xl font-semibold text-secondary mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-secondary mb-2">Full Name</label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary mb-2">Email</label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary mb-2">Phone</label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary mb-2">Message</label>
                <Textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your requirements..."
                  rows={4}
                />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary-dark">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-secondary mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-secondary">Email</p>
                    <p className="text-muted-foreground">info@westernmetal.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-secondary">Phone</p>
                    <p className="text-muted-foreground">+91 20 XXXX XXXX</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-secondary">Website</p>
                    <p className="text-muted-foreground">www.westernmetal.com</p>
                  </div>
                </div>
              </div>
            </Card>

            {offices.map((office, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">{office.title}</h4>
                    <p className="text-muted-foreground text-sm">{office.address}</p>
                    <p className="text-muted-foreground text-sm">{office.location}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
