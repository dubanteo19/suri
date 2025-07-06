import { ImageContainer } from "@/components/common/ImageContainer";
import { TECH_STACKS } from "@/constants/constants";
import type { FC } from "react";

interface Skill {
  name: string;
  icons: string[];
}
const SkillItem: FC<Skill> = ({ name, icons }) => {
  return (
    <div id="skills">
      <h3 className="font-bold text-lg md:text-xl">{name}</h3>
      <div className="flex gap-1 sm:gap-6 md:gap-8  flex-wrap">
        {icons.map((icon, index) => (
          <ImageContainer
            src={icon}
            key={index}
            className="size-10 sm:size-12 md:14 bg-white rounded p-[4px]"
          />
        ))}
      </div>
    </div>
  );
};
export const SkillsSection = () => {
  const skills: Skill[] = [
    {
      name: "Backend",
      icons: [
        TECH_STACKS.JAVA,
        TECH_STACKS.SPRING_BOOT,
        TECH_STACKS.HIBERATE,
        TECH_STACKS.MYSQL,
        TECH_STACKS.REDIS,
        TECH_STACKS.PYTHON,
      ],
    },
    {
      name: "Frontend",
      icons: [
        TECH_STACKS.HTML,
        TECH_STACKS.CSS,
        TECH_STACKS.JAVASCRIPT,
        TECH_STACKS.TYPESCRIPT,
        TECH_STACKS.REACT_JS,
        TECH_STACKS.SHAD_CN,
        TECH_STACKS.MUI,
        TECH_STACKS.TAILWIND_CSS,
        TECH_STACKS.REDUX,
      ],
    },
    {
      name: "DevOps & System Administration",
      icons: [
        "/skills/linux.jpeg",
        "/skills/ubuntu.png",
        "/skills/docker.png",
        "/skills/cloud.png",
        "/skills/nginx.png",
      ],
    },
    {
      name: "Version control",
      icons: ["/skills/git.png", "/skills/github.png", "/skills/gitlab.png"],
    },
    {
      name: "Tools",
      icons: [
        "/skills/neovim.svg",
        "/skills/vscode.png",
        "/skills/intelliJ.png",
        "/skills/postman.png",
      ],
    },
  ];
  return (
    <div className="w-full mt-4 bg-gray-200 border-dashed border-2 border-black py-6 px-4 md:px-8">
      <h3 className="text-center">Technical skills</h3>
      <div className="flex justify-center">
        <span className="text-center bg-primary text-black  ">
          Technical skills I gained for my software developer career.
        </span>
      </div>
      <div className="flex flex-col gap-2 md:gap-5">
        {skills.map((skill, index) => (
          <SkillItem key={index} {...skill} />
        ))}
      </div>
    </div>
  );
};
