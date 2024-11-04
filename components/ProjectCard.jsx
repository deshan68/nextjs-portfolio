import Image from "next/image";
import { FaGithub, FaRegEye } from "react-icons/fa";
import Chip from "./Chip";

const ProjectCard = ({ project }) => {
  return (
    <div className="text-base px-5 cursor-pointer flex w-full items-start gap-x-5 transition ease-in-out duration-500 transform hover:bg-white/5 hover:backdrop-blur-lg hover:shadow-lg rounded-sm p-5">
      <div className="w-44 bg-black">
        <Image
          src={project.imageUrl}
          height={190}
          width={250}
          alt="Course Thumbnail"
          className="w-44 h-auto rounded-sm"
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
            <Chip key={item} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
