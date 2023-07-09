"use client";
import React, { useState } from "react";
import { motion as m } from "framer-motion";
import Image from "next/image";
import { eyeIcon, githubIcon, githubWhite, projectImg1 } from "@public";
import { parentVariant, sectionVariant, ulVariants } from "@utils/motion";

export const Project = () => {
  const [active, setActive] = useState("All");
  return (
    <m.section id="project" className="bg-primary_blue py-20">
      <m.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: "some" }}
        variants={sectionVariant}
        className="flex h-fit justify-center items-center flex-col max-w-6xl mx-auto sm:px-16 px-5 mb-7 pt-10 "
      >
        {/* title */}
        <span className="title">
          <span className="text-action_blue">Project </span>Experience
        </span>

        {/* category buttons => react js, mobile app, web app, all */}
        <div className="flex justify-center items-center gap-7 mt-8">
          {["Mobile App", "Web App", "All"].map((item, index) => (
            <m.div
              key={index}
              className={
                "font-leagueSemiBold text-base px-3 py-1 rounded-lg shadow-lg cursor-pointer"
              }
              onClick={() => setActive(item)}
              initial={{
                color: item === active ? "#ffff" : "#111",
                backgroundColor: item === active ? "#2178de" : "#ffff",
              }}
              whileHover={{
                color: "#ffff",
                backgroundColor: "#2178de",
                transition: {
                  duration: 0.3,
                  type: "tween",
                },
              }}
              whileTap={{
                scale: 1.1,
              }}
              animate={{
                color: item === active ? "#ffff" : "#111",
                backgroundColor: item === active ? "#2178de" : "#ffff",
              }}
            >
              {item}
            </m.div>
          ))}
        </div>

        {/*  -----------------------------projects cards container----------------------------- */}
        {/* <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5 grid-cols-1 justify-items-center"> */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-x-10 gap-y-5">
          {[1, 2, 3, 3, 5].map((card) => (
            <div className=" h-[330px] w-[275px] bg-white flex flex-col justify-around items-center p-5 rounded-lg cursor-pointer hover:shadow-lg hover:scale-105 duration-300">
              {/*image  */}
              <div className="relative flex justify-center items-center group h-[132px] w-[235px] rounded-lg">
                <div className="absolute h-full w-full rounded-lg hover:bg-black/50  duration-500 hidden group-hover:block">
                  <div className="h-full w-full flex justify-center items-center gap-5">
                    <div className="h-8 w-8 bg-black/70 rounded-full flex justify-center items-center hover:scale-125 hover:bg-black/95 duration-300 ">
                      <Image
                        src={githubWhite}
                        width={18}
                        height={18}
                        alt="github"
                      />
                    </div>
                    <div className="h-8 w-8 bg-black/70 rounded-full flex justify-center items-center hover:scale-125 hover:bg-black/95 duration-300 ">
                      <Image
                        src={eyeIcon}
                        width={18}
                        height={18}
                        alt="github"
                      />
                    </div>
                  </div>
                </div>
                <Image
                  src={projectImg1}
                  height={190}
                  width={250}
                  alt="project1"
                  className="object-cover rounded-lg"
                />
              </div>

              {/* title */}
              <div className="flex ">
                <span className="font-leagueSemiBold text-xl text-center leading-6">
                  Promtopia AI-Prompt sharing app
                </span>
              </div>

              {/* categories */}
              <div className="font-leagueExtraLight text-[10px] flex flex-row justify-center gap-2 w-full">
                <span className="h-[19px] w-[50px] bg-primary_blue flex justify-center items-center rounded-sm">
                  EXPO
                </span>
                <span className="h-[19px] w-[50px] bg-primary_blue flex justify-center items-center rounded-sm ">
                  MOBILE
                </span>
              </div>

              {/* description */}
              <div className="flex">
                <span className="font-leagueExtraLight text-base text-center">
                  Build a beautiful Discover and Share AI-Powered Prompts app
                </span>
              </div>

              {/*  */}
            </div>
          ))}
        </div>
      </m.div>
    </m.section>
  );
};
