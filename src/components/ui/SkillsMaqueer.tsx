import { Sparkle } from "lucide-react";
import { motion, type Variants } from "motion/react";

export const SkillsMaqueer = () => {
  const skills: string[] = [
    "Behavior Management",
    "Assistive Technology",
    "Companionship",
    "CPR",
    "Aid certified",
    "Driving license",
  ];
  const marqueeVariants: Variants = {
    animate: {
      x: ["100%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    },
  };
  return (
    <div className="   bg-primary py-2 overflow-hidden w-full">
      <motion.div
        className="flex gap-4 whitespace-nowrap w-full"
        variants={marqueeVariants}
        animate="animate"
      >
        {[...skills, ...skills].map((skill, i) => (
          <div className="flex items-center gap-2 px-4" key={i}>
            <span>{skill}</span>
            <Sparkle size={16} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
