"use client";

import React, { useEffect, useState } from "react";
import FixContent from "./FixContent";
import FlowContent from "./FlowContent";
import Loader from "./Loader";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { db } from "@firebaseConfig";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query } from "firebase/firestore";

const Landing = () => {
  const [activeSection, setActiveSection] = useState("ABOUT");
  const [projectsDataLoading, setProjectsDataLoading] = useState(true);
  const [projectDetails, setProjectDetails] = useState([]);

  const [projects, loading, error] = useCollection(
    query(collection(db, "files"))
  );

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

  useEffect(() => {
    projects?.docs.map((item) => {
      setProjectDetails((prev) => [...prev, item.data()]);
    });
  }, [projects]);

  useEffect(() => {
    setProjectsDataLoading(loading);
  }, [loading]);

  if (projectsDataLoading) {
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
          projectDetails={projectDetails}
        />
      </motion.div>
    </main>
  );
};

export default Landing;
