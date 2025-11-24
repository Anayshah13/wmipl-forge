import { Factory, TrendingUp, Users, Award, ChevronDown } from "lucide-react";

export const About = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="min-h-screen w-screen overflow-x-hidden flex items-center py-16 bg-gradient-subtle relative">
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            About Western Metal Industries
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            India's Largest Manufacturer of Aluminium Slugs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-secondary mb-2">Our Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                <span className="font-semibold text-primary">Western Metal Industries was established in 1978</span> producing
                Aluminium Sheets. We started production of Aluminium Slugs in <span className="font-semibold text-primary">1985</span>,
                responding to the growing demand of this product in India's manufacturing sector.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-secondary mb-2">Today's Leadership</h3>
              <p className="text-muted-foreground leading-relaxed">
                Today, we stand as <span className="font-semibold text-primary">India's largest producer</span> of
                aluminium slugs, commanding a remarkable 70% market share. Our work area spreads over
                <span className="font-semibold text-primary"> 300,000 square feet</span> with a dedicated workforce of
                <span className="font-semibold text-primary"> over 400 skilled employees</span>, having a turnover close to
                <span className="font-semibold text-primary"> INR 7,500 Million</span>.
              </p>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 hover:scale-105 transition-transform duration-300 shadow-sm hover:shadow-md">
              <h4 className="font-semibold text-secondary mb-2">Performance Highlights</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Annual Melting Capacity: <span className="font-semibold text-primary">70,000 MT</span></li>
                <li>• Annual Sales: <span className="font-semibold text-primary">30,000 MT</span></li>
                <li>• Turnover: <span className="font-semibold text-primary">INR 7,500 Million</span></li>
                <li>• Export Presence: South Africa, New Zealand, Saudi Arabia, Bangladesh & more</li>
              </ul>
            </div>
          </div>

          <div className="relative w-[85%] ml-auto aspect-[4/3] rounded-xl overflow-hidden shadow-2xl group">
            <img
              src="/factory-melting.png"
              alt="Modern aluminium manufacturing facility melting metal"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('why-wmipl')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-primary animate-bounce bg-white/50 p-2 rounded-full backdrop-blur-sm hover:bg-white/80 transition-colors"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};
