"use client";

import { g1Img } from "@public";
import Image from "next/image";
import React from "react";
import { motion as m } from "framer-motion";
import {
  childVariant,
  liVariants,
  parentVariant,
  sectionVariant,
  ulVariants,
} from "@utils/motion";
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
              className="flex h-[371px] w-[300px] relative justify-center"
            >
              <Image
                src={
                  "https://plus.unsplash.com/premium_photo-1688045722767-8d8672f6950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                }
                width={300}
                height={371} //370
                alt="gallery img1"
                className="object-cover rounded-lg"
              />
              <div className="image_label">HackaDEV 2023</div>
            </m.div>
            <m.div variants={childVariant} className="flex h-[294px] w-[300px]">
              <Image
                src={g1Img}
                width={300}
                height={294} //290
                alt="gallery img1"
                className="object-cover rounded-lg"
              />
            </m.div>
          </div>

          {/* column 2 */}
          <div className="bg-white flex flex-col justify-between gap-y-5">
            <m.div variants={childVariant} className="flex h-[215px] w-[300px]">
              <Image
                src={g1Img}
                width={300}
                height={215} //
                alt="gallery img1"
                className="object-cover rounded-lg"
              />
            </m.div>
            <m.div variants={childVariant} className="flex h-[215px] w-[300px]">
              <Image
                src={g1Img}
                width={300}
                height={215}
                alt="gallery img1"
                className="object-cover rounded-lg"
              />
            </m.div>
            <m.div variants={childVariant} className="flex h-[215px] w-[300px]">
              <Image
                src={g1Img}
                width={300}
                height={215}
                alt="gallery img1"
                className="object-cover rounded-lg"
              />
            </m.div>
          </div>

          {/* column 3 */}
          <div className="flex flex-col gap-y-5 ">
            <m.div variants={childVariant} className="flex h-[294px] w-[300px]">
              <Image
                src={g1Img}
                width={300}
                height={309}
                alt="gallery img1"
                className="object-cover rounded-lg"
              />
            </m.div>
            <m.div variants={childVariant} className="flex h-[371px] w-[300px]">
              <Image
                src={g1Img}
                width={300}
                height={354}
                alt="gallery img1"
                className="object-cover rounded-lg"
              />
            </m.div>
          </div>

          {/*  */}
        </div>

        {/*  */}
      </m.div>
    </m.section>
  );
};
