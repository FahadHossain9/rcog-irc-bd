"use client";

import {
  Building,
  FileCheck,
  Megaphone,
  Heart,
  Users,
  Shield,
} from "lucide-react";

const WhatWeDoSection = () => {
  const services = [
    {
      icon: Building,
      title: "Education & Training",
      description:
        "Comprehensive training programs for healthcare professionals",
    },
    {
      icon: FileCheck,
      title: "Evidence-Based Protocols",
      description: "Clinical guidelines and protocols for best practice",
    },
    {
      icon: Megaphone,
      title: "Advocacy",
      description: "Promoting women's health and healthcare policies",
    },
    {
      icon: Heart,
      title: "Research and Innovation",
      description: "Advancing medical research and innovative practices",
    },
    {
      icon: Users,
      title: "Community Engagement",
      description: "Building strong healthcare communities",
    },
    {
      icon: Shield,
      title: "Policy Development",
      description: "Developing healthcare policies and standards",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-[#1e293b] mb-4">
            What We Do
          </h2>
          <div className="w-20 h-1 bg-[#ff6b35] rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#e8f4fa] rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-[#1b75bc] rounded-full flex items-center justify-center mx-auto mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-poppins font-semibold text-xl text-[#1e293b] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
