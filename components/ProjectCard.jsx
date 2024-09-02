import Image from "next/image";
import { FaGithub, FaRegEye } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className="text-base px-5 cursor-pointer flex w-full items-start gap-x-5 transition ease-in-out duration-500 transform hover:bg-white/5 hover:backdrop-blur-lg hover:shadow-lg rounded-lg p-5">
      <div className="w-1/5">
        <Image
          src={project.imageUrl}
          height={190}
          width={250}
          alt="Course Thumbnail"
          className="w-32 h-auto rounded-lg"
          loading="lazy"
        />
      </div>
      <div className="w-4/5">
        <span className="text-white font-bold flex items-center gap-x-3">
          {project.title}
          {project.repoLink.length > 0 && (
            <a href={project.repoLink} target="_blank">
              <FaGithub
                size={18}
                className="cursor-pointer text-gray-400 hover:text-white transition duration-300"
              />
            </a>
          )}
          {project.hostLink.length > 0 && (
            <a href={project.hostLink} target="_blank">
              <FaRegEye
                className="cursor-pointer text-gray-400 hover:text-white transition duration-300"
                size={18}
              />
            </a>
          )}
        </span>
        <p className="text-gray-400 mt-2 leading-tight">
          {project.description}
        </p>
        <div className="flex gap-x-3 pt-3">
          {project.categories.map((item) => (
            <span
              key={item}
              className="rounded-full bg-teal-300/10 text-teal-300 px-2 py-0.5 text-xs"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
