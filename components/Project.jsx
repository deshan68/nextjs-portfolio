"use client";
import React, { useEffect, useState } from "react";
import { motion as m } from "framer-motion";
import Image from "next/image";
import { eyeIcon, githubIcon, githubWhite, projectImg1 } from "@public";
import { parentVariant, sectionVariant, ulVariants } from "@utils/motion";
import ContentLoader, { Facebook } from "react-content-loader";
import { db } from "@firebaseConfig";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";

const details = [
  {
    title: "Promtopia AI-Prompt sharing app",
    des: "Build a beautiful Discover and Share AI-Powered Prompts app",
    imgUrlL: projectImg1,
  },
  {
    title: "Promtopia AI-Prompt sharing app",
    des: "Build a beautiful Discover and Share AI-Powered Prompts app",
    imgUrlL: projectImg1,
  },
];

export const Project = () => {
  const [active, setActive] = useState("All");
  const [projectDetails, setProjectDetails] = useState();

  //fetch project details from firebase
  const [projects, loading] = useCollection(query(collection(db, "files")));
  console.log(loading);
  projects?.docs.map((item) => console.log(item.data()));

  return (
    <m.section id="projects" className="bg-primary_blue py-20 h-fit">
      <m.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: "some" }}
        variants={sectionVariant}
        className="flex justify-center items-center flex-col max-w-6xl mx-auto sm:px-16 px-5 mb-7 pt-10 "
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
          {loading && [1, 2].map((item) => <MyLoader key={item} />)}
          {projects?.docs.map((item, indx) => (
            <ProjectCard indx={indx} item={item.data()} />
          ))}
        </div>

        {/*  */}
      </m.div>
    </m.section>
  );
};

const MyLoader = () => (
  <ContentLoader
    speed={3}
    width={275} //20
    height={330}
    viewBox="0 0 400 460"
    backgroundColor="#deddd9"
    foregroundColor="#ffffff"
    className="h-[330px] w-[275px] bg-white flex justify-center items-center rounded-lg"
  >
    <rect x="38" y="29" rx="5" ry="5" width="320" height="190" />

    <rect x="38" y="245" rx="5" ry="5" width="320" height="12" />
    <rect x="38" y="278" rx="5" ry="5" width="320" height="12" />

    <rect x="38" y="315" rx="5" ry="5" width="150" height="32" />
    <rect x="205" y="315" rx="5" ry="5" width="150" height="32" />

    <rect x="38" y="370" rx="5" ry="5" width="320" height="12" />
    <rect x="38" y="400" rx="5" ry="5" width="320" height="12" />
    {/* <rect x="32" y="181" rx="5" ry="5" width="214" height="10" />
    <rect x="42" y="200" rx="5" ry="5" width="192" height="10" />
    <rect x="30" y="229" rx="5" ry="5" width="104" height="25" />
    <rect x="145" y="229" rx="5" ry="5" width="104" height="26" />
    <rect x="28" y="268" rx="5" ry="5" width="222" height="10" />
    <rect x="55" y="287" rx="5" ry="5" width="164" height="11" /> */}
  </ContentLoader>
);

const ProjectCard = ({ indx, item }) => {
  return (
    <div
      key={indx}
      className="h-[330px] w-[275px] bg-white flex flex-col justify-around items-center p-5 rounded-lg cursor-pointer hover:shadow-lg hover:scale-105 duration-300"
    >
      {/*image  */}
      <div className="relative flex justify-center items-center group h-[132px] w-[235px] rounded-lg">
        <div className="absolute h-full w-full rounded-lg hover:bg-black/50  duration-500 hidden group-hover:block">
          <div className="h-full w-full flex justify-center items-center gap-5">
            <div className="h-8 w-8 bg-black/70 rounded-full flex justify-center items-center hover:scale-125 hover:bg-black/95 duration-300 ">
              <Image src={githubWhite} width={18} height={18} alt="github" />
            </div>
            <div className="h-8 w-8  bg-black/70 rounded-full flex justify-center items-center hover:scale-125 hover:bg-black/95 duration-300 ">
              <Image src={eyeIcon} width={18} height={18} alt="github" />
            </div>
          </div>
        </div>
        <Image
          src={item.imageUrl}
          height={190}
          width={250}
          alt="project1"
          className="object-cover rounded-lg"
          loading="lazy"
        />
      </div>

      {/* title */}
      <div className="flex ">
        <span className="font-leagueSemiBold text-xl text-center leading-6">
          {item.title}
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
          {item.description}{" "}
        </span>
      </div>

      {/* buttons */}
      <div className="flex w-full justify-center items-center gap-3 lg:hidden">
        <button className="w-full bg-action_blue rounded-md py-[2px] text-white font-leagueLight cursor-pointer shadow-md">
          Source code
        </button>
        <button className="w-full bg-action_blue rounded-md py-[2px] text-white font-leagueLight  cursor-pointer shadow-md">
          View
        </button>
      </div>

      {/*  */}
    </div>
  );
};
