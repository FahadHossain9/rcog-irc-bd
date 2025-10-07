export type Program = {
  slug: string;
  title: string;
  level: "Basic" | "Intermediate" | "Advanced";
  mode: "In-person" | "Online" | "Hybrid";
  date: string;
  venue?: string;
  excerpt: string;
  content?: string;
};

export const programs: Program[] = [
  {
    slug: "basic-surgical-skills-bss",
    title: "Basic Surgical Skills (BSS) Course",
    level: "Basic",
    mode: "In-person",
    date: "Oct 26-27, 2025",
    venue: "Dhaka Medical College Auditorium",
    excerpt:
      "Two-day hands-on course covering surgical fundamentals and safety.",
  },
  {
    slug: "mrcog-part-2-practical-skills",
    title: "MRCOG Part 2 Practical Skills Course",
    level: "Intermediate",
    mode: "Hybrid",
    date: "Nov 22-23, 2025",
    venue: "Dhaka & Online",
    excerpt: "Exam-focused preparation with simulated stations and feedback.",
  },
  {
    slug: "advanced-laparoscopic-techniques",
    title: "Advanced Laparoscopic Techniques Workshop",
    level: "Advanced",
    mode: "In-person",
    date: "Dec 12, 2025",
    venue: "BSMMU Skill Lab",
    excerpt: "Advanced operative skills with safety emphasis and case videos.",
  },
];

export function getProgramBySlug(slug: string) {
  return programs.find((p) => p.slug === slug);
}
