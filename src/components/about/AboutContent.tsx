"use client";

import Image from "next/image";
import { CheckCircle, Users, BookOpen, Award } from "lucide-react";

const AboutContent = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-[#1e293b] mb-6">
              Our Story & Vision
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              The Royal College of Obstetricians and Gynaecologists (RCOG)
              International Representative Committee (IRC) in Bangladesh was
              established to bridge the gap between international best practices
              and local healthcare needs. We serve as the official
              representative body of the RCOG in Bangladesh, working tirelessly
              to elevate the standards of women's healthcare.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Our committee brings together leading experts in obstetrics and
              gynaecology from across Bangladesh, creating a powerful network of
              professionals dedicated to improving maternal and reproductive
              health outcomes through education, training, and evidence-based
              practice.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[#1b75bc] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[#1e293b] mb-1">
                    Professional Excellence
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Maintaining the highest standards of clinical practice and
                    professional development.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[#1b75bc] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[#1e293b] mb-1">
                    Evidence-Based Practice
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Implementing the latest research and clinical guidelines in
                    daily practice.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[#1b75bc] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[#1e293b] mb-1">
                    Community Impact
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Making a tangible difference in women's health outcomes
                    across Bangladesh.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/images/about-rcog.jpg"
              alt="RCOG IRC Bangladesh Committee"
              width={600}
              height={400}
              className="rounded-xl shadow-lg object-cover w-full h-auto"
            />
            <div className="absolute -bottom-8 -right-8 bg-[#1b75bc] text-white p-6 rounded-xl shadow-xl hidden md:block">
              <p className="font-poppins text-3xl font-bold">20+</p>
              <p className="text-sm">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
