"use client";

import { Calendar, Users, Award, BookOpen } from "lucide-react";

const OurHistory = () => {
  const milestones = [
    {
      year: "2003",
      title: "Foundation",
      description:
        "RCOG IRC Bangladesh was established as the official representative body of the Royal College of Obstetricians and Gynaecologists in Bangladesh.",
      icon: Users,
    },
    {
      year: "2008",
      title: "First Training Program",
      description:
        "Launched our first comprehensive training program for obstetricians and gynaecologists across Bangladesh.",
      icon: BookOpen,
    },
    {
      year: "2012",
      title: "Protocol Development",
      description:
        "Published our first set of evidence-based clinical protocols for maternal and reproductive health.",
      icon: Award,
    },
    {
      year: "2016",
      title: "Research Initiative",
      description:
        "Established the RCOG IRC Bangladesh Research Foundation to support local research projects.",
      icon: Calendar,
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description:
        "Launched online training programs and digital resources to reach healthcare professionals nationwide.",
      icon: Users,
    },
    {
      year: "2023",
      title: "20th Anniversary",
      description:
        "Celebrated two decades of excellence in advancing women's healthcare in Bangladesh.",
      icon: Award,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-poppins text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">
          Our Journey Through the Years
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          From our humble beginnings to becoming a leading force in women's
          healthcare, discover the key milestones that have shaped our
          organization.
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#1b75bc] to-[#ff6b35] hidden md:block"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div className="bg-[#f0f8ff] rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-[#1b75bc] rounded-full flex items-center justify-center">
                        <milestone.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-2xl font-bold text-[#1b75bc]">
                          {milestone.year}
                        </span>
                        <h3 className="font-poppins text-xl font-semibold text-[#1e293b]">
                          {milestone.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className="w-6 h-6 bg-[#1b75bc] rounded-full border-4 border-white shadow-lg z-10"></div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="w-full md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#1b75bc] to-[#ff6b35] rounded-xl p-8 text-white">
            <h3 className="font-poppins text-2xl font-bold mb-4">
              Continuing Our Legacy
            </h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              As we look toward the future, we remain committed to our founding
              principles while embracing innovation and new challenges in
              women's healthcare.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurHistory;
