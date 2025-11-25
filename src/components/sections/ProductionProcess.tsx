import { ArrowRight, ChevronDown } from "lucide-react";

export const ProductionProcess = () => {
  const steps = [
    { name: "Melting", description: "High-quality aluminium melting" },
    { name: "Casting", description: "Precision casting process" },
    { name: "Hot & Cold Rolling", description: "Rolling to specifications" },
    { name: "Coiling", description: "Material coiling" },
    { name: "Punching", description: "Slug formation" },
    { name: "Annealing", description: "Heat treatment" },
    { name: "Vibratory Processing", description: "Surface finishing" },
    { name: "Dispatch", description: "Quality packaging" },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="production-process" className="min-h-screen w-full overflow-x-hidden flex items-center py-20 bg-gradient-subtle relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Production Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            State-of-the-art manufacturing process ensuring consistent quality
          </p>
        </div>

        {/* Uniform Grid - 8 Boxes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-white border-2 border-primary rounded-lg p-6 text-center transition-shadow hover:shadow-xl"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {index + 1}
                </div>
                <div className="will-change-transform transition-transform duration-300 ease-out origin-center group-hover:scale-[1.3]">
                  <h3 className="font-semibold text-secondary mb-1">{step.name}</h3>
                  <p className="text-xs text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-primary/10 border border-primary/30 rounded-lg px-8 py-4">
            <p className="text-secondary font-medium">
              <span className="font-bold text-primary">Quality Control</span> at every stage ensures world-class products
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('infrastructure')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-primary animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};
