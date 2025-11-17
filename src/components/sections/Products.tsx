import { Card } from "@/components/ui/card";

export const Products = () => {
  const slugTypes = [
    {
      name: "Without Center Hole",
      application: "Containers for Food, Pesticide, Electronics Industry",
      minDiameter: "9.8mm",
      maxDiameter: "135.8mm",
      minThickness: "2mm",
      maxThickness: "15.4mm",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070",
    },
    {
      name: "With Center Hole",
      application: "Tubes for Pharmaceutical & Cosmetic Industry",
      minDiameter: "12.5mm",
      maxDiameter: "56.7mm",
      minThickness: "2mm",
      maxThickness: "7mm",
      image: "https://images.unsplash.com/photo-1583911860205-72f8ac8ddcbe?q=80&w=2070",
    },
    {
      name: "Domed / Taper",
      application: "Aerosol Cans for Perfume, Deodorants, Sanitizers",
      minDiameter: "Various",
      maxDiameter: "Various",
      minThickness: "Custom",
      maxThickness: "Custom",
      image: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?q=80&w=2070",
    },
  ];

  const endProducts = [
    { name: "Cans", percentage: 43, volume: "14,000 MT" },
    { name: "Tubes", percentage: 34, volume: "9,000 MT" },
    { name: "Bottles", percentage: 16, volume: "6,000 MT" },
    { name: "Others", percentage: 7, volume: "1,000 MT" },
  ];

  return (
    <section id="products" className="min-h-screen w-screen overflow-x-hidden flex items-center py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Product Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive range of aluminium slugs for diverse industrial applications
          </p>
        </div>

        {/* Aluminium Slug Types */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-secondary mb-8 text-center">Aluminium Slug Types</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {slugTypes.map((type, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={type.image}
                    alt={type.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-secondary mb-2">{type.name}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{type.application}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Diameter Range:</span>
                      <span className="font-semibold text-primary">{type.minDiameter} - {type.maxDiameter}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Thickness Range:</span>
                      <span className="font-semibold text-primary">{type.minThickness} - {type.maxThickness}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Product-wise Sales & End Products */}
        <div className="bg-muted rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-secondary mb-8 text-center">End Products & Annual Sales Distribution (30,000 MT)</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {endProducts.map((product, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg overflow-hidden border-2 border-primary/20 hover:border-primary transition-colors"
              >
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary/20">{product.name[0]}</div>
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-lg font-semibold text-secondary mb-2">{product.name}</h4>
                  <div className="text-3xl font-bold text-primary mb-1">{product.percentage}%</div>
                  <div className="text-sm text-muted-foreground">{product.volume}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Size Range Table */}
        <div className="mt-16 overflow-x-auto">
          <h3 className="text-2xl font-semibold text-secondary mb-6 text-center">Product Size Range</h3>
          <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-md">
            <thead>
              <tr className="bg-primary text-white">
                <th className="py-4 px-6 text-left font-semibold">Range Type</th>
                <th className="py-4 px-6 text-center font-semibold">Min. Diameter (mm)</th>
                <th className="py-4 px-6 text-center font-semibold">Max. Diameter (mm)</th>
                <th className="py-4 px-6 text-center font-semibold">Min. Thickness (mm)</th>
                <th className="py-4 px-6 text-center font-semibold">Max. Thickness (mm)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-muted/50">
                <td className="py-4 px-6 font-medium">Without Center Hole – Plain/Domed/Taper</td>
                <td className="py-4 px-6 text-center">9.8</td>
                <td className="py-4 px-6 text-center">135.8</td>
                <td className="py-4 px-6 text-center">2</td>
                <td className="py-4 px-6 text-center">15.4</td>
              </tr>
              <tr className="hover:bg-muted/50">
                <td className="py-4 px-6 font-medium">With Center Hole</td>
                <td className="py-4 px-6 text-center">12.5</td>
                <td className="py-4 px-6 text-center">56.7</td>
                <td className="py-4 px-6 text-center">2</td>
                <td className="py-4 px-6 text-center">7</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
