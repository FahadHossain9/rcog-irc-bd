export type EventItem = {
  slug: string;
  title: string;
  date: string;
  venue: string;
  type: "Conference" | "Workshop" | "Webinar";
  image?: string;
  excerpt: string;
  content?: string;
};

export const events: EventItem[] = [
  {
    slug: "annual-rcog-irc-bd-conference-2025",
    title: "Annual RCOG IRC Bangladesh Conference",
    date: "November 15-17, 2025",
    venue: "Dhaka, Bangladesh",
    type: "Conference",
    image: "/images/events/event1.jpg",
    excerpt:
      "Three-day conference featuring keynote talks, symposia, and hands-on sessions in O&G.",
    content:
      "### Highlights\n- Keynote from international faculty\n- Hands-on simulation labs\n- Research poster presentations",
  },
  {
    slug: "mrcog-part-3-osce-prep-dec-2025",
    title: "MRCOG Part 3 OSCE Preparation Workshop",
    date: "December 10, 2025",
    venue: "Online Webinar",
    type: "Workshop",
    image: "/images/events/event2.jpg",
    excerpt:
      "Intensive OSCE preparation with examiners' tips and mock stations.",
  },
  {
    slug: "advances-in-laparoscopic-surgery-jan-2026",
    title: "CPD Webinar: Advances in Laparoscopic Surgery",
    date: "January 20, 2026",
    venue: "Virtual",
    type: "Webinar",
    image: "/images/events/event3.jpg",
    excerpt: "Latest techniques, safety, and case-based discussions.",
  },
];

export function getEventBySlug(slug: string) {
  return events.find((e) => e.slug === slug);
}
