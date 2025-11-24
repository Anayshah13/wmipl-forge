import { HexagonIcon } from "@/components/HexagonIcon";
import { Trophy, Package, Building2, Users, Award, CheckCircle2, ChevronDown } from "lucide-react";

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
    <section id="why-wmipl" className="min-h-screen w-screen overflow-x-hidden flex items-center py-20 bg-gray-50 text-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 industrial-pattern pointer-events-none"></div>

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">
            Why Choose WMIPL?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Decades of expertise, cutting-edge infrastructure, and unwavering commitment to quality
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            {features.slice(0, 3).map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:scale-105 hover:border-primary/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0">
                      <HexagonIcon
                        icon={Icon}
                        size={48}
                        className="group-hover:scale-110 transition-transform text-primary"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-secondary group-hover:text-primary transition-colors">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Column */}
          <div className="flex justify-center items-center py-12 lg:py-0">
            <div className="relative md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
              <img
                src="/hexagon.png"
                alt="WMIPL Icon"
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {features.slice(3, 6).map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index + 3}
                  className="group bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:scale-105 hover:border-primary/50"
                >
                  <div className="flex items-start gap-4 lg:flex-row-reverse lg:text-right">
                    <div className="shrink-0">
                      <HexagonIcon
                        icon={Icon}
                        size={48}
                        className="group-hover:scale-110 transition-transform text-primary"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-secondary group-hover:text-primary transition-colors">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('products')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-primary animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};
