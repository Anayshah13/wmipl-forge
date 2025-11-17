import { ArrowRight } from "lucide-react";

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

  return (
    <section className="min-h-screen flex items-center py-20 bg-gradient-subtle">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Production Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            State-of-the-art manufacturing process ensuring consistent quality
          </p>
        </div>

        {/* Desktop Process Flow */}
        <div className="hidden lg:flex items-center justify-between gap-4 mb-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div className="flex-1">
                <div className="bg-white border-2 border-primary rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 mx-auto mb-3 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-secondary mb-1">{step.name}</h3>
                  <p className="text-xs text-muted-foreground">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="text-primary mx-2 flex-shrink-0" size={24} />
              )}
            </div>
          ))}
        </div>

        {/* Mobile Process Flow */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, index) => (
            <div key={index}>
              <div className="bg-white border-2 border-primary rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">{step.name}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="flex justify-center py-2">
                  <ArrowRight className="text-primary rotate-90" size={24} />
                </div>
              )}
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
    </section>
  );
};
