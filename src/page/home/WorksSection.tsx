import { Title } from "@/components/common/Title";
import React from "react";
import { projects } from "../data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { MiniProjectList } from "@/components/ui/MiniProjectList";

const WorksSection: React.FC = () => {
  return (
    <section id="works" className="  px-6  min-h-screen">
      <div className="flex flex-col md:flex-row items-center space-x-2">
        <Title>My projects</Title>
        <span className="text-sm text-gray-500">
          A curated collection of my committed projects, spanning frontend,
          backend, and database development — each crafted with a strong focus
          on quality, functionality, and attention to detail.
        </span>
      </div>
      <div className="max-w-5xl mx-auto flex flex-col gap-8 mt-5">
        {projects.map((project) => (
          <ProjectCard {...project} key={project.id} />
        ))}
      </div>
      <MiniProjectList />
    </section>
  );
};

export default WorksSection;
