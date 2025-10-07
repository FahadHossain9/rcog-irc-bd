"use client";

import { motion } from "framer-motion";
import { Users, Target, Award, Heart } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#1b75bc] to-[#0d4d7b] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('/images/patterns/dots.svg')] bg-repeat"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            About RCOG IRC Bangladesh
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl mb-12 opacity-90 leading-relaxed"
          >
            Dedicated to advancing women's healthcare through excellence,
            education, and evidence-based practice across Bangladesh.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            <div className="text-center">
              <Users className="w-8 h-8 mx-auto mb-2 text-orange-300" />
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm opacity-80">Members</div>
            </div>
            <div className="text-center">
              <Target className="w-8 h-8 mx-auto mb-2 text-orange-300" />
              <div className="text-2xl font-bold">22</div>
              <div className="text-sm opacity-80">Protocols</div>
            </div>
            <div className="text-center">
              <Award className="w-8 h-8 mx-auto mb-2 text-orange-300" />
              <div className="text-2xl font-bold">15</div>
              <div className="text-sm opacity-80">Programs</div>
            </div>
            <div className="text-center">
              <Heart className="w-8 h-8 mx-auto mb-2 text-orange-300" />
              <div className="text-2xl font-bold">20+</div>
              <div className="text-sm opacity-80">Years</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
