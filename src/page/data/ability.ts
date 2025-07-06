export interface Ability {
  text: string;
  imageSrc: string;
  background?: string;
  description?: string;
}
export const abilities: Ability[] = [
  {
    text: "Full Stack Web Development",
    imageSrc: "/abilities/fullstack.png",
    description:
      "Experience in building complete web applications from frontend to backend using modern frameworks and technologies.",
  },
  {
    text: "Communication Proficiency",
    imageSrc: "/abilities/comunication.jpg",
    background: "white",
    description:
      "Strong verbal and written communication skills for effective collaboration with team members and stakeholders.",
  },
  {
    text: "Problem Solving",
    imageSrc: "/abilities/problem-solving.jpg",
    background: "white",
    description:
      "Able to identify, analyze, and solve complex problems efficiently.",
  },
  {
    text: "DevOps & System Administration",
    imageSrc: "/abilities/linux.jpeg",
    description:
      "Proficient in Linux system operations, deploying web applications, configuring server",
  },
];
