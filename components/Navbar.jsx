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
    <nav className="fixed justify-between items-center w-full px-10 h-16 font-juraBold flex z-30 bg-white/75 backdrop-blur-sm">
      <m.div
        className="h-1 fixed left-0 right-0 bottom-0 bg-gradient-to-r from-white/0 via-action_blue to-white/0"
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
            width={20}
            height={20}
            className="object-contain"
          />
        </div>
      )}

      {/* desktop navigation */}
      <div className="items-center sm:flex hidden">
        <ul className="list-none flex items-center gap-5 font-bold text-sm cursor-pointer">
          {["HOME", "ABOUT", "PROJECTS", "GALLERY", "CONTACT"].map((item) => (
            <NavBarItem item={item} />
          ))}
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
          className="sm:hidden dropdown h-screen"
        >
          <div
            className="sm:hidden bg-action_blue p-2 rounded-full top-10 right-10 absolute"
            onClick={() => setToggleDropdown((prev) => !prev)}
          >
            <Image
              src={closeIcon}
              width={20}
              height={20}
              className="object-contain "
            />
          </div>
          <m.div
            variants={ulVariants}
            initial={"hidden"}
            animate={"show"}
            className="list-none items-center flex flex-col gap-10 font-bold text-sm cursor-pointer"
          >
            {["HOME", "ABOUT", "PROJECTS", "GALLERY", "CONTACT"].map((item) => (
              <NavBarItem item={item} setToggleDropdown={setToggleDropdown} />
            ))}
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

const NavBarItem = ({ item, setToggleDropdown }) => {
  return (
    <Link
      key={item}
      activeClass="active"
      to={item.toLowerCase()}
      smooth={true}
      offset={0}
      duration={1000}
      spy={true}
      className="px-2 py-1 rounded-[3px] bg-transparent border-black border-opacity-0 border-[0.5px] transition duration-500"
      onClick={() => setToggleDropdown && setToggleDropdown((prev) => !prev)}
    >
      <li>{item}</li>
    </Link>
  );
};
