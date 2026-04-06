"use client";

import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { setPendingHomeSection } from "@/lib/home-section-nav";
import { useState, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";

type DropdownItem = { label: string; id: string };

type NavEntry =
    | { type: "section"; name: string; id: string }
    | { type: "route"; name: string; href: string }
    | { type: "dropdown"; name: string; items: DropdownItem[] };

const navEntries: NavEntry[] = [
    { type: "section", name: "About Us", id: "about" },
    {
        type: "dropdown",
        name: "Products",
        items: [
            { label: "Product Portfolio", id: "products" },
            { label: "Global Export Network", id: "export" },
            { label: "Clients and Suppliers", id: "clients" },
        ],
    },
    {
        type: "dropdown",
        name: "Infrastructure",
        items: [
            { label: "Our Factories", id: "infrastructure" },
            { label: "Production Process", id: "production-process" },
        ],
    },
    { type: "route", name: "Insights", href: "/insights" },
    { type: "section", name: "Contact", id: "contact" },
    {
        type: "dropdown",
        name: "Certifications",
        items: [
            { label: "Quality Assurance", id: "certificates" },
            { label: "CSR", id: "csr-section" },
        ],
    },
];

const NavbarContent = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isPastHero, setIsPastHero] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
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
        setMobileOpenDropdown(null);
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

    const isHomePage = pathname === "/";

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
                            <Link
                                href="/"
                                onClick={() =>
                                    window.scrollTo({ top: 0, behavior: "smooth" })
                                }
                                className="flex items-center gap-1"
                            >
                                <Image
                                    src="/logo5.png"
                                    alt="WMIPL Logo — Western Metal Industries Pvt Ltd"
                                    width={120}
                                    height={48}
                                    className="h-12 w-auto object-contain cursor-pointer"
                                />
                                <h2 className="pt-1.5 text-white/90 hover:text-white text-2xl font-montserrat transition-colors hidden xl:block">
                                    Western Metal Industries Pvt. Ltd.
                                </h2>
                            </Link>
                        )}
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-6">
                        {navEntries.map((entry, index) => (
                            <div key={entry.name} className="flex items-center">
                                {index > 0 && (
                                    <div className="h-4 w-px bg-white/30 mr-6" />
                                )}
                                {entry.type === "route" ? (
                                    <Link
                                        href={entry.href}
                                        target={
                                            entry.href === "/insights"
                                                ? "_blank"
                                                : undefined
                                        }
                                        rel={
                                            entry.href === "/insights"
                                                ? "noopener noreferrer"
                                                : undefined
                                        }
                                        className="text-white/90 hover:text-white text-[1.0625rem] font-medium transition-colors"
                                    >
                                        {entry.name}
                                    </Link>
                                ) : entry.type === "section" ? (
                                    <button
                                        type="button"
                                        onClick={() =>
                                            scrollToSection(entry.id)
                                        }
                                        className="text-white/90 hover:text-white text-[1.0625rem] font-medium transition-colors"
                                    >
                                        {entry.name}
                                    </button>
                                ) : (
                                    <div className="relative group">
                                        <button
                                            type="button"
                                            className="flex items-center gap-1 text-white/90 hover:text-white text-[1.0625rem] font-medium transition-colors"
                                            aria-expanded="false"
                                            aria-haspopup="true"
                                        >
                                            {entry.name}
                                            <ChevronDown
                                                className="h-4 w-4 opacity-80 transition-transform duration-200 group-hover:rotate-180"
                                                aria-hidden
                                            />
                                        </button>
                                        <div
                                            className="absolute left-0 top-full z-[60] pt-2 min-w-[16rem] opacity-0 invisible translate-y-1 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:pointer-events-auto"
                                            role="menu"
                                        >
                                            <div className="rounded-lg border border-white/15 bg-[#0c2d66] shadow-xl shadow-black/25 py-2 backdrop-blur-md">
                                                {entry.items.map((item) => (
                                                    <button
                                                        key={item.id}
                                                        type="button"
                                                        role="menuitem"
                                                        onClick={() =>
                                                            scrollToSection(
                                                                item.id
                                                            )
                                                        }
                                                        className="block w-full text-left px-4 py-2.5 text-base text-white/90 hover:bg-white/10 hover:text-white transition-colors"
                                                    >
                                                        {item.label}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        className="lg:hidden text-white ml-auto z-50 relative"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-expanded={isMobileMenuOpen}
                        aria-label={
                            isMobileMenuOpen ? "Close menu" : "Open menu"
                        }
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
                        className="absolute top-0 left-0 w-full bg-black/95 backdrop-blur-xl pt-24 pb-10 px-6 shadow-xl lg:hidden flex flex-col items-stretch gap-4 h-screen overflow-y-auto"
                    >
                        {navEntries.map((entry) =>
                            entry.type === "route" ? (
                                <Link
                                    key={entry.name}
                                    href={entry.href}
                                    target={
                                        entry.href === "/insights"
                                            ? "_blank"
                                            : undefined
                                    }
                                    rel={
                                        entry.href === "/insights"
                                            ? "noopener noreferrer"
                                            : undefined
                                    }
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-white/90 hover:text-white text-[1.375rem] font-medium transition-colors text-center"
                                >
                                    {entry.name}
                                </Link>
                            ) : entry.type === "section" ? (
                                <button
                                    key={entry.name}
                                    type="button"
                                    onClick={() => scrollToSection(entry.id)}
                                    className="text-white/90 hover:text-white text-[1.375rem] font-medium transition-colors"
                                >
                                    {entry.name}
                                </button>
                            ) : (
                                <div
                                    key={entry.name}
                                    className="flex flex-col gap-3 border-b border-white/10 pb-4 last:border-0"
                                >
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setMobileOpenDropdown(
                                                mobileOpenDropdown ===
                                                    entry.name
                                                    ? null
                                                    : entry.name
                                            )
                                        }
                                        className="flex items-center justify-center gap-2 text-white/90 hover:text-white text-[1.375rem] font-medium transition-colors w-full"
                                    >
                                        {entry.name}
                                        <ChevronDown
                                            className={`h-6 w-6 shrink-0 transition-transform ${
                                                mobileOpenDropdown === entry.name
                                                    ? "rotate-180"
                                                    : ""
                                            }`}
                                        />
                                    </button>
                                    {mobileOpenDropdown === entry.name && (
                                        <div className="flex flex-col gap-3 pl-2">
                                            {entry.items.map((item) => (
                                                <button
                                                    key={item.id}
                                                    type="button"
                                                    onClick={() =>
                                                        scrollToSection(
                                                            item.id
                                                        )
                                                    }
                                                    className="border-l-2 border-white/20 py-1 pl-4 text-left text-lg text-white/75 hover:text-white"
                                                >
                                                    {item.label}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
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
