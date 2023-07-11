"use client";
import React from "react";

export const Footer = () => {
  return (
    <section className="bg-white py-10 h-1/3 flex border-t-gray-500 border-t-[0.1px]">
      <div className="flex justify-center items-center flex-col max-w-6xl mx-auto sm:px-16 px-14 sm:gap-7 gap-5">
        {/* line 1 */}
        <span className="font-leagueExtraThin sm:text-xl text-center text-sm">
          Designed & Built by Arun Deshan
        </span>
        {/* line 2 */}
        <span className="font-leagueExtraThin sm:text-xl text-center text-sm">
          Copyright @ 2023 developByArun Inc. All rights reserved.
        </span>
        {/* line 3 */}
        <span className="font-leagueLight sm:text-lg text-center text-xs">
          Last Updated on: 07-Jun-2023
        </span>
      </div>
    </section>
  );
};
