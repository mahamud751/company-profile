import HeroSection from "@/components/home/HeroSection";
import ExpertiseSection from "@/components/home/ExpertiseSection";
import ProjectApproachSlider from "@/components/home/ProjectApproachSlider";
import DesignForFutureSection from "@/components/home/DesignForFutureSection";
import Company from "@/components/home/Company";
import StatsCounter from "@/components/home/StatsCounter";
import BlogSection from "@/components/home/BlogSection";
import ProjectShowcase from "@/components/home/ProjectShowcase";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ExpertiseSection />
      <ProjectApproachSlider />
      <DesignForFutureSection />
      <Company />
      <StatsCounter />
      <BlogSection />
      <ProjectShowcase />
    </>
  );
}
