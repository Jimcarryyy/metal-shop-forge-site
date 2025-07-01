
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PanelsOverview = () => {
  const panelTypes = [
    {
      name: "5-Rib Panels",
      description: "Most popular exposed fastener system with five distinct ribs",
      applications: ["Residential roofing", "Agricultural buildings", "Commercial structures"],
      link: "/products/5-rib-panels"
    },
    {
      name: "Standing Seam",
      description: "Concealed fastener system with raised seams",
      applications: ["Premium residential", "Commercial buildings", "Architectural projects"],
      link: "/products/cliploc"
    },
    {
      name: "Board & Batten",
      description: "Wide flat panels with raised seams for traditional barn look",
      applications: ["Barn restoration", "Rustic residential", "Agricultural buildings"],
      link: "/products/board-batten"
    },
    {
      name: "PBR Panels",
      description: "Purlin bearing rib panels for structural applications",
      applications: ["Industrial buildings", "Warehouses", "Manufacturing facilities"],
      link: "/products/pbr-panels"
    }
  ];

  const comparisons = [
    { feature: "Installation", exposed: "Faster, fewer tools required", concealed: "More complex, specialized tools needed" },
    { feature: "Appearance", exposed: "Visible fasteners, traditional look", concealed: "Clean lines, modern aesthetic" },
    { feature: "Cost", exposed: "Lower material and labor costs", concealed: "Higher initial investment" },
    { feature: "Maintenance", exposed: "Periodic fastener inspection", concealed: "Minimal maintenance required" },
    { feature: "Weather Resistance", exposed: "Excellent with proper installation", concealed: "Superior weather seal" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-slate-800 text-white py-16" aria-labelledby="overview-hero-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 id="overview-hero-title" className="text-4xl md:text-5xl font-bold mb-4">
              Roofing Panels Overview
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl">
              Comprehensive guide to metal roofing panel systems, helping you choose 
              the right solution for your specific application and budget.
            </p>
          </div>
        </section>

        {/* Panel Types */}
        <section className="py-16 bg-white" aria-labelledby="panel-types-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="panel-types-title" className="text-3xl font-bold text-slate-800 mb-12 text-center">
              Panel Types & Applications
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {panelTypes.map((panel, index) => (
                <div key={index} className="bg-slate-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">{panel.name}</h3>
                  <p className="text-slate-600 mb-4">{panel.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-slate-700 mb-2">Ideal Applications:</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      {panel.applications.map((app, appIndex) => (
                        <li key={appIndex} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-2"></div>
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    to={panel.link}
                    className="inline-flex items-center text-slate-700 hover:text-slate-900 font-medium text-sm group"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 bg-slate-50" aria-labelledby="comparison-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="comparison-title" className="text-3xl font-bold text-slate-800 mb-8 text-center">
              Exposed vs. Concealed Fastener Systems
            </h2>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <table className="w-full">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-800">Feature</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-800">Exposed Fastener</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-800">Concealed Fastener</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparisons.map((row, index) => (
                    <tr key={index} className="hover:bg-slate-50">
                      <td className="px-6 py-4 font-medium text-slate-800">{row.feature}</td>
                      <td className="px-6 py-4 text-slate-600">{row.exposed}</td>
                      <td className="px-6 py-4 text-slate-600">{row.concealed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className="py-16 bg-white" aria-labelledby="download-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="download-title" className="text-3xl font-bold text-slate-800 mb-4">
              Get Detailed Product Information
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Download our comprehensive product guides for detailed specifications, 
              installation instructions, and technical data.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-slate-700 hover:bg-slate-800 text-white">
                <Download className="mr-2 h-4 w-4" />
                Complete Product Catalog
              </Button>
              <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
                <Download className="mr-2 h-4 w-4" />
                Installation Guide
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PanelsOverview;
