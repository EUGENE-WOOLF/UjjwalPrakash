"use client";
import React from "react";
import Resume from "../../components/Resume/Resume";
import Nav from "../../components/navbar";

export default function ResumePage() {
  return (
    <>
      <Nav />
      <div className="pt-20 bg-gradient-to-br from-[#0a0f1a] via-[#1a2338] to-[#121826]">
        <Resume />
      </div>
    </>
  );
}
