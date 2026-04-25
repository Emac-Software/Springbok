import HeroSection from "@/sections/home/HeroSection";
import StatsBar from "@/sections/home/StatsBar";
import DifferenceSection from "@/sections/home/DifferenceSection";
import ServicesSection from "@/sections/home/ServicesSection";
import TestimonialsSection from "@/sections/home/TestimonialsSection";
import CtaBand from "@/sections/home/CtaBand";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <DifferenceSection />
      <ServicesSection />
      <TestimonialsSection />
      <CtaBand />
    </>
  );
}
