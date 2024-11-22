"use client";

import React from "react";
import { MdArrowOutward } from "react-icons/md";

import Chip from "./Chip";
import { useProject } from "@context/DataContextProvider";
import TableSkeleton from "./TableSkeleton";

const Table = () => {
  const { projects, loading } = useProject();

  if (loading) {
    return (
      <TableSkeleton
        heads={["Year", "Project", "Description", "Built with", "Link"]}
      />
    );
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
              Project
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Built with
            </th>
            <th scope="col" className="px-6 py-3">
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          {projects?.map((item, index) => (
            <tr
              key={index}
              className="border-b border-b-gray-500/30 font-leagueExtraThin last:border-none"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap"
              >
                {item?.year}
              </th>
              <td className="px-6 py-4 text-white min-w-max">{item.title} </td>
              <td className="px-6 py-4 text-white">{item.description}</td>
              <td className="px-6 py-4 flex gap-x-2">
                {item.categories.map((item) => (
                  <Chip key={item} item={item} />
                ))}
              </td>
              <td className="px-6 py-4">
                <a
                  className="cursor-pointer text-gray-500 flex items-start gap-x-2 group hover:text-white transform duration-200"
                  href={item.repoLink || item.hostLink}
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
