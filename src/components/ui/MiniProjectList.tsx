import { ExternalLinkIcon } from "lucide-react";
import { GithubIcon } from "../icons/github";
import { Title } from "../common/Title";
import { miniProjects } from "@/page/data/mini-projects";
import { ImageContainer } from "../common/ImageContainer";

export const MiniProjectList = () => {
  return (
    <div className="mt-4">
      <div className="flex flex-col md:flex-row  items-center space-x-2">
        <Title>Mini projects</Title>
        <span className="text-sm text-gray-500">
          A curated selection of hands-on projects showcasing my skills in
          frontend, backend, and database development — each built with
          precision, creativity, and a focus on real-world functionality.
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {miniProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <ImageContainer
              src={project.thumbnail}
              className="w-full h-50 "
            />
            <p className="text-sm text-gray-600 mt-1">{project.description}</p>
            <div className="flex flex-wrap gap-1 mt-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4  items-center mt-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLinkIcon />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
