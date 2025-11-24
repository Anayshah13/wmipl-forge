import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-secondary text-white py-12">
      <div className="section-container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary hexagon flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <h3 className="font-bold text-lg">Western Metal</h3>
            </div>
            <p className="text-white/70 text-sm">
              India's largest manufacturer of aluminium slugs with 70% market share.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="#infrastructure" className="hover:text-white transition-colors">Infrastructure</a></li>
              <li><a href="#management" className="hover:text-white transition-colors">Management</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Our Focus</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Quality Manufacturing</li>
              <li>Sustainable Practices</li>
              <li>Export Excellence</li>
              <li>Customer Satisfaction</li>
            </ul>
          </div>

          <div>
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
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">
              © {currentYear} Western Metal Industries Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/70">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
