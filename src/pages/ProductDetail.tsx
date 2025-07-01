
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Download, ArrowLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const ProductDetail = () => {
  const location = useLocation();
  const productPath = location.pathname.split('/').pop();
  
  // Product data mapping
  const productData: { [key: string]: any } = {
    'board-batten': {
      name: 'Board & Batten Panel',
      description: 'Wide flat panels with raised seams that create a classic barn aesthetic.',
      image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=600&h=400&fit=crop',
      specs: [
        { label: "Panel Width", value: "24 inches" },
        { label: "Coverage Width", value: "22 inches" },
        { label: "Seam Height", value: "1 inch" },
        { label: "Standard Lengths", value: "8' to 40'" },
        { label: "Material", value: "26 gauge steel" },
        { label: "Finish", value: "Multiple options available" }
      ],
      features: [
        "Traditional barn-style appearance",
        "Wide coverage reduces installation time",
        "Concealed fastener option available",
        "Excellent for agricultural buildings",
        "Suitable for both roofing and siding"
      ]
    },
    'dutch-lap': {
      name: 'Dutch Lap Panel',
      description: 'Overlapping horizontal panels that resemble traditional wood siding.',
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop',
      specs: [
        { label: "Panel Width", value: "16 inches" },
        { label: "Coverage Width", value: "14 inches" },
        { label: "Profile Height", value: "0.5 inch" },
        { label: "Standard Lengths", value: "8' to 40'" },
        { label: "Material", value: "24 gauge steel" },
        { label: "Finish", value: "Premium paint systems" }
      ],
      features: [
        "Classic wood siding appearance",
        "Horizontal installation pattern",
        "Weather-tight overlapping design",
        "Ideal for residential applications",
        "Low maintenance alternative to wood"
      ]
    },
    'k-buildings': {
      name: 'K Buildings',
      description: 'Pre-engineered metal building systems for commercial and industrial applications.',
      image: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?w=600&h=400&fit=crop',
      specs: [
        { label: "Width Range", value: "20' to 300'" },
        { label: "Length", value: "Custom lengths available" },
        { label: "Eave Height", value: "8' to 30'" },
        { label: "Frame Spacing", value: "20' to 30' on center" },
        { label: "Wind Load", value: "Up to 150 mph" },
        { label: "Snow Load", value: "Up to 50 psf" }
      ],
      features: [
        "Pre-engineered for quick assembly",
        "Clear span construction",
        "Customizable door and window options",
        "Energy efficient insulation systems",
        "Professional engineering included"
      ]
    }
  };

  const product = productData[productPath || ''] || {
    name: 'Product Details',
    description: 'Product information and specifications.',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop',
    specs: [],
    features: []
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Breadcrumb */}
        <section className="bg-slate-50 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm">
                <li>
                  <Link to="/" className="text-slate-600 hover:text-slate-800 transition-colors">
                    Home
                  </Link>
                </li>
                <li className="text-slate-400">/</li>
                <li>
                  <Link to="/products" className="text-slate-600 hover:text-slate-800 transition-colors">
                    Products
                  </Link>
                </li>
                <li className="text-slate-400">/</li>
                <li className="text-slate-800 font-medium">{product.name}</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-slate-800 text-white py-16" aria-labelledby="product-hero-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              to="/products" 
              className="inline-flex items-center text-slate-300 hover:text-white mb-6 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-800 rounded"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
            <h1 id="product-hero-title" className="text-4xl md:text-5xl font-bold mb-4">
              {product.name}
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl">
              {product.description}
            </p>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-16 bg-white" aria-labelledby="product-details-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Image */}
              <div>
                <img
                  src={product.image}
                  alt={`${product.name} installation example`}
                  className="w-full h-96 object-cover rounded-lg shadow-sm"
                  loading="lazy"
                />
              </div>

              {/* Specifications */}
              <div>
                <h2 id="product-details-title" className="text-3xl font-bold text-slate-800 mb-6">
                  Technical Specifications
                </h2>
                {product.specs.length > 0 ? (
                  <div className="space-y-4">
                    {product.specs.map((spec: any, index: number) => (
                      <div key={index} className="flex justify-between py-3 border-b border-gray-200">
                        <span className="font-medium text-slate-700">{spec.label}:</span>
                        <span className="text-slate-600">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-600">Detailed specifications available upon request.</p>
                )}
                
                <div className="mt-8">
                  <Button className="bg-slate-700 hover:bg-slate-800 text-white focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
                    <Download className="mr-2 h-4 w-4" />
                    Download Spec Sheet
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        {product.features.length > 0 && (
          <section className="py-16 bg-slate-50" aria-labelledby="features-title">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 id="features-title" className="text-3xl font-bold text-slate-800 mb-8 text-center">
                Key Features & Benefits
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {product.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-slate-700 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
