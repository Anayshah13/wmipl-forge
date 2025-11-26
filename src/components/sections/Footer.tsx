import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

  return (
    <footer id="footer" className="bg-secondary text-white py-12">
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-5 gap-8 mb-8"
        >
          <motion.div variants={itemVariants} className="md:col-span-2">
            <img src="logo2.png" alt="" className="h-18 pr-8" />
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="#infrastructure" className="hover:text-white transition-colors">Infrastructure</a></li>
              <li><a href="#management" className="hover:text-white transition-colors">Management</a></li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Our Focus</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Quality Manufacturing</li>
              <li>Sustainable Practices</li>
              <li>Export Excellence</li>
              <li>Customer Satisfaction</li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Certifications</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link to="/certifications#certifications-carousel" className="hover:text-white transition-colors">
                  ISO 9001:2015
                </Link>
              </li>
              <li>
                <Link to="/certifications#certifications-carousel" className="hover:text-white transition-colors">
                  ISO 14001:2015
                </Link>
              </li>
              <li>
                <Link to="/certifications#certifications-carousel" className="hover:text-white transition-colors">
                  ISO 45001:2018
                </Link>
              </li>
              <li>
                <Link to="/certifications#certifications-carousel" className="hover:text-white transition-colors">
                  Export House
                </Link>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-white/20 pt-8 mt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">
              © {currentYear} Western Metal Industries Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/70">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Designed by Anay Shah</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
