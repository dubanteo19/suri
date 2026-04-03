import { ProjectCard, type Project } from "@/components/projects/project-card";

export const ProjectsPage = () => {
  const projects: Project[] = [
    {
      id: 3,
      title: "Invent and Insect",
      cerpt: `The Blue Buffterfly lives in rainforest jungle. It prefers areas with thick conopies`,
      thumb: "/projects/project3.jpg",
    },
    {
      id: 1,
      title: "Preschool Classroom Design Model",
      thumb: "/projects/project1.avif",
      cerpt: `Designing a classroom for preschool children aged 2.5 to 6 years requires careful consideration of their developmental, social, and emotional needs.`,
    },
    {
      id: 2,
      title: "Colorful Dancing Ribbon Rings",
      cerpt: `Making dancing ribbon rings is a fun and creative craft project that results in colorful, flowing ribbons you can use for dancing or warm-up`,
      thumb: "/projects/project2.avif",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[url('/projects/bg.avif')] bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-10">
        {/* Title (optional but nice UX) */}
        <h2 className="text-white text-2xl sm:text-3xl font-bold mb-8 text-center">
          My Projects
        </h2>

        {/* Responsive grid */}
        <div
          className="
          grid gap-8
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          xl:grid-cols-4
        "
        >
          {projects.map((p) => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
};
