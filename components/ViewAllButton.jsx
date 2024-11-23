import React from "react";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa6";

const ViewAllButton = ({ title, page }) => {
  const route = useRouter();

  return (
    <button
      onClick={() => route.push(`/${page}`)}
      className="flex items-center gap-x-3 mt-5 group  px-5"
    >
      <div className="relative text-white text-lg">
        View All {title} Archive
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-300 transition-all duration-300 group-hover:w-full"></span>
      </div>
      <FaArrowRight
        size={18}
        className="transform transition-transform duration-300 group-hover:translate-x-2"
      />
    </button>
  );
};

export default ViewAllButton;
