"use client";

import Link from "next/link";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";

const WorkshopSection = () => {
  const workshops = [
    {
      id: 1,
      date: "04 Oct",
      title: "Basic Surgical Skills (BSS) Course",
      description: "Comprehensive training in fundamental surgical techniques",
      seatsLeft: 7,
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 2,
      date: "15 October",
      title: "MRCOG Part 2 Practical Skills Course",
      description: "Advanced preparation for MRCOG Part 2 examination",
      seatsLeft: 4,
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 3,
      date: "9d left",
      title: "Advanced Laparoscopic Techniques Workshop",
      description: "Hands-on training in advanced laparoscopic procedures",
      seatsLeft: 2,
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
  ];

  return (
    <section className="py-20 bg-[#0d4d7b] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl lg:text-4xl mb-4">
            Don't Miss Our October Workshop!
          </h2>
          <div className="w-20 h-1 bg-[#ff6b35] rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
            <div
              key={workshop.id}
              className="bg-[#1e293b] rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Date */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2 text-[#ff6b35]">
                  <Calendar className="w-4 h-4" />
                  <span className="font-semibold">{workshop.date}</span>
                </div>
                <div className="flex items-center space-x-1 text-sm">
                  <Users className="w-4 h-4" />
                  <span>{workshop.seatsLeft} seats</span>
                </div>
              </div>

              {/* Image */}
              <div className="mb-4">
                <img
                  src={workshop.image}
                  alt={workshop.title}
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>

              {/* Content */}
              <h3 className="font-semibold text-lg text-white mb-2 line-clamp-2">
                {workshop.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2">
                {workshop.description}
              </p>

              {/* CTA Button */}
              <Link
                href={`/events/${workshop.id}`}
                className="inline-flex items-center space-x-2 bg-[#ff6b35] hover:bg-[#ff5722] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 w-full justify-center"
              >
                <span>View Details</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          ))}
        </div>

        {/* View All Events Button */}
        <div className="text-center mt-12">
          <Link
            href="/events"
            className="inline-flex items-center space-x-2 bg-white text-[#0d4d7b] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <span>View All Events</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkshopSection;
