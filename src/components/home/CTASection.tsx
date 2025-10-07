"use client";

import Link from "next/link";
import { CheckCircle, MessageCircle, ArrowRight } from "lucide-react";

const CTASection = () => {
  const benefits = [
    "Access to Evidence-Based Protocols",
    "Training Information & Resources",
    "Event Updates & Networking",
    "Expert Guidance & Support",
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1b75bc] via-[#1b75bc] to-[#0d4d7b]" />

      {/* Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
            Get in Touch with RCOG IRC Bangladesh
          </h2>

          <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
            Connect with a community dedicated to excellence in women's
            healthcare and education
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4"
              >
                <CheckCircle className="w-5 h-5 text-orange-300 flex-shrink-0" />
                <span className="text-sm md:text-base">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="bg-[#ff6b35] hover:bg-[#ff5722] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2 w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Contact Us</span>
            </Link>

            <Link
              href="/membership"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1b75bc] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 w-full sm:w-auto justify-center"
            >
              <span>Join Our Community</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold mb-2">24/7</div>
                <div className="text-sm opacity-80">Online Support</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">500+</div>
                <div className="text-sm opacity-80">Active Members</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">20+</div>
                <div className="text-sm opacity-80">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-300/10 rounded-full blur-xl" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg" />
    </section>
  );
};

export default CTASection;
