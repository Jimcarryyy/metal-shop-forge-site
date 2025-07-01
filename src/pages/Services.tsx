
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      title: "Metal Roofing Installation",
      description: "Complete metal roof installation for residential and commercial properties using premium materials and expert craftsmanship.",
      features: ["5-Rib Panels", "Standing Seam Systems", "PBR Panels", "Custom Fabrication"],
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop"
    },
    {
      title: "Custom Panel Fabrication",
      description: "On-site custom metal panel fabrication to exact specifications for unique architectural requirements.",
      features: ["Precision Cutting", "Custom Lengths", "Multiple Profiles", "Color Matching"],
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=400&h=300&fit=crop"
    },
    {
      title: "Roof Repairs & Maintenance",
      description: "Professional repair services to extend the life of your metal roofing system and maintain optimal performance.",
      features: ["Leak Repairs", "Panel Replacement", "Fastener Replacement", "Preventive Maintenance"],
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=300&fit=crop"
    },
    {
      title: "Building Solutions",
      description: "Complete metal building systems including K-buildings, storage facilities, and commercial structures.",
      features: ["K-Building Systems", "Storage Facilities", "Commercial Buildings", "Agricultural Structures"],
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-slate-800 text-white py-16" aria-labelledby="services-hero-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 id="services-hero-title" className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto">
              Comprehensive metal roofing and building solutions tailored to meet your specific needs. 
              From installation to maintenance, we've got you covered.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-white" aria-labelledby="services-list-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="services-list-title" className="text-3xl md:text-4xl font-bold text-slate-800 mb-12 text-center">
              What We Do
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {services.map((service, index) => (
                <article key={index} className="bg-slate-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-slate-800 mb-4">{service.title}</h3>
                    <p className="text-slate-600 mb-6">{service.description}</p>
                    
                    <h4 className="font-semibold text-slate-800 mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-slate-600">
                          <span className="w-2 h-2 bg-slate-700 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button className="bg-slate-700 hover:bg-slate-800 text-white">
                      Learn More
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-slate-50" aria-labelledby="process-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 id="process-title" className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Our Process
              </h2>
              <p className="text-lg text-slate-600">
                From initial consultation to project completion, we ensure a smooth and professional experience
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Consultation</h3>
                <p className="text-slate-600">Initial assessment and project planning discussion</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Quote</h3>
                <p className="text-slate-600">Detailed estimate with materials and labor breakdown</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Installation</h3>
                <p className="text-slate-600">Professional installation by certified technicians</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Follow-up</h3>
                <p className="text-slate-600">Quality inspection and ongoing support</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <ContactForm title="Ready to Get Started?" />
      </main>

      <Footer />
    </div>
  );
};

export default Services;
