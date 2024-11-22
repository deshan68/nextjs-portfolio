"use client";

import { useRouter } from "next/navigation";
import { FaArrowLeftLong } from "react-icons/fa6";
import React from "react";
import BlogTable from "@components/BlogTable";

const page = () => {
  const route = useRouter();

  return (
    <section className="px-36 pt-20 flex flex-col items-start gap-y-10">
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
        <h1 className="text-6xl text-white font-leagueSemiBold">All Blogs</h1>
      </div>

      <main className="w-full">
        <BlogTable />
      </main>
    </section>
  );
};

export default page;
