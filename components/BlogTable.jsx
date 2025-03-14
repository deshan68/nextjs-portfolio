import { useProject } from "@context/DataContextProvider";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import TableSkeleton from "./TableSkeleton";
import { blogPosts } from "@constants";

const Table = () => {
  const { loading } = useProject();

  if (loading) {
    return <TableSkeleton heads={["Year", "Title", "Description", "Link"]} />;
  }

  return (
    <div className="overflow-x-auto w-full relative">
      <table className="w-full font-leagueLight text-base text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-white border-b border-b-gray-500/30">
          <tr>
            <th scope="col" className="px-6 py-3">
              Year
            </th>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3 hidden md:table-cell">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          {blogPosts.map((item, index) => (
            <tr
              key={index}
              className="border-b border-b-gray-500/30 font-leagueExtraThin last:border-none"
            >
              <td
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap"
              >
                {item.date}
              </td>
              <td className="px-6 py-4 text-white">{item.title} </td>
              <td scope="col" className="px-6 py-3 hidden md:table-cell">
                {item.description}
              </td>
              <td className="px-6 py-4">
                <a
                  className="cursor-pointer text-gray-500 flex items-start gap-x-2 group hover:text-white transform duration-200"
                  href={item.blogUrl}
                  target="_blank"
                >
                  <span>Visit</span>
                  <MdArrowOutward className="group-hover:text-white transform duration-200" />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
