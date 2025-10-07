import Image from "next/image";
import { doctors } from "@/data/helpdesk";
import { Mail, Hospital } from "lucide-react";

export const metadata = {
  title: "RCOG IRC BD HelpDesk | Guidance",
  description:
    "Connect with RCOG IRC Bangladesh specialists for evidence-based guidance and support.",
};

export default function HelpDeskPage() {
  return (
    <section className="py-16 bg-[#f9fafb]">
      <div className="container mx-auto px-4">
        <h1 className="text-center font-poppins text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">
          RCOG IRC BD HelpDesk
        </h1>
        <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Reach out to our specialists for clinical guidance and professional
          advice.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doc) => (
            <div
              key={doc.slug}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-56 w-full bg-[#e8f4fa]">
                {doc.image && (
                  <Image
                    src={doc.image}
                    alt={doc.name}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="font-poppins text-xl font-semibold text-[#1e293b] mb-1">
                  {doc.name}
                </h3>
                {doc.title && (
                  <p className="text-[#1b75bc] font-medium">{doc.title}</p>
                )}
                {doc.hospital && (
                  <p className="text-gray-600 text-sm flex items-center gap-2 mt-1">
                    <Hospital className="w-4 h-4" /> {doc.hospital}
                  </p>
                )}
                <p className="text-gray-700 text-sm mt-3">
                  {doc.qualifications}
                </p>

                <div className="mt-6">
                  <a
                    href={`/contact?to=${encodeURIComponent(doc.name)}`}
                    className="inline-flex items-center bg-[#1b75bc] hover:bg-[#155a94] text-white px-4 py-2 rounded-md text-sm"
                  >
                    <Mail className="w-4 h-4 mr-2" /> Contact
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
