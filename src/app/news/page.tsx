import Link from "next/link";
import Image from "next/image";
import { newsItems } from "@/data/news";

export const metadata = {
  title: "News | RCOG IRC Bangladesh",
};

export default function NewsPage() {
  return (
    <section className="py-16 bg-[#f9fafb]">
      <div className="container mx-auto px-4">
        <h1 className="text-center font-poppins text-3xl md:text-4xl font-bold text-[#1e293b] mb-12">
          Latest News
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news) => (
            <div
              key={news.slug}
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-lg transition"
            >
              <div className="relative h-48 bg-[#e8f4fa]">
                {news.image && (
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-1">{news.date}</p>
                <h3 className="font-poppins text-xl font-semibold text-[#1e293b] mb-2">
                  {news.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{news.excerpt}</p>
                <Link
                  href={`/news/${news.slug}`}
                  className="text-[#1b75bc] hover:text-[#155a94] text-sm font-medium"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
