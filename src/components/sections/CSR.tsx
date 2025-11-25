import { HexagonIcon } from "@/components/HexagonIcon";
import { GraduationCap, Users, Sun, Leaf, ChevronDown } from "lucide-react";

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

  return (
    <section id="csr" className="min-h-screen w-full overflow-x-hidden flex items-center py-12 bg-white relative">
      <div className="section-container">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            CSR & Environment
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Committed to sustainable growth and community development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {initiatives.map((initiative, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="mb-4 flex justify-center">
                <HexagonIcon
                  icon={initiative.icon}
                  size={80}
                  className="group-hover:scale-110 transition-transform from-green-500 to-green-700"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{initiative.title}</h3>
              <p className="text-sm text-muted-foreground">{initiative.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-600/20 rounded-xl p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Environmental Commitment</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                We believe in responsible manufacturing. Our solar power installations and sustainable practices
                demonstrate our dedication to reducing environmental impact while maintaining operational excellence.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                  <p className="text-xs text-muted-foreground">ISO 14001:2015 Environmental Management certified</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                  <p className="text-xs text-muted-foreground">ISO 45001:2018 Occupational Health & Safety certified</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                  <p className="text-xs text-muted-foreground">Continuous investment in green technologies</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">Environmental Impact</h4>
              <div className="space-y-3">
                <div className="text-center pb-3 border-b">
                  <div className="text-3xl font-bold text-green-600 mb-0.5">2,235.85</div>
                  <p className="text-xs text-muted-foreground">Carbon Credits (5 years)</p>
                </div>
                <div className="text-center pb-3 border-b">
                  <div className="text-3xl font-bold text-green-600 mb-0.5">1.32 MW</div>
                  <p className="text-xs text-muted-foreground">Solar Power Capacity</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-0.5">100%</div>
                  <p className="text-xs text-muted-foreground">Commitment to Sustainability</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('contact')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-green-600 animate-bounce"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
};
