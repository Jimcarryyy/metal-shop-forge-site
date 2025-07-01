
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  const timeline = [
    { year: "2004", event: "The Metal Shop founded with a vision for quality metal roofing solutions" },
    { year: "2008", event: "Expanded services to include custom panel fabrication" },
    { year: "2012", event: "Reached 500+ completed projects milestone" },
    { year: "2016", event: "Added K-building systems and commercial solutions" },
    { year: "2020", event: "Achieved industry certification for advanced installation techniques" },
    { year: "2024", event: "Celebrating 20 years of excellence with 1000+ satisfied customers" }
  ];

  const values = [
    {
      title: "Quality Craftsmanship",
      description: "Every project reflects our commitment to superior workmanship and attention to detail."
    },
    {
      title: "Reliable Service",
      description: "We stand behind our work with comprehensive warranties and ongoing support."
    },
    {
      title: "Customer Focus",
      description: "Your satisfaction is our priority, from initial consultation to project completion."
    },
    {
      title: "Innovation",
      description: "We stay current with industry advances to provide the best solutions available."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-slate-800 text-white py-16" aria-labelledby="about-hero-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 id="about-hero-title" className="text-4xl md:text-5xl font-bold mb-6">
              About The Metal Shop
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto">
              Two decades of excellence in metal roofing and building solutions. 
              Built on a foundation of quality, integrity, and customer satisfaction.
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16 bg-white" aria-labelledby="story-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 id="story-title" className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-slate-600">
                  <p>
                    Founded in 2004, The Metal Shop began with a simple mission: to provide the highest quality 
                    metal roofing solutions with unmatched customer service. What started as a small family business 
                    has grown into one of the region's most trusted metal roofing contractors.
                  </p>
                  <p>
                    Our founder recognized the superior durability and longevity of metal roofing systems and was 
                    determined to bring these benefits to homeowners and businesses throughout the area. Through 
                    dedication to craftsmanship and continuous learning, we've built a reputation for excellence 
                    that spans two decades.
                  </p>
                  <p>
                    Today, we're proud to have completed over 1,000 projects, each one a testament to our 
                    commitment to quality and customer satisfaction. From residential homes to large commercial 
                    facilities, we approach every project with the same attention to detail and dedication to excellence.
                  </p>
                </div>
              </div>
              
              <div>
                <img
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop"
                  alt="The Metal Shop facility and team"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-16 bg-slate-50" aria-labelledby="values-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 id="values-title" className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Our Mission & Values
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                We're driven by core values that guide every aspect of our business and ensure 
                exceptional results for our customers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Our Mission</h3>
              <p className="text-lg text-slate-600 max-w-4xl mx-auto">
                To provide superior metal roofing and building solutions that protect and enhance our customers' 
                properties while delivering exceptional value through quality materials, expert craftsmanship, 
                and unparalleled customer service.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-white" aria-labelledby="timeline-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 id="timeline-title" className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Our Journey
              </h2>
              <p className="text-lg text-slate-600">
                Two decades of growth, innovation, and commitment to excellence
              </p>
            </div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-slate-700 text-white rounded-full flex items-center justify-center font-bold">
                      {item.year.slice(-2)}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="bg-slate-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">{item.year}</h3>
                      <p className="text-slate-600">{item.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 bg-slate-50" aria-labelledby="certifications-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="certifications-title" className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">
              Certifications & Standards
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Licensed & Insured</h3>
                <p className="text-slate-600">Fully licensed contractor with comprehensive insurance coverage</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Industry Certified</h3>
                <p className="text-slate-600">Certified in advanced metal roofing installation techniques</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Safety Standards</h3>
                <p className="text-slate-600">OSHA compliant with rigorous safety protocols and training</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
