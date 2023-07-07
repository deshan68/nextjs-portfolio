"use client";

import React, { useState } from "react";
import Image from "next/image";
import { closeIcon, menuIcon } from "@public/icon";
import { backOut, motion as m, AnimatePresence } from "framer-motion";
import { liVariants, toggleVariant, ulVariants } from "@utils/motion";

export const Navbar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  return (
    <nav className="flex justify-between items-center w-full px-10 h-[8vh] font-juraBold relative z-30">
      <m.div
        variants={ulVariants}
        initial={"hidden"}
        animate={"show"}
        className="flex items-center font-bold text-xl"
      >
        <m.span variants={liVariants}>d</m.span>
        <m.span variants={liVariants}>e</m.span>
        <m.span variants={liVariants}>v</m.span>
        <m.span variants={liVariants}>e</m.span>
        <m.span variants={liVariants}>l</m.span>
        <m.span variants={liVariants}>o</m.span>
        <m.span variants={liVariants}>p</m.span>
        <m.span variants={liVariants}>B</m.span>
        <m.span variants={liVariants}>y</m.span>
        <m.span variants={liVariants}>A</m.span>
        <m.span variants={liVariants}>r</m.span>
        <m.span variants={liVariants}>u</m.span>
        <m.span variants={liVariants}>n</m.span>
      </m.div>
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
