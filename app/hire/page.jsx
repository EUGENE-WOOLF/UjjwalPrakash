"use client";
import HireMe from "$/components/HireMe";
import { motion, useScroll } from "framer-motion";
import { ReactLenis, useLenis } from "lenis/react";

export default function test() {
  const { scrollYProgress } = useScroll();
  useLenis((lenis) => {});

  return (
    <>
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
        <HireMe />
      </ReactLenis>
    </>
  );
}
