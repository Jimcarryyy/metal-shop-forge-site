
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Products = () => {
  const productCategories = [
    {
      name: "5-Rib Panels",
      path: "/products/5-rib-panels",
      description: "Traditional exposed fastener panels with five distinct ribs",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop"
    },
    {
      name: "Board & Batten Panel",
      path: "/products/board-batten",
      description: "Wide flat panels with raised seams for a classic barn look",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=400&h=300&fit=crop"
    },
    {
      name: "Dutch Lap Panel",
      path: "/products/dutch-lap",
      description: "Overlapping horizontal panels resembling traditional wood siding",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=300&fit=crop"
    },
    {
      name: "K Buildings",
      path: "/products/k-buildings",
      description: "Pre-engineered metal building systems for commercial applications",
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=400&h=300&fit=crop"
    },
    {
      name: "Metal Roof Shingles",
      path: "/products/metal-shingles",
      description: "Stamped metal panels that mimic traditional asphalt shingles",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop"
    },
    {
      name: "PBR Panels",
      path: "/products/pbr-panels",
      description: "Purlin bearing rib panels for structural applications",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=400&h=300&fit=crop"
    },
    {
      name: "ClipLoc Panel",
      path: "/products/cliploc",
      description: "Standing seam panels with concealed fastening system",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=300&fit=crop"
    },
    {
      name: "Traditional Panel",
      path: "/products/traditional",
      description: "Classic corrugated metal panels for various applications",
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=400&h=300&fit=crop"
    },
    {
      name: "Roofing Accessories",
      path: "/products/accessories",
      description: "Trim, flashing, fasteners, and other roofing components",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop"
    },
    {
      name: "Roofing Tools",
      path: "/products/tools",
      description: "Professional-grade tools for metal roofing installation",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-slate-800 text-white py-16" aria-labelledby="products-hero-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 id="products-hero-title" className="text-4xl md:text-5xl font-bold mb-4">
              Our Products
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto">
              Explore our comprehensive range of metal roofing and building products, 
              designed for durability, performance, and aesthetic appeal.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 bg-white" aria-labelledby="products-grid-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="products-grid-title" className="sr-only">Product Categories</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productCategories.map((product) => (
                <Link
                  key={product.path}
                  to={product.path}
                  className="group bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                >
                  <div className="aspect-w-16 aspect-h-12">
                    <img
                      src={product.image}
                      alt={`${product.name} example installation`}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-slate-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-slate-600 mb-4">{product.description}</p>
                    <div className="flex items-center text-slate-700 group-hover:text-slate-900 transition-colors">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
