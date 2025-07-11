import type { Project } from "@/components/ui/ProjectCard";

type MiniProject = Omit<
  Project,
  "features" | "image" | "imageUrls" | "period" | "role" | "githubUrl"
> & { thumbnail: string; githubUrl: string };
export const miniProjects: MiniProject[] = [
    {
    id: 1,
    title: "Thay lời muốn nói - QR Tình Yêu",
    description: `Create a romantic QR code message with background music and stunning visual effects. This project allows users to customize a love message, choose a song, and generate a fantasy-style result page with floating 3D text and heart bloom particles. The experience includes music preview, real-time QR code decoration, and a beautiful animated scene for sharing love.`,
    techStack: ["React", "TypeScript", "Three.js", "Vite"],
    thumbnail: "/projects/mini/pic1.png", 
    githubUrl: "https://github.com/dubanteo19/qr-love", 
    liveUrl: "https://qrlove.dbt19.store",
  },
  {
    id: 2,
    title: "Adventure Ping Pong",
    description:
      "A fantasy-themed Ping Pong game that combines classic brick-breaking gameplay with RPG adventure elements. Players take on the role of a warrior battling through challenging levels to ultimately defeat the Dark Dragon. Developed using HTML, CSS, JavaScript, jQuery, and Canvas API.",
    techStack: ["HTML", "CSS", "JavaScript", "jQuery", "Canvas"],
    thumbnail: "/projects/mini/pic2.png",
    githubUrl: "https://github.com/dubanteo19/Adventure-Ping-Pong",
    liveUrl: "https://dubanteo19.github.io/Adventure-Ping-Pong/",
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
