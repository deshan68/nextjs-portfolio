"use client";

import {
  g10Img,
  g1Img,
  g2Img,
  g3Img,
  g4Img,
  g6Img,
  g7Img,
  g8Img,
} from "@public";
import Image from "next/image";
import React from "react";
import { motion as m } from "framer-motion";
import { childVariant, parentVariant } from "@utils/motion";
export const Gallery = () => {
  return (
    <m.section id="gallery" className="bg-white py-20">
      <m.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: "some" }}
        variants={parentVariant}
        className="flex h-fit justify-center items-center flex-col max-w-6xl mx-auto sm:px-16 px-5 mb-7 pt-10"
      >
        {/* title */}
        <span className="title">
          My
          <span className="text-action_blue"> Gallery </span>
        </span>

        {/* photo container------------------------------ */}
        <div className="flex gap-5 flex-wrap justify-center mt-8">
          {/* column1 */}
          <div className="flex  flex-col gap-y-5">
            <m.div
              variants={childVariant}
              className="flex sm:h-[371px] h-auto w-[300px] relative justify-center"
            >
              <Image
                src={g8Img}
                width={300}
                height={200} //370
                alt="gallery img1"
                className="object-cover rounded-lg"
                loading="lazy"
              />
              <div className="image_label">HackaDEV 2023</div>
            </m.div>
            <m.div
              variants={childVariant}
              className="flex sm:h-[294px] w-[300px] h-auto relative justify-center"
            >
              <Image
                src={g3Img}
                width={300}
                height={294} //290
                alt="gallery img1"
                className="object-cover rounded-lg"
                loading="lazy"
              />
              <div className="image_label">HackaDEV 2023</div>
              <div className="image_label">HackaDEV 2023</div>
            </m.div>
          </div>

          {/* column 2 */}
          <div className="bg-white flex flex-col justify-between gap-y-5">
            <m.div
              variants={childVariant}
              className="flex sm:h-[215px] h-auto w-[300px] relative justify-center"
            >
              <Image
                src={g7Img}
                width={300}
                height={215} //
                alt="gallery img1"
                className="object-cover rounded-lg"
                loading="lazy"
              />
              <div className="image_label">HackaDEV 2023</div>
            </m.div>
            <m.div
              variants={childVariant}
              className="flex sm:h-[215px] h-auto w-[300px] relative justify-center"
            >
              <Image
                src={g2Img}
                width={300}
                height={215}
                alt="gallery img1"
                className="object-cover rounded-lg"
                loading="lazy"
              />
              <div className="image_label">HackaDEV 2023</div>
            </m.div>
            <m.div
              variants={childVariant}
              className="flex sm:h-[215px] w-[300px] relative justify-center h-auto"
            >
              <Image
                src={g10Img}
                width={300}
                height={215}
                alt="gallery img1"
                className="object-cover rounded-lg"
                loading="lazy"
              />
              <div className="image_label">HackaDEV 2023</div>
            </m.div>
          </div>

          {/* column 3 */}
          <div className="flex flex-col gap-y-5 ">
            <m.div
              variants={childVariant}
              className="flex smh-[294px] h-auto w-[300px] relative justify-center"
            >
              <Image
                src={g4Img}
                width={300}
                height={309}
                alt="gallery img1"
                className="object-cover rounded-lg"
                loading="lazy"
              />
              <div className="image_label">HackaDEV 2023</div>
            </m.div>
            <m.div
              variants={childVariant}
              className="flex sm:h-[371px] h-auto w-[300px] relative justify-center"
            >
              <Image
                src={g6Img}
                width={300}
                height={354}
                alt="gallery img1"
                className="object-cover rounded-lg"
                loading="lazy"
              />
              <div className="image_label">HackaDEV 2023</div>
            </m.div>
          </div>

          {/*  */}
        </div>

        {/*  */}
      </m.div>
    </m.section>
  );
};
