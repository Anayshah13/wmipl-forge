import { MapPin, Square, Home, Sun } from "lucide-react";
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

  return (
    <section id="infrastructure" className="min-h-screen w-screen overflow-x-hidden flex items-center py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Infrastructure & Capabilities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Two world-class manufacturing facilities equipped with cutting-edge technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {plants.map((plant, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-secondary mb-1">{plant.name}</h3>
                    <p className="text-primary font-semibold">{plant.since}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Square className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Total Plot Area</p>
                      <p className="font-semibold text-secondary">{plant.plotArea}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Home className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Built-up Area</p>
                      <p className="font-semibold text-secondary">{plant.builtUpArea}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Sun className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Solar Plant Capacity</p>
                      <p className="font-semibold text-secondary">{plant.solarCapacity}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-semibold text-secondary">{plant.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-primary mb-2">43,300</div>
            <p className="text-secondary font-medium">Total Plot Area (sq.m)</p>
          </div>
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-primary mb-2">35,000 MT</div>
            <p className="text-secondary font-medium">Annual Production Capacity</p>
          </div>
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-primary mb-2">1.32 MW</div>
            <p className="text-secondary font-medium">Total Solar Capacity</p>
          </div>
        </div>
      </div>
    </section>
  );
};
