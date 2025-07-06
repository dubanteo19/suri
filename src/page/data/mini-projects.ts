import type { Project } from "@/components/ui/ProjectCard";

type MiniProject = Omit<
  Project,
  "features" | "image" | "imageUrls" | "period" | "role"
> & { thumbnail: string };
export const miniProjects: MiniProject[] = [
  {
    id: 1,
    title: "3D Heart Particles",
    description: `A mesmerizing 3D heart particle animation built with React, TypeScript, Three.js, and Vite. This project creates an interactive scene with heart-shaped particles, background music, and customizable floating text.`,
    techStack: ["React", "Typescript", "ThreeJs", "Vite"],
    thumbnail:
      "https://github.com/dubanteo19/3d-heart/raw/main/public/screenshots/pic1.png",
    githubUrl: "https://github.com/dubanteo19/3d-heart",
    liveUrl: "https://love.dbt19.store/",
  },
  {
    id: 2,
    title: "Adventure Ping Pong",
    description:
      "A fantasy-themed Ping Pong game that combines classic brick-breaking gameplay with RPG adventure elements. Players take on the role of a warrior battling through challenging levels to ultimately defeat the Dark Dragon. Developed using HTML, CSS, JavaScript, jQuery, and Canvas API.",
    techStack: ["HTML", "CSS", "JavaScript", "jQuery", "Canvas"],
    thumbnail: "/projects/mini/pic2.png",
    githubUrl: "https://github.com/your-username/adventure-ping-pong",
    liveUrl: "https://your-live-demo-url.com/adventure-ping-pong",
  },
  {
    id: 3,
    title: "Full-Stack E-Commerce Platform",
    description:
      "A production-ready online shopping system with user authentication, product catalog, cart, checkout, and admin dashboard. Features secure order signing, inventory forecasting, and Excel-based bulk operations. Built with Java Servlets, JSP, MySQL, and vanilla HTML/CSS/JS, JQuery, Bootstrap",
    techStack: [
      "Java",
      "Servlets",
      "JSP",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      "Jquery",
      "Bootstrap",
    ],
    thumbnail: "/projects/mini/pic3.jpg",
    githubUrl: "https://github.com/dubanteo19/ThucTapLTW",
  },
  {
    id: 4,
    title: "📚 I❤️TruyenServer",
    description:
      "A full-featured comic backend built with Java Spring Boot and MySQL. Supports category browsing, comic/chapter viewing, and comments. Includes RESTful APIs, scalable architecture, and secure user authentication.",
    techStack: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "Maven"],
    thumbnail: "/projects/mini/pic4.jpg",
    githubUrl: "https://github.com/dubanteo19/ILoveTruyenServer",
  },
];
