import Link from "next/link";
import { programs } from "@/data/training";

export const metadata = {
  title: "Training Programs | RCOG IRC Bangladesh",
};

export default function ProgramsPage() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-center font-poppins text-3xl md:text-4xl font-bold text-[#1e293b] mb-12">
          Training Programs
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((p) => (
            <div
              key={p.slug}
              className="rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition"
            >
              <p className="text-sm text-gray-500 mb-1">
                {p.date} · {p.mode}
              </p>
              <h3 className="font-poppins text-xl font-semibold text-[#1e293b] mb-2">
                {p.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{p.excerpt}</p>
              <Link
                href={`/training/programs/${p.slug}`}
                className="text-[#1b75bc] hover:text-[#155a94] text-sm font-medium"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
