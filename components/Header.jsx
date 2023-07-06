"use client";

import {
  cssIcon,
  figmaIcon,
  nodeIcon,
  profileImg,
  reduxIcon,
  topBoxImg,
} from "@public";
import Image from "next/image";
import React from "react";
import { motion as m } from "framer-motion";
import {
  bottomBoxVariant,
  centerCircleVariant,
  floatingIconVariant,
  topBoxVariant,
} from "@utils/motion";

export const Header = () => {
  return (
    <div className="h-[92vh] bg-primary_blue flex justify-center relative items-center">
      {/* center blue ball */}
      <m.div
        variants={centerCircleVariant}
        initial={"hidden"}
        animate={"show"}
        className="h-[335px] w-[325px] bg-action_blue rounded-full"
      />

      {/* profile image */}
      <Image
        src={profileImg}
        width={384}
        height={500}
        className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-3/4 object-contain z-10"
      />

      {/* top box */}
      <m.div
        variants={topBoxVariant}
        initial={"hidden"}
        animate={"show"}
        className="absolute left-[8%] top-[8%] bg-white flex h-[140px] w-[345px] justify-center items-center gap-4 rounded-lg shadow-xl"
      >
        <Image
          src={topBoxImg}
          width={60}
          height={60}
          alt="coding"
          className="object-contain"
        />
        <div className="flex flex-col">
          <span className="font-leagueExtraLight text-xl">Hey there, I am</span>
          <span className="font-leagueSemiBold text-6xl">Deshan</span>
        </div>
      </m.div>

      {/* bottom box */}
      <m.div
        variants={bottomBoxVariant}
        initial={"hidden"}
        animate={"show"}
        className="absolute right-[8%] bottom-[8%] bg-white flex h-[172px] w-[355px] justify-center items-center gap-4 rounded-lg shadow-xl px-8 z-10"
      >
        <div className="flex flex-col">
          <span className="font-leagueSemiBold text-xl">
            Providing my
            <span className="text-action_blue"> best</span> as a developer
          </span>
          <span className="font-leagueExtraLight text-xl leading-5">
            All the best and most modern resources at your fingertips. Access
            online projects, coding examples. All in one place
          </span>
        </div>
      </m.div>

      {/* floating icon top-right */}
      <m.div
        variants={floatingIconVariant}
        initial={"hidden"}
        animate={"show"}
        className="lg:h-28 lg:w-28 h-16 w-16 bg-white absolute  lg:top-[10%] lg:right-[30%] top-[30%] right-[18%] rounded-full shadow-lg flex justify-center items-center p-3"
      >
        <Image src={figmaIcon} height={80} width={80} alt="figma icon" />
      </m.div>
      {/* floating icon bottom-right */}
      <m.div
        variants={floatingIconVariant}
        initial={"hidden"}
        animate={"show"}
        className="lg:h-28 lg:w-28 h-16 w-16 bg-white absolute lg:bottom-[10%] lg:right-[35%] bottom-[35%] right-[10%] rounded-full shadow-lg flex justify-center items-center  p-3"
      >
        <Image src={nodeIcon} height={80} width={80} alt="figma icon" />
      </m.div>
      {/* floating icon bottom-left */}
      <m.div
        variants={floatingIconVariant}
        initial={"hidden"}
        animate={"show"}
        className="lg:h-28 lg:w-28 h-16 w-16 bg-white absolute lg:bottom-[10%] lg:left-[30%] bottom-[35%] left-[10%] rounded-full shadow-lg flex justify-center items-center  p-3"
      >
        <Image src={reduxIcon} height={80} width={80} alt="figma icon" />
      </m.div>
      {/* floating icon top-left */}
      <m.div
        variants={floatingIconVariant}
        initial={"hidden"}
        animate={"show"}
        className="lg:h-28 lg:w-28 h-16 w-16 bg-white absolute lg:top-[40%] lg:left-[28%] top-[35%] left-[10%] rounded-full shadow-lg flex justify-center items-center p-3"
      >
        <Image src={cssIcon} height={80} width={80} alt="figma icon" />
      </m.div>
    </div>
  );
};
