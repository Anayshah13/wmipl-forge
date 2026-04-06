import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/western.metal/", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/western-metal-industries-private-ltd/", label: "LinkedIn" },
  ];

  return (
    <footer id="footer" className="bg-[#000000] text-white py-16 font-sans relative overflow-hidden">
      {/* Decorative Dome Effect */}
      <div
        className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[120%] h-[92%] bg-[#1c60eadc] rounded-t-[100%] opacity-70 blur-[7.5rem] pointer-events-none z-0"
      />

      <div className="relative z-10 mx-auto max-w-[92%] px-4 md:px-8">
        <div className="flex flex-col items-stretch justify-center gap-8 text-center md:flex-row md:gap-0">

          {/* Column 1: Logo & Socials */}
          <div className="flex w-full flex-col items-center gap-6 px-4 md:flex-[1.75] md:border-r md:border-white/10">
            <Image
              src="/logo2.png"
              alt="Western Metal Industries logo — aluminium slug manufacturer Pune India"
              width={160}
              height={128}
              className="h-32 w-auto object-contain pl-6"
            />
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-400 hover:text-white hover:bg-primary hover:border-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links — 8 items, 2 cols; wider horizontal band */}
          <div className="flex w-full min-w-0 flex-col items-center px-4 pt-4 md:flex-[1.5] md:border-r md:border-white/10 md:px-10 md:pt-0">
            <h4 className="mb-6 text-xl font-semibold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="mx-auto grid w-full max-w-2xl grid-cols-2 gap-x-12 gap-y-5 text-center text-base leading-relaxed text-zinc-300">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#clients" className="hover:text-primary transition-colors">Clients &amp; Suppliers</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Products</a></li>
              <li><a href="#export" className="hover:text-primary transition-colors">Export Network</a></li>
              <li><a href="#infrastructure" className="hover:text-primary transition-colors">Infrastructure</a></li>
              <li><a href="#why-wmipl" className="hover:text-primary transition-colors">Why WMIPL</a></li>
              <li><a href="#csr-section" className="hover:text-primary transition-colors">CSR</a></li>
              <li><a href="#production-process" className="hover:text-primary transition-colors">Production Process</a></li>
            </ul>
          </div>

          {/* Column 3: Certifications */}
          <div className="flex w-full min-w-0 flex-col items-center px-4 pt-4 md:flex-[0.9] md:pt-0">
            <h4 className="font-semibold mb-6 text-xl uppercase tracking-wider text-white">Certifications</h4>
            <ul className="space-y-3 text-base text-zinc-400">
              <li><Link href="/certifications" className="hover:text-primary transition-colors">ISO 9001:2015</Link></li>
              <li><Link href="/certifications" className="hover:text-primary transition-colors">ISO 14001:2015</Link></li>
              <li><Link href="/certifications" className="hover:text-primary transition-colors">ISO 45001:2018</Link></li>
              <li><Link href="/certifications" className="hover:text-primary transition-colors">Export House</Link></li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-base text-zinc-500">
          <p>© {currentYear} Western Metal Industries Pvt. Ltd. All rights reserved.</p>
          <p>Designed by Anay Shah</p>
        </div>
      </div>
    </footer>
  );
};
