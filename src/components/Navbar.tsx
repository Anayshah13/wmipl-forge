"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { setPendingHomeSection } from "@/lib/home-section-nav";
import { useState, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";

type NavItem =
    | { kind: "section"; name: string; id: string }
    | { kind: "route"; name: string; href: string };

const navItems: NavItem[] = [
    { kind: "section", name: "About Us", id: "about" },
    { kind: "section", name: "Products", id: "products" },
    { kind: "section", name: "Infrastructure", id: "infrastructure" },
    { kind: "section", name: "Management", id: "management" },
    { kind: "route", name: "Insights", href: "/insights" },
    { kind: "section", name: "Contact", id: "contact" },
    { kind: "section", name: "View Certifications", id: "certificates" },
];

const NavbarContent = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isPastHero, setIsPastHero] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
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
        if (pathname !== "/") {
            setPendingHomeSection(id);
            router.push("/");
            return;
        }
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
            window.history.replaceState(null, "", `/#${id}`);
        }
    };

    const isHomePage = pathname === '/';

    const getNavbarStyles = () => {
        if (!isHomePage) return "bg-[#0b2555EF] py-4";
        if (isPastHero) return "bg-[#0b2555EF] py-2";
        if (isScrolled) return "py-2";
        return "py-4";
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 ${getNavbarStyles()}`}
        >
            <div className="w-full px-4 sm:px-6 lg:px-12">
                <div className="flex items-center justify-between">
                    <div className="flex items-center py-0 flex-row">
                        {(!isHomePage || isPastHero) && (
                            <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-1">
                                <Image
                                    src="/logo5.png"
                                    alt="WMIPL Logo — Western Metal Industries Pvt Ltd"
                                    width={120}
                                    height={48}
                                    className="h-12 w-auto object-contain cursor-pointer"
                                />
                                <h2 className="pt-1.5 text-white/90 hover:text-white text-2xl font-montserrat transition-colors hidden xl:block">Western Metal Industries Pvt. Ltd.</h2>
                            </Link>
                        )}
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-6">
                        {navItems.map((item, index) => (
                            <div key={item.name} className="flex items-center">
                                {index > 0 && <div className="h-4 w-px bg-white/30 mr-6" />}
                                {item.kind === "route" ? (
                                    <Link
                                        href={item.href}
                                        className="text-white/90 hover:text-white text-lg font-medium transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={() => scrollToSection(item.id)}
                                        className="text-white/90 hover:text-white text-lg font-medium transition-colors"
                                    >
                                        {item.name}
                                    </button>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
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
                        {navItems.map((item) =>
                            item.kind === "route" ? (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-white/90 hover:text-white text-2xl font-medium transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ) : (
                                <button
                                    key={item.name}
                                    type="button"
                                    onClick={() => scrollToSection(item.id)}
                                    className="text-white/90 hover:text-white text-2xl font-medium transition-colors"
                                >
                                    {item.name}
                                </button>
                            )
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export const Navbar = () => {
    return (
        <Suspense fallback={null}>
            <NavbarContent />
        </Suspense>
    );
};
