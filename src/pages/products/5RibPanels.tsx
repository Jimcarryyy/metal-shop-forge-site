
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const FiveRibPanels = () => {
  const specifications = [
    { label: "Panel Width", value: "36 inches" },
    { label: "Coverage Width", value: "32 inches" },
    { label: "Rib Height", value: "0.75 inches" },
    { label: "Standard Lengths", value: "8' to 40' (custom lengths available)" },
    { label: "Material", value: "26 gauge galvalume steel" },
    { label: "Finish", value: "Kynar 500 PVDF coating" }
  ];

  const features = [
    "Exposed fastener system for easy installation",
    "Traditional ribbed profile with clean lines",
    "Excellent structural strength and wind resistance",
    "Available in multiple colors and finishes",
    "Cost-effective solution for residential and commercial applications",
    "40-year paint warranty on Kynar 500 finishes"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-slate-800 text-white py-16" aria-labelledby="5rib-hero-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 id="5rib-hero-title" className="text-4xl md:text-5xl font-bold mb-4">
              5-Rib Panels
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl">
              Our most popular exposed fastener panel system, featuring five distinct ribs 
              that provide excellent structural strength and classic metal roofing aesthetics.
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
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop"
                  alt="5-Rib metal panels installed on residential roof"
                  className="w-full h-96 object-cover rounded-lg shadow-sm"
                  loading="lazy"
                />
              </div>

              {/* Specifications */}
              <div>
                <h2 id="product-details-title" className="text-3xl font-bold text-slate-800 mb-6">
                  Technical Specifications
                </h2>
                <div className="space-y-4">
                  {specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between py-3 border-b border-gray-200">
                      <span className="font-medium text-slate-700">{spec.label}:</span>
                      <span className="text-slate-600">{spec.value}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button className="bg-slate-700 hover:bg-slate-800 text-white">
                    <Download className="mr-2 h-4 w-4" />
                    Download Spec Sheet
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-slate-50" aria-labelledby="features-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="features-title" className="text-3xl font-bold text-slate-800 mb-8 text-center">
              Key Features & Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-slate-700 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FiveRibPanels;
