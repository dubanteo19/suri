import { useEffect } from "react";
import { HeroSection } from "./home/HeroSection";
import { ImagesSection } from "./home/ImagesSection";
import MyExperience from "./home/Experience";

export const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="px-2">
      <HeroSection />
      <MyExperience/>
      <ImagesSection />
    </div>
  );
};
