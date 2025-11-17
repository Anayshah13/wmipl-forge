import { HexagonIcon } from "@/components/HexagonIcon";
import { GraduationCap, Users, Sun, Leaf } from "lucide-react";

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

  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            CSR & Environment
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Committed to sustainable growth and community development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {initiatives.map((initiative, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="mb-6 flex justify-center">
                <HexagonIcon 
                  icon={initiative.icon} 
                  size={80}
                  className="group-hover:scale-110 transition-transform"
                />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">{initiative.title}</h3>
              <p className="text-muted-foreground">{initiative.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-secondary mb-4">Our Environmental Commitment</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We believe in responsible manufacturing. Our solar power installations and sustainable practices 
                demonstrate our dedication to reducing environmental impact while maintaining operational excellence.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <p className="text-sm text-muted-foreground">ISO 14001:2015 Environmental Management certified</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <p className="text-sm text-muted-foreground">ISO 45001:2018 Occupational Health & Safety certified</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <p className="text-sm text-muted-foreground">Continuous investment in green technologies</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h4 className="text-xl font-semibold text-secondary mb-6 text-center">Environmental Impact</h4>
              <div className="space-y-4">
                <div className="text-center pb-4 border-b">
                  <div className="text-4xl font-bold text-primary mb-1">2,235.85</div>
                  <p className="text-sm text-muted-foreground">Carbon Credits (5 years)</p>
                </div>
                <div className="text-center pb-4 border-b">
                  <div className="text-4xl font-bold text-primary mb-1">1.32 MW</div>
                  <p className="text-sm text-muted-foreground">Solar Power Capacity</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-1">100%</div>
                  <p className="text-sm text-muted-foreground">Commitment to Sustainability</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
