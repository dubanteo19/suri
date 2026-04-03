import { NavLink } from "react-router-dom";

export interface Project {
  id: number;
  title: string;
  thumb: string;
  cerpt: string;
}

export const ProjectCard = ({ title, cerpt, thumb, id }: Project) => {
  return (
    <NavLink
      to={`${id}`}
      className="block group relative rounded-2xl overflow-hidden shadow-lg bg-primary border border-white/20 transition duration-300 active:scale-95"
    >
      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={thumb || "/projects/placeholder.jpg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h4 className="text-lg font-semibold mb-2">{title}</h4>
        <p className="text-sm line-clamp-3">
          {cerpt || "No description available."}
        </p>
      </div>

      {/* Optional hover hint (desktop only) */}
      <div className="hidden md:flex absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition items-center justify-center">
        <span className="px-4 py-2 bg-white rounded-lg font-medium">
          View Project
        </span>
      </div>
    </NavLink>
  );
};
