import { notFound } from "next/navigation";
import { getProtocolBySlug } from "@/data/protocols";
import { FileText, Download } from "lucide-react";

export async function generateStaticParams() {
  // prerender known slugs
  const { protocols } = await import("@/data/protocols");
  return protocols.map((p) => ({ slug: p.slug }));
}

export default async function ProtocolDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const protocol = getProtocolBySlug(slug);
  if (!protocol) return notFound();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-6">
          <span className="text-xs font-semibold text-[#1b75bc] bg-[#e8f4fa] px-3 py-1 rounded-full mr-3">
            {protocol.category}
          </span>
          {protocol.isNew && (
            <span className="text-xs font-semibold text-white bg-[#ff6b35] px-3 py-1 rounded-full">
              NEW
            </span>
          )}
        </div>
        <h1 className="font-poppins text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">
          {protocol.title}
        </h1>
        <p className="text-gray-600 mb-8">{protocol.description}</p>

        {protocol.content ? (
          <article className="prose prose-slate max-w-none">
            {protocol.content.split("\n").map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </article>
        ) : (
          <div className="bg-[#f0f8ff] border border-[#e5f0fb] rounded-lg p-6 text-gray-700">
            Detailed content for this protocol will be added soon. Please check
            back later.
          </div>
        )}

        <div className="mt-10 flex items-center gap-4">
          <a
            href="/guidance/protocols"
            className="text-[#1b75bc] hover:text-[#155a94] text-sm"
          >
            ← Back to all protocols
          </a>
          {protocol.pdf && (
            <a
              href={protocol.pdf}
              download
              className="inline-flex items-center text-white bg-[#1b75bc] hover:bg-[#155a94] px-4 py-2 rounded-md text-sm"
            >
              <Download className="w-4 h-4 mr-2" /> Download PDF
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
