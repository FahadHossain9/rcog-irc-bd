import { notFound } from "next/navigation";
import { getEventBySlug } from "@/data/events";

export async function generateStaticParams() {
  const { events } = await import("@/data/events");
  return events.map((e) => ({ slug: e.slug }));
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return notFound();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <p className="text-sm text-gray-500 mb-2">
          {event.date} · {event.venue}
        </p>
        <h1 className="font-poppins text-3xl md:text-4xl font-bold text-[#1e293b] mb-6">
          {event.title}
        </h1>
        <p className="text-gray-700 mb-8">{event.excerpt}</p>
        {event.content ? (
          <article className="prose prose-slate max-w-none">
            {event.content.split("\n").map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </article>
        ) : (
          <div className="bg-[#f0f8ff] border border-[#e5f0fb] rounded-lg p-6 text-gray-700">
            Detailed agenda will be published soon. Please check back later.
          </div>
        )}
        <div className="mt-8">
          <a
            href="/events"
            className="text-[#1b75bc] hover:text-[#155a94] text-sm"
          >
            ← Back to events
          </a>
        </div>
      </div>
    </section>
  );
}
