"use client";

import HomePage from "../components/Intro";
import Experience from "../components/Experience";
import Project from "$/components/Projects";
import { motion, useScroll } from "framer-motion";
import { ReactLenis, useLenis } from "lenis/react";

export default function Home() {
  const { scrollYProgress } = useScroll();

  // optional: this just logs the lenis object each scroll tick
  useLenis((lenis) => {
    // You can hook into scroll here
  });

  return (
    <ReactLenis root>
      {/* Scroll progress bar */}
      <motion.div
        style={{
          scaleX: scrollYProgress,
          height: "5px",
          background: "white",
          transformOrigin: "left",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
        }}
      />

      <HomePage />
      <Experience />
      <Project />
    </ReactLenis>
  );
}
