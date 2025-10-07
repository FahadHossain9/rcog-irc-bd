import { notFound } from "next/navigation";
import { getProgramBySlug } from "@/data/training";

export async function generateStaticParams() {
  const { programs } = await import("@/data/training");
  return programs.map((p) => ({ slug: p.slug }));
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) return notFound();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <p className="text-sm text-gray-500 mb-2">
          {program.date} · {program.mode} · {program.level}
        </p>
        <h1 className="font-poppins text-3xl md:text-4xl font-bold text-[#1e293b] mb-6">
          {program.title}
        </h1>
        <p className="text-gray-700 mb-8">{program.excerpt}</p>
        {program.content ? (
          <article className="prose prose-slate max-w-none">
            {program.content.split("\n").map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </article>
        ) : (
          <div className="bg-[#f0f8ff] border border-[#e5f0fb] rounded-lg p-6 text-gray-700">
            Full program details will be published soon.
          </div>
        )}
        <div className="mt-8">
          <a
            href="/training/programs"
            className="text-[#1b75bc] hover:text-[#155a94] text-sm"
          >
            ← Back to programs
          </a>
        </div>
      </div>
    </section>
  );
}
