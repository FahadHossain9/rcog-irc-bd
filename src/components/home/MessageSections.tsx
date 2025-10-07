"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const MessageSections = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Message from President of RCOG */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/Ranee president of rcog.jpeg"
                  alt="Ranee - President, RCOG"
                  className="w-full h-96 object-cover "
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-semibold text-lg text-[#1e293b]">
                    Ranee
                  </h4>
                  <p className="text-sm text-gray-600">President, RCOG</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-[#1e293b] mb-6">
                Message from the President of RCOG
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  It is with great pleasure that I welcome you to the Royal
                  College of Obstetricians and Gynaecologists International
                  Representative Committee (RCOG IRC) Bangladesh.
                </p>
                <p>
                  Our commitment to advancing women's healthcare in Bangladesh
                  is unwavering. Through evidence-based practice, continuous
                  education, and collaborative research, we strive to set the
                  highest standards in obstetric and gynaecological care.
                </p>
                <p>
                  The RCOG IRC Bangladesh serves as a vital bridge between
                  international best practices and local healthcare needs,
                  ensuring that women in Bangladesh receive world-class medical
                  care.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 bg-[#1b75bc] hover:bg-[#155a94] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 mt-6"
              >
                <span>Read More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Message from Chair, RCOG IRC Bangladesh */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-[#1e293b] mb-6">
                Message from the Chair, RCOG IRC Bangladesh
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  As Chair of RCOG IRC Bangladesh, I am honored to lead this
                  prestigious organization in our mission to transform women's
                  healthcare across Bangladesh.
                </p>
                <p>
                  Our team of dedicated professionals works tirelessly to
                  provide comprehensive training, develop evidence-based
                  protocols, and foster innovation in obstetric and
                  gynaecological practice.
                </p>
                <p>
                  We believe that every woman deserves access to the highest
                  quality healthcare, and through our programs, research
                  initiatives, and community engagement, we are making this
                  vision a reality.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 bg-[#1b75bc] hover:bg-[#155a94] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 mt-6"
              >
                <span>Read More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Image */}
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/Prof. Dr. Fawzia Hossain Chair of RCOG IRC Bangladesh.jpeg"
                  alt="Prof. Dr. Fawzia Hossain - Chair, RCOG IRC BD"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-semibold text-lg text-[#1e293b]">
                    Prof. Firoza Hossain
                  </h4>
                  <p className="text-sm text-gray-600">Chair, RCOG IRC BD</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MessageSections;
