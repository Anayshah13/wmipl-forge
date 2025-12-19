import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/western.metal/", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/western-metal-industries-private-ltd/", label: "LinkedIn" },
  ];

  return (
    <footer id="footer" className="bg-[#1a1a1a] text-white py-16 relative overflow-hidden font-sans">
      {/* Decorative Dome Effect - Darker */}
      <div
        className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[120%] h-[95%] bg-[#0b2555] rounded-t-[100%] opacity-85 blur-[120px] pointer-events-none z-0"
      />

      <div className="relative z-10 max-w-[85%] mx-auto px-4 md:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-8 mb-12 items-start"
        >
          {/* Column 1 (Flex 1.5): Logo + Links Grid */}
          <motion.div variants={itemVariants} className="flex-[1.5] w-full flex flex-col items-center md:items-start text-center md:text-left space-y-8">
            {/* Row 1: Logo */}
            <div className="w-full flex justify-center md:justify-center">
              <img src="logo2.png" alt="Western Metal Industries" className="h-32 w-auto object-contain filter drop-shadow-xl" />
            </div>

            {/* Row 2: Grid for Links & Certifications */}
            <div className="grid grid-cols-2 gap-4 w-[70%] ml-20">
              {/* Quick Links */}
              <div className="flex flex-col items-center">
                <h4 className="font-semibold mb-4 text-base uppercase tracking-wider text-white">Quick Links</h4>
                <ul className="space-y-2 text-sm text-zinc-400 flex flex-col items-center">
                  <li><a href="#about" className="hover:text-primary transition-colors flex items-center gap-2 group justify-center"><span className="w-1 h-1 rounded-full bg-zinc-600 group-hover:bg-primary transition-colors"></span>About Us</a></li>
                  <li><a href="#products" className="hover:text-primary transition-colors flex items-center gap-2 group justify-center"><span className="w-1 h-1 rounded-full bg-zinc-600 group-hover:bg-primary transition-colors"></span>Products</a></li>
                  <li><a href="#infrastructure" className="hover:text-primary transition-colors flex items-center gap-2 group justify-center"><span className="w-1 h-1 rounded-full bg-zinc-600 group-hover:bg-primary transition-colors"></span>Infrastructure</a></li>
                  <li><a href="#management" className="hover:text-primary transition-colors flex items-center gap-2 group justify-center"><span className="w-1 h-1 rounded-full bg-zinc-600 group-hover:bg-primary transition-colors"></span>Management</a></li>
                </ul>
              </div>

              {/* Certifications */}
              <div className="flex flex-col items-center">
                <h4 className="font-semibold mb-4 text-base uppercase tracking-wider text-white">Certifications</h4>
                <ul className="space-y-2 text-sm text-zinc-400 flex flex-col items-center">
                  <li>
                    <Link to="/certifications" className="hover:text-primary transition-colors flex items-center gap-2 group justify-center">
                      <span className="w-1 h-1 rounded-full bg-zinc-600 group-hover:bg-primary transition-colors"></span>ISO 9001:2015
                    </Link>
                  </li>
                  <li>
                    <Link to="/certifications" className="hover:text-primary transition-colors flex items-center gap-2 group justify-center">
                      <span className="w-1 h-1 rounded-full bg-zinc-600 group-hover:bg-primary transition-colors"></span>ISO 14001:2015
                    </Link>
                  </li>
                  <li>
                    <Link to="/certifications" className="hover:text-primary transition-colors flex items-center gap-2 group justify-center">
                      <span className="w-1 h-1 rounded-full bg-zinc-600 group-hover:bg-primary transition-colors"></span>ISO 45001:2018
                    </Link>
                  </li>
                  <li>
                    <Link to="/certifications" className="hover:text-primary transition-colors flex items-center gap-2 group justify-center">
                      <span className="w-1 h-1 rounded-full bg-zinc-600 group-hover:bg-primary transition-colors"></span>Export House
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Column 2 (Flex 1): Main Factory + Phone + Email */}
          <motion.div variants={itemVariants} className="flex-1 w-full flex flex-col items-center justify-center text-center space-y-8 md:mt-10">
            {/* Main Factory */}
            <div className="group flex flex-col items-center justify-center">
              <div className="flex items-center gap-3 mb-2 justify-center text-white font-medium">
                <MapPin className="w-6 h-6 text-primary" />
                <span className="text-lg">Main Factory & Registered Office</span>
              </div>
              <p className="leading-relaxed text-base text-zinc-400">
                251/1 A, B Hadapsar Industrial Estate,<br />
                Pune - 411013, India
              </p>
            </div>

            {/* Phone */}
            <div className="group flex flex-col items-center justify-center">
              <div className="flex items-center gap-3 mb-2 justify-center text-white font-medium">
                <Phone className="w-6 h-6 text-primary" />
                <span className="text-lg">Phone</span>
              </div>
              <p className="hover:text-white transition-colors text-base text-zinc-400">+91-20-26870164</p>
            </div>

            {/* Email */}
            <div className="group flex flex-col items-center justify-center">
              <div className="flex items-center gap-3 mb-2 justify-center text-white font-medium">
                <Mail className="w-6 h-6 text-primary" />
                <span className="text-lg">Email</span>
              </div>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=western@westernaluminium.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors text-base text-zinc-400"
              >
                western@westernaluminium.com
              </a>
            </div>
          </motion.div>

          {/* Column 3 (Flex 1): Second Unit + Dummy Phone + Socials */}
          <motion.div variants={itemVariants} className="flex-1 w-full flex flex-col items-center justify-center text-center space-y-8 md:mt-10">
            {/* Second Unit */}
            <div className="group flex flex-col items-center justify-center">
              <div className="flex items-center gap-3 mb-2 justify-center text-white font-medium">
                <MapPin className="w-6 h-6 text-primary" />
                <span className="text-lg">Second Unit</span>
              </div>
              <p className="leading-relaxed text-base text-zinc-400">
                294 Khor Road, Bhandgaon,<br />
                Pune-Solapur Road, Pune - 412214
              </p>
            </div>

            {/* Dummy Phone */}
            <div className="group flex flex-col items-center justify-center">
              <div className="flex items-center gap-3 mb-2 justify-center text-white font-medium">
                <Phone className="w-6 h-6 text-primary" />
                <span className="text-lg">Phone</span>
              </div>
              <p className="hover:text-white transition-colors text-base text-zinc-400">+91-20-26875054</p>
            </div>

            {/* Social Icons - Side by Side */}
            <div className="flex justify-center gap-5 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-zinc-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500 text-sm">
              © {currentYear} Western Metal Industries Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-zinc-500">
              <span>Designed by Anay Shah</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
