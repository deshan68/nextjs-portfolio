"use client";

import { githubIcon, instaIcon, linkedinIcon } from "@public";
import Image from "next/image";
import React from "react";
import { motion as m } from "framer-motion";
import { socialIconParentVariant, socialIconVariant } from "@utils/motion";

export const SocialMediaBar = () => {
  return (
    <div className="bottom-0 fixed z-10">
      <m.div
        variants={socialIconParentVariant}
        initial={"hidden"}
        animate={"show"}
        className="m-4 gap-2 flex flex-col"
      >
        <m.div
          variants={socialIconVariant}
          className="h-8 w-8 bg-white flex justify-center items-center rounded-full shadow-md cursor-pointer"
        >
          <Image
            src={linkedinIcon}
            width={20}
            height={20}
            alt="liknedin Icon"
            className=""
          />
        </m.div>
        <m.div
          variants={socialIconVariant}
          className="h-8 w-8 bg-white flex justify-center items-center rounded-full shadow-md cursor-pointer"
        >
          <Image
            src={githubIcon}
            width={20}
            height={20}
            alt="liknedin Icon"
            className=""
          />
        </m.div>
        <m.div
          variants={socialIconVariant}
          className="h-8 w-8 bg-white flex justify-center items-center rounded-full shadow-md cursor-pointer"
        >
          <Image
            src={instaIcon}
            width={20}
            height={20}
            alt="liknedin Icon"
            className=""
          />
        </m.div>
      </m.div>
    </div>
  );
};
