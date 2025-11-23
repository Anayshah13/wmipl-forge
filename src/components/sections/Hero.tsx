import { Button } from "@/components/ui/button";
import { ChevronDown, Menu } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative w-full h-screen min-h-[700px] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-transparent z-10"></div>
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero-bg.png')"
          }}
        />
      </div>

      {/* Header Navigation */}
      <header className="w-full absolute top-0 left-0 right-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end py-8">
            <nav className="hidden lg:flex items-center gap-12">
              <button
                onClick={() => scrollToSection('about')}
                className="text-white/90 hover:text-white text-lg font-medium transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="text-white/90 hover:text-white text-lg font-medium transition-colors"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('infrastructure')}
                className="text-white/90 hover:text-white text-lg font-medium transition-colors"
              >
                Infrastructure
              </button>
              <button
                onClick={() => scrollToSection('management')}
                className="text-white/90 hover:text-white text-lg font-medium transition-colors"
              >
                Management
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-white/90 hover:text-white text-lg font-medium transition-colors"
              >
                Contact
              </button>
              <Link to="/certifications">
                <button
                  className="text-white/90 hover:text-white text-lg font-medium transition-colors"
                >
                  View Certifications
                </button>
              </Link>
            </nav>

            <button className="lg:hidden text-white">
              <Menu size={32} />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <main className="relative z-20 flex items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="w-full md:w-3/4 lg:w-2/3 flex flex-col items-start text-left">
          <div className="flex flex-col gap-8 items-start">
            <div className="flex flex-col gap-6 items-start w-full">
              <img src="/logo.png" alt="Western Metal Industries Pvt. Ltd." className="w-full max-w-3xl h-auto drop-shadow-2xl origin-left" />
              <p className="text-white/80 text-xl md:text-2xl leading-relaxed font-light max-w-3xl">
                India's largest manufacturer of aluminium slugs with 70% market share. 45+ years of excellence.
              </p>
            </div>

            <div className="flex flex-wrap justify-start gap-6 mt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('about')}
                className="bg-primary hover:bg-primary-dark text-white text-lg px-8 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
              >
                Discover Our Capabilities
              </Button>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => scrollToSection('contact')}
                className="bg-white text-secondary hover:bg-white/90 text-lg px-8 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </div>
  );
};
