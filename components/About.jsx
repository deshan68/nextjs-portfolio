import { about1Img, about2Img } from "@public";
import Image from "next/image";
import React from "react";
import { aboutDetails } from "@constants";

export const About = () => {
  return (
    <section className="bg-white py-20">
      <div className="flex h-fit justify-center items-center flex-col max-w-6xl mx-auto sm:px-16 mb-7">
        {/* title */}
        <span className="title">
          A Little Bit
          <span className="text-action_blue"> About</span>
          <span className="text-action_blue"> Me </span>
          And My
          <span className="text-action_blue"> Career</span>
          <span className="text-action_blue"> Interests</span>
        </span>

        {/* paragraph */}
        <span className="paragraph px-24 text-justify">
          I am Undergraduate at Sabaragamuwa University of Sri Lanka and am
          currently pursing a B.Sc (Hons) Computing & Information Systems
          Degree. I view myself as a coding enthusiast and I love tinkering with
          tech, building stuff, and creating projects be it in web development,
          mobile app development. Even at home, I am in a permanent Beta Mode:
          Constantly learning, evolving, and getting proficient in fields
          related to my career. I enjoy creating things that live on the
          internet, whether that be websites, applications, or anything in
          between with a passion for creating digital products that provide a
          seamless and pixel-perfect experience for users.
        </span>

        {/* card container */}
        <div className="pt-10 flex gap-20 sm:flex-row flex-col">
          {aboutDetails.map((item, indx) => (
            <div
              key={indx}
              className="h-[400px] w-[274px] bg-primary_blue rounded-lg flex flex-col justify-around items-center p-5"
            >
              <Image
                src={item.imgUrl}
                width={250}
                height={231}
                alt={item.title}
                className="object-contain rounded-lg"
              />

              <span className="font-leagueSemiBold text-xl text-center">
                {item.title}
              </span>
              <span className="font-leagueExtraLight text-base text-center">
                {item.des}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
