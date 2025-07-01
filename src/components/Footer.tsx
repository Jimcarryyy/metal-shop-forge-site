
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="bg-white text-slate-800 px-3 py-1 rounded font-bold text-xl">TMS</span>
              <span className="text-xl font-bold">The Metal Shop</span>
            </div>
            <p className="text-slate-300 mb-4 max-w-md">
              Professional metal roofing, custom panel fabrication, and building solutions. 
              Quality craftsmanship, durable materials, and expert installation services.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-slate-400" />
                <a href="tel:+1234567890" className="text-slate-300 hover:text-white transition-colors">
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-slate-400" />
                <a href="mailto:info@themetalshop.com" className="text-slate-300 hover:text-white transition-colors">
                  info@themetalshop.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-slate-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/products" className="text-slate-300 hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/resources" className="text-slate-300 hover:text-white transition-colors">Resources</Link></li>
              <li><Link to="/about" className="text-slate-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/resources/installation" className="text-slate-300 hover:text-white transition-colors">Installation Guides</Link></li>
              <li><Link to="/resources/color-chart" className="text-slate-300 hover:text-white transition-colors">Color Chart</Link></li>
              <li><Link to="/resources/warranty" className="text-slate-300 hover:text-white transition-colors">Warranty</Link></li>
              <li><Link to="/resources/blog" className="text-slate-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/resources/gallery" className="text-slate-300 hover:text-white transition-colors">Gallery</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2024 The Metal Shop. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link to="/privacy" className="text-slate-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-slate-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
