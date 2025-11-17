import { Factory, TrendingUp, Users, Award } from "lucide-react";

export const About = () => {
  const stats = [
    { icon: Factory, label: "Manufacturing Space", value: "300,000 sq.ft" },
    { icon: Users, label: "Employees", value: "400+" },
    { icon: TrendingUp, label: "Annual Melting Capacity", value: "70,000 MT" },
    { icon: Award, label: "Market Share", value: "70%" },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center py-20 bg-gradient-subtle">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            About Western Metal Industries
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            India's Largest Manufacturer of Aluminium Slugs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-3">Our Journey</h3>
                <p className="text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-primary">Western Metal Industries was established in 1978</span> producing 
                  Aluminium Sheets. We started production of Aluminium Slugs in <span className="font-semibold text-primary">1985</span>, 
                  responding to the growing demand of this product in India's manufacturing sector.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-3">Today's Leadership</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Today, we stand as <span className="font-semibold text-primary">India's largest producer</span> of 
                  aluminium slugs, commanding a remarkable 70% market share. Our work area spreads over 
                  <span className="font-semibold text-primary"> 300,000 square feet</span> with a dedicated workforce of 
                  <span className="font-semibold text-primary"> over 400 skilled employees</span>, having a turnover close to 
                  <span className="font-semibold text-primary"> INR 7,500 Million</span>.
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <h4 className="font-semibold text-secondary mb-2">Performance Highlights</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Annual Melting Capacity: <span className="font-semibold text-primary">70,000 MT</span></li>
                  <li>• Annual Sales: <span className="font-semibold text-primary">30,000 MT</span></li>
                  <li>• Turnover: <span className="font-semibold text-primary">INR 7,500 Million</span></li>
                  <li>• Export Presence: South Africa, New Zealand, Saudi Arabia, Bangladesh & more</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <img 
              src="https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=2070"
              alt="Modern aluminium manufacturing facility"
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="bg-white border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon className="text-primary" size={24} />
                </div>
                <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
