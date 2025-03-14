"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeftLong } from "react-icons/fa6";
import ProjectTable from "@components/ProjectTable";

const AllProjects = () => {
  const route = useRouter();

  return (
    <section className="lg:px-36 px-5 lg:pt-20 pt-10 flex flex-col items-start gap-y-5">
      <div>
        <button
          onClick={() => route.push("/")}
          className="flex items-center gap-x-1 group text-teal-300"
        >
          <FaArrowLeftLong
            size={16}
            className="transform transition-transform duration-100 group-hover:-translate-x-1"
          />
          <span className="text-lg">Arun Deshan</span>
        </button>
        <h1 className="text-6xl text-white font-leagueSemiBold">
          All Projects
        </h1>
      </div>

      <main className="w-full">
        <ProjectTable />
      </main>
    </section>
  );
};

export default AllProjects;
