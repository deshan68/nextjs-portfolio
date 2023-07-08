"use client";

import React, { useState } from "react";
import Image from "next/image";
import { closeIcon, menuIcon } from "@public/icon";
import {
  backOut,
  motion as m,
  AnimatePresence,
  useScroll,
  useSpring,
} from "framer-motion";
import { liVariants, toggleVariant, ulVariants } from "@utils/motion";

export const Navbar = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const [toggleDropdown, setToggleDropdown] = useState(false);
  return (
    <nav className="flex justify-between items-center w-full px-10 h-[8vh] font-juraBold relative z-50 bg-white overflow-hidden ">
      <m.div
        className="h-[2px] fixed left-0 right-0 bottom-8 bg-action_blue mx-16"
        style={{ scaleX }}
      />
      <div>
        <span>d</span>
        <span>e</span>
        <span>v</span>
        <span>e</span>
        <span>l</span>
        <span>o</span>
        <span>p</span>
        <span>B</span>
        <span>y</span>
        <span>A</span>
        <span>r</span>
        <span>u</span>
        <span>n</span>
      </div>
      {!toggleDropdown && (
        <div
          className="sm:hidden bg-action_blue p-2 rounded-full"
          onClick={() => setToggleDropdown((prev) => !prev)}
        >
          <Image
            src={menuIcon}
            width={30}
            height={30}
            className="object-contain"
          />
        </div>
      )}

      {/* desktop navigation */}
      <div className="items-center sm:flex hidden">
        <ul className="list-none flex items-center gap-5 font-bold text-sm cursor-pointer">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>ABOUT</li>
          <li>GALLERY</li>
          <li>CONTACT</li>
        </ul>
        <button className="ml-5 font-bold text-sm cursor-pointer text-action_blue border-action_blue border-2 p-2 rounded-md">
          RESUME
        </button>
      </div>

      {/* mobile navigation */}
      {toggleDropdown && (
        <m.div
          variants={toggleVariant}
          initial={"hidden"}
          animate={"show"}
          exit={{
            opacity: 0,
            y: "-100%",
          }}
          className="sm:hidden dropdown"
        >
          <div
            className="sm:hidden bg-action_blue p-2 rounded-full top-10 right-10 absolute "
            onClick={() => setToggleDropdown((prev) => !prev)}
          >
            <Image
              src={closeIcon}
              width={30}
              height={30}
              className="object-contain "
            />
          </div>
          <m.div
            variants={ulVariants}
            initial={"hidden"}
            animate={"show"}
            className="list-none items-center flex flex-col gap-10 font-bold text-sm cursor-pointer"
          >
            <m.div variants={liVariants}>HOME</m.div>
            <m.div variants={liVariants}>ABOUT</m.div>
            <m.div variants={liVariants}>ABOUT</m.div>
            <m.div variants={liVariants}>GALLERY</m.div>
            <m.div variants={liVariants}>CONTACT</m.div>
            <m.button
              variants={liVariants}
              className="font-bold text-sm cursor-pointer text-action_blue border-action_blue border-2 p-2 rounded-md"
            >
              RESUME
            </m.button>
          </m.div>
        </m.div>
      )}
    </nav>
  );
};
