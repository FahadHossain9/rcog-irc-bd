"use client";

import React, { useState, useEffect } from "react";
import { Users, FileText, GraduationCap, Calendar } from "lucide-react";

const StatsSection = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: Users,
      number: 500,
      suffix: "+",
      label: "Members",
      color: "text-[#1b75bc]",
    },
    {
      icon: FileText,
      number: 22,
      suffix: "",
      label: "Protocols",
      color: "text-[#1b75bc]",
    },
    {
      icon: GraduationCap,
      number: 15,
      suffix: "",
      label: "Training Programs",
      color: "text-[#1b75bc]",
    },
    {
      icon: Calendar,
      number: 20,
      suffix: "",
      label: "Years of Service",
      color: "text-[#1b75bc]",
    },
  ];

  return (
    <section className="py-20 bg-[#e8f4fa]">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#e8f4fa] rounded-full flex items-center justify-center">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </div>

              <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                <CountUpAnimation
                  end={stat.number}
                  suffix={stat.suffix}
                  isInView={isInView}
                />
              </div>

              <p className="text-gray-600 font-medium text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CountUp Animation Component
const CountUpAnimation = ({
  end,
  suffix = "",
  isInView,
}: {
  end: number;
  suffix?: string;
  isInView: boolean;
}) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const increment = end / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const newCount = Math.min(Math.floor(increment * currentStep), end);
      setCount(newCount);

      if (currentStep >= steps) {
        clearInterval(timer);
        setCount(end);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [end, isInView]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

export default StatsSection;
