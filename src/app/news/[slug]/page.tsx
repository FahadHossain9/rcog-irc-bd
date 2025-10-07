import { notFound } from "next/navigation";
import { getNewsBySlug } from "@/data/news";

export async function generateStaticParams() {
  const { newsItems } = await import("@/data/news");
  return newsItems.map((n) => ({ slug: n.slug }));
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const news = getNewsBySlug(slug);
  if (!news) return notFound();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <p className="text-sm text-gray-500 mb-2">
          {news.date} · {news.category}
        </p>
        <h1 className="font-poppins text-3xl md:text-4xl font-bold text-[#1e293b] mb-6">
          {news.title}
        </h1>
        <p className="text-gray-700 mb-8">{news.excerpt}</p>
        {news.content ? (
          <article className="prose prose-slate max-w-none">
            {news.content.split("\n").map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </article>
        ) : (
          <div className="bg-[#f0f8ff] border border-[#e5f0fb] rounded-lg p-6 text-gray-700">
            Full article content will be published soon.
          </div>
        )}
        <div className="mt-8">
          <a
            href="/news"
            className="text-[#1b75bc] hover:text-[#155a94] text-sm"
          >
            ← Back to news
          </a>
        </div>
      </div>
    </section>
  );
}
