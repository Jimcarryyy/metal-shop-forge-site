
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Reviews = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      location: "Residential Customer",
      date: "March 2024",
      rating: 5,
      review: "Outstanding work from start to finish! The Metal Shop team was professional, punctual, and delivered exactly what they promised. Our new metal roof looks fantastic and we've already noticed improved energy efficiency. Highly recommend!",
      project: "5-Rib Metal Roof Installation"
    },
    {
      name: "Mike R.",
      location: "Commercial Property Owner",
      date: "February 2024",
      rating: 5,
      review: "We needed a complete roof replacement for our warehouse facility. The Metal Shop provided excellent communication throughout the project, stayed on schedule, and the quality of work exceeded our expectations. Great value for the investment.",
      project: "Commercial Roof Replacement"
    },
    {
      name: "Jennifer L.",
      location: "Homeowner",
      date: "January 2024",
      rating: 5,
      review: "After storm damage to our old roof, The Metal Shop came highly recommended. They handled the insurance process smoothly and completed the installation quickly. The craftsmanship is top-notch and our home looks beautiful!",
      project: "Storm Damage Repair & Replacement"
    },
    {
      name: "Tom W.",
      location: "Agricultural Customer",
      date: "December 2023",
      rating: 5,
      review: "Built a new barn with K-building system from The Metal Shop. The custom fabrication was perfect for our needs and the installation crew was knowledgeable and efficient. Very satisfied with the durability and appearance.",
      project: "K-Building Construction"
    },
    {
      name: "Lisa D.",
      location: "Residential Customer",
      date: "November 2023",
      rating: 5,
      review: "Excellent customer service and quality workmanship. The team took time to explain different options and helped us choose the perfect color and style for our home. The installation was clean and professional.",
      project: "Metal Shingle Installation"
    },
    {
      name: "Robert K.",
      location: "Industrial Client",
      date: "October 2023",
      rating: 5,
      review: "We've used The Metal Shop for multiple projects over the years. Their consistency in quality and reliability is unmatched. They understand commercial requirements and always deliver on time and within budget.",
      project: "Multiple Commercial Projects"
    }
  ];

  const stats = [
    { number: "98%", label: "Customer Satisfaction Rate" },
    { number: "1000+", label: "Completed Projects" },
    { number: "20+", label: "Years of Experience" },
    { number: "4.9/5", label: "Average Rating" }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1" aria-label={`${rating} out of 5 stars`}>
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-lg ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-slate-800 text-white py-16" aria-labelledby="reviews-hero-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 id="reviews-hero-title" className="text-4xl md:text-5xl font-bold mb-6">
              Customer Reviews
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say 
              about their experience with The Metal Shop.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-slate-50" aria-labelledby="stats-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="stats-title" className="text-3xl md:text-4xl font-bold text-slate-800 mb-12 text-center">
              Customer Satisfaction by the Numbers
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-3xl md:text-4xl font-bold text-slate-700 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-16 bg-white" aria-labelledby="testimonials-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="testimonials-title" className="text-3xl md:text-4xl font-bold text-slate-800 mb-12 text-center">
              What Our Customers Say
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <article key={index} className="bg-slate-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    {renderStars(testimonial.rating)}
                    <span className="text-sm text-slate-500">{testimonial.date}</span>
                  </div>
                  
                  <blockquote className="text-slate-600 mb-4 italic">
                    "{testimonial.review}"
                  </blockquote>
                  
                  <div className="border-t border-slate-200 pt-4">
                    <div className="font-semibold text-slate-800">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">{testimonial.location}</div>
                    <div className="text-sm text-slate-600 mt-1 font-medium">
                      Project: {testimonial.project}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Review Summary */}
        <section className="py-16 bg-slate-50" aria-labelledby="summary-title">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="summary-title" className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">
              Why Customers Choose Us
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Quality Workmanship</h3>
                <p className="text-slate-600">
                  Customers consistently praise our attention to detail and superior craftsmanship 
                  that stands the test of time.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Professional Service</h3>
                <p className="text-slate-600">
                  From initial consultation to project completion, we maintain clear communication 
                  and professional standards.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Reliable Timeline</h3>
                <p className="text-slate-600">
                  We stick to our schedules and complete projects on time, minimizing disruption 
                  to your daily routine.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Excellent Value</h3>
                <p className="text-slate-600">
                  Competitive pricing combined with superior materials and workmanship delivers 
                  outstanding long-term value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-slate-800 text-white" aria-labelledby="cta-title">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="cta-title" className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join Our Satisfied Customers?
            </h2>
            <p className="text-xl text-slate-200 mb-8">
              Experience the quality and service that has earned us hundreds of five-star reviews. 
              Contact us today for your free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-slate-800 hover:bg-slate-100 px-8 py-3 rounded-md font-semibold transition-colors inline-block"
              >
                Get Your Free Quote
              </a>
              <a 
                href="tel:+1234567890" 
                className="border border-white text-white hover:bg-white hover:text-slate-800 px-8 py-3 rounded-md font-semibold transition-colors inline-block"
              >
                Call Us Today
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Reviews;
