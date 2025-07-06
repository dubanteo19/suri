import { GithubIcon } from "@/components/icons/github";
import { AButton } from "@/components/ui/CallToActionButton";
import { RocketIcon, Sparkle } from "lucide-react";
import { motion, type Variants } from "motion/react";
import Typewriter from "typewriter-effect";

export const HeroSection = () => {
  const item = { hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } };
  const skills: string[] = [
    "Git",
    "GitHub",
    "Neovim",
    "Java",
    "OOP",
    "Data Structures",
    "Design Patterns",
    "Spring Boot",
    "REST API",
    "MySQL",
    "JWT",
    "Docker",
    "WebSocket",
    "Javascript",
    "Typescript",
    "HTML & CSS",
    "TailwindCSS",
    "ReactJS",
    "Responsive Design",
    "Redux",
    "Redux Toolkit (RTK)",
    "Linux",
    "CI/CD",
    "Networking",
  ];
  const marqueeVariants: Variants = {
    animate: {
      x: ["100%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 50,
          ease: "linear",
        },
      },
    },
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="hero"
      className="flex flex-col space-y-2 items-center mt-4  overflow-hidden"
    >
      <motion.h1
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-3xl md:text-5xl text-center"
      >
        Crafting Digital Experiences
      </motion.h1>
      <h1 className="text-3xl md:text-5xl text-primary text-center  text-stroke-black text-stroke-2"
 
      >
        from Concept to Code!
      </h1>
      <motion.div
        variants={item}
        className="h-6 text-center text-2xl md:text-4xl font-bold text-primary"
      >
        <Typewriter
          options={{
            strings: [
              "10-finger coder",
              "Code addict",
              "Disciplined thinker",
              "Turning ideas into production",
              "Loves building full-stack apps",
              "From terminal to UI — I code it all",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 30,
            delay: 45,
          }}
        />
      </motion.div>
      <motion.div
        className="  md:max-w-[520px] rounded-3xl  p-6 mt-10  md:mt-2
        shadow-lg  transition-all duration-300 overflow-hidden"
      >
        <p className="text-center text-[14px] leading-relaxed text-gray-700">
          Hi,{" "}
          <span className="bg-white p-[2px] font-bold">I am Du Thanh Minh</span>
          . I am a soon-to-be graduate in Software Engineering who is passionate
          about developing elegant and{" "}
          <span className="bg-white p-[2px] font-bold">
            efficient applications
          </span>
          . With a strong foundation in full-stack development using Java Spring
          Boot, ReactJS, and MySQL, I am committed to building scalable and
          impactful software solutions.
        </p>
      </motion.div>
      <div className="flex space-x-3 my-6">
        <AButton icon=<GithubIcon className="size-4" />>Github</AButton>
        <AButton
          className="bg-primary border-black border-2 text-black"
          icon=<RocketIcon className="size-4" />
        >
          See my works
        </AButton>
      </div>
      <div className="whitespace-nowrap w-full mx-[-500px] bg-primary py-2">
        <motion.div
          className="flex  space-x-4  text-black"
          variants={marqueeVariants}
          animate="animate"
        >
          {skills.map((skill) => (
            <div className="flex items-center space-x-2" key={skill}>
              <span className="inline-block ">{skill}</span>
              <Sparkle size={18} />
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};
