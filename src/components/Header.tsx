
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const productLinks = [
    { name: '5-Rib Panels', path: '/products/5-rib-panels' },
    { name: 'Board & Batten Panel', path: '/products/board-batten' },
    { name: 'Dutch Lap Panel', path: '/products/dutch-lap' },
    { name: 'K Buildings', path: '/products/k-buildings' },
    { name: 'Metal Roof Shingles', path: '/products/metal-shingles' },
    { name: 'PBR Panels', path: '/products/pbr-panels' },
    { name: 'ClipLoc Panel', path: '/products/cliploc' },
    { name: 'Traditional Panel', path: '/products/traditional' },
    { name: 'Roofing Accessories', path: '/products/accessories' },
    { name: 'Roofing Tools', path: '/products/tools' },
  ];

  const resourceLinks = [
    { name: 'Roofing Panels Overview', path: '/resources/panels-overview' },
    { name: 'Product Guide', path: '/resources/product-guide' },
    { name: 'Installation Guides', path: '/resources/installation' },
    { name: 'Color Chart', path: '/resources/color-chart' },
    { name: 'Warranty Papers', path: '/resources/warranty' },
    { name: 'Blog', path: '/resources/blog' },
    { name: 'Gallery', path: '/resources/gallery' },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50" role="banner">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Main navigation">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-slate-800 hover:text-slate-600 transition-colors">
              <span className="bg-slate-700 text-white px-3 py-1 rounded">TMS</span>
              <span>The Metal Shop</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                to="/" 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/') ? 'text-slate-700 border-b-2 border-slate-700' : 'text-slate-600 hover:text-slate-800'
                }`}
              >
                Home
              </Link>

              <Link 
                to="/services" 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/services') ? 'text-slate-700 border-b-2 border-slate-700' : 'text-slate-600 hover:text-slate-800'
                }`}
              >
                Services
              </Link>

              {/* Products Dropdown */}
              <div className="relative">
                <button
                  onClick={() => handleDropdownToggle('products')}
                  className="flex items-center px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-800 transition-colors"
                  aria-expanded={activeDropdown === 'products'}
                  aria-haspopup="true"
                >
                  Products
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === 'products' && (
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                    <div className="py-1" role="menu">
                      {productLinks.map((link) => (
                        <Link
                          key={link.path}
                          to={link.path}
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                          role="menuitem"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Resources Dropdown */}
              <div className="relative">
                <button
                  onClick={() => handleDropdownToggle('resources')}
                  className="flex items-center px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-800 transition-colors"
                  aria-expanded={activeDropdown === 'resources'}
                  aria-haspopup="true"
                >
                  Resources
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === 'resources' && (
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                    <div className="py-1" role="menu">
                      {resourceLinks.map((link) => (
                        <Link
                          key={link.path}
                          to={link.path}
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                          role="menuitem"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link 
                to="/reviews" 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/reviews') ? 'text-slate-700 border-b-2 border-slate-700' : 'text-slate-600 hover:text-slate-800'
                }`}
              >
                Reviews
              </Link>

              <Link 
                to="/about" 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/about') ? 'text-slate-700 border-b-2 border-slate-700' : 'text-slate-600 hover:text-slate-800'
                }`}
              >
                About
              </Link>

              <Link 
                to="/contact" 
                className="bg-slate-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-slate-800 hover:bg-slate-100 transition-colors"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors">
                Home
              </Link>
              <Link to="/services" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors">
                Services
              </Link>
              <Link to="/products" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors">
                Products
              </Link>
              <Link to="/resources" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors">
                Resources
              </Link>
              <Link to="/reviews" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors">
                Reviews
              </Link>
              <Link to="/about" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors">
                About
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-base font-medium bg-slate-700 text-white rounded-md hover:bg-slate-800 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
