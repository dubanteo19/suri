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
          duration: 30,
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
      className="flex flex-col space-y-2 items-center mt-4  "
    >
      <motion.h1
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-3xl md:text-5xl text-center"
      >
        Building Meaningful Digital Solutions
      </motion.h1>
      <h1 className="text-3xl md:text-5xl text-primary text-center  text-stroke-black text-stroke-2">
        Where Ideas Meet Engineering!
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
        className=" rounded-3xl  p-4 mt-10  md:mt-2
          transition-all duration-300 flex justify-center max-w-[600px] "
      >
        <p className="text-gray-700 text-[15px] leading-relaxed  ">
          Hi, I’m{" "}
          <span className="bg-white px-1 font-bold text-primary">
            Du Thanh Minh
          </span>{" "}
          — a
          <span className="font-semibold text-primary">
            {" "}
            passionate full-stack developer
          </span>{" "}
          with a drive to create efficient, scalable solutions that solve
          real-world problems. I strongly believe in writing{" "}
          <span className="bg-yellow-100 px-1 font-semibold">
            clean, maintainable code
          </span>
          and always prioritize{" "}
          <span className="italic font-medium ">readability</span> over just
          <span className="line-through mx-1">“working”</span> code.
        </p>
      </motion.div>
      <div className="flex gap-3 my-5">
        <AButton icon=<GithubIcon className="size-4" />>Github</AButton>
        <AButton
          className="bg-primary border-black border-2 text-black"
          icon=<RocketIcon className="size-4" />
        >
          See my works
        </AButton>
      </div>
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
    </motion.div>
  );
};
