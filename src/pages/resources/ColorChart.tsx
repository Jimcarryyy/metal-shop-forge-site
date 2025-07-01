
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const ColorChart = () => {
  const standardColors = [
    { name: "Charcoal Gray", color: "#374151", code: "CG-001", type: "Standard" },
    { name: "Slate Blue", color: "#475569", code: "SB-002", type: "Standard" },
    { name: "Barn Red", color: "#7f1d1d", code: "BR-003", type: "Standard" },
    { name: "Forest Green", color: "#14532d", code: "FG-004", type: "Standard" },
    { name: "Classic White", color: "#f8fafc", code: "CW-005", type: "Standard" },
    { name: "Copper Brown", color: "#92400e", code: "CB-006", type: "Standard" },
    { name: "Galvalume Plus", color: "#9ca3af", code: "GP-007", type: "Standard" },
    { name: "Burgundy", color: "#881337", code: "BG-008", type: "Standard" }
  ];

  const premiumColors = [
    { name: "Pewter Gray", color: "#6b7280", code: "PG-101", type: "Premium" },
    { name: "Sandstone", color: "#d6d3d1", code: "SS-102", type: "Premium" },
    { name: "Terra Cotta", color: "#dc2626", code: "TC-103", type: "Premium" },
    { name: "Hunter Green", color: "#15803d", code: "HG-104", type: "Premium" },
    { name: "Ocean Blue", color: "#1d4ed8", code: "OB-105", type: "Premium" },
    { name: "Bronze", color: "#a16207", code: "BZ-106", type: "Premium" }
  ];

  const allColors = [...standardColors, ...premiumColors];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-slate-800 text-white py-16" aria-labelledby="color-hero-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 id="color-hero-title" className="text-4xl md:text-5xl font-bold mb-4">
              Metal Roofing Color Chart
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-8">
              Explore our extensive range of premium colors and finishes for metal roofing panels. 
              All colors feature high-performance coatings for long-lasting beauty and protection.
            </p>
            <Button className="bg-white text-slate-800 hover:bg-slate-100">
              <Download className="mr-2 h-4 w-4" />
              Download Full Color Chart PDF
            </Button>
          </div>
        </section>

        {/* Standard Colors */}
        <section className="py-16 bg-white" aria-labelledby="standard-colors-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="standard-colors-title" className="text-3xl font-bold text-slate-800 mb-8 text-center">
              Standard Colors
            </h2>
            <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
              Our standard color collection features proven favorites with excellent durability 
              and fade resistance. Backed by a 40-year paint warranty.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
              {standardColors.map((color) => (
                <div key={color.code} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                  <div 
                    className="h-32 w-full border-b border-gray-200"
                    style={{ backgroundColor: color.color }}
                    aria-label={`Color sample: ${color.name}`}
                  ></div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-slate-800 mb-1">{color.name}</h3>
                    <p className="text-sm text-slate-500 mb-1">{color.code}</p>
                    <span className="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">
                      {color.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium Colors */}
        <section className="py-16 bg-slate-50" aria-labelledby="premium-colors-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="premium-colors-title" className="text-3xl font-bold text-slate-800 mb-8 text-center">
              Premium Colors
            </h2>
            <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
              Our premium collection offers unique colors and specialty finishes 
              for distinctive architectural applications.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {premiumColors.map((color) => (
                <div key={color.code} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                  <div 
                    className="h-32 w-full border-b border-gray-200"
                    style={{ backgroundColor: color.color }}
                    aria-label={`Color sample: ${color.name}`}
                  ></div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-slate-800 mb-1 text-sm">{color.name}</h3>
                    <p className="text-xs text-slate-500 mb-1">{color.code}</p>
                    <span className="inline-block px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded">
                      {color.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Color Information */}
        <section className="py-16 bg-white" aria-labelledby="color-info-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 id="color-info-title" className="text-3xl font-bold text-slate-800 mb-6">
                  Color & Finish Information
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-700 mb-2">Coating Systems</h3>
                    <ul className="text-slate-600 space-y-2">
                      <li>• <strong>Kynar 500® PVDF:</strong> Premium fluoropolymer coating with superior fade and chalk resistance</li>
                      <li>• <strong>SMP (Silicone Modified Polyester):</strong> Excellent durability with good color retention</li>
                      <li>• <strong>Polyester:</strong> Cost-effective option for standard applications</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-slate-700 mb-2">Warranty Coverage</h3>
                    <ul className="text-slate-600 space-y-2">
                      <li>• 40-year paint warranty on Kynar 500® finishes</li>
                      <li>• 35-year paint warranty on SMP finishes</li>
                      <li>• 25-year paint warranty on polyester finishes</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Important Notes</h3>
                <div className="text-slate-600 space-y-3">
                  <p>• Colors may appear different on various devices and under different lighting conditions.</p>
                  <p>• We recommend viewing physical samples before making final color selections.</p>
                  <p>• Custom color matching available for large commercial projects.</p>
                  <p>• Some colors may have extended lead times or minimum order quantities.</p>
                </div>
                
                <div className="mt-6">
                  <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100">
                    Request Color Samples
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ColorChart;
