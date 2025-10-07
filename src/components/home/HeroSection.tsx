"use client";

import Link from "next/link";
import { ArrowDown, FileText, MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1b75bc]/85 via-[#1b75bc]/70 to-[#0d4d7b]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Educating And Innovating
            <span className="block text-orange-300">In Healthcare</span>
          </h1>
        </div>

        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Empowering healthcare professionals through excellence, education, and
          evidence-based practice
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            href="/guidance/protocols"
            className="bg-[#1b75bc] hover:bg-[#155a94] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2"
          >
            <FileText className="w-5 h-5" />
            <span>Explore Protocols</span>
          </Link>

          <Link
            href="/membership"
            className="bg-[#1b75bc] hover:bg-[#155a94] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Join Our Community</span>
          </Link>
        </div>

        {/* Message from President */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
          <p className="text-lg italic mb-2">
            "Welcome to RCOG IRC Bangladesh - your gateway to excellence in
            women's healthcare."
          </p>
          <p className="text-sm opacity-90">
            - Prof. Dr. Fawzia Hossain, Chair of RCOG IRC Bangladesh
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center text-white">
          <span className="text-sm mb-2">Scroll to explore</span>
          <ArrowDown className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
