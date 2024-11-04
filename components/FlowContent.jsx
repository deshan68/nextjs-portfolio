"use client";

import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import ExperienceCard from "./ExperienceCard";
import ProjectCard from "./ProjectCard";
import WritingCard from "./WritingCard";
import { blogPosts } from "@constants";

const FlowContent = ({ activeSection, projectDetails }) => {
  const [lastUpdatedDate, setLastUpdatedDate] = useState("");

  const d = new Date();

  const aboutRef = useRef(null);
  const experiencesRef = useRef(null);
  const projectsRef = useRef(null);
  const writingRef = useRef(null);

  const fetchRepoDetails = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/repos/deshan68/nextjs-portfolio/commits`
      );
      setLastUpdatedDate(response.data[0].commit.committer.date.split("T")[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchRepoDetails();
  }, []);

  useEffect(() => {
    if (activeSection === "ABOUT") {
      aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (activeSection === "EXPERIENCES") {
      experiencesRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (activeSection === "PROJECTS") {
      projectsRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (activeSection === "WRITING") {
      writingRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [activeSection]);

  return (
    <div className="lg:w-1/2 lg:overflow-auto flex flex-col lg:pr-36 lg:pl-0 text-gray-400 font-leagueLight" id="testDiv1">
      <section ref={aboutRef} id="about" className="lg:pt-20 pt-0">
        <div className="sticky lg:hidden top-0 backdrop-blur-md py-5 z-10 text-lg text-white font-leagueSemiBold px-5">
          ABOUT
        </div>
        <div className="text-lg font-leagueLight lg:px-0 px-5 leading-normal">
          <span>I am Undergraduate at </span>
          <span className="cursor-pointer text-white transition ease-in-out hover:text-teal-300 duration-300">
            <a href="https://www.sab.ac.lk/" target="_blank">
              Sabaragamuwa University of Sri Lanka{" "}
            </a>
          </span>
          and am currently pursing a B.Sc (Hons) Computing & Information Systems
          Degree. I view myself as a coding enthusiast and I love tinkering with
          tech, building stuff, and creating projects be it in web development,
          mobile app development. <br />
          <br />
          Even at home, Constantly learning, evolving, and getting proficient in
          fields related to my career. I enjoy creating things that live on the
          internet, whether that be websites, applications, or anything in
          between with a passion for creating digital products that provide a
          seamless and pixel-perfect experience for users.
        </div>
      </section>

      <div ref={experiencesRef} className="pt-20" id="experiences">
        <div className="sticky top-0 backdrop-blur-md py-5 z-20 text-lg text-white font-leagueSemiBold px-5">
          EXPERIENCES
        </div>
        {Array.from(Array(1).keys()).map((_, index) => (
          <ExperienceCard key={index} />
        ))}
      </div>

      <div ref={projectsRef} className="pt-20 w-full" id="projects">
        <div className="sticky top-0 backdrop-blur-md py-5 z-30 text-lg text-white font-leagueSemiBold px-5">
          PROJECTS
        </div>
        {projectDetails.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      <div ref={writingRef} className="pt-20" id="writing">
        <div className="sticky top-0 backdrop-blur-md py-5 z-30 text-lg text-white font-leagueSemiBold px-5">
          WRITING
        </div>
        {blogPosts.map((item, index) => (
          <WritingCard blogPost={item} key={index} />
        ))}
      </div>

      <div className="py-20 px-5 lg:px-0" id="contact">
        <span className="text-sm font-leagueExtraLight">
          Designed & Built by Arun Deshan <br />
          Copyright @ {d.getFullYear()} developByArun Inc. All rights reserved.
          <br /> Last Updated on: {lastUpdatedDate}
        </span>
      </div>
    </div>
  );
};

export default FlowContent;
