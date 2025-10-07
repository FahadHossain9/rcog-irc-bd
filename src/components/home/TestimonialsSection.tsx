"use client";

import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "The RCOG IRC Bangladesh has been instrumental in advancing my career in obstetrics and gynaecology. Their training programs are world-class.",
      author: "Dr. Sarah Ahmed",
      designation: "Consultant Obstetrician",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
      id: 2,
      quote:
        "The evidence-based protocols provided by RCOG IRC Bangladesh have significantly improved our clinical practice and patient outcomes.",
      author: "Dr. Mohammad Rahman",
      designation: "Senior Gynaecologist",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
      id: 3,
      quote:
        "The research opportunities and collaborative network through RCOG IRC Bangladesh have opened doors I never thought possible.",
      author: "Dr. Fatima Khan",
      designation: "Research Fellow",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1594824388852-8a0b5b80b5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
      id: 4,
      quote:
        "The community engagement and advocacy work of RCOG IRC Bangladesh is making a real difference in women's healthcare across the country.",
      author: "Dr. Ayesha Begum",
      designation: "Public Health Specialist",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl lg:text-4xl mb-4">
            Here's What Our Clients Say
          </h2>
          <div className="w-20 h-1 bg-[#ff6b35] rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Quote */}
              <blockquote className="text-gray-300 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#ff6b35] text-[#ff6b35]"
                  />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-white text-sm">
                    {testimonial.author}
                  </h4>
                  <p className="text-gray-400 text-xs">
                    {testimonial.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
