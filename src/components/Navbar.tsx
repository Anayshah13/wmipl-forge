import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isPastHero, setIsPastHero] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            setIsPastHero(window.scrollY > window.innerHeight);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        setIsMobileMenuOpen(false);
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

    const getNavbarStyles = () => {
        if (!isHomePage) return "bg-[#0b2555EF] py-4";
        if (isPastHero) return "bg-[#0b2555EF] py-2";
        if (isScrolled) return "py-2";
        return "py-4";
    };

    const navLinks = [
        { name: 'About Us', id: 'about' },
        { name: 'Products', id: 'products' },
        { name: 'Infrastructure', id: 'infrastructure' },
        { name: 'Management', id: 'management' },
        { name: 'Contact', id: 'contact' },
        { name: 'View Certifications', id: 'certificatesect'}
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 ${getNavbarStyles()}`}
        >
            <div className="w-full px-4 sm:px-6 lg:px-12">
                <div className="flex items-center justify-between">
                    <div className="flex items-center py-0 flex-row">
                        {(!isHomePage || isPastHero) && (
                            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-1">
                                <img
                                    src="/logo5.png"
                                    alt="WMIPL Logo"
                                    className="h-12 w-auto object-contain cursor-pointer"
                                />
                                <h2 className="pt-1.5 text-white/90 hover:text-white text-2xl font-montserrat transition-colors hidden xl:block">Western Metal Industries Pvt. Ltd.</h2>
                            </Link>
                        )}
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-6">
                        {navLinks.map((link, index) => (
                            <div key={link.name} className="flex items-center">
                                {index > 0 && <div className="h-4 w-px bg-white/30 mr-6" />}
                                <button
                                    onClick={() => scrollToSection(link.id)}
                                    className="text-white/90 hover:text-white text-lg font-medium transition-colors"
                                >
                                    {link.name}
                                </button>
                            </div>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-white ml-auto z-50 relative"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-0 left-0 w-full bg-black/95 backdrop-blur-xl pt-24 pb-10 px-6 shadow-xl lg:hidden flex flex-col items-center gap-8 h-screen"
                    >
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.id)}
                                className="text-white/90 hover:text-white text-2xl font-medium transition-colors"
                            >
                                {link.name}
                            </button>
                        ))}
                        <Link to="/certifications" onClick={() => setIsMobileMenuOpen(false)}>
                            <button
                                className="text-white/90 hover:text-white text-2xl font-medium transition-colors"
                            >
                                View Certifications
                            </button>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
