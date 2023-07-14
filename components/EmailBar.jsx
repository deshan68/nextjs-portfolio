"use client";

import React from "react";
import { motion as m } from "framer-motion";

export const EmailBar = () => {
  return (
    <div className="bottom-[100px] right-[-80px] fixed z-10 rotate-90">
      <m.div
        initial={{
          rotate: 0,
          opacity: 0,
          x: "100%",
        }}
        animate={{
          opacity: 1,
          x: "0%",
          transition: {
            duration: 1,
            type: "spring",
            bounce: "0.5",
            ease: "easeOut",
            delay: 1,
          },
        }}
        className="flex justify-center items-center gap-2 font-leagueExtraThin text-sm"
      >
        <span>arundeshan@gmail.com</span>
        <div className="bg-black w-14 h-[1px]" />
      </m.div>
    </div>
  );
};
