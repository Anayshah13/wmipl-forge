import { Button } from "@/components/ui/button";
import { ChevronDown, Menu } from "lucide-react";

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
            backgroundImage: "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070')"
          }}
        />
      </div>

      {/* Header Navigation */}
      <header className="w-full absolute top-0 left-0 right-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-primary hexagon flex items-center justify-center">
                <span className="text-white font-bold text-xl">W</span>
              </div>
              <h2 className="text-white text-lg font-bold leading-tight tracking-tight hidden md:block">
                Western Metal Industries Pvt. Ltd.
              </h2>
            </div>
            
            <nav className="hidden lg:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white/90 hover:text-white text-sm font-medium transition-colors"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="text-white/90 hover:text-white text-sm font-medium transition-colors"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('infrastructure')}
                className="text-white/90 hover:text-white text-sm font-medium transition-colors"
              >
                Infrastructure
              </button>
              <button 
                onClick={() => scrollToSection('management')}
                className="text-white/90 hover:text-white text-sm font-medium transition-colors"
              >
                Management
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white/90 hover:text-white text-sm font-medium transition-colors"
              >
                Contact
              </button>
            </nav>

            <button className="lg:hidden text-white">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <main className="relative z-20 flex items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full md:w-1/2 lg:w-2/5">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter">
                Forging the Future of Aluminium.
              </h1>
              <p className="text-white/80 text-lg md:text-xl font-normal leading-relaxed">
                Precision Engineered. Globally Trusted.
              </p>
              <p className="text-white/70 text-base leading-relaxed">
                India's largest manufacturer of aluminium slugs with 70% market share. 45+ years of excellence.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                onClick={() => scrollToSection('about')}
                className="bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                Discover Our Capabilities
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="border-white text-white hover:bg-white hover:text-primary"
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
