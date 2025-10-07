"use client";

import Image from "next/image";
import {
  Mail,
  Linkedin,
  Award,
  Users,
  GraduationCap,
  Heart,
} from "lucide-react";

const OurTeam = () => {
  const leadership = [
    {
      name: "Prof. Dr. Fawzia Hossain",
      position: "Chair, RCOG IRC Bangladesh",
      image:
        "/images/Prof. Dr. Fawzia Hossain Chair of RCOG IRC Bangladesh.jpeg",
      credentials: "MBBS, FCPS, FRCOG",
      bio: "Leading expert in maternal-fetal medicine with over 25 years of experience in obstetrics and gynaecology.",
      email: "chair@rcog-irc.org.bd",
    },
    {
      name: "Dr. Ranee Thakar",
      position: "President, RCOG UK",
      image: "/images/Ranee president of rcog.jpeg",
      credentials: "MBBS, MD, FRCOG",
      bio: "Distinguished leader in women's health and international medical education.",
      email: "president@rcog.org.uk",
    },
  ];

  const committeeMembers = [
    {
      name: "Dr. Ayesha Khan",
      position: "Vice Chair",
      credentials: "MBBS, FCPS",
      specialty: "Reproductive Medicine",
    },
    {
      name: "Dr. Mohammad Rahman",
      position: "Secretary",
      credentials: "MBBS, MD",
      specialty: "Maternal Medicine",
    },
    {
      name: "Dr. Fatima Begum",
      position: "Treasurer",
      credentials: "MBBS, FCPS",
      specialty: "Gynaecological Oncology",
    },
    {
      name: "Dr. Ahmed Hassan",
      position: "Training Coordinator",
      credentials: "MBBS, MRCOG",
      specialty: "Obstetrics",
    },
    {
      name: "Dr. Sara Ahmed",
      position: "Research Director",
      credentials: "MBBS, PhD",
      specialty: "Clinical Research",
    },
    {
      name: "Dr. Nusrat Jahan",
      position: "Education Lead",
      credentials: "MBBS, FCPS",
      specialty: "Medical Education",
    },
  ];

  return (
    <section className="py-16 bg-[#e8f4fa]">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-poppins text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">
          Meet Our Leadership Team
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Our dedicated team of healthcare professionals and leaders who drive
          our mission forward.
        </p>

        {/* Leadership Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {leadership.map((leader, index) => (
            <div
              key={leader.name}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="flex-shrink-0">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    width={120}
                    height={120}
                    className="rounded-full object-cover border-4 border-[#1b75bc] shadow-md"
                  />
                </div>
                <div className="text-center md:text-left flex-grow">
                  <h3 className="font-poppins text-xl font-semibold text-[#1e293b] mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-[#1b75bc] font-medium mb-2">
                    {leader.position}
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    {leader.credentials}
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {leader.bio}
                  </p>
                  <a
                    href={`mailto:${leader.email}`}
                    className="inline-flex items-center text-[#1b75bc] hover:text-[#155a94] transition-colors text-sm"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Contact
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Committee Members */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="font-poppins text-2xl font-bold text-[#1e293b] mb-8 text-center">
            Executive Committee
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {committeeMembers.map((member, index) => (
              <div
                key={member.name}
                className="bg-[#f0f8ff] rounded-lg p-6 hover:bg-[#e8f4fa] transition-colors duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#1b75bc] rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-poppins text-lg font-semibold text-[#1e293b] mb-1">
                      {member.name}
                    </h4>
                    <p className="text-[#1b75bc] font-medium text-sm mb-1">
                      {member.position}
                    </p>
                    <p className="text-gray-600 text-xs mb-2">
                      {member.credentials}
                    </p>
                    <p className="text-gray-700 text-xs">{member.specialty}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-[#1b75bc] to-[#ff6b35] rounded-xl p-8 text-white">
            <h3 className="font-poppins text-2xl font-bold mb-4">
              Join Our Community
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Become part of our growing network of healthcare professionals
              dedicated to advancing women's health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/membership"
                className="bg-white text-[#1b75bc] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Become a Member
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#1b75bc] transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
