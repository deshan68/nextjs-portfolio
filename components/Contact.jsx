"use client";

import { chatIcon } from "@public";
import { motion as m } from "framer-motion";
import Image from "next/image";
import React from "react";

export const Contact = () => {
  return (
    <m.section
      className="bg-primary_blue py-20 h-screen flex"
      // initial="hidden"
      // whileInView="show"
      // viewport={{ once: true, amount: "some" }}
      // variants={parentVariant}
    >
      <m.div className="flex justify-center items-center flex-col max-w-6xl mx-auto sm:px-16 px-5 mb-7 gap-12">
        {/* title */}
        <span className="title">What's Next? Let's Have a Chat!</span>
        <div className="flex justify-center items-center bg-white px-14 py-3 rounded-lg gap-3 cursor-pointer hover:shadow-md duration-200 hover:scale-105">
          <div>
            <Image src={chatIcon} width={50} height={50} alt="chat icon" />
          </div>
          <span className="font-leagueExtraThin text-xl">
            arundeshan@gmail.com
          </span>
        </div>

        {/*  */}
      </m.div>
    </m.section>
  );
};
