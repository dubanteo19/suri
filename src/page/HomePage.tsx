import { useEffect } from "react";
import { AboutSection } from "./home/AboutSection";
import { ContactSection } from "./home/ContactSection";
import { HeroSection } from "./home/HeroSection";
import WorksSection from "./home/WorksSection";

export const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <WorksSection />
      <ContactSection />
    </div>
  );
};
