
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-slate-800 text-white py-16" aria-labelledby="contact-hero-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 id="contact-hero-title" className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto">
              Ready to start your metal roofing project? Get in touch with our team for a free consultation 
              and detailed quote tailored to your specific needs.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-slate-50" aria-labelledby="contact-info-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="contact-info-title" className="text-3xl md:text-4xl font-bold text-slate-800 mb-12 text-center">
              Get in Touch
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-slate-700 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Phone</h3>
                <a 
                  href="tel:+1234567890" 
                  className="text-slate-600 hover:text-slate-800 text-lg transition-colors"
                >
                  (123) 456-7890
                </a>
                <p className="text-sm text-slate-500 mt-2">Call for immediate assistance</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-slate-700 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Email</h3>
                <a 
                  href="mailto:info@themetalshop.com" 
                  className="text-slate-600 hover:text-slate-800 text-lg transition-colors"
                >
                  info@themetalshop.com
                </a>
                <p className="text-sm text-slate-500 mt-2">We respond within 24 hours</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-slate-700 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Business Hours</h3>
                <div className="text-slate-600 space-y-1">
                  <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                  <p>Saturday: 8:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            {/* Service Area */}
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Service Area</h3>
              <p className="text-slate-600 text-lg mb-4">
                We proudly serve customers throughout the region with professional metal roofing services.
              </p>
              <p className="text-slate-500">
                Contact us to confirm service availability in your area.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <ContactForm title="Send Us a Message" />

        {/* Map Section */}
        <section className="py-16 bg-slate-50" aria-labelledby="location-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="location-title" className="text-3xl md:text-4xl font-bold text-slate-800 mb-8 text-center">
              Visit Our Location
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-6">Find Us Here</h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Address</h4>
                    <p className="text-slate-600">
                      123 Industrial Drive<br />
                      Metal City, ST 12345
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Directions</h4>
                    <p className="text-slate-600">
                      Located in the Industrial District, easily accessible from Highway 10. 
                      Look for our distinctive metal building with "The Metal Shop" signage.
                    </p>
                  </div>
                </div>
                
                <div className="bg-slate-100 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-3">Showroom Hours</h4>
                  <div className="space-y-2 text-slate-600">
                    <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p>Saturday: 9:00 AM - 3:00 PM</p>
                    <p>Sunday: By appointment only</p>
                  </div>
                  <p className="text-sm text-slate-500 mt-3">
                    Visit our showroom to see material samples and discuss your project in person.
                  </p>
                </div>
              </div>
              
              <div>
                <div className="bg-slate-200 rounded-lg h-96 flex items-center justify-center">
                  <p className="text-slate-600 text-center">
                    Interactive Map<br />
                    <span className="text-sm">Google Maps integration would be placed here</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-16 bg-slate-800 text-white" aria-labelledby="emergency-title">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="emergency-title" className="text-3xl md:text-4xl font-bold mb-6">
              Emergency Repairs
            </h2>
            <p className="text-xl text-slate-200 mb-8">
              Roof damage from storms or unexpected issues? We offer emergency repair services 
              to protect your property when you need help most.
            </p>
            <a 
              href="tel:+1234567890" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-md text-lg font-semibold transition-colors inline-block"
            >
              Emergency Hotline: (123) 456-7890
            </a>
            <p className="text-sm text-slate-300 mt-4">
              Available 24/7 for emergency situations
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
