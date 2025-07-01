
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Download, ArrowLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const ResourcePage = () => {
  const location = useLocation();
  const resourcePath = location.pathname.split('/').pop();
  
  // Resource data mapping
  const resourceData: { [key: string]: any } = {
    'product-guide': {
      title: 'Product Guide',
      description: 'Comprehensive guide to all our metal roofing products, specifications, and applications.',
      content: [
        {
          title: 'Panel Selection Guide',
          description: 'Choose the right panel type for your specific application and budget requirements.'
        },
        {
          title: 'Technical Specifications',
          description: 'Detailed engineering data, load tables, and performance characteristics.'
        },
        {
          title: 'Installation Requirements',
          description: 'Code compliance, structural requirements, and installation best practices.'
        }
      ]
    },
    'installation': {
      title: 'Installation Guides',
      description: 'Step-by-step installation instructions for professional contractors and DIY enthusiasts.',
      content: [
        {
          title: 'Pre-Installation Planning',
          description: 'Site preparation, material calculations, and safety requirements.'
        },
        {
          title: 'Panel Installation',
          description: 'Proper fastening techniques, panel alignment, and weather sealing.'
        },
        {
          title: 'Trim and Flashing',
          description: 'Professional finishing techniques for a complete, weather-tight installation.'
        }
      ]
    },
    'warranty': {
      title: 'Warranty Information',
      description: 'Complete warranty coverage details for materials and installation services.',
      content: [
        {
          title: 'Material Warranties',
          description: 'Coverage periods and terms for steel substrates and paint systems.'
        },
        {
          title: 'Installation Warranties',
          description: 'Workmanship guarantees and service commitment details.'
        },
        {
          title: 'Warranty Claims',
          description: 'Process for filing claims and obtaining warranty service.'
        }
      ]
    },
    'blog': {
      title: 'Blog & News',
      description: 'Industry insights, maintenance tips, and company updates.',
      content: [
        {
          title: 'Maintenance Best Practices',
          description: 'Keep your metal roof performing at its best with proper maintenance.'
        },
        {
          title: 'Industry Trends',
          description: 'Latest developments in metal roofing technology and design.'
        },
        {
          title: 'Project Spotlights',
          description: 'Featured installations and customer success stories.'
        }
      ]
    },
    'gallery': {
      title: 'Project Gallery',
      description: 'Browse our completed installations across residential, commercial, and agricultural applications.',
      content: [
        {
          title: 'Residential Projects',
          description: 'Beautiful homes featuring our premium metal roofing systems.'
        },
        {
          title: 'Commercial Buildings',
          description: 'Professional installations for businesses and institutions.'
        },
        {
          title: 'Agricultural Structures',
          description: 'Durable solutions for barns, equipment storage, and livestock facilities.'
        }
      ]
    }
  };

  const resource = resourceData[resourcePath || ''] || {
    title: 'Resource Information',
    description: 'Helpful resources and information.',
    content: []
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
                  <span className="text-slate-600">Resources</span>
                </li>
                <li className="text-slate-400">/</li>
                <li className="text-slate-800 font-medium">{resource.title}</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-slate-800 text-white py-16" aria-labelledby="resource-hero-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              to="/" 
              className="inline-flex items-center text-slate-300 hover:text-white mb-6 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-800 rounded"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <h1 id="resource-hero-title" className="text-4xl md:text-5xl font-bold mb-4">
              {resource.title}
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl">
              {resource.description}
            </p>
          </div>
        </section>

        {/* Resource Content */}
        <section className="py-16 bg-white" aria-labelledby="resource-content-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="resource-content-title" className="sr-only">Resource Content</h2>
            
            {resource.content.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {resource.content.map((item: any, index: number) => (
                  <div key={index} className="bg-slate-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">{item.title}</h3>
                    <p className="text-slate-600 mb-4">{item.description}</p>
                    <Button 
                      variant="outline" 
                      className="border-slate-300 text-slate-700 hover:bg-slate-100 focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">Coming Soon</h3>
                <p className="text-slate-600 mb-8">This resource is currently being developed. Please check back soon.</p>
                <Button className="bg-slate-700 hover:bg-slate-800 text-white focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
                  Contact Us for Information
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Download Section */}
        <section className="py-16 bg-slate-50" aria-labelledby="download-section-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="download-section-title" className="text-3xl font-bold text-slate-800 mb-4">
              Need More Information?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Contact our team for additional resources, custom specifications, or project consultation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-slate-700 hover:bg-slate-800 text-white focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
                Contact Our Team
              </Button>
              <Button 
                variant="outline" 
                className="border-slate-300 text-slate-700 hover:bg-slate-100 focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
              >
                Request Quote
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ResourcePage;
