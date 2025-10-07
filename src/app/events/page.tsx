import Link from "next/link";
import Image from "next/image";
import { events } from "@/data/events";

export const metadata = {
  title: "Events & Photo Gallery | RCOG IRC Bangladesh",
};

export default function EventsPage() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-center font-poppins text-3xl md:text-4xl font-bold text-[#1e293b] mb-12">
          Upcoming Events & Activities
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.slug}
              className="rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <div className="relative h-48 bg-[#e8f4fa]">
                {event.image && (
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-1">{event.date}</p>
                <h3 className="font-poppins text-xl font-semibold text-[#1e293b] mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{event.excerpt}</p>
                <Link
                  href={`/events/${event.slug}`}
                  className="text-[#1b75bc] hover:text-[#155a94] text-sm font-medium"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
