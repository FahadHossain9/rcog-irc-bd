import Link from "next/link";
import Image from "next/image";
import { protocols } from "@/data/protocols";
import { FileText } from "lucide-react";

export const metadata = {
  title: "Evidence-Based Protocols | RCOG IRC Bangladesh",
};

export default function ProtocolsPage() {
  return (
    <section className="py-16 bg-[#f9fafb]">
      <div className="container mx-auto px-4">
        <h1 className="text-center font-poppins text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">
          Evidence-Based Protocols & Guidelines
        </h1>
        <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Browse our collection of 22 clinical protocols. Click any to view
          details.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {protocols.map((protocol) => (
            <div
              key={protocol.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl hover:border-[#1b75bc] transition-all duration-300 relative"
            >
              {protocol.isNew && (
                <span className="absolute top-4 left-4 bg-[#ff6b35] text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                  NEW
                </span>
              )}
              <div className="relative h-48 w-full bg-[#e8f4fa] flex items-center justify-center">
                {protocol.image ? (
                  <Image
                    src={protocol.image}
                    alt={protocol.title}
                    fill
                    className="object-cover opacity-80"
                  />
                ) : (
                  <FileText className="w-16 h-16 text-[#1b75bc] opacity-30" />
                )}
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-[#1b75bc] bg-[#e8f4fa] px-3 py-1 rounded-full mb-2 inline-block">
                  {protocol.category}
                </span>
                <h3 className="font-poppins text-xl font-semibold text-[#1e293b] mt-2 mb-3 leading-tight">
                  {protocol.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {protocol.description}
                </p>
                <div className="flex justify-between items-center">
                  <Link
                    href={`/guidance/protocols/${protocol.slug}`}
                    className="text-[#1b75bc] hover:text-[#155a94] font-medium text-sm"
                  >
                    View Details
                  </Link>
                  {protocol.pdf && (
                    <a
                      href={protocol.pdf}
                      download
                      className="text-gray-500 hover:text-[#1b75bc] text-sm"
                    >
                      Download PDF
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
