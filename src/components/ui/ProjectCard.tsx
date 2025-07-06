import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { type FC } from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ImageContainer } from "../common/ImageContainer";
import { GithubIcon } from "../icons/github";
import { FeatureList } from "./FeatureList";
export interface Project {
  id: number;
  title: string;
  period: string;
  role: string;
  techStack: string[];
  description: string;
  imageUrls: string[];
  githubUrl: string[];
  liveUrl?: string;
  features: string[];
}
export const ProjectCard: FC<Project> = ({
  title,
  period,
  role,
  techStack,
  description,
  imageUrls,
  githubUrl,
  liveUrl,
  features,
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-2 w-full"
    >
      <Swiper
        autoplay={{ delay: 3000 }}
        modules={[Autoplay]}
        loop
        className="w-full h-full"
      >
        {imageUrls.map((url, index) => (
          <SwiperSlide key={index}>
            <img
              src={url}
              alt={`Screenshot ${index + 1}`}
              className="object-contain w-full h-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="p-2 md:p-4 flex flex-col justify-between">
        <header>
          <h3 className=" text:lg md:text-2xl font-semibold leading-tight">
            {title}
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            {period}
            {role && <> &bull; {role}</>}
          </p>
        </header>
        <p className="mt-4 text-gray-500 flex-1 text-sm">{description}</p>
        <FeatureList features={features} />
        {techStack?.length > 0 && (
          <div className="flex  gap-2 md:gap-4 mt-4">
            {techStack.map((icon, index) => (
              <ImageContainer
                src={icon}
                key={index}
                className=" size-8 md:size-10  border-black border rounded p-[4px]"
              />
            ))}
          </div>
        )}
        <div className="mt-6 flex gap-4">
          {githubUrl && (
            <div className="flex gap-2">
              <a
                href={githubUrl[0]}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium hover:underline"
              >
                <GithubIcon />
                Frontend
              </a>
              <a
                href={githubUrl[1]}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium hover:underline"
              >
                <GithubIcon />
                Backend
              </a>
            </div>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium hover:underline"
            >
              <ExternalLink size={18} />
              Live
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};
