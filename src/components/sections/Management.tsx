import { Card } from "@/components/ui/card";
import { User, ChevronDown } from "lucide-react";

export const Management = () => {
  const team = [
    {
      name: "Anuj Gandhi",
      position: "MD & CEO",
      experience: "50 years of Experience",
      expertise: "Purchase, Finance and Strategic Management",
    },
    {
      name: "Prashant Shah",
      position: "Executive Director",
      experience: "30 years of Experience",
      expertise: "Production Administration, Exports and Domestic Sales",
    },
    {
      name: "Rakesh Shah",
      position: "Executive Director",
      experience: "40 years of Experience",
      expertise: "Production Administration and Domestic Sales",
    },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="management"
      className="min-h-screen w-screen overflow-x-hidden flex items-center py-20 bg-gradient-subtle relative"
    >
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Management Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Led by industry veterans with decades of experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-primary to-primary-dark p-8 flex items-center justify-center">
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                  <User className="text-white" size={64} />
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-secondary mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold mb-3">
                  {member.position}
                </p>
                <p className="text-sm font-medium text-muted-foreground mb-2">
                  {member.experience}
                </p>
                <p className="text-sm text-muted-foreground">
                  {member.expertise}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <button
        onClick={() => scrollToSection("csr")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-primary animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};
