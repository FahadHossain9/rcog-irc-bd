export type NewsItem = {
  slug: string;
  title: string;
  date: string;
  category: string;
  image?: string;
  excerpt: string;
  content?: string;
};

export const newsItems: NewsItem[] = [
  {
    slug: "new-training-initiative-oct-2025",
    title: "RCOG IRC Bangladesh Launches New Training Initiative",
    date: "October 5, 2025",
    category: "RCOG Updates",
    image: "/images/news/news1.jpg",
    excerpt:
      "A new program aimed at enhancing surgical skills for junior obstetricians...",
  },
  {
    slug: "dr-rahman-receives-award",
    title: "Member Achievement: Dr. Rahman Receives International Award",
    date: "October 3, 2025",
    category: "Member Achievements",
    image: "/images/news/news2.jpg",
    excerpt:
      "Recognized for groundbreaking research in maternal fetal medicine.",
  },
  {
    slug: "gdm-guidelines-released",
    title: "New Guidelines on Gestational Diabetes Management Released",
    date: "September 30, 2025",
    category: "Medical Research",
    image: "/images/news/news3.jpg",
    excerpt:
      "Updated protocols to improve outcomes for mothers and babies with GDM.",
  },
];

export function getNewsBySlug(slug: string) {
  return newsItems.find((n) => n.slug === slug);
}
