import { useEffect } from "react";
import { AbilitiesSection } from "./home/AbilitiesSection";
import { HeroSection } from "./home/HeroSection";
import { ImagesSection } from "./home/ImagesSection";

export const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="px-2">
      <HeroSection />
      <AbilitiesSection />
      <ImagesSection />
    </div>
  );
};
