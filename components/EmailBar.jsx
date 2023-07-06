"use client";

import React from "react";
import { motion as m } from "framer-motion";

export const EmailBar = () => {
  return (
    <div className="bottom-36 left-[89.5%] fixed">
      <m.div
        initial={{
          rotate: 90,
          opacity: 0,
          y: "100%",
        }}
        animate={{
          opacity: 1,
          y: "0%",
          transition: {
            duration: 1,
            type: "spring",
            bounce: "0.5",
            ease: "easeOut",
            delay: 1,
          },
        }}
        className="flex justify-center items-center gap-2 font-leagueExtraLight text-xl rotate-90"
      >
        <span>arundeshan@gmail.com</span>
        <div className="bg-black w-14 h-[1px]" />
      </m.div>
    </div>
  );
};
