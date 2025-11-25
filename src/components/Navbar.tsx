import { Menu } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: id } });
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    useEffect(() => {
        if (location.pathname === '/' && location.state && (location.state as any).scrollTo) {
            const id = (location.state as any).scrollTo;
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
                // Clear state
                window.history.replaceState({}, document.title);
            }, 100);
        }
    }, [location]);

    const isHomePage = location.pathname === '/';
    const showBackground = isScrolled || !isHomePage;

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${showBackground ? "bg-secondary/30 backdrop-blur-md shadow-md py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="w-full px-4 sm:px-6 lg:px-12 font-bold">
                <div className="flex items-center justify-between">
                    <div className="flex-1"></div>

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

                    <button className="lg:hidden text-white ml-auto">
                        <Menu size={32} />
                    </button>
                </div>
            </div>
        </header>
    );
};
