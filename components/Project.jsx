"use client";

import React, { useEffect, useState } from "react";
import { motion as m } from "framer-motion";
import Image from "next/image";
import { eyeIcon, githubWhite } from "@public";
import { sectionVariant } from "@utils/motion";
import ContentLoader from "react-content-loader";
import { db } from "@firebaseConfig";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query } from "firebase/firestore";

export const Project = () => {
  const [active, setActive] = useState("All");
  const [projectDetails, setProjectDetails] = useState([]);
  const [searchResult, setSearchResult] = useState();
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  //fetch project details from firebase
  const [projects, loading, error] = useCollection(
    query(collection(db, "files"))
  );

  const filterProjects = (tagName) => {
    return projectDetails.filter((item) => item.categories.includes(tagName));
  };

  const handleTagClick = (tagName) => {
    setSearchResult();
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setActive(tagName);

    setTimeout(() => {
      if (tagName === "All") {
        setSearchResult(projectDetails);
      } else {
        let _tagName = tagName === "Web App" ? "WEB" : "MOBILE";
        const _searchResults = filterProjects(_tagName);
        setSearchResult(_searchResults);
      }
      setAnimateCard([{ y: 0, opacity: 1 }]);
    }, 1000);
  };

  useEffect(() => {
    projects?.docs.map((item) => {
      setProjectDetails((prev) => [...prev, item.data()]);
    });
  }, [projects]);

  return (
    <m.section id="projects" className="bg-primary_blue py-20 h-fit min-h-fit">
      <div
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
              onClick={() => handleTagClick(item)}
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
          {loading && !error ? (
            [1, 2].map((item) => <MyLoader key={item} />)
          ) : (
            <ProjectCard
              data={searchResult || projectDetails}
              animateCard={animateCard}
            />
          )}
        </div>

        {/*  */}
      </div>
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
  </ContentLoader>
);

const ProjectCard = ({ data, animateCard }) => {
  return (
    <m.div
      animate={animateCard}
      transition={{ duration: 0.8, delayChildren: 0.7 }}
      className="flex flex-wrap justify-center items-center gap-x-10 gap-y-5"
    >
      {data?.map((item, index) => (
        <m.div
          key={index}
          className="h-[330px] w-[275px] bg-white flex flex-col justify-around items-center p-5 rounded-lg cursor-pointer hover:shadow-lg hover:scale-105 duration-300"
        >
          {/*image  */}
          <div className="relative flex justify-center items-center group h-[132px] w-[235px] rounded-lg">
            <div className="absolute h-full w-full rounded-lg hover:bg-black/50  duration-500 hidden group-hover:block">
              <div className="h-full w-full flex justify-center items-center gap-5">
                <a
                  href={item.repoLink}
                  target="_blank"
                  className="h-8 w-8 bg-black/70 rounded-full flex justify-center items-center hover:scale-125 hover:bg-black/95 duration-300 "
                >
                  <Image
                    src={githubWhite}
                    width={18}
                    height={18}
                    alt="github"
                  />
                </a>
                <a
                  target="_blank"
                  href={item.hostLink}
                  className="h-8 w-8  bg-black/70 rounded-full flex justify-center items-center hover:scale-125 hover:bg-black/95 duration-300 "
                >
                  <Image src={eyeIcon} width={18} height={18} alt="github" />
                </a>
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
          <div className="flex pt-1">
            <span className="font-leagueSemiBold text-xl text-center leading-6">
              {item.title}
            </span>
          </div>

          {/* categories */}

          <div className="font-leagueExtraLight text-[10px] flex flex-row justify-center gap-2 w-full">
            {item.categories.map((cate) => (
              <span className="h-[19px] bg-primary_blue flex justify-center items-center rounded-sm text-xs px-2">
                {cate}
              </span>
            ))}
          </div>

          {/* description */}
          <div className="flex">
            <span className="font-leagueExtraLight text-base text-center">
              {item.description}{" "}
            </span>
          </div>

          {/* buttons */}
          <div className="flex w-full justify-center items-center gap-3 lg:hidden">
            <a
              href={item.repoLink}
              target="_blank"
              className="w-full bg-action_blue rounded-md py-[2px] text-white font-leagueLight cursor-pointer shadow-md text-center"
            >
              Source code
            </a>
            <a
              target="_blank"
              href={item.hostLink}
              className="w-full bg-action_blue rounded-md py-[2px] text-white font-leagueLight  cursor-pointer shadow-md text-center"
            >
              View
            </a>
          </div>

          {/*  */}
        </m.div>
      ))}
    </m.div>
  );
};
