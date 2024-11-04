import Image from "next/image";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

const WritingCard = ({ blogPost }) => {
  return (
    <a href={blogPost.blogUrl} target="_blank">
      <div className="text-base px-5 cursor-pointer flex w-full items-start gap-x-5 transition ease-in-out duration-500 transform hover:bg-white/5 hover:backdrop-blur-lg hover:shadow-lg rounded-sm p-5">
        <div className="w-32">
          <Image
            src={blogPost.imageUrl}
            height={190}
            width={250}
            alt="Course Thumbnail"
            className="w-32 h-auto rounded-sm"
            loading="lazy"
          />
        </div>
        <div className="w-4/5">
          <span className="text-white font-bold flex items-start gap-x-2">
            <span className="text-white font-bold">{blogPost.title}</span>
            <FaExternalLinkSquareAlt className="text-gray-400 h-3 w-3"/>
          </span>
          <p className="text-gray-400 leading-tight">
            {blogPost.description + "..."}
          </p>
        </div>
      </div>
    </a>
  );
};

export default WritingCard;
