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
    <section id="csr" className="min-h-screen w-full overflow-x-hidden flex items-center py-12 relative bg-[url('/leaf.png')] bg-cover bg-center">
      {/* Overlay to ensure text readability against the green background */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] z-0" />

      <div className="section-container relative z-10">
        <div className="text-center mb-8">
          <div className="inline-block bg-white/80 backdrop-blur-md px-8 py-4 rounded-2xl shadow-sm mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-2">
              CSR & Environment
            </h2>
            <p className="text-lg text-green-800/80 max-w-3xl mx-auto">
              Committed to sustainable growth and community development
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {initiatives.map((initiative, index) => (
            <div
              key={index}
              className="text-center group bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl transition-all border border-green-100"
            >
              <div className="mb-4 flex justify-center">
                <HexagonIcon
                  icon={initiative.icon}
                  size={80}
                  className="group-hover:scale-110 transition-transform from-green-600 to-green-800"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{initiative.title}</h3>
              <p className="text-sm text-gray-600">{initiative.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/95 backdrop-blur-md border border-green-200 rounded-xl p-6 md:p-8 shadow-xl">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Environmental Commitment</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                We believe in responsible manufacturing. Our solar power installations and sustainable practices
                demonstrate our dedication to reducing environmental impact while maintaining operational excellence.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                  <p className="text-xs text-gray-600">ISO 14001:2015 Environmental Management certified</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                  <p className="text-xs text-gray-600">ISO 45001:2018 Occupational Health & Safety certified</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                  <p className="text-xs text-gray-600">Continuous investment in green technologies</p>
                </div>
              </div>
            </div>
            <div className="bg-green-50/50 rounded-xl p-6 border border-green-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">Environmental Impact</h4>
              <div className="space-y-3">
                <div className="text-center pb-3 border-b border-green-200">
                  <div className="text-3xl font-bold text-green-700 mb-0.5">2,235.85</div>
                  <p className="text-xs text-gray-600">Carbon Credits (5 years)</p>
                </div>
                <div className="text-center pb-3 border-b border-green-200">
                  <div className="text-3xl font-bold text-green-700 mb-0.5">1.32 MW</div>
                  <p className="text-xs text-gray-600">Solar Power Capacity</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-700 mb-0.5">100%</div>
                  <p className="text-xs text-gray-600">Commitment to Sustainability</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('contact')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white drop-shadow-lg animate-bounce"
      >
        <ChevronDown size={32} strokeWidth={3} />
      </button>
    </section>
  );
};
