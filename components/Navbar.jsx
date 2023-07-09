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
import { Link } from "react-scroll";

export const Navbar = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const [toggleDropdown, setToggleDropdown] = useState(false);
  return (
    <nav className="fixed justify-between items-center w-full px-10 h-20 font-juraBold flex z-50 bg-white overflow-hidden ">
      <m.div
        className="h-[2px] fixed left-0 right-0 bottom-8 bg-action_blue mx-16"
        style={{ scaleX }}
      />

      <Link
        activeClass="active"
        to="home"
        smooth={true}
        offset={5}
        duration={500}
        className="cursor-pointer"
      >
        <span>developByArun</span>
      </Link>

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
          <Link
            activeClass="active"
            to="home"
            smooth={true}
            offset={5}
            duration={500}
          >
            <li>HOME</li>
          </Link>
          <Link
            activeClass="active"
            to="about"
            smooth={true}
            offset={5}
            duration={500}
          >
            <li>ABOUT</li>
          </Link>
          <Link
            activeClass="active"
            to="project"
            smooth={true}
            offset={5}
            duration={500}
          >
            <li>PROJECTS</li>
          </Link>
          <Link
            activeClass="gallery"
            to="gallery"
            smooth={true}
            offset={5}
            duration={500}
          >
            <li>GALLERY</li>
          </Link>
          <Link
            activeClass="contact"
            to="contact"
            smooth={true}
            offset={5}
            duration={500}
          >
            <li>CONTACT</li>
          </Link>
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
            <Link
              activeClass="active"
              to="home"
              smooth={true}
              offset={5}
              duration={500}
              onClick={() => setToggleDropdown((pre) => !pre)}
            >
              <li>HOME</li>
            </Link>
            <Link
              activeClass="active"
              to="about"
              smooth={true}
              offset={5}
              duration={500}
              onClick={() => setToggleDropdown((pre) => !pre)}
            >
              <li>ABOUT</li>
            </Link>
            <Link
              activeClass="active"
              to="project"
              smooth={true}
              offset={5}
              duration={500}
              onClick={() => setToggleDropdown((pre) => !pre)}
            >
              <li>PROJECTS</li>
            </Link>
            <Link
              activeClass="active"
              to="gallery"
              smooth={true}
              offset={5}
              duration={500}
              onClick={() => setToggleDropdown((pre) => !pre)}
            >
              <li>GALLERY</li>
            </Link>
            <Link
              activeClass="active"
              to="contact"
              smooth={true}
              offset={5}
              duration={500}
              onClick={() => setToggleDropdown((pre) => !pre)}
            >
              <li>CONTACT</li>
            </Link>
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
