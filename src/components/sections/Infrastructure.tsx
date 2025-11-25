import { MapPin, Square, Home, Sun, ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Infrastructure = () => {
  const plants = [
    {
      name: "Hadapsar Plant",
      since: "Since 1978",
      plotArea: "13,200 sq.m",
      builtUpArea: "5,260 sq.m",
      solarCapacity: "320 KW",
      location: "Within Pune city limits",
      image: "/hadapsar.jpg",
    },
    {
      name: "Bhandgaon Plant",
      since: "Since 2012",
      plotArea: "30,100 sq.m",
      builtUpArea: "8,846 sq.m",
      solarCapacity: "1 MW",
      location: "50 km from Head Office via Pune-Solapur highway",
      image: "/bhandgaon.jpg",
    },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="infrastructure" className="min-h-screen w-full overflow-x-hidden flex items-center py-12 relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white/10 z-0"></div>
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/western_background.png')"
          }}
        />
      </div>

      <div className="section-container relative z-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-2">
            Infrastructure & Capabilities
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Two world-class manufacturing facilities equipped with cutting-edge technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {plants.map((plant, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="aspect-video overflow-hidden h-48 md:h-64">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-0.5">{plant.name}</h3>
                    <p className="text-primary font-semibold text-sm">{plant.since}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Square className="text-primary" size={16} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Total Plot Area</p>
                      <p className="font-semibold text-secondary text-sm">{plant.plotArea}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Home className="text-primary" size={16} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Built-up Area</p>
                      <p className="font-semibold text-secondary text-sm">{plant.builtUpArea}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Sun className="text-primary" size={16} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Solar Plant Capacity</p>
                      <p className="font-semibold text-secondary text-sm">{plant.solarCapacity}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="text-primary" size={16} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Location</p>
                      <p className="font-semibold text-secondary text-sm">{plant.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <button
        onClick={() => scrollToSection('management')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-primary animate-bounce"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
};
