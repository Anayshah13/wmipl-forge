import { Link } from "react-router-dom";
import { Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/western.metal/", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/western-metal-industries-private-ltd/", label: "LinkedIn" },
  ];

  return (
    <footer id="footer" className="bg-[#1a1a1a] text-white py-16 font-sans relative overflow-hidden">
      {/* Decorative Dome Effect */}
      <div
        className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[120%] h-[95%] bg-[#0b2555] rounded-t-[100%] opacity-85 blur-[120px] pointer-events-none z-0"
      />

      <div className="relative z-10 max-w-[85%] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-8 md:gap-0 items-stretch justify-center text-center">

          {/* Column 1: Logo & Socials (Flex-2 -> 50%) */}
          <div className="flex-[2] w-full flex flex-col items-center gap-6 md:border-r border-white/5 px-4">
            <img
              src="logo2.png"
              alt="Western Metal Industries"
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

          {/* Column 2: Quick Links (Flex-1 -> 25%) */}
          <div className="flex-1 w-full flex flex-col items-center md:border-r border-white/10 px-4 pt-4 md:pt-0">
            <h4 className="font-semibold mb-6 text-xl uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-3 text-base text-zinc-400">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Products</a></li>
              <li><a href="#infrastructure" className="hover:text-primary transition-colors">Infrastructure</a></li>
              <li><a href="#management" className="hover:text-primary transition-colors">Management</a></li>
            </ul>
          </div>

          {/* Column 3: Certifications (Flex-1 -> 25%) */}
          <div className="flex-1 w-full flex flex-col items-center px-4 pt-4 md:pt-0">
            <h4 className="font-semibold mb-6 text-xl uppercase tracking-wider text-white">Certifications</h4>
            <ul className="space-y-3 text-base text-zinc-400">
              <li><Link to="/certifications" className="hover:text-primary transition-colors">ISO 9001:2015</Link></li>
              <li><Link to="/certifications" className="hover:text-primary transition-colors">ISO 14001:2015</Link></li>
              <li><Link to="/certifications" className="hover:text-primary transition-colors">ISO 45001:2018</Link></li>
              <li><Link to="/certifications" className="hover:text-primary transition-colors">Export House</Link></li>
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
