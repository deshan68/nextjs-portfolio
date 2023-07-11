"use client";

import { chatIcon } from "@public";
import { sectionVariant } from "@utils/motion";
import { motion as m } from "framer-motion";
import Image from "next/image";
import React from "react";

export const Contact = () => {
  return (
    <m.section id="contact" className="bg-primary_blue py-20 h-screen flex">
      <m.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: "some" }}
        variants={sectionVariant}
        className="flex justify-center items-center flex-col max-w-6xl mx-auto sm:px-16 px-6 mb-7 gap-12"
      >
        {/* title */}
        <span className="title">What's Next? Let's Have a Chat!</span>
        <a href="mailto:arundeshan@gmail.com">
          <div className="flex justify-center items-center bg-white px-14 py-3 rounded-lg gap-3 cursor-pointer hover:shadow-md duration-200 hover:scale-105">
            <div>
              <Image src={chatIcon} width={50} height={50} alt="chat icon" />
            </div>
            <span className="font-leagueExtraThin text-xl">
              arundeshan@gmail.com
            </span>
          </div>
        </a>

        {/*  */}
      </m.div>
    </m.section>
  );
};
