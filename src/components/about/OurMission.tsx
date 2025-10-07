"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, BookOpen, Award } from "lucide-react";

const OurMission = () => {
  const missionItems = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To improve women's health globally through education, training, and advocacy, while maintaining the highest standards of clinical practice in obstetrics and gynaecology.",
      color: "text-[#1b75bc]",
      bgColor: "bg-[#e8f4fa]",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "A world where all women are able to achieve their full health and reproductive potential, with access to world-class healthcare services and evidence-based treatments.",
      color: "text-[#ff6b35]",
      bgColor: "bg-[#fff5f0]",
    },
    {
      icon: Heart,
      title: "Our Values",
      description:
        "We are committed to excellence, integrity, compassion, and continuous learning. We believe in the power of collaboration and the importance of evidence-based practice.",
      color: "text-[#1b75bc]",
      bgColor: "bg-[#e8f4fa]",
    },
  ];

  const coreValues = [
    {
      icon: Users,
      title: "Professional Development",
      description:
        "Supporting continuous learning and career advancement for healthcare professionals.",
    },
    {
      icon: BookOpen,
      title: "Education & Training",
      description:
        "Providing comprehensive educational resources and hands-on training programs.",
    },
    {
      icon: Award,
      title: "Excellence in Care",
      description:
        "Promoting the highest standards of clinical practice and patient care.",
    },
  ];

  return (
    <section className="py-16 bg-[#f9fafb]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center font-poppins text-3xl md:text-4xl font-bold text-[#1e293b] mb-12"
        >
          Our Mission, Vision & Values
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {missionItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`${item.bgColor} rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2`}
            >
              <item.icon className={`w-12 h-12 ${item.color} mb-6`} />
              <h3 className="font-poppins text-xl font-semibold text-[#1e293b] mb-4">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8 md:p-12"
        >
          <h3 className="font-poppins text-2xl md:text-3xl font-bold text-[#1e293b] mb-8 text-center">
            Our Core Commitments
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#1b75bc] rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-poppins text-lg font-semibold text-[#1e293b] mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurMission;
