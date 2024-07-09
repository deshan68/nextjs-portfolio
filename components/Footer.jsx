"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const Footer = () => {
  const [lastUpdatedDate, setLastUpdatedDate] = useState("");
  const d = new Date();

  const fetchRepoDetails = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/repos/deshan68/nextjs-portfolio/commits`
      );
      setLastUpdatedDate(response.data[0].commit.committer.date.split("T")[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchRepoDetails();
  }, []);

  return (
    <section className="bg-white py-10 h-1/3 flex border-t-gray-500 border-t-[0.1px]">
      <div className="flex justify-center items-center flex-col max-w-6xl mx-auto sm:px-16 px-14 sm:gap-7 gap-5">
        {/* line 1 */}
        <span className="font-leagueExtraThin sm:text-xl text-center text-sm">
          Designed & Built by Arun Deshan
        </span>
        {/* line 2 */}
        <span className="font-leagueExtraThin sm:text-xl text-center text-sm">
          Copyright @ {d.getFullYear()} developByArun Inc. All rights reserved.
        </span>
        {/* line 3 */}
        <span className="font-leagueLight sm:text-lg text-center text-xs">
          Last Updated on: {lastUpdatedDate}
        </span>
      </div>
    </section>
  );
};
