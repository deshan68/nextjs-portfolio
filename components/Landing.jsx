"use client";

import React, { useState } from "react";
import FixContent from "./FixContent";
import FlowContent from "./FlowContent";
import Loader from "./Loader";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useProject } from "@context/DataContextProvider";

const Landing = () => {
  const [activeSection, setActiveSection] = useState("");

  const { projects, loading, error } = useProject();

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const backgroundStyle = useMotionTemplate`
    radial-gradient(
      550px circle at ${mouseX}px ${mouseY}px,
      rgba(14, 165, 233, 0.15),
      transparent 80%
    )
  `;

  if (loading) {
    return <Loader />;
  }

  return (
    <main className="h-screen bg-gray-900" onMouseMove={handleMouseMove}>
      <motion.div
        className="h-screen flex justify-between flex-col lg:flex-row"
        style={{
          background: backgroundStyle,
        }}
      >
        <FixContent
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <FlowContent
          activeSection={activeSection}
          projectDetails={projects.filter((p) => p.isMain === true)}
        />
      </motion.div>
    </main>
  );
};

export default Landing;
