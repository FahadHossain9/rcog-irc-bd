"use client";

import Link from "next/link";
import { FileText, Download, ArrowRight, Clock } from "lucide-react";

const FeaturedProtocols = () => {
  const protocols = [
    {
      id: "001",
      title: "Maternal Collapse in Pregnancy and Puerperium",
      description:
        "Comprehensive guidelines for managing maternal collapse during pregnancy and postpartum period.",
      category: "Emergency",
      lastUpdated: "Sep 2025",
      isNew: true,
    },
    {
      id: "002",
      title: "Recurrent Pregnancy Loss (RPL)",
      description:
        "Evidence-based approach to evaluation and management of recurrent pregnancy loss.",
      category: "Maternal Medicine",
      lastUpdated: "Aug 2025",
      isNew: false,
    },
    {
      id: "003",
      title: "NVD & IVD",
      description:
        "Guidelines for normal vaginal delivery and instrumental vaginal delivery procedures.",
      category: "Obstetrics",
      lastUpdated: "Jul 2025",
      isNew: false,
    },
    {
      id: "004",
      title: "Thyroid Disorder in Pregnancy",
      description:
        "Management of thyroid disorders during pregnancy and their impact on maternal and fetal outcomes.",
      category: "Maternal Medicine",
      lastUpdated: "Jun 2025",
      isNew: false,
    },
    {
      id: "005",
      title: "Postpartum Hemorrhage (PPH)",
      description:
        "Emergency protocols for prevention and management of postpartum hemorrhage.",
      category: "Emergency",
      lastUpdated: "May 2025",
      isNew: false,
    },
    {
      id: "006",
      title: "Premature Rupture of Membranes (PROM)",
      description:
        "Clinical guidelines for managing premature rupture of membranes in pregnancy.",
      category: "Obstetrics",
      lastUpdated: "Apr 2025",
      isNew: false,
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Emergency":
        return "bg-red-100 text-red-800";
      case "Maternal Medicine":
        return "bg-blue-100 text-blue-800";
      case "Obstetrics":
        return "bg-green-100 text-green-800";
      case "Gynecology":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-[#1e293b] mb-4">
            Evidence-Based Protocols & Guidelines
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Access comprehensive clinical protocols developed by leading experts
            in obstetrics and gynaecology
          </p>
          <div className="w-20 h-1 bg-[#ff6b35] rounded-full mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {protocols.map((protocol, index) => (
            <div
              key={protocol.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              {/* Protocol Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-[#e8f4fa] to-[#d1e9f6] flex items-center justify-center relative">
                <FileText className="w-16 h-16 text-[#1b75bc] opacity-60" />
                {protocol.isNew && (
                  <div className="absolute top-4 right-4 bg-[#ff6b35] text-white px-3 py-1 rounded-full text-xs font-semibold">
                    New
                  </div>
                )}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-[#1b75bc]">
                  {protocol.id}
                </div>
              </div>

              {/* Protocol Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                      protocol.category
                    )}`}
                  >
                    {protocol.category}
                  </span>
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="w-3 h-3 mr-1" />
                    {protocol.lastUpdated}
                  </div>
                </div>

                <h3 className="font-semibold text-lg text-[#1e293b] mb-3 line-clamp-2 group-hover:text-[#1b75bc] transition-colors">
                  {protocol.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {protocol.description}
                </p>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Link
                    href={`/guidance/protocols/${protocol.id.toLowerCase()}`}
                    className="flex-1 bg-[#1b75bc] hover:bg-[#155a94] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/guidance/protocols"
            className="inline-flex items-center space-x-2 bg-white border-2 border-[#1b75bc] text-[#1b75bc] hover:bg-[#1b75bc] hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <span>View All Protocols</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProtocols;
