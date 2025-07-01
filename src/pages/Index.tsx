
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const beforeAfterProjects = [
    {
      id: 1,
      title: "Residential Metal Roof Installation",
      before: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop",
      after: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
      description: "Complete roof replacement with 5-rib metal panels"
    },
    {
      id: 2,
      title: "Commercial Building Upgrade",
      before: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=600&h=400&fit=crop",
      after: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=600&h=400&fit=crop",
      description: "Industrial facility with custom metal panel system"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % beforeAfterProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + beforeAfterProjects.length) % beforeAfterProjects.length);
  };

  const colorPanels = [
    { name: "Charcoal Gray", color: "#374151", code: "CG-001" },
    { name: "Slate Blue", color: "#475569", code: "SB-002" },
    { name: "Barn Red", color: "#7f1d1d", code: "BR-003" },
    { name: "Forest Green", color: "#14532d", code: "FG-004" },
    { name: "Classic White", color: "#f8fafc", code: "CW-005" },
    { name: "Copper Brown", color: "#92400e", code: "CB-006" }
  ];

  const partners = [
    { name: "Steel Dynamics", logo: "SD" },
    { name: "Metal Sales", logo: "MS" },
    { name: "Bridger Steel", logo: "BS" },
    { name: "ABC Supply", logo: "ABC" }
  ];

  const recentProjects = [
    {
      title: "Modern Farmhouse",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop",
      description: "5-rib metal roofing in charcoal gray"
    },
    {
      title: "Industrial Warehouse",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=400&h=300&fit=crop",
      description: "Custom panel fabrication and installation"
    },
    {
      title: "Residential Repair",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=300&fit=crop",
      description: "Roof replacement with PBR panels"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-slate-800 text-white py-20 lg:py-32" aria-labelledby="hero-title">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-700 opacity-90"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&h=1080&fit=crop')`,
            }}
          ></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 id="hero-title" className="text-4xl md:text-6xl font-bold mb-6">
              Premium Metal Roofing
              <span className="block text-3xl md:text-5xl text-slate-300 mt-2">
                Built to Last
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto">
              Professional metal roofing solutions, custom panel fabrication, and expert installation services. 
              Quality craftsmanship backed by decades of experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-slate-800 hover:bg-slate-100 px-8 py-4 text-lg font-semibold">
                Get a Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-800 px-8 py-4 text-lg font-semibold">
                View Our Work
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-white" aria-labelledby="about-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 id="about-title" className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                About The Metal Shop
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                For over two decades, The Metal Shop has been the trusted choice for metal roofing and building solutions. 
                Our commitment to quality, durability, and customer satisfaction has made us a leader in the industry.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">20+</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Years Experience</h3>
                <p className="text-slate-600">Two decades of proven expertise in metal roofing solutions</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1K+</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Projects Completed</h3>
                <p className="text-slate-600">Successfully delivered over 1,000 roofing projects</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">100%</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Customer Satisfaction</h3>
                <p className="text-slate-600">Committed to exceeding expectations on every project</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-slate-50" aria-labelledby="why-choose-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 id="why-choose-title" className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Why Choose The Metal Shop
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Durability</h3>
                  <p className="text-slate-600">Premium materials engineered to withstand decades of weather conditions</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Affordable Pricing</h3>
                  <p className="text-slate-600">Competitive rates without compromising on quality or craftsmanship</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Expert Installation</h3>
                  <p className="text-slate-600">Certified installers with extensive training and field experience</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Comprehensive Warranty</h3>
                  <p className="text-slate-600">Industry-leading warranty coverage for materials and workmanship</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Before & After Slider */}
        <section className="py-16 bg-white" aria-labelledby="projects-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 id="projects-title" className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Before & After Transformations
              </h2>
              <p className="text-lg text-slate-600">See the dramatic difference our metal roofing solutions make</p>
            </div>
            
            <div className="relative">
              <div className="bg-slate-50 rounded-lg overflow-hidden">
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-slate-800 mb-6 text-center">
                    {beforeAfterProjects[currentSlide].title}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-medium text-slate-700 mb-3">Before</h4>
                      <img
                        src={beforeAfterProjects[currentSlide].before}
                        alt={`Before: ${beforeAfterProjects[currentSlide].title}`}
                        className="w-full h-64 object-cover rounded-lg shadow-sm"
                        loading="lazy"
                      />
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium text-slate-700 mb-3">After</h4>
                      <img
                        src={beforeAfterProjects[currentSlide].after}
                        alt={`After: ${beforeAfterProjects[currentSlide].title}`}
                        className="w-full h-64 object-cover rounded-lg shadow-sm"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  
                  <p className="text-center text-slate-600 mt-6">
                    {beforeAfterProjects[currentSlide].description}
                  </p>
                </div>
              </div>
              
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-slate-50 transition-colors"
                aria-label="Previous project"
              >
                <ChevronLeft className="h-6 w-6 text-slate-600" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-slate-50 transition-colors"
                aria-label="Next project"
              >
                <ChevronRight className="h-6 w-6 text-slate-600" />
              </button>
            </div>
            
            <div className="flex justify-center mt-6 space-x-2">
              {beforeAfterProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-slate-700' : 'bg-slate-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Color Chart Section */}
        <section className="py-16 bg-slate-50" aria-labelledby="color-chart-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 id="color-chart-title" className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                5-Rib Panel Color Chart
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Choose from our premium color selection for your metal roofing project
              </p>
              <Button className="bg-slate-700 hover:bg-slate-800 text-white">
                Download Full Color Chart PDF
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {colorPanels.map((panel) => (
                <div key={panel.code} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div 
                    className="h-24 w-full"
                    style={{ backgroundColor: panel.color }}
                    aria-label={`Color sample: ${panel.name}`}
                  ></div>
                  <div className="p-3 text-center">
                    <h3 className="font-medium text-slate-800 text-sm">{panel.name}</h3>
                    <p className="text-xs text-slate-500 mt-1">{panel.code}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Section */}
        <section className="py-16 bg-white" aria-labelledby="partners-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 id="partners-title" className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Trusted Partners
              </h2>
              <p className="text-lg text-slate-600">
                We work with industry-leading suppliers to ensure the highest quality materials
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {partners.map((partner) => (
                <div key={partner.name} className="text-center">
                  <div className="bg-slate-100 rounded-lg p-8 flex items-center justify-center h-24 mb-4">
                    <span className="text-2xl font-bold text-slate-600">{partner.logo}</span>
                  </div>
                  <h3 className="font-medium text-slate-800">{partner.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Projects */}
        <section className="py-16 bg-slate-50" aria-labelledby="recent-projects-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 id="recent-projects-title" className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Recent Projects
              </h2>
              <p className="text-lg text-slate-600">
                Take a look at our latest completed installations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recentProjects.map((project, index) => (
                <article key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">{project.title}</h3>
                    <p className="text-slate-600">{project.description}</p>
                  </div>
                </article>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
                View All Projects
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
