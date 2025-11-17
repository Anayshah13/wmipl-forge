import { HexagonIcon } from "@/components/HexagonIcon";
import { Trophy, Package, Building2, Users, Award, CheckCircle2 } from "lucide-react";

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

  return (
    <section id="why-wmipl" className="min-h-screen flex items-center py-20 bg-secondary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 industrial-pattern"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose WMIPL?
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Decades of expertise, cutting-edge infrastructure, and unwavering commitment to quality
          </p>
        </div>

        <div className="grid gap-6">
          {/* Row 1: 2 cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {features.slice(0, 2).map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all hover:scale-105"
                >
                  <div className="mb-6">
                    <HexagonIcon 
                      icon={Icon} 
                      size={72}
                      className="group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-white/70 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Row 2: 3 cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {features.slice(2, 5).map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all hover:scale-105"
                >
                  <div className="mb-4">
                    <HexagonIcon 
                      icon={Icon} 
                      size={60}
                      className="group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Row 3: 1 large card */}
          <div className="grid md:grid-cols-1">
            {features.slice(5, 6).map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all hover:scale-105"
                >
                  <div className="flex items-start gap-6">
                    <div className="mb-6">
                      <HexagonIcon 
                        icon={Icon} 
                        size={72}
                        className="group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                      <p className="text-white/70 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 bg-primary/20 border border-primary/30 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Export House Registration</h3>
          <p className="text-white/80 max-w-2xl mx-auto">
            Recognized by the Government of India as a trusted export house, we serve clients across South Africa, 
            New Zealand, Saudi Arabia, Bangladesh, and other international markets.
          </p>
        </div>
      </div>
    </section>
  );
};
