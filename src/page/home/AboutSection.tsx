import { ImageContainer } from "@/components/common/ImageContainer";
import { Title } from "@/components/common/Title";
import { motion } from "motion/react";
import { abilities } from "../data/ability";
import { AbilityCard } from "@/components/ui/AbilityCard";
import { SkillsSection } from "./SkillsSection";

export const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-4 px-6 min-h-screen">
      <div className="max-w-3xl mx-auto text-center">
        <Title>About Me</Title>
        <motion.div className="relative size-50  mb-8 mx-auto">
          <div
            className="w-full h-full bg-gray-300 absolute -right-4 -bottom-4 
            border-dashed border-2 border-black"
          ></div>
          <ImageContainer
            src="/avatar.jpg"
            className=" z-10 relative border-2 border-black w-full size-50 "
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-gray-700 text-[15px] leading-relaxed"
        >
          <span className="text-center mt:5  text-[14px] leading-relaxed text-gray-700">
            Hi,{" "}
            <span className="bg-white p-[2px] font-bold">
              I am Du Thanh Minh
            </span>
            . I am a soon-to-be graduate in Software Engineering who is
            passionate about developing elegant and{" "}
            <span className="bg-white p-[2px] font-bold">
              efficient applications
            </span>
          </span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-gray-700  text-[15px] leading-relaxed"
        >
          . With a strong foundation in full-stack development using Java Spring
          Boot, ReactJS, and MySQL, I am committed to building scalable and
          impactful software solutions.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileInView={{ opacity: 1, y: 0 }}
        ></motion.div>
      </div>
      <div className="flex flex-col md:flex-row items-center space-x-2 max-w-[800px] mt-4 text-gray-500">
        <Title>What I can do</Title>
        <span className="text-sm">
          My technical skills which consist practices of Full-Stack Development,
          Error Handling, Modern Web Technologies. Full Stack Web Development
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-3 mt-4">
        {abilities.map((item, index) => (
          <AbilityCard {...item} key={index} />
        ))}
      </div>
      <SkillsSection />
    </section>
  );
};
