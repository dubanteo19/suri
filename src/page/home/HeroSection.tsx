import { ImageContainer } from "@/components/common/ImageContainer";
import { motion } from "motion/react";

export const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="hero"
      className="flex flex-col gap-1 items-center mt-5  "
    >
      <motion.h1
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-3xl md:text-6xl text-center"
      >
        Hey! I'm Thi Suu Le
      </motion.h1>
      <h1 className="font-normal text-xl max-w-[500px] md:text-2xl  text-center  ">
        A curious college student, passionate learner, and aspiring explorer of
        life.
      </h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotateY: 360, rotate: -3 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0, rotate: 0 }}
        transition={{ delay: 0.8 }}
        className="overflow-hidden flex justify-center mt-2  -rotate-3 "
      >
        <ImageContainer
          src="/hero/pic1.avif"
          className="size-[50%]  md:size-[65%]"
        />
      </motion.div>
      <motion.div
        className=" rounded-3xl  p-4 mt-3  md:mt-2
          transition-all duration-300 flex justify-center max-w-[600px] "
      >
        <p className=" text-[15px] leading-relaxed text-justify  text-xl text-black">
          I am a <strong>compassionate educator </strong>with over 13 years of
          experience in teaching and educational management. As a high school
          teacher at Duong Bach Mai High School, I created
          <strong> inclusive</strong> learning environments tailored to diverse
          student needs. Beyond the classroom, I have successfully managed
          Rainbow English Centre for over a decade, designing language programs
          and overseeing operations. Passionate about fostering student growth,
          I integrate assistive technology and <strong>innovative </strong>
          strategies to enhance learning. Currently, I am
          <strong> furthering </strong> my expertise in Early Childhood
          Education at <strong> St. Clair College </strong> to continue
          supporting young learners on their educational journeys.
        </p>
      </motion.div>
    </motion.div>
  );
};
