"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";

const BlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const blogPosts = [
    {
      id: 1,
      title:
        "Guestblog: Specialist Posts In Obstetrics & Gynaecology: Are We Missing a Golden Opportunity?",
      excerpt:
        "Exploring the current landscape of specialist positions in obstetrics and gynaecology and identifying opportunities for growth and development.",
      category: "Guest Blog",
      author: "Dr. Sarah Ahmed",
      date: "Oct 15, 2025",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      featured: true,
    },
    {
      id: 2,
      title: "Advancements in Maternal Healthcare: A Comprehensive Review",
      excerpt:
        "Latest developments in maternal healthcare practices and their impact on patient outcomes.",
      category: "Research",
      author: "Dr. Mohammad Rahman",
      date: "Oct 12, 2025",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      featured: true,
    },
    {
      id: 3,
      title: "Evidence-Based Protocols: Implementation Strategies",
      excerpt:
        "Best practices for implementing evidence-based protocols in clinical settings.",
      category: "Clinical Practice",
      author: "Dr. Fatima Khan",
      date: "Oct 10, 2025",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      featured: false,
    },
    {
      id: 4,
      title: "The Future of Women's Healthcare in Bangladesh",
      excerpt:
        "Vision and roadmap for advancing women's healthcare across Bangladesh.",
      category: "Policy",
      author: "Dr. Ayesha Begum",
      date: "Oct 8, 2025",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      featured: false,
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Guest Blog":
        return "bg-blue-100 text-blue-800";
      case "Research":
        return "bg-green-100 text-green-800";
      case "Clinical Practice":
        return "bg-purple-100 text-purple-800";
      case "Policy":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const featuredPosts = blogPosts.filter((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-[#1e293b] mb-4">
            Explore Our Blog and Articles
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest insights, research findings, and expert
            opinions in obstetrics and gynaecology.
          </p>
          <div className="w-20 h-1 bg-[#ff6b35] rounded-full mx-auto mt-6" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Featured Posts - 2 large cards */}
          <div className="lg:col-span-2 space-y-8">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                          post.category
                        )}`}
                      >
                        {post.category}
                      </span>
                    </div>
                    <h3 className="font-semibold text-lg text-[#1e293b] mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center space-x-2 text-[#1b75bc] hover:text-[#155a94] font-medium text-sm transition-colors duration-200"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Regular Posts - 2 smaller cards */}
          <div className="space-y-6">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                        post.category
                      )}`}
                    >
                      {post.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-sm text-[#1e293b] mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center space-x-1 text-[#1b75bc] hover:text-[#155a94] font-medium text-xs transition-colors duration-200"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* View All Blog Posts Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 bg-[#1b75bc] hover:bg-[#155a94] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
