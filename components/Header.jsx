"use client";

import {
  cssIcon,
  figmaIcon,
  nodeIcon,
  profileImg,
  reduxIcon,
  topBoxImg,
  reactIcon,
  dp2,
} from "@public";
import Image from "next/image";
import React from "react";
import { motion as m } from "framer-motion";
import {
  bottomBoxVariant,
  floatingIconVariant,
  topBoxVariant,
} from "@utils/motion";

export const Header = () => {
  return (
    <div
      id="home"
      className="h-screen bg-primary_blue flex justify-center relative items-center overflow-hidden"
    >
      {/* 3d ball-1 */}
      <Balls y={"-100px"} x={"-100px"} height={"350px"} width={"350px"} />

      {/* 3d ball-2 */}
      <Balls y={"90%"} x={"30%"} height={"100px"} width={"100px"} />

      {/* 3d ball-3*/}
      <Balls y={"70%"} x={"90%"} height={"230px"} width={"230px"} />

      {/* 3d ball-4 */}
      <Balls y={"10%"} x={"90%"} height={"120px"} width={"120px"} />

      {/* profile image */}
      <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-3/4 flex lg:w-[370px] lg:h-[370px] w-72 h-72 justify-center items-center rounded-3xl object-cover overflow-hidden border-[4px] border-[#1B58A2]">
        <Image
          src={dp2}
          width={384}
          height={500}
          className="object-cover z-10"
        />
      </div>

      {/* top box */}
      <m.div
        variants={topBoxVariant}
        initial={"hidden"}
        animate={"show"}
        className="absolute left-[10%] top-[12%] bg-white flex h-[140px] w-[345px] justify-center items-center gap-4 rounded-lg shadow-xl"
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
        id="home"
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
        className="lg:h-28 lg:w-28 h-16 w-16 bg-white absolute  lg:top-[12%] lg:right-[30%] top-[32%] right-[18%] rounded-full shadow-lg flex justify-center items-center p-3"
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

      {/* floating icon top-left */}
      <m.div
        variants={floatingIconVariant}
        initial={"hidden"}
        animate={"show"}
        className="lg:h-28 lg:w-28 h-16 w-16 bg-white absolute lg:top-[40%] lg:left-[70%] top-[43%] left-[79%] rounded-full shadow-lg flex justify-center items-center p-3"
      >
        <Image src={reactIcon} height={80} width={80} alt="figma icon" />
      </m.div>
    </div>
  );
};

const Balls = ({ x, y, height, width }) => {
  return (
    <div
      style={{
        top: x,
        right: y,
        height: height,
        width: width,
      }}
      className={`absolute bg-gradient-to-r from-ballTheme to-white rounded-full shadow-lg overflow-hidden`}
    ></div>
  );
};
