"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight, Newspaper, Clock } from "lucide-react";

const NewsEventsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const newsItems = [
    {
      id: 1,
      title: "New Protocol Released: Maternal Collapse Management",
      excerpt:
        "RCOG IRC Bangladesh releases updated guidelines for managing maternal collapse in pregnancy and puerperium.",
      date: "Oct 5, 2025",
      category: "Protocols",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 2,
      title: "Member Achievement: Dr. Sarah Ahmed Receives International Award",
      excerpt:
        "Congratulations to Dr. Sarah Ahmed for receiving the Excellence in Obstetrics Award at the International Conference.",
      date: "Oct 3, 2025",
      category: "Achievements",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 3,
      title: "Research Update: Latest Findings on Gestational Diabetes",
      excerpt:
        "New research findings on gestational diabetes management and its impact on maternal and fetal outcomes.",
      date: "Sep 30, 2025",
      category: "Research",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
  ];

  const eventItems = [
    {
      id: 1,
      title: "Annual RCOG IRC Bangladesh Conference 2025",
      date: "Nov 15, 2025",
      time: "9:00 AM - 5:00 PM",
      venue: "Bangabandhu International Conference Centre, Dhaka",
      type: "Conference",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 2,
      title: "MRCOG Part 1 Preparation Workshop",
      date: "Dec 10, 2025",
      time: "10:00 AM - 4:00 PM",
      venue: "RCOG IRC Bangladesh Office, Dhaka",
      type: "Workshop",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 3,
      title: "CPD Webinar: Advanced Laparoscopic Techniques",
      date: "Jan 20, 2026",
      time: "7:00 PM - 8:30 PM",
      venue: "Online",
      type: "Webinar",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Protocols":
        return "bg-blue-100 text-blue-800";
      case "Achievements":
        return "bg-green-100 text-green-800";
      case "Research":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "Conference":
        return "bg-[#1b75bc] text-white";
      case "Workshop":
        return "bg-[#ff6b35] text-white";
      case "Webinar":
        return "bg-green-600 text-white";
      default:
        return "bg-gray-600 text-white";
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-[#1e293b] mb-4">
            Latest Updates
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed with the latest news, research updates, and upcoming
            events
          </p>
          <div className="w-20 h-1 bg-[#ff6b35] rounded-full mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Latest News */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-[#1b75bc] rounded-full flex items-center justify-center">
                <Newspaper className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-poppins font-bold text-2xl text-[#1e293b]">
                Latest News
              </h3>
            </div>

            <div className="space-y-6">
              {newsItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex space-x-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                            item.category
                          )}`}
                        >
                          {item.category}
                        </span>
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="w-3 h-3 mr-1" />
                          {item.date}
                        </div>
                      </div>
                      <h4 className="font-semibold text-lg text-[#1e293b] mb-2 line-clamp-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                        {item.excerpt}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8"
            >
              <Link
                href="/news"
                className="inline-flex items-center space-x-2 text-[#1b75bc] hover:text-[#155a94] font-semibold transition-colors duration-200"
              >
                <span>View All News</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Upcoming Events */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-[#ff6b35] rounded-full flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-poppins font-bold text-2xl text-[#1e293b]">
                Upcoming Events
              </h3>
            </div>

            <div className="space-y-6">
              {eventItems.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex space-x-4">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getEventTypeColor(
                            event.type
                          )}`}
                        >
                          {event.type}
                        </span>
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="w-3 h-3 mr-1" />
                          {event.date}
                        </div>
                      </div>
                      <h4 className="font-semibold text-lg text-[#1e293b] mb-2 line-clamp-2">
                        {event.title}
                      </h4>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-2" />
                          {event.time}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-3 h-3 mr-2" />
                          {event.venue}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8"
            >
              <Link
                href="/events"
                className="inline-flex items-center space-x-2 text-[#1b75bc] hover:text-[#155a94] font-semibold transition-colors duration-200"
              >
                <span>View All Events</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsEventsSection;
