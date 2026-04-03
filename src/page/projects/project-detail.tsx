import { projectComponentMap } from "@/page/projects/project-map";
import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const { id } = useParams();

  const projectId = Number(id);
  const ProjectComponent = projectComponentMap[projectId];

  if (!ProjectComponent) {
    return (
      <div className="flex justify-center items-center my-20">
        Project not found
      </div>
    );
  }

  return (
    <div className="flex justify-center gap-4 min-h-screen items-center bg-[url('/projects/bg.avif')]">
      {ProjectComponent}
    </div>
  );
};

export default ProjectDetail;
