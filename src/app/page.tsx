import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import AboutSection from "@/components/home/AboutSection";
import FeaturedProtocols from "@/components/home/FeaturedProtocols";
import NewsEventsSection from "@/components/home/NewsEventsSection";
import WhatWeDoSection from "@/components/home/WhatWeDoSection";
import MessageSections from "@/components/home/MessageSections";
import WorkshopSection from "@/components/home/WorkshopSection";
import GallerySection from "@/components/home/GallerySection";
import BlogSection from "@/components/home/BlogSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <MessageSections />
      <FeaturedProtocols />
      <NewsEventsSection />
      <WhatWeDoSection />
      <WorkshopSection />
      <GallerySection />
      <BlogSection />
      <CTASection />
    </>
  );
}
