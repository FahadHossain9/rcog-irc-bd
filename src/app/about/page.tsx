import MessageSections from "@/components/home/MessageSections";
import AboutHero from "@/components/about/AboutHero";
import AboutContent from "@/components/about/AboutContent";
import OurMission from "@/components/about/OurMission";
import OurTeam from "@/components/about/OurTeam";
import OurHistory from "@/components/about/OurHistory";
import StatsSection from "@/components/home/StatsSection";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutContent />
      <MessageSections />
      <OurMission />
      <OurHistory />
      <StatsSection />
      <OurTeam />
    </>
  );
}
