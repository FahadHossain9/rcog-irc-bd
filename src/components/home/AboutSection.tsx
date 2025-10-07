"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Target, Eye, Users } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="RCOG IRC Bangladesh Committee"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b75bc]/20 to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-6 max-w-xs"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#e8f4fa] rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#1b75bc]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#1b75bc]">500+</p>
                  <p className="text-sm text-gray-600">Active Members</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-[#1e293b] mb-4">
                About RCOG IRC Bangladesh
              </h2>
              <div className="w-20 h-1 bg-[#ff6b35] rounded-full mb-6" />
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              The Royal College of Obstetricians and Gynaecologists
              International Representative Committee (RCOG IRC) Bangladesh is
              dedicated to advancing women's healthcare through excellence in
              medical education, evidence-based practice, and professional
              development.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              We serve as the official representative body of the Royal College
              in Bangladesh, fostering collaboration between healthcare
              professionals and promoting the highest standards of obstetric and
              gynaecological care.
            </p>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-[#e8f4fa] rounded-xl p-6"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <Target className="w-6 h-6 text-[#1b75bc]" />
                  <h3 className="font-semibold text-lg text-[#1e293b]">
                    Our Mission
                  </h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  To advance the science and practice of obstetrics and
                  gynaecology through education, training, and research
                  excellence.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-[#e8f4fa] rounded-xl p-6"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <Eye className="w-6 h-6 text-[#1b75bc]" />
                  <h3 className="font-semibold text-lg text-[#1e293b]">
                    Our Vision
                  </h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  To be the leading authority in women's healthcare in
                  Bangladesh, setting standards for excellence and innovation.
                </p>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-4"
            >
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 bg-[#1b75bc] hover:bg-[#155a94] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
